<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import { Card, Carousel } from '^components/ui';
</script>

<script lang="ts">
	let {
		children,
		title,
		showError
	}: {
		title: string;
		children: Snippet<[]>;
		showError: false | string;
	} = $props();
</script>

<Carousel.Item class="flex h-full basis-full flex-col  pl-0">
	<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
		<Card.Content class="flex h-full grow flex-col p-0 text-lg leading-relaxed">
			<Card.Header class="bg-my-grey-3/5 flex items-center justify-between px-6 py-4">
				<Card.Title
					class="font-display text-[30px] leading-relaxed font-bold tracking-wide text-black/70 uppercase"
					>{title}</Card.Title
				>
				<div
					class="font-display text-bc-slate-pine/70 text-2xl leading-relaxed font-bold tracking-wide uppercase"
				>
					Programme Signup
				</div>
			</Card.Header>

			<div class="grid grow place-items-center overflow-y-scroll pr-4">
				<div class="flex h-full max-h-[400px] w-full flex-col gap-20 px-6 pr-6">
					{@render children?.()}

					<div class="-mt-12 h-[1px] shrink-0"></div>
				</div>
			</div>

			<div class="flex shrink-0 grow flex-col justify-end px-6 text-red-600">
				{#if showError}
					<p>{showError}</p>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</Carousel.Item>
