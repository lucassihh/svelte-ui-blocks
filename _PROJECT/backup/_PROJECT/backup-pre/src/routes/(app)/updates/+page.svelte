<script lang="ts">
	import { updates } from "$lib/config/updates";
	import Calendar from "@lucide/svelte/icons/calendar";
  
  
	let updates_data = updates.toSorted((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
</script>

<!-- Updates -->
<div class="flex flex-col w-full max-w-4xl mx-auto gap-4">
  <!-- Updates Cards -->
  {#each updates_data as item}
		<div class="flex flex-col border border-border p-4">
    	<div>
				<div class="sticky top-20 flex items-center gap-2">
					<Calendar strokeWidth={1.4} size={20} />
					{new Date(item.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</div>
			</div>
			<div>
				<h3 class="text-xl font-medium">
					{item.title}
				</h3>
				<p class="mb-2 text-sm text-gray-500">
					{item.desc}
				</p>
				<div
					class="prose dark:prose-invert prose-a:inline-block prose-a:rounded-sm prose-a:bg-secondary prose-a:px-2 prose-a:py-1 prose-a:text-xs prose-a:no-underline prose-a:hover:opacity-80 mt-4"
				>
					{@html item.content}
				</div>
			</div>
		</div>
	{/each}
</div>
