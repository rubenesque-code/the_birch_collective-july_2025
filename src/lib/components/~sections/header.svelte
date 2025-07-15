<script lang="ts" context="module">
	import image from '^assets/image';
	import { FacebookLogo, InstagramLogo, List, TiktokLogo } from 'phosphor-svelte';
</script>

<header class="flex items-center justify-between px-4 py-[10px]">
	<div class="flex items-baseline gap-12">
		<div class="relative flex items-center gap-2">
			<div class="">
				<enhanced:img class="w-[50px]" src={image.birch.logo.img_only} alt="" />
			</div>

			<div class="relative">
				<a class="font-display text-[40px] leading-none font-bold tracking-[0.02em]" href="/">
					The Birch Collective
				</a>

				<div
					class="text-bc-slate-pine absolute -right-6 bottom-0 flex translate-x-full -translate-y-[2px] items-center gap-4 text-xl leading-none"
				>
					<a class="" href="/">
						<FacebookLogo />
					</a>
					<a href="/"><InstagramLogo /></a>
					<a href="/"><TiktokLogo /></a>
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
