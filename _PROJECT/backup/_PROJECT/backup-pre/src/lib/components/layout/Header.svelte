<script lang="ts">
 
  // Necessary
	import { slide } from "svelte/transition";
	import Button from "$lib/components/ui/button/button.svelte";
  import Logo from "$lib/components/assets/Logo.svelte";
  import SearchComponent from "$lib/components/blocks/BlockSearch.svelte";

  
	type NavLink = {
		name: string;
		url: string;
		isNew?: boolean;
	};
  
	// Navbar Links Mobile
	let navLink: NavLink[] = [
		{ name: "Home", url: "/" },
		{ name: "Blocks (Themed Veil)", url: "/blocks_veil/hero", isNew: true },
		{ name: "Blocks", url: "/hero" },
		{ name: "Templates", url: "/templates" },
		{ name: "Updates", url: "/updates" },
		{ name: "Documentation", url: "/documentation/" },
	];
  
  
  type NavLinkDesktop = {
		name: string;
		url: string;
		isNew?: boolean;
	};

	// Navbar Links Desktop
	let navLinkDesktop: NavLinkDesktop[] = [
		{ name: "Home", url: "/" },
		{ name: "Blocks (Theme)", url: "/blocks_veil/hero", isNew: true },
		{ name: "Updates", url: "/updates" },
		{ name: "Documentation", url: "/documentation/" },
	];
	

	// Mobile and user profile state
	let isMobileMenu = $state(false);
  
  function closeMenu() {
    isMobileMenu = false;
  }


	// Dark & Light Mode
	import { toggleMode, mode } from "mode-watcher";
	import CaretDown from "@lucide/svelte/icons/chevron-down";
	import { NavigationMenu } from "bits-ui";
	import cn from "clsx";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { page } from "$app/state";

	type ListItemProps = {
		className?: string;
		title: string;
		href?: string;
		content: string;
		soon?: boolean;
	};

  
  // List item for Main Blocks Menu 
	let listItems: ListItemProps[] = [
		{
			title: "Hero",
			href: "/hero",
			content: "9 blocks - bold and striking visuals.",
		},
		{
			title: "Contact Us",
			href: "/contact",
			content: "2 blocks - clean and simple layouts.",
		},
		{
			title: "Features",
			href: "/feature",
			content: "14 blocks - highlight key benefits.",
		},
		{
			title: "Sign Up",
			href: "/signup",
			content: "3 blocks - fast and easy signup.",
		},
		{
			title: "Integrations",
			href: "/integration",
			content: "8 blocks - connect with top tools.",
		},
		{
			title: "Login",
			href: "/login",
			content: "3 blocks - modern, secure designs.",
		},
		{
			title: "Testimonials",
			href: "/testimonial",
			content: "6 blocks - trusted user feedback.",
		},
		{
			title: "Forgot Password",
			href: "/forgot-password",
			content: "2 blocks - quick reset options.",
		},
		{
			title: "Content",
			href: "/content",
			content: "7 blocks - engaging and informative.",
		},
		{
			title: "FAQ",
			href: "/faq",
			content: "4 blocks - clear and concise answers.",
		},
    {
			title: "Blocks (Themed Veil)",
			href: "/blocks-veil/hero",
			content: "Blocks Themed",
		},
	];

	let isDocs = $derived.by(() => {
		let path = page.url.pathname;
		return path.includes("documentation");
	});
</script>



<!-- Header -->
<header
	class={cn(
		"sticky top-0 z-50 backdrop-blur-2xl transition-all duration-200 border-b border-border bg-background"
	)}
