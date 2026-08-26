import os
import re
from pathlib import Path

# Settings & Valid Extensions
ROOT_DIR = Path.cwd()

VALID_EXTENSIONS = [
    ".svelte",
    ".ts",
    ".js"
]

_ext_pattern = r'\.(' + '|'.join([re.escape(ext.lstrip('.')) for ext in VALID_EXTENSIONS]) + r')$'
CLEAN_EXT_REGEX = re.compile(_ext_pattern, flags=re.IGNORECASE)

# Blocks-ui names
UI_NAMES = ["efferd-ui", "magic-ui"]

ALIAS_MAP = {
    "$lib/": "src/lib/",
    "@/": "src/"
}

ENGLISH_NUMBERS = {
    "one": 1, 
    "two": 2, 
    "three": 3, 
    "four": 4, 
    "five": 5,
    "six": 6, 
    "seven": 7, 
    "eight": 8, 
    "nine": 9, 
    "ten": 10,
}   

SHARED_MODULE_MAP = {
    "components/ui/button": "buttonFiles",
    "components/ui/decor-icon": "decorIconFiles",
    "components/ui/full-width-divider": "dividerFiles",
    "assets/svg/logo": "logoFiles",
    "components/magic-ui/marquee": "marqueeFiles",
    "components/ui/navigation-menu": "navigationMenuFiles",
    "components/ui/portal": "portalFiles",
    "hooks/use-scroll": "scrollHookFiles"
}

# Metadata
BLOCK_METADATA_PATTERNS = {
    "hero": {
        "description": "A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
        "height": 820,
        "previewMode": "iframe"
    },
    "header": {
       "description": "Header component",
       "height": 820,
       "previewMode": "iframe"
    },
    "logo": {
        "description": "A responsive logo grid/marquee component for showcasing partners and clients.",
        "height": 320,
        "previewMode": "iframe"
    },
    "feature": {
        "description": "Interactive feature showcase section with custom graphics and controls.",
        "height": 520,
        "previewMode": "iframe"
    },
    "default": {
        "description": "A {title} composition.",
        "height": 420,
        "previewMode": "iframe"
    }
}


# Helpers
def clean_extension(filename: str) -> str:
    return CLEAN_EXT_REGEX.sub('', filename)


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


def resolve_alias(import_path: str) -> Path | None:
    for alias, real_rel in ALIAS_MAP.items():
        if import_path.startswith(alias):
            return ROOT_DIR / import_path.replace(alias, real_rel)
    return None


def resolve_file_extension(base_path: Path) -> Path | None:
    if base_path.is_file():
        return base_path

    for ext in VALID_EXTENSIONS:
        test_path = Path(str(base_path) + ext)
        if test_path.is_file():
            return test_path

    for ext in VALID_EXTENSIONS:
        test_path = base_path / f"index{ext}"
        if test_path.is_file():
            return test_path

    return None


def parse_direct_imports(file_path: Path) -> set[Path]:
    """Extract direct imports from the root file only."""
    found_paths = set()
    try:
        content = file_path.read_text(encoding="utf-8")
    except Exception:
        return found_paths

    pattern = re.compile(
        r'(?:import|export)\s+[\s\S]*?\s+from\s+[\'"`]((?:\$|@|\.\/|\.\.\/).*?)[\'"`]'
    )

    for match in pattern.finditer(content):
        raw_import = match.group(1)
        resolved = None

        if raw_import.startswith("$") or raw_import.startswith("@"):
            resolved = resolve_alias(raw_import)
        elif raw_import.startswith("."):
            resolved = (file_path.parent / raw_import).resolve()

        if resolved:
            final_file = resolve_file_extension(resolved)
            if final_file and not final_file.name.endswith("utils.ts"):
                found_paths.add(final_file)

    return found_paths


def get_main_component_file(block_files: list[Path], block_id: str) -> Path:
    """Find the entry point file for the component block."""
    sveltes = [f for f in block_files if f.name.endswith(".svelte") and "preview" not in f.name.lower()]
    if sveltes:
        category_stem = block_id.split("-")[0]
        for f in sveltes:
            if category_stem in f.name.lower():
                return f
        return sveltes[0]
    
    return block_files[0]


