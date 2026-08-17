import os
import re
from pathlib import Path

# Settings
ROOT_DIR = Path.cwd()

# Blocks-ui names
UI_NAMES = ["efferd-ui"]

ENGLISH_NUMBERS = {
    "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
    "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
    "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15
}

# Settings for preview pages
PREVIEW_LAYOUT_PATTERNS = {
    "hero": "flex flex-col min-h-screen w-full",
    "header": "flex flex-col min-h-screen w-full",
    "logo": "flex flex-col min-h-screen w-full justify-center p-2",
    "default": "flex flex-col min-h-screen w-full justify-center p-2"
}

# Helpers
def extract_number_rank(block_id: str) -> tuple[str, int]:
    parts = block_id.split("-")
    last_part = parts[-1].lower()

    if last_part in ENGLISH_NUMBERS:
        prefix = "-".join(parts[:-1])
        return (prefix, ENGLISH_NUMBERS[last_part])

    if last_part.isdigit():
        prefix = "-".join(parts[:-1])
        return (prefix, int(last_part))

    return (block_id, 0)


def format_title(name: str) -> str:
    clean_name = re.sub(r'\.(svelte|ts|js)$', '', name)
    return " ".join(word.capitalize() for word in re.split(r'[-_]', clean_name))


def to_pascal_case(text: str) -> str:
    clean_text = re.sub(r'\.(svelte|ts|js)$', '', text)
    parts = re.split(r'[-_]', clean_text)
    return "".join(p.capitalize() for p in parts if p)


def get_preview_class(block_id: str) -> str:
    """Returns the complete string of CSS classes based on the block prefix"""
    for pattern, container_class in PREVIEW_LAYOUT_PATTERNS.items():
        if pattern != "default" and block_id.startswith(pattern):
            return container_class
    return PREVIEW_LAYOUT_PATTERNS["default"]


def discover_blocks(category_dir: Path) -> list[tuple[str, list[Path]]]:
    blocks = []
    if not category_dir.exists():
        return blocks

    subdirs = [d for d in category_dir.iterdir() if d.is_dir()]
    for d in subdirs:
        files = list(d.glob("**/*.*"))
        if files:
            blocks.append((d.name, files))

    return blocks


# Generate routes
def generate_preview_route(ui_name: str, category_name: str, block_id: str, main_component_file: Path):
    """Gera routes/preview/[ui-name]/[category]/[block-id]/+page.svelte"""
    preview_dir = ROOT_DIR / "src" / "routes" / "preview" / ui_name / category_name / block_id
    preview_dir.mkdir(parents=True, exist_ok=True)
    
    page_file = preview_dir / "+page.svelte"
    pascal_name = to_pascal_case(block_id)
    block_title = format_title(block_id)

    rel_component = main_component_file.relative_to(ROOT_DIR / "src" / "lib").as_posix()
    import_path = f"$lib/{rel_component}"

    # Resolves the CSS class
    container_class = get_preview_class(block_id)

    content = f"""<script lang="ts">
\timport {pascal_name} from "{import_path}";
</script>

<svelte:head>
\t<title>{block_title} Preview | Svelte Efferd</title>
\t<meta name="description" content="Standalone preview for {block_title} in Svelte Efferd." />
</svelte:head>

<div class="{container_class}">
\t<{pascal_name} />
</div>
"""
    page_file.write_text(content, encoding="utf-8")


def generate_blocks_route(ui_name: str, category_name: str):
    """Gera routes/blocks/[ui-name]/[category]/+page.svelte e +page.ts"""
    blocks_dir = ROOT_DIR / "src" / "routes" / "blocks" / ui_name / category_name
    blocks_dir.mkdir(parents=True, exist_ok=True)

    category_title = format_title(category_name)
    category_camel = re.sub(r'[-_]([a-z])', lambda m: m.group(1).upper(), category_name)

    page_svelte = blocks_dir / "+page.svelte"
    svelte_content = f"""<script lang="ts">
\timport Seo from "$lib/components/base/Seo.svelte";
\timport BlockPreview from "$lib/components/blocks/blocks-preview.svelte";
\timport type {{ PageProps }} from "./$types";

\tlet {{ data }}: PageProps = $props();
</script>

<Seo
\ttitle="{category_title} Blocks"
\tdesc="Preview curated {category_name} block variants with a tree-style source explorer in Svelte Efferd Blocks."
\tlink="/blocks/{category_name}"
/>

{{#each data.blocks as block (block.id)}}
\t<BlockPreview
\t\tid={{block.id}}
\t\ttitle={{block.title}}
\t\tdescription={{block.description}}
\t\tpreviewComponent={{block.previewComponent}}
\t\tcodeTree={{block.codeTree}}
\t\tpreviewHref={{block.previewHref}}
\t\tpreviewMode={{block.previewMode}}
\t\tpreviewHeight={{block.previewHeight}}
\t\tinstallId={{block.installId}}
\t/>
{{/each}}
"""
    page_svelte.write_text(svelte_content, encoding="utf-8")

    page_ts = blocks_dir / "+page.ts"
    ts_content = f"""import {{ registry }} from "$lib/registry";
import type {{ PageLoad }} from "./$types";

export const prerender = true;

export const load: PageLoad = () => {{
\treturn {{
\t\tblocks: registry["{ui_name}"].{category_camel}
\t}};
}};
"""
    page_ts.write_text(ts_content, encoding="utf-8")


# Main Function
def process_category(category_dir: Path, ui_name: str):
    category_name = category_dir.name
    blocks = discover_blocks(category_dir)
    if not blocks:
        return

    blocks.sort(key=lambda x: extract_number_rank(x[0]))

    for block_id, block_files in blocks:
        main_component_file = next(
            (f for f in block_files if f.name == f"{category_name}.svelte"),
            next(
                (f for f in block_files if f.name == "preview.svelte"),
                next((f for f in block_files if f.name.endswith(".svelte")), block_files[0])
            )
        )
        
        generate_preview_route(ui_name, category_name, block_id, main_component_file)

    generate_blocks_route(ui_name, category_name)
    print(f" [{ui_name}] Preview routes and generated blocks for: '{category_name}'")


def main():
    for ui_name in UI_NAMES:
        source_dir = ROOT_DIR / "src" / "lib" / "components" / ui_name
        if not source_dir.exists():
            print(f"Source directory not found for '{ui_name}': {source_dir}")
            continue

        for category_folder in source_dir.iterdir():
            if category_folder.is_dir():
                process_category(category_folder, ui_name)


if __name__ == "__main__":
    main()
