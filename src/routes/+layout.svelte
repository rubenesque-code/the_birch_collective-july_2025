<script lang="ts" module>
	import '../app.css';

	import { Navbar, NavbarVisibility } from '^components/~sections';
	import { Toaster } from '^components/ui';
	import { fly } from 'svelte/transition';
</script>

<script lang="ts">
	let { children } = $props();

	let hideHeader = $state(false);
</script>

<div class="fixed top-0 left-0 z-40 w-screen overflow-x-hidden">
	{#if !hideHeader}
		<div
			class="xs:px-4 xs:pt-4 relative flex items-center justify-between px-3 pt-3"
			transition:fly={{ y: '-100%' }}
		>
			<Navbar />
		</div>
	{/if}
</div>

{@render children()}

<NavbarVisibility bind:hideHeader />

<Toaster toastOptions={{ class: '!text-lg' }} />
