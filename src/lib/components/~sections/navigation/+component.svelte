<script lang="ts" module>
	import { ChatCircle, HandHeart, List, X } from 'phosphor-svelte';

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
</script>

<header class="z-10 flex w-full items-start justify-between">
	<div>
		<enhanced:img class="w-[58px]" src={image.birch.logo.img_only} alt="" />
	</div>

	<div class="hidden shrink-0 md:flex">
		<div class="translate-x-[10px] translate-y-[21px]">
			<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
		</div>

		<a class="font-display relative flex flex-col text-4xl font-bold" href="/">
			<span class="translate-x-[20px]">The</span>
			<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
			<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
		</a>
	</div>
</header>

<nav
	class="bg-bc-logo-black/50 flex flex-row-reverse items-center gap-3 rounded-full p-2 sm:gap-4 md:flex-col md:p-4"
>
	<button
		class="cursor-pointer rounded-full border border-white p-2 text-lg text-white sm:p-2 md:text-2xl"
		onclick={() => (isOpen = !isOpen)}
		type="button"
	>
		{#if !isOpen}
			<List />
		{:else}
			<X />
		{/if}
	</button>

	<a
		class="grid cursor-pointer place-items-center rounded-full border border-white p-2 text-lg text-white md:text-2xl"
		href={internalRoute['get-in-touch']}
	>
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<ChatCircle />
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					<p class="text-base">Get in touch</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</a>

	<a
		class="grid cursor-pointer place-items-center rounded-full border border-white p-2 text-lg text-white md:text-2xl"
		href={internalRoute.donate}
	>
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<HandHeart />
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					<p class="text-base">Donate</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</a>
</nav>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={`fixed right-0 z-30 h-screen w-screen bg-white/80 transition-opacity duration-300 ease-in-out ${!isOpen ? 'pointer-events-none opacity-0' : ''}`}
	onclick={() => (isOpen = false)}
></div>

<div
	class={`fixed right-0 z-[35] h-screen w-[600px] max-w-screen overflow-y-auto border-l-[2px] border-black/40 bg-white/50 pt-4 pr-[100px] pl-12 shadow-2xl transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-full' : ''}`}
>
	<div class="flex shrink-0">
		<a class="font-display relative flex flex-col text-4xl font-bold" href="/">
			<span class="translate-x-[20px]">The</span>
			<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
			<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
		</a>
	</div>

	<div class="mt-12 flex flex-col gap-8">
		<a class="font-display text-4xl font-bold" href="/">Home</a>
		<a class="font-display text-4xl font-bold" href="free-programmes">Free Programmes</a>
		<a class="font-display text-4xl font-bold" href={internalRoute['paid-services']}
			>Paid Services</a
		>
		<a class="font-display text-4xl font-bold" href="/about-us">About Us</a>
		<a class="font-display text-4xl font-bold" href="/meet-the-team">Meet The Team</a>
		<a class="font-display text-4xl font-bold" href="/practice-methodology">Practice Methodology</a>
		<a class="font-display text-4xl font-bold" href="/testimonials">Testimonials</a>
		<a class="font-display text-4xl font-bold" href="/theory-of-change">Theory of Change</a>
		<a class="font-display text-4xl font-bold" href="/volunteer">Volunteer</a>
	</div>
</div>