def get_unique_var_name(rel_path: str, ui_name: str) -> str:
    p = Path(rel_path)
    clean_path = rel_path.replace("src/lib/", "")

    if "assets/svg/logo" in clean_path:
        return "logoSvgSource"
    if "hooks/use-scroll" in clean_path:
        return "useScrollHookSource"
    if "full-width-divider/full-width-divider" in clean_path:
        return "dividerSource"
    if "full-width-divider/index" in clean_path:
        return "dividerIndexSource"

    parts = p.parts
    if ui_name in parts:
        idx = parts.index(ui_name)
        relevant = parts[idx+1:]
        
        clean_parts = []
        for pt in relevant:
            stem = clean_extension(pt)
            if not clean_parts or clean_parts[-1] != stem:
                clean_parts.append(stem)

        words = []
        for pt in clean_parts:
            words.extend([w for w in re.split(r'[-_.]', pt) if w])

        camel = words[0].lower() + "".join(w.capitalize() for w in words[1:])
        return f"{camel}Source"

    parent_name = p.parent.name
    file_stem = clean_extension(p.name)

    if file_stem == "index":
        words = [w for w in re.split(r'[-_.]', parent_name) if w]
        camel = words[0].lower() + "".join(w.capitalize() for w in words[1:])
        return f"{camel}IndexSource"

    if file_stem == parent_name:
        words = [w for w in re.split(r'[-_.]', file_stem) if w]
        camel = words[0].lower() + "".join(w.capitalize() for w in words[1:])
        return f"{camel}RootSource" if file_stem == "navigation-menu" else f"{camel}Source"

    words = [w for w in re.split(r'[-_.]', file_stem) if w]
    camel = words[0].lower() + "".join(w.capitalize() for w in words[1:])
    return f"{camel}Source"


def format_title(name: str) -> str:
    clean_name = clean_extension(name)
    return " ".join(word.capitalize() for word in re.split(r'[-_.]', clean_name))


def to_pascal_case(text: str) -> str:
    clean_text = clean_extension(text)
    parts = re.split(r'[-_.]', clean_text)
    return "".join(p.capitalize() for p in parts if p)


def discover_blocks(category_dir: Path) -> list[tuple[str, list[Path]]]:
    blocks = []
    subdirs = [d for d in category_dir.iterdir() if d.is_dir()]

    for d in subdirs:
        files = [
            f for f in d.glob("**/*.*")
            if any(f.name.lower().endswith(ext) for ext in VALID_EXTENSIONS)
        ]
        if files:
            blocks.append((d.name, files))

    return blocks


def get_block_metadata(block_id: str, block_title: str) -> dict:
    matched_config = None
    for pattern, config in BLOCK_METADATA_PATTERNS.items():
        if pattern != "default" and block_id.startswith(pattern):
            matched_config = config
            break

    if not matched_config:
        matched_config = BLOCK_METADATA_PATTERNS["default"]

    description = matched_config.get("description", "")
    if "{title}" in description:
        description = description.replace("{title}", block_title)

    return {
        "description": description or f"A {block_title} composition.",
        "height": matched_config.get("height", 500),
        "previewMode": matched_config.get("previewMode", "inline")
    }


