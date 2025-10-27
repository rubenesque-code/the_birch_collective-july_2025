<script lang="ts" module>
	import { MagnifyingGlassPlus, ArrowUpRight } from 'phosphor-svelte';

	import type { EnhancedImg } from '^assets/image';

	import { ImageModal } from '^components';
</script>

<script lang="ts">
	let {
		mapAlt,
		mapLink,
		mapSrc,
		modalTitle,
		locationText
	}: {
		mapAlt: string;
		mapLink: string;
		mapSrc: EnhancedImg;
		modalTitle: string;
		locationText: string;
	} = $props();

	let showLocationMap = $state(false);

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			showLocationMap = true;
		}
	}
</script>

<div class="flex flex-col">
	<p class="info-title">Location:</p>

	<div class="gap-4 md:mt-2 md:flex">
		<div
			class="border-my-grey-3/50 relative mt-1 max-w-[230px] cursor-pointer rounded-lg border-[4px] sm:max-w-[300px]"
			role="button"
			tabindex="0"
			aria-label="Show location map"
			onclick={() => (showLocationMap = true)}
			onkeydown={handleKey}
		>
			<enhanced:img class="aspect-[5/3] object-cover" src={mapSrc} alt={mapAlt} />

			<p
				class="text-bc-logo-black/40 4xl:text-base absolute right-1 bottom-1 flex items-center gap-1 text-sm"
			>
				<span>Click to </span>
				<span><MagnifyingGlassPlus weight="light" /></span>
			</p>
		</div>

		<div class="relative mt-3">
			<p class="info-text">{locationText}</p>

			<a
				class="bottom-0 left-0 mt-1 flex items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30 sm:mt-2"
				href={mapLink}
				target="_blank"><span>See on google maps</span><span><ArrowUpRight /></span></a
			>
		</div>
	</div>
</div>

<ImageModal bind:isOpen={showLocationMap} imgSrc={mapSrc} title={modalTitle} />
