import os
import re
from collections import Counter
from pathlib import Path

# Settings & Directory Paths
ROOT_DIR = Path.cwd()
REGISTRY_DIR = ROOT_DIR / "src" / "lib" / "registry"
INDEX_FILE_PATH = REGISTRY_DIR / "index.ts"

# Blocks names $lib/components/blocks/[ui-name]
UI_NAMES = [
  "efferd",
  "fancy",
  "magic",
  "veil"
]

# Regex to detect exported block arrays (ex: "export const heroBlocks: BlockShowcaseItem[]")
BLOCK_EXPORT_REGEX = re.compile(r'export\s+const\s+([a-zA-Z0-9_]+Blocks)\b')


def to_camel_case(text: str) -> str:
    """Convert kebab-case or snake_case string to camelCase."""
    parts = re.split(r'[-_]', text)
    return parts[0].lower() + "".join(p.capitalize() for p in parts[1:] if p)


def discover_ui_registry_modules(ui_name: str) -> list[tuple[str, str, str]]:
    """
    Scans the UI directory inside registry for TypeScript files,
    extracting the category slug, camelCase key, and the exported array variable name.
    """
    ui_dir = REGISTRY_DIR / ui_name
    if not ui_dir.exists():
        return []

    modules = []

    for file_path in sorted(ui_dir.glob("*.ts")):
        if file_path.name == "index.ts":
            continue

        category_slug = file_path.stem  # e.g., 'animated-gradient-text'
        category_key = to_camel_case(category_slug)  # e.g., 'animatedGradientText'

        try:
            content = file_path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"Error reading file {file_path}: {e}")
            continue

        match = BLOCK_EXPORT_REGEX.search(content)
        if match:
            var_name = match.group(1)  # e.g., 'heroBlocks'
        else:
            var_name = f"{category_key}Blocks"

        modules.append((category_slug, category_key, var_name))

    return modules


def generate_registry_index_content() -> str:
    # First pass: Collect all modules from all UIs
    ui_data: dict[str, list[tuple[str, str, str]]] = {}
    all_var_names = []

    for ui_name in UI_NAMES:
        modules = discover_ui_registry_modules(ui_name)
        if modules:
            ui_data[ui_name] = modules
            for _, _, var_name in modules:
                all_var_names.append(var_name)

    # Count occurrences of each variable name to detect duplicates
    var_counts = Counter(all_var_names)

    import_sections = []
    registry_entries = []

    # Second pass: Build imports and dictionary with smart alias logic
    for ui_name, modules in ui_data.items():
        import_lines = [f"// Imports for {ui_name}"]
        dict_lines = [f'\t"{ui_name}": {{']

        for idx, (category_slug, category_key, orig_var_name) in enumerate(modules):
            # Check if this variable name is duplicated across different UIs
            is_duplicate = var_counts[orig_var_name] > 1

            if is_duplicate:
                # Ex: heroBlocks -> veilHeroBlocks
                local_alias = f"{to_camel_case(ui_name)}{orig_var_name[0].upper()}{orig_var_name[1:]}"
                import_stmt = f'import {{ {orig_var_name} as {local_alias} }} from "./{ui_name}/{category_slug}";'
                var_to_use_in_dict = local_alias
            else:
                import_stmt = f'import {{ {orig_var_name} }} from "./{ui_name}/{category_slug}";'
                var_to_use_in_dict = orig_var_name

            import_lines.append(import_stmt)

            is_last = idx == len(modules) - 1
            comma = "" if is_last else ","
            dict_lines.append(f'\t\t{category_key}: {var_to_use_in_dict}{comma}')

        dict_lines.append("\t}")

        import_sections.append("\n".join(import_lines))
        registry_entries.append("\n".join(dict_lines))

    imports_block = "\n\n".join(import_sections)
    registry_block = ",\n".join(registry_entries)

    output = f"""{imports_block}

// Exports
export const registry = {{
{registry_block}
}} as const;

export type RegistryKey = keyof typeof registry;

/* So you can import like this in any page:

    import {{ registry }} from "$lib/registry";
    const efferd = registry["efferd"];
*/
"""
    return output


def main():
    if not REGISTRY_DIR.exists():
        print(f"Registry directory does not exist: {REGISTRY_DIR}")
        return

    content = generate_registry_index_content()
    INDEX_FILE_PATH.write_text(content, encoding="utf-8")
    print(f"Registry index updated successfully: {INDEX_FILE_PATH.relative_to(ROOT_DIR)}")


if __name__ == "__main__":
    main()
