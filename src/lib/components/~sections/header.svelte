<script lang="ts" context="module">
	import image from '^assets/image';
	import { FacebookLogo, InstagramLogo, List, TiktokLogo } from 'phosphor-svelte';
</script>

<header class="flex items-center justify-between px-4 py-[10px]">
	<div class="flex items-baseline gap-12">
		<div class="relative flex items-center gap-[10px]">
			<div class="">
				<enhanced:img class="w-[50px]" src={image.birch.logo.img_only} alt="" />
			</div>

			<div class="relative">
				<a class="font-display text-[40px] leading-none font-bold tracking-[0.03em]" href="/">
					The Birch Collective
				</a>

				<div
					class="text-bc-amber absolute top-1/2 -right-6 flex translate-x-full -translate-y-1/2 items-center gap-4 text-[22px] leading-none"
				>
					<a class="bg-bc-sea-foam-teal rounded-md p-1 text-white" href="/">
						<FacebookLogo />
					</a>
					<a class="bg-bc-sea-foam-teal rounded-md p-1 text-white" href="/"><InstagramLogo /></a>
					<a class="bg-bc-sea-foam-teal rounded-md p-1 text-white" href="/"><TiktokLogo /></a>
				</div>
			</div>
		</div>
	</div>

	<div class="flex items-center gap-8">
		<div class="relative">
			<p
				class="bg-bc-burnt-sienna rounded-md px-2 py-1 font-medium tracking-wide text-white uppercase"
			>
				Donate
			</p>
		</div>
		<div class="relative">
			<p
				class="bg-bc-slate-pine rounded-md px-2 py-1 font-medium tracking-wide text-white uppercase"
			>
				Get in Touch
			</p>
		</div>
		<div class="relative">
			<p class="tracking-wide uppercase">About Us</p>
		</div>

		<div class="relative">
			<p class="tracking-wide uppercase">Programmes</p>
		</div>

		<div class="relative">
			<p class="tracking-wide uppercase">Get Involved</p>
		</div>
	</div>
</header>
