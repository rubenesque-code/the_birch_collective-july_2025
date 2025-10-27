<script lang="ts" module>
	import { ChatCircle, HandHeart, List, X } from 'phosphor-svelte';
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';

	import { browser } from '$app/environment';

	import { toggleBodyScroll } from '^helpers';
	import { afterNavigate } from '$app/navigation';
	import { internalRoute } from '^constants';
	import image from '^assets/image';

	import { Tooltip } from '^components/ui';
</script>

<script lang="ts">
	let isOpen = $state(false);

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	afterNavigate(() => {
		isOpen = false;
	});

	function swipeHandler(event: SwipeCustomEvent) {
		const direction = event.detail.direction;

		if (direction === 'right') {
			isOpen = false;
		}
	}

	const pageLinks = [
		{ key: 'free-programmes', label: 'Free Programmes' },
		{ key: 'paid-services', label: 'Paid Services' },
		{ key: 'about-us', label: 'About Us' },
		{ key: 'meet-the-team', label: 'Meet The Team' },
		{ key: 'practice-methodology', label: 'Practice Methodology' },
		{ key: 'testimonials', label: 'Testimonials' }
	] as const;
</script>

<header class="z-50 flex w-full items-start justify-between">
	<a
		class="font-display md-lg:hidden sm-md:text-4xl relative flex flex-col text-3xl font-bold"
		href="/"
	>
		<span class="translate-x-[20px]">The</span>
		<span class="sm-md:text-[54px] translate-x-[40px] translate-y-[-10px] text-[42px]">Birch</span>
		<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
	</a>

	<div class="md-lg:flex hidden shrink-0">
		<div class="hidden translate-x-[10px] translate-y-[21px]">
			<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
		</div>

		<a
			class="font-display flex flex-col text-[34px] leading-[1.6em] font-bold lg:text-4xl"
			href="/"
		>
			<span class="translate-x-[20px]">The</span>
			<span class="translate-x-[40px] translate-y-[-10px] text-[58px] lg:text-[66px]">Birch</span>
			<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
		</a>
	</div>

	<nav
		class="bg-bc-logo-black/50 xs:p-2 xs:gap-3 flex flex-col items-center gap-[10px] rounded-full p-[7px] sm:gap-3 lg:p-4"
	>
		<button
			class="xs:text-lg xs:p-2 xs-sm:text-xl cursor-pointer rounded-full border border-white p-[6px] text-white sm:text-[22px] lg:text-2xl"
			onclick={() => (isOpen = !isOpen)}
			type="button"
		>
			{#if !isOpen}
				<List />
			{:else}
				<X />
			{/if}
		</button>

		{#each [{ href: internalRoute['get-in-touch'], icon: ChatCircle, label: 'Get in touch' }, { href: internalRoute.donate, icon: HandHeart, label: 'Donate' }] as { href, icon: Icon, label }}
			<a
				class="xs:text-lg xs:p-2 grid cursor-pointer place-items-center rounded-full border border-white p-[6px] text-white sm:text-[22px] lg:text-2xl"
				{href}
			>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger class="cursor-pointer">
							<Icon />
						</Tooltip.Trigger>
						<Tooltip.Content side="left">
							<p class="text-base">{label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</a>
		{/each}
	</nav>
</header>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={`fixed top-0 right-0 z-30 h-screen w-screen bg-white/70 transition-opacity duration-300 ease-in-out ${!isOpen ? 'pointer-events-none opacity-0' : ''}`}
	onclick={() => (isOpen = false)}
></div>

<div
	class={`fixed top-0 right-0 z-[35] h-screen w-[400px] max-w-screen overflow-y-auto border-l-[2px] border-black/40 bg-white pt-4 pr-8 pl-12 shadow-2xl transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-full' : ''}`}
	{...useSwipe(swipeHandler, () => ({
		timeframe: 300,
		minSwipeDistance: 50,
		touchAction: 'none'
	}))}
>
	<div class="xs:text-xl mt-48 flex flex-col items-end gap-6 md:mt-60 lg:text-[22px]">
		{#each pageLinks as { key, label }, i}
			<a href={internalRoute[key]} class="">{label}</a>
			{#if i < pageLinks.length - 1}
				<div class="border-bc-slate-pine/30 h-[1px] w-[80px] border-b"></div>
			{/if}
		{/each}
	</div>
</div>
