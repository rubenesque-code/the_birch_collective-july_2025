<script lang="ts" context="module">
	import { ChatCircle, HandHeart, List } from 'phosphor-svelte';

	import image from '^assets/image';
	import { Tooltip } from '^components/ui';
</script>

<header class="absolute top-0 left-0 z-10 flex w-full items-start justify-between p-4">
	<div class="flex shrink-0">
		<div class="translate-x-[10px] translate-y-[21px]">
			<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
		</div>

		<h1 class="font-display flex flex-col text-4xl font-bold">
			<span class="translate-x-[20px]">The</span>
			<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
			<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
		</h1>
	</div>
</header>

<nav
	class="bg-bc-logo-black/50 fixed top-4 right-4 z-30 flex flex-col items-center gap-4 rounded-full p-4"
>
	<div class="cursor-pointer rounded-full border border-white p-2 text-2xl text-white">
		<List />
	</div>

	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="cursor-pointer rounded-full border border-white p-2 text-2xl text-white">
					<ChatCircle />
				</div>
			</Tooltip.Trigger>
			<Tooltip.Content side="left">
				<p>Get in touch</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>

	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="cursor-pointer rounded-full border border-white p-2 text-2xl text-white">
					<HandHeart />
				</div>
			</Tooltip.Trigger>
			<Tooltip.Content side="left">
				<p>Donate</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</nav>
