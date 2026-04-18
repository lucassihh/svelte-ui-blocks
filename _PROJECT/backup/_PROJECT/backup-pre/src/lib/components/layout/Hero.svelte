<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
  // Icons
  import Icon from "@iconify/svelte"
</script>

    <!-- Hero -->
		<section class="w-full max-w-4xl mx-auto px-4 py-10">
					<div class="flex flex-col items-center gap-2">
           	
             <!-- Version & Updates -->
             <a
								href="/updates"
								class="flex items-center justify-center text-center gap-2 rounded-full border bg-muted py-1 px-2 shadow-md shadow-zinc-950/5 backdrop-blur-xs transition-colors duration-300 hover:bg-muted dark:border-t-white/5 dark:bg-muted/60 dark:shadow-zinc-950 dark:hover:border-t-border"
							>
								<span class="flex items-center text-sm text-foreground">
									v1.3 New Blocks, See Updates
								</span>
                <!-- Rounded Icon -->
								<div
									class="flex items-center justify-center size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted"
								>
										<Icon icon="solar:arrow-right-line-duotone" class="size-4"/>
								</div>
							</a>
						
             <!-- Text Hero -->
              <div class="flex flex-col items-center justify-center text-center gap-2">
                <h1
                  class="font-display font-medium text-4xl mt-6 bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-600 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent"
                >
                  Svelte Shadcn Blocks<br />
                  150+ UI & Marketing Blocks
                </h1>
                
                <p
                  class="text-sm text-balance text-muted-foreground"
                >
                  Speed up your workflow with responsive,<br /> Pre-built UI blocks designed
                  for marketing websites.
                </p>
              </div>  
                
            <!-- Buttons -->
						<div
							class="mt-9 flex flex-col items-center justify-center gap-4 md:flex-row"
						>
							<Button href="/hero" size="lg" class="px-5 text-base">
								<span class="text-nowrap">Explore Blocks</span>
							</Button>
						</div>
            
					</div>
		</section>