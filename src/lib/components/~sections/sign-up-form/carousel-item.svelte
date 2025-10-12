<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import { Card, Carousel } from '^components/ui';
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { SignOut } from 'phosphor-svelte';
</script>

<script lang="ts">
	let {
		children,
		title,
		showError = $bindable(),
		errorMessage = $bindable(),
		onClickClose
	}: {
		title: string;
		children: Snippet<[]>;
		showError: boolean;
		errorMessage: string;
		onClickClose: () => void;
	} = $props();
</script>

<Carousel.Item class="flex h-full basis-full flex-col pl-0">
	<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
		<Card.Content class="flex h-full grow flex-col p-0 text-lg leading-relaxed">
			<Card.Header class="flex justify-between px-10">
				<div class="mt-12 flex items-center gap-2">
					<h2 class="font-display text-bc-logo-black/80 text-4xl font-bold">
						{title}
					</h2>
				</div>

				<div class="bg-bc-logo-black/80 flex items-center gap-2 rounded-full px-3 py-1 text-[15px]">
					<button
						class="rounded-full border border-white p-[6px] text-white"
						onclick={onClickClose}
						type="button"
					>
						<SignOut weight="fill" />
					</button>
				</div>
			</Card.Header>

			<Card.Content class="mt-16 grow overflow-y-auto px-10">
				{@render children?.()}

				<div class="h-[20px]"></div>
			</Card.Content>

			<div class="flex shrink-0 grow flex-col justify-end px-10 pt-4">
				{#if showError}
					<p class="text-[16px] text-black/60" transition:fade={{ duration: 50, easing: linear }}>
						{errorMessage}
					</p>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</Carousel.Item>

<!-- <Carousel.Item class="flex h-full basis-full flex-col  pl-0">
	<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
		<Card.Content class="flex h-full grow flex-col p-0 text-lg leading-relaxed">
			<Card.Header class="bg-my-grey-3/5 flex items-center justify-between px-6 py-4">
				<Card.Title
					class="font-display text-[24px] leading-relaxed font-bold tracking-wide text-black/70 uppercase"
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

			<div class="flex shrink-0 grow flex-col justify-end px-6">
				{#if showError}
					<p class="text-[16px] text-black/60" transition:fade={{ duration: 50, easing: linear }}>
						{errorMessage}
					</p>
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</Carousel.Item> -->
