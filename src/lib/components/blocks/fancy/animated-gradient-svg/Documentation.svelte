<script lang="ts">
	// Markdown Components
	import H2 from "$lib/components/ui/markdown/H2.svelte";
	import Table from "$lib/components/ui/markdown/Table.svelte";
	import Thead from "$lib/components/ui/markdown/Thead.svelte";
	import Tbody from "$lib/components/ui/markdown/Tbody.svelte";
	import Tr from "$lib/components/ui/markdown/Tr.svelte";
	import Th from "$lib/components/ui/markdown/Th.svelte";
	import Td from "$lib/components/ui/markdown/Td.svelte";
</script>

<H2>Props</H2>

<Table>
	<Thead>
		<Tr>
			<Th>Prop</Th>
			<Th>Tipo</Th>
			<Th>Padrão</Th>
			<Th>Descrição</Th>
		</Tr>
	</Thead>
	<Tbody>
		<Tr>
			<Td class="font-mono text-sm">colors</Td>
			<Td class="font-mono text-sm text-muted-foreground">string[]</Td>
			<Td class="font-mono text-sm text-muted-foreground">required</Td>
			<Td>Lista de cores em blob usadas para gerar o campo de gradiente animado.</Td>
		</Tr>
		<Tr>
			<Td class="font-mono text-sm">speed</Td>
			<Td class="font-mono text-sm text-muted-foreground">number</Td>
			<Td class="font-mono text-sm text-muted-foreground">5</Td>
			<Td>Duração da animação em segundos compartilhada por cada blob SVG.</Td>
		</Tr>
		<Tr>
			<Td class="font-mono text-sm">blur</Td>
			<Td class="font-mono text-sm text-muted-foreground">"light" | "medium" | "heavy"</Td>
			<Td class="font-mono text-sm text-muted-foreground">"light"</Td>
			<Td>Controla a intensidade do desfoque aplicado à camada completa de gradiente.</Td>
		</Tr>
		<Tr>
			<Td class="font-mono text-sm">class</Td>
			<Td class="font-mono text-sm text-muted-foreground">string</Td>
			<Td class="font-mono text-sm text-muted-foreground">undefined</Td>
			<Td>Classes mescladas no wrapper externo posicionado como absoluto.</Td>
		</Tr>
	</Tbody>
</Table>