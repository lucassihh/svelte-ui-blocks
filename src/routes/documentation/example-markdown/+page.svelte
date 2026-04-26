<script lang="ts">
	import DocsPage from "$lib/components/documentation/docs-page.svelte";
    // Heading 
    import H1 from "$lib/components/markdown/H1.svelte";
    import H2 from "$lib/components/markdown/H2.svelte";
    import H3 from "$lib/components/markdown/H3.svelte";
    
    // Texto e Links
	import Link from "$lib/components/markdown/Link.svelte";
    import Strong from "$lib/components/markdown/Strong.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
    import Blockquote from "$lib/components/markdown/Blockquote.svelte"; // Adicionado
    
    // Listas (Comum em documentações)
    import Ul from "$lib/components/markdown/UnorderedList.svelte";
    import Ol from "$lib/components/markdown/OrderedList.svelte"; // Adicionado
    import Li from "$lib/components/markdown/ListItem.svelte"; // Adicionado

    // Steps
	import Step from "$lib/components/markdown/Step.svelte";
	import Steps from "$lib/components/markdown/Steps.svelte";
    
    // UI e Code
	import { Button } from "$lib/components/ui/button";
	import * as Code from "$lib/components/ui/code";
</script>

<DocsPage
	title="Documentação de Componentes"
	description="Guia de referência para os componentes Markdown customizados do projeto."
>
	{#snippet actions()}
		<Button href="https://github.com" variant="default" size="sm">GitHub</Button>
        <Button href="#" variant="outline" size="sm">Documentação</Button>
	{/snippet}

    <H1>Título Principal (H1)</H1>
    <Paragraph>
        Este é um parágrafo padrão utilizando o componente <Code.Inline>Paragraph</Code.Inline>. 
        Ele suporta links internos como este: <Link href="#steps">Ir para Steps</Link>.
    </Paragraph>

    <H2>Subtítulo de Seção (H2)</H2>
    <Paragraph>
        Abaixo vemos um exemplo de subtítulo de nível 3 e nível 4.
    </Paragraph>
    
    <H3>Tópico Específico (H3)</H3>

    <hr class="my-6 border-slate-200" />

    <H2>Listas e Citações</H2>
    <Ol>
        <Li>Item de lista não ordenada 1</Li>
        <Li>Item de lista com <Link href="#">link interno</Link></Li>
        <Li>Item de lista com <Strong>negrito</Strong></Li>
    </Ol>

    <Blockquote>
        "Esta é uma citação (Blockquote) para destacar avisos importantes ou notas de rodapé na sua documentação."
    </Blockquote>

    <H2>Blocos de Código</H2>
    <Paragraph>Você pode renderizar blocos de código isolados:</Paragraph>
    <Code.Root 
        class="mt-4" 
        code={`npm install @seu-projeto/core`} 
        lang="bash" 
        variant="secondary" 
    />

    <H2 id="steps">Processo de Instalação (Steps)</H2>
	<Steps class="mt-8">
		<Step>
			<H2 class="mt-0 text-xl">Configuração Inicial</H2>
			<Paragraph>
				Clone o repositório e instale as dependências necessárias para começar.
			</Paragraph>
			<Code.Root class="mt-4" code={`git clone https://link.com\nnpm install`} lang="bash" variant="secondary" />
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Execução do Projeto</H2>
			<Paragraph>
				Inicie o servidor de desenvolvimento.
			</Paragraph>
			<Code.Root class="mt-4" code={`npm run dev`} lang="bash" variant="secondary" />
		</Step>
	</Steps>

</DocsPage>
