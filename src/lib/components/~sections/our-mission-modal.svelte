<script lang="ts" module>
	import { X } from 'phosphor-svelte';
	import { scale } from 'svelte/transition';

	import { browser } from '$app/environment';

	import { toggleBodyScroll } from '^helpers';
	import { siteState } from '^state';

	import { mission } from '^assets/videos';
</script>

<script lang="ts">
	let props: { onClickCloseShowreel: () => void } = $props();

	let isOpen = $derived(siteState.showreel.isOpen);

	$inspect(siteState);

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-40 grid place-items-center bg-black"
		onclick={props.onClickCloseShowreel}
		transition:scale={{ start: 0.9 }}
	>
		<div
			class="md/lg:border-[12px] relative mx-2 overflow-visible border-[8px] border-white lg:border-[16px]"
		>
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				class="max-h-[calc(100vh-90px)] max-w-[90vw] md:w-[94vw] md:max-w-[94vw] 2xl:max-h-[calc(100vh-140px)]"
				autoplay
				controls
			>
				<source src={mission} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<button
				class="md/lg:right-[-14px] md/lg:text-[24px] 3xl:text-[30px] absolute -top-[12px] right-[-10px] z-10 -translate-y-full cursor-pointer text-white/70 md:-top-[16px] md:right-[-12px] md:text-[20px] lg:-right-[20px] lg:text-[22px] xl:-top-[20px] xl:text-[26px] 2xl:text-[28px]"
				onclick={() => {
					console.log('X BUTTON');

					props.onClickCloseShowreel();
				}}
				type="button"
			>
				<X />
			</button>
		</div>
	</div>
{/if}
