import os
import re

# Classes de borda do Tailwind monitoradas
BORDER_CLASSES = {"border-t", "border-b", "border-l", "border-r", "border"}

# Extensões válidas para processar (adicione outras se necessário)
VALID_EXTENSIONS = {
    ".svelte"
}

# Regex para capturar os atributos de classe em HTML/JSX/Vue/etc.
# Captura: class="...", className='...', class=`...`
CLASS_ATTR_REGEX = re.compile(
    r'(class(?:Name)?\s*=\s*)(["`\'])(.*?)\2', 
    re.DOTALL
)

def process_classes_string(class_str: str) -> str:
    """
    Recebe a string interna do atributo class e aplica a regra:
    Se houver EXATAMENTE UMA classe de borda e 'border-border' não estiver presente,
    adiciona 'border-border'.
    """
    classes = class_str.split()
    classes_set = set(classes)

    # Se já tem border-border, ignora
    if "border-border" in classes_set:
        return class_str

    # Conta quantas classes de borda monitoradas existem na string
    matching_borders = [c for c in classes if c in BORDER_CLASSES]

    # Se contiver APENAS UMA classe da lista de bordas, adiciona 'border-border'
    if len(matching_borders) == 1:
        classes.append("border-border")
        return " ".join(classes)

    return class_str

def process_file(file_path: str) -> bool:
    """
    Lê e processa um arquivo. Retorna True se o arquivo foi alterado.
    """
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
    except (UnicodeDecodeError, PermissionError):
        # Ignora arquivos binários ou sem permissão de leitura
        return False

    def replace_match(match):
        prefix = match.group(1)      # ex: className=
        quote = match.group(2)       # ex: "
        inner_classes = match.group(3)

        new_classes = process_classes_string(inner_classes)
        return f"{prefix}{quote}{new_classes}{quote}"

    new_content = CLASS_ATTR_REGEX.sub(replace_match, content)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True

    return False

def main(root_dir: str = "."):
    modified_files = 0
    scanned_files = 0

    print("🔍 Iniciando busca por classes Tailwind...")

    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Ignora pastas comuns de dependências e builds para performance
        dirnames[:] = [
            d for d in dirnames 
            if d not in {"node_modules", ".git", ".next", "dist", "build"}
        ]

        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext in VALID_EXTENSIONS:
                file_path = os.path.join(dirpath, filename)
                scanned_files += 1
                
                if process_file(file_path):
                    print(f"  └─ 🛠️ Alterado: {file_path}")
                    modified_files += 1

    print("\n✅ Concluído!")
    print(f"• Arquivos analisados: {scanned_files}")
    print(f"• Arquivos modificados: {modified_files}")

if __name__ == "__main__":
    main()