<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let show: boolean;
	export let position: 'top' | 'bottom' = 'bottom';
	export let useCloseButton = false;
</script>

{#if show}
	<div
		class={`border-my-grey-1 absolute left-0 z-10 flex min-w-[200px] flex-col rounded-md border bg-white p-2 text-sm font-medium shadow-sm ${position === 'top' ? '-top-[1px] -translate-y-full' : '-bottom-[1px] translate-y-full'}`}
		transition:fade={{ duration: 150 }}
	>
		<p class="text-red-500">
			<slot />
		</p>

		{#if useCloseButton}
			<button
				class="border-my-grey-3 px-xs text-my-grey-1 mt-[11px] self-end rounded-md border py-[3px] text-[13px]"
				on:click={() => (show = false)}
				type="button"
			>
				Okay
			</button>
		{/if}
	</div>
{/if}
