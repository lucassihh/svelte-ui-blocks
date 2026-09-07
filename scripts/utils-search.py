import os
from pathlib import Path

# Skip directories
IGNORED_DIRS = {
    'node_modules', '.git', '.next', 'dist', 
    'build', 'coverage', '.idea', '.vscode', '__pycache__'
}

# Skip binary / non-text files
IGNORED_EXTENSIONS = {
    '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg',
    '.pdf', '.zip', '.gz', '.tar', '.exe', '.dll',
    '.mp3', '.mp4', '.ttf', '.woff', '.woff2', '.eot', '.lock'
}

def search_text_in_files(target_text: str, root_dir: str = '.'):
    root_path = Path(root_dir).resolve()
    results = {}

    for path in root_path.rglob('*'):
        # Ignore excluded directories
        if any(part in IGNORED_DIRS for part in path.parts):
            continue

        # Process valid files only
        if path.is_file() and path.suffix.lower() not in IGNORED_EXTENSIONS:
            try:
                # Read line by line with encoding fallback
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    for line_num, line in enumerate(f, start=1):
                        if target_text in line:
                            rel_path = str(path.relative_to(root_path))
                            if rel_path not in results:
                                results[rel_path] = []
                            results[rel_path].append((line_num, line.strip()))
            except Exception:
                continue

    return results

def main():
    try:
        target_text = input("Search text: ").strip()
        if not target_text:
            print("Query cannot be empty.")
            return

        print(f"\nSearching for: '{target_text}'...\n" + "-" * 40)
        results = search_text_in_files(target_text)

        # Print search summary and results
        if results:
            total_matches = sum(len(lines) for lines in results.values())
            print(f"Found {total_matches} match(es) across {len(results)} file(s):\n")
            
            for file_path, matches in results.items():
                print(f"📄 {file_path}")
                for line_num, line_content in matches:
                    print(f"   Line {line_num}")
                print()
        else:
            print("No matches found.")
        print("-" * 40)

    except KeyboardInterrupt:
        print("\nCanceled.")

if __name__ == '__main__':
    main()