# Category & UI Processing
def process_category(category_dir: Path, ui_name: str, output_dir: Path):
    category_name = category_dir.name
    category_camel = re.sub(r'[-_]([a-z])', lambda m: m.group(1).upper(), category_name)
    category_cap = category_camel[0].upper() + category_camel[1:]

    blocks = discover_blocks(category_dir)
    if not blocks:
        return

    blocks.sort(key=lambda x: extract_number_rank(x[0]))

    raw_imports = set()
    preview_imports = []
    block_items_code = []

    shared_arrays = {
        "buttonFiles": [
            '\t{\n'
            '\t\tid: "shared:button",\n'
            '\t\tpath: "components/ui/button/button.svelte",\n'
            '\t\texternalUrl: "https://shadcn-svelte.com/docs/components/button",\n'
            '\t\texternalLabel: "Shadcn Svelte Button"\n'
            '\t}'
        ],
        "decorIconFiles": [],
        "dividerFiles": [],
        "logoFiles": [],
        "marqueeFiles": [],
        "navigationMenuFiles": [],
        "portalFiles": [],
        "scrollHookFiles": []
    }

    efferd_sub_arrays = {}

    for block_id, block_files in blocks:
        block_title = format_title(block_id)

        preview_file = next((f for f in block_files if "preview" in f.name.lower()), block_files[0])
        preview_component_name = f"{to_pascal_case(block_id)}Preview"

        rel_preview = preview_file.relative_to(ROOT_DIR).as_posix()
        alias_preview = rel_preview.replace("src/lib/", "$lib/")
        preview_imports.append(f'import {preview_component_name} from "{alias_preview}";')

        # Read imports exclusively from the entry component
        main_component_file = get_main_component_file(block_files, block_id)
        direct_dependencies = parse_direct_imports(main_component_file)
        direct_dependencies.add(main_component_file)

        block_local_files = []
        block_spread_refs = set()

        # Identify local dependencies to check if there is only 1 file
        local_deps = [
            f for f in direct_dependencies 
            if f"{ui_name}/{category_name}/{block_id}" in f.relative_to(ROOT_DIR).as_posix()
        ]
        is_single_local_file = len(local_deps) == 1

        for abs_file in sorted(direct_dependencies):
            rel_path = abs_file.relative_to(ROOT_DIR).as_posix()
            var_name = get_unique_var_name(rel_path, ui_name)
            alias_import = rel_path.replace("src/lib/", "$lib/")

            if "components/ui/button" not in rel_path:
                raw_imports.add(f'import {var_name} from "{alias_import}?raw";')

            is_svelte = rel_path.endswith(".svelte")
            lang_str = "svelte" if is_svelte else "typescript"
            clean_path = rel_path.replace("src/lib/", "")

            is_shared = False
            for shared_key, shared_array_name in SHARED_MODULE_MAP.items():
                if shared_key in rel_path:
                    is_shared = True
                    block_spread_refs.add(f"...{shared_array_name}")

                    if shared_array_name == "buttonFiles":
                        continue

                    file_stem = clean_extension(abs_file.name)
                    if shared_array_name == "decorIconFiles":
                        item_id = "shared:decor-icon-index" if file_stem == "index" else "shared:decor-icon"
                    elif shared_array_name == "dividerFiles":
                        item_id = "shared:divider-index" if file_stem == "index" else "shared:divider"
                    elif shared_array_name == "logoFiles":
                        item_id = "shared:logo-svg"
                        clean_path = "svgs/logo.svelte"
                    elif shared_array_name == "marqueeFiles":
                        item_id = f"shared:marquee-{file_stem}" if file_stem != "marquee" else "shared:marquee"
                    elif shared_array_name == "navigationMenuFiles":
                        if file_stem == "navigation-menu":
                            item_id = "shared:navigation-menu-root"
                        else:
                            item_id = f"shared:navigation-menu-{file_stem.replace('navigation-menu-', '')}"
                    elif shared_array_name == "portalFiles":
                        item_id = f"shared:portal-{file_stem}" if file_stem != "portal" else "shared:portal"
                    elif shared_array_name == "scrollHookFiles":
                        item_id = "shared:use-scroll"
                    else:
                        item_id = f"shared:{file_stem}"

                    item_code = (
                        f'\t{{\n'
                        f'\t\tid: "{item_id}",\n'
                        f'\t\tpath: "{clean_path}",\n'
                        f'\t\tlang: "{lang_str}" as const,\n'
                        f'\t\tcode: {var_name}\n'
                        f'\t}}'
                    )

                    if item_code not in shared_arrays[shared_array_name]:
                        shared_arrays[shared_array_name].append(item_code)
                    break

            if is_shared:
                continue

            # Internal Components
            display_path = rel_path.replace(f"src/lib/components/{ui_name}/", f"components/{ui_name}/")

            if f"{ui_name}/{category_name}/{block_id}" in rel_path:
                file_stem = clean_extension(abs_file.name)
                local_id = block_id if is_single_local_file else f"{block_id}:{file_stem}"

                block_local_files.append(
                    f'\t\t\t{{\n'
                    f'\t\t\t\tid: "{local_id}",\n'
                    f'\t\t\t\tpath: "{display_path}",\n'
                    f'\t\t\t\tlang: "{lang_str}",\n'
                    f'\t\t\t\tcode: {var_name}\n'
                    f'\t\t\t}}'
                )
            else:
                parts = Path(rel_path).parts
                if ui_name in parts:
                    idx = parts.index(ui_name)
                    sub_cat = parts[idx+1]
                    sub_block = parts[idx+2]
                    
                    sub_array_name = f"{to_pascal_case(sub_cat)}{to_pascal_case(sub_block)}Files"
                    sub_array_name = sub_array_name[0].lower() + sub_array_name[1:]

                    file_stem = clean_extension(abs_file.name)
                    clean_sub_block = clean_extension(sub_block)
                    sub_item_id = f"{block_id}:{clean_extension(sub_cat) if file_stem == clean_sub_block else file_stem}"

                    sub_item_code = (
                        f'\t{{\n'
                        f'\t\tid: "{sub_item_id}",\n'
                        f'\t\tpath: "{display_path}",\n'
                        f'\t\tlang: "{lang_str}" as const,\n'
                        f'\t\tcode: {var_name}\n'
                        f'\t}}'
                    )

                    if sub_array_name not in efferd_sub_arrays:
                        efferd_sub_arrays[sub_array_name] = []

                    if sub_item_code not in efferd_sub_arrays[sub_array_name]:
                        efferd_sub_arrays[sub_array_name].append(sub_item_code)

                    block_spread_refs.add(f"...{sub_array_name}")

        if "...logoCloudThreeFiles" in block_spread_refs and "...marqueeFiles" in block_spread_refs:
            block_spread_refs.remove("...marqueeFiles")

        tree_elements = block_local_files + [f"\t\t\t{ref}" for ref in sorted(block_spread_refs)]
        code_tree_str = ",\n".join(tree_elements)
        
        meta = get_block_metadata(block_id, block_title)
        
        preview_href = f"/preview/{ui_name}/{category_name}/{block_id}"

        entry_tree_id = block_id if is_single_local_file else f"{block_id}:{category_name}"

        block_items_code.append(
            f'\t{{\n'
            f'\t\tid: "{block_id}",\n'
            f'\t\ttitle: "{block_title}",\n'
            f'\t\tdescription:\n'
            f'\t\t\t"{meta["description"]}",\n'
            f'\t\tpreviewComponent: {preview_component_name},\n'
            f'\t\tpreviewHref: "{preview_href}",\n'
            f'\t\tpreviewMode: "{meta["previewMode"]}",\n'
            f'\t\tpreviewHeight: {meta["height"]},\n'
            f'\t\tinstallId: "{block_id}",\n'
            f'\t\tcodeTree: createBlockCodeTree("{entry_tree_id}", [\n'
            f'{code_tree_str}\n'
            f'\t\t])\n'
            f'\t}}'
        )

    shared_arrays_code = []
    
    for arr_name in sorted(shared_arrays.keys()):
        items = shared_arrays[arr_name]
        if items:
            formatted_items = ",\n".join(items)
            shared_arrays_code.append(f"const {arr_name} = [\n{formatted_items}\n];")

    for arr_name in sorted(efferd_sub_arrays.keys()):
        items = efferd_sub_arrays[arr_name]
        if arr_name == "logoCloudThreeFiles":
            items.append("\t...marqueeFiles")
        formatted_items = ",\n".join(items)
        shared_arrays_code.append(f"const {arr_name} = [\n{formatted_items}\n];")
        
    ts_content = f"""// CodeTree Component
import type {{ BlockShowcaseItem }} from "$lib/components/blocks/blocks-code-tree";
import {{ createBlockCodeTree }} from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
{chr(10).join(sorted(preview_imports))}

// Raw
{chr(10).join(sorted(raw_imports))}

// Shared Items
{chr(10).join(shared_arrays_code)}

export const {category_camel}Blocks: BlockShowcaseItem[] = [
{','.join(block_items_code)}
];

export function get{category_cap}Block(id: string) {{
\treturn {category_camel}Blocks.find((block) => block.id === id);
}}
"""

    output_dir.mkdir(parents=True, exist_ok=True)
    out_file = output_dir / f"{category_name}.ts"
    out_file.write_text(ts_content, encoding="utf-8")
    print(f" [{ui_name}] Registry generated successfully: {out_file.relative_to(ROOT_DIR)}")


def main():
    for ui_name in UI_NAMES:
        source_dir = ROOT_DIR / "src" / "lib" / "components" / "blocks" / ui_name
        output_dir = ROOT_DIR / "src" / "lib" / "registry" / ui_name

        if not source_dir.exists():
            print(f"Source path not found for '{ui_name}': {source_dir}")
            continue

        for category_folder in source_dir.iterdir():
            if category_folder.is_dir():
                process_category(category_folder, ui_name, output_dir)


if __name__ == "__main__":
    main()