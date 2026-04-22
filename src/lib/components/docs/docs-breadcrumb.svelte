<script lang="ts">
  import { page } from "$app/state";   
  import * as Breadcrumb from "$lib/components/ui/breadcrumb";
  // Data
  import { getDocsPage } from "$lib/components/docs/config";
  
  // Get Current Page
  let currentPage = $derived(getDocsPage(page.url.pathname));
  
  
</script>    

<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/documentation">Documentation</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>{currentPage.title}</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>