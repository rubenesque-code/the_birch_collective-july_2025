<script lang="ts">
	let { hideHeader = $bindable(false) }: { hideHeader: boolean } = $props();

	let windowHeight = $state<number | undefined>(undefined);
	let windowWidth = $state<number | undefined>(undefined);
	let scrollTimeout = $state<number>(0);
	let scrollTopPrevious = $state<number>(0);

	function handleScroll() {
		if (!document) return;

		if (scrollTimeout) clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			const scrollY = document.scrollingElement!.scrollTop;

			hideHeader = windowWidth && windowWidth >= 1800 ? false : scrollTopPrevious < scrollY;

			requestAnimationFrame(() => (scrollTopPrevious = scrollY));
		}, 150);
	}
</script>

<svelte:window
	bind:innerHeight={windowHeight}
	bind:innerWidth={windowWidth}
	on:scroll={handleScroll}
/>
