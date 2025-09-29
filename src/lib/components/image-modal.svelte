<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { X } from 'phosphor-svelte';
	import { fade, scale } from 'svelte/transition';

	import { browser } from '$app/environment';

	import type { EnhandcedImg } from '^assets/image';
	import { toggleBodyScroll } from '^helpers';
</script>

<script lang="ts">
	let {
		isOpen = $bindable(),
		onClickClose,
		isEnhanced,
		src,
		children
	} = $props<{
		isOpen: boolean;
		onClickClose: () => void;
		isEnhanced?: boolean;
		src: EnhandcedImg | 'string';
		children?: Snippet<[]>;
	}>();

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/70"
		onclick={onClickClose}
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed top-1/2 left-1/2 z-[60] grid h-[80vh] max-h-[1200px] w-[80vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 place-items-center"
		transition:scale={{ start: 0.9, opacity: 0, duration: 300 }}
	>
		<div>
			<div
				class="md/lg:border-[12px] border-bc-pale-sandstone relative mx-2 overflow-visible border-[8px] lg:border-[16px]"
			>
				<button
					class="md/lg:right-[-14px] md/lg:text-[24px] 3xl:text-[30px] absolute -top-[12px] right-[-10px] z-10 -translate-y-full cursor-pointer text-black/70 md:-top-[16px] md:right-[-12px] md:text-[20px] lg:-right-[20px] lg:text-[22px] xl:-top-[20px] xl:text-[26px] 2xl:text-[28px]"
					onclick={() => {
						onClickClose();
					}}
					type="button"
				>
					<X />
				</button>

				{#if isEnhanced}
					<enhanced:img class="w-full max-w-[1000px]" {src} alt="" />
				{:else}
					<img class="w-full max-w-[1000px]" {src} alt="" />
				{/if}
			</div>

			<div class="mt-2 flex justify-center">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
