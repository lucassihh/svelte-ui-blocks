import os
import re
import shutil
from collections import defaultdict

def obter_imports_locais(caminho_arquivo):
    """
    Lê o arquivo .svelte e retorna uma lista com os nomes dos arquivos
    importados que estão no mesmo diretório (ex: ./componente.svelte).
    """
    imports = []
    # Regex para capturar imports do tipo: import X from './NomeDoArquivo.svelte'
    # ou import X from '$lib/.../NomeDoArquivo.svelte' (apenas se for relativo local './')
    padrao_import = re.compile(r'import\s+.*\s+from\s+[\'"]\.\/([^\'"]+\.svelte)[\'"]')
    
    try:
        with open(caminho_arquivo, 'r', encoding='utf-8') as f:
            conteudo = f.read()
            matches = padrao_import.findall(conteudo)
            for m in matches:
                imports.append(m)
    except Exception as e:
        print(f"Erro ao ler {caminho_arquivo}: {e}")
        
    return imports

def organizar_componentes(diretorio_raiz='.'):
    diretorio_raiz = os.path.abspath(diretorio_raiz)

    # Percorre o diretório de baixo para cima (topdown=False) para evitar
    # conflitos ao renomear/mover pastas durante a varredura
    for raiz, subs, arquivos in os.walk(diretorio_raiz, topdown=False):
        
        # Filtra apenas arquivos .svelte diretamente no diretório atual
        arquivos_svelte = [f for f in arquivos if f.endswith('.svelte')]
        
        if not arquivos_svelte:
            continue

        # Mapeamento de dependências no diretório atual
        # grafo[arquivo] = lista de arquivos que ele importa no mesmo diretório
        grafo_imports = defaultdict(set)
        
        for arq in arquivos_svelte:
            caminho_completo = os.path.join(raiz, arq)
            deps = obter_imports_locais(caminho_completo)
            for dep in deps:
                if dep in arquivos_svelte:  # Garante que a dependência está no mesmo diretório
                    grafo_imports[arq].add(dep)

        # Agrupamento usando BFS/DFS (Disjoint Set / Componentes Conectados)
        grupos = []
        visitados = set()

        for arq in arquivos_svelte:
            if arq in visitados:
                continue

            # Inicia um novo grupo para o componente
            grupo_atual = set()
            fila = [arq]

            while fila:
                item = fila.pop(0)
                if item not in grupo_atual:
                    grupo_atual.add(item)
                    visitados.add(item)
                    
                    # Adiciona dependências que este arquivo importa
                    for dep in grafo_imports[item]:
                        if dep not in grupo_atual:
                            fila.append(dep)
                            
                    # Adiciona arquivos que importam este arquivo
                    for outro_arq, deps in grafo_imports.items():
                        if item in deps and outro_arq not in grupo_atual:
                            fila.append(outro_arq)

            grupos.append(grupo_atual)

        # Mover os arquivos para as subpastas
        for grupo in grupos:
            # Tenta definir o nome da pasta do grupo
            # 1. Procura por um arquivo do grupo que não seja importado por nenhum outro no mesmo grupo
            importados_no_grupo = set()
            for arq in grupo:
                importados_no_grupo.update(grafo_imports[arq])
                
            principais = [arq for arq in grupo if arq not in importados_no_grupo]
            
            # Se houver um principal (ou mais de um sem importador), usa o primeiro para dar nome à pasta
            # Caso contrário (dependência circular), pega o primeiro arquivo qualquer
            nome_base = principais[0] if principais else list(grupo)[0]
            nome_pasta = os.path.splitext(nome_base)[0]

            caminho_nova_pasta = os.path.join(raiz, nome_pasta)

            # Cria a pasta caso não exista
            if not os.path.exists(caminho_nova_pasta):
                os.makedirs(caminho_nova_pasta)

            # Move todos os arquivos do grupo para a nova pasta
            for arq in grupo:
                origem = os.path.join(raiz, arq)
                destino = os.path.join(caminho_nova_pasta, arq)
                
                # Evita erro se o arquivo já estiver na pasta correta
                if origem != destino:
                    print(f"Movendo: {arq} -> {nome_pasta}/{arq}")
                    shutil.move(origem, destino)

if __name__ == '__main__':
    # Execute a partir da raiz desejada (padrão './')
    organizar_componentes('./')