>
			<!-- Main Conteiner -->	
			<nav class="w-full py-4 px-4">
          <!-- Desktop  -->
          <NavigationMenu.Root class="relative z-10 flex items-center justify-between hidden md:flex">
            
            <!-- Logo & Search -->
            {@render LogoAndSearch()}
            
            <NavigationMenu.List
							class="group flex list-none items-center justify-center p-1"
						>
            
							<!-- Desktop Links -->
							{#each navLinkDesktop as nav}
								<a
									href={nav.url}
									class="block rounded-md px-3 py-2 text-base font-medium text-primary"
									>{nav.name}</a
								>
							{/each}

							<!-- Desktop Links With Dropdown -->
							<!-- Blocks -->
							<NavigationMenu.Item value="blocks">
								<NavigationMenu.Trigger
									class="data-[state=open]:shadow-mini group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted dark:hover:bg-muted dark:data-[state=open]:bg-muted"
								>
									Blocks
                  <!-- Icon -->
									<CaretDown
										class="relative top-px ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
										aria-hidden="true"
									/>
								</NavigationMenu.Trigger>
								<NavigationMenu.Content
									class="absolute top-0 left-0 w-full data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left sm:w-auto"
								>   
										<ul class="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 md:w-[600px]">
											{#each listItems as component (component.title)}
												{@render ListItem({
													href: component.href,
													title: component.title,
													content: component.content,
												})}
											{/each}
										</ul>
								</NavigationMenu.Content>
							</NavigationMenu.Item>
						
            	<!-- Templates -->
							<NavigationMenu.Item value="templates">
								<NavigationMenu.Trigger
									class="data-[state=open]:shadow-mini group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted dark:hover:bg-muted dark:data-[state=open]:bg-muted"
								>
									Templates
                  <!-- Icon -->
									<CaretDown
										class="relative top-px ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
										aria-hidden="true"
									/>
								</NavigationMenu.Trigger>
								<NavigationMenu.Content
									class="absolute top-0 left-0 w-full data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left sm:w-auto"
								>
									<ul
										class="m-0 grid list-none gap-x-2.5 p-3 sm:w-150 sm:grid-flow-col sm:grid-rows-3"
									>
										<li class="row-span-3 mb-2 sm:mb-0">
											<NavigationMenu.Link
												href="/"
												class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-hidden select-none focus:shadow-md"
											>
												<div class="mt-4 mb-2 text-lg font-medium">
													Svelte Shadcn Blocks
												</div>
												<p
													class="text-sm leading-tight text-muted-foreground"
												>
													50+ UI & Marketing Blocks
												</p>
											</NavigationMenu.Link>
										</li>
										{@render ListItem({
											href: "/templates",
											title: "Startup Template",
											content: `Get 30% Off! Use code <span class='text-primary'>ILoveSvelte</span>`,
										})}
										{@render ListItem({
											title: "Landing Page",
											content: `Stunning Landing Page`,
											soon: true,
										})}
										{@render ListItem({
											title: "Marketing Template",
											content: `All-in-one Marketing Template`,
											soon: true,
										})}
									</ul>
								</NavigationMenu.Content>
							</NavigationMenu.Item>

							<NavigationMenu.Indicator
								class="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:animate-fade-out data-[state=hidden]:opacity-0 data-[state=visible]:animate-fade-in"
							>
								<div
									class="relative top-[70%] size-2.5 rotate-45 rounded-tl-[2px] bg-border"
								></div>
							</NavigationMenu.Indicator>
						</NavigationMenu.List>
            
            <!-- Socials And ThemeToggle -->
            <div>
                {@render socials()}
            </div>
            
						<div
							class="absolute top-full left-0 flex w-full justify-center perspective-[2000px]"
						>
							<NavigationMenu.Viewport
								class="relative mt-2.5 h-(--bits-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden rounded-lg border bg-background text-popover-foreground shadow-lg transition-[width,height] duration-100 data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in sm:w-(--bits-navigation-menu-viewport-width) "
							/>
						</div>
					</NavigationMenu.Root>
				
          <!-- Mobile Nav -->
          <div class="flex items-center justify-between md:hidden">
            <!-- Logo & Search -->
            {@render LogoAndSearch()}
            
            <!-- Open Menu Btn -->
            <Button
              onclick={() => (isMobileMenu = !isMobileMenu)}
              size="icon"
              variant="secondary"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="{isMobileMenu ? 'hidden' : 'block'} size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              
              <svg
                class="{isMobileMenu ? 'block' : 'hidden'} size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
	    </nav>

      <!-- Mobile menu, show/hide based on menu state. -->
      {#if isMobileMenu}
        <div transition:slide class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            {#each navLink as nav}
              <a
                href={nav.url}
                onclick={closeMenu}
                class="block rounded-md px-3 py-2 text-base font-medium text-primary"
                >{nav.name}</a
              >
            {/each}
          </div>
          <div class="flex justify-end py-2 px-4">
            {@render socials()}
          </div>
        </div>
      {/if}
  
      <!-- Logo & Search -->
      {#snippet LogoAndSearch()}
          <div class="flex items-center gap-4">
              <!-- Logo -->
              <a href="/" aria-label="home" class="shrink-0">
                <Logo />
              </a>
             <SearchComponent/>
         </div>
     {/snippet}
  
      <!-- ThemeToggle --> 
      {#snippet ThemeToggle()}
        <Button onclick={toggleMode} variant="ghost" size="icon">
          <!-- Sun Icon -->
          {#if mode.current === "light"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-[1.2rem] w-[1.2rem]"
              ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
                d="m4.93 4.93 1.41 1.41"
              /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path
                d="M20 12h2"
              /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg
            >
          {:else}
            <!-- Moon Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-[1.2rem] w-[1.2rem]"
              ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
            >
          {/if}
          <span class="sr-only">Toggle theme</span>
        </Button>
      {/snippet}
    
      
      <!-- Socials -->
      {#snippet socials()}
        <div class="flex items-center -space-x-2 bg-card rounded-lg border border-border">
          <!-- Gihub -->
          <Button
            target="_blank"
            href="#"
            size="icon"
            variant="ghost"
            ><svg
              viewBox="0 0 256 250"
              width="256"
              height="250"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
              />
            </svg></Button
          >
          
          {@render ThemeToggle()}
        </div>
      {/snippet}
    
      
      <!-- List items For Main Blocks Menu -->
      {#snippet ListItem({ className, title, content, href, soon = false }: ListItemProps)}
        <NavigationMenu.Link
         class={cn(
              "block space-y-1 rounded-md p-2.5 leading-none no-underline outline-hidden transition-colors select-none hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground",
              className,
              soon && "opacity-50"
            )}
            {href}
          >
        <li class="relative">
          {#if soon}
            <div class="absolute top-2 right-2 z-50">
              <Badge variant="secondary" class="gap-1.5 rounded-full">Soon</Badge>
            </div>
          {/if}
            <div class="text-sm leading-none font-medium">{title}</div>
            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {@html content}
            </p>
        </li>
        </NavigationMenu.Link>
      {/snippet}
  
</header>
