<script lang="ts" module>
	import image from '^assets/image';
	import { Header } from '^components/~sections';
	import { Clover } from 'phosphor-svelte';
</script>

<script lang="ts">
	let playIntroVideo = false;
</script>

<Header />

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-7xl font-bold tracking-wide">Fresh Air Thursdays</h1>

					<p class="mt-5 text-[22px] leading-relaxed font-medium">
						A weekly group every Thursday. Currently running upto December 18th 2025
					</p>
					<p class="mt-5 text-[22px] leading-relaxed">5 minutes from St George's Park, Bristol</p>
				</div>
			</div>

			<div class="">
				<button
					class="shrink-0 rounded-full bg-white/90 px-5 py-3 text-xl whitespace-nowrap"
					type="button">Sign Up</button
				>
			</div>
		</div>
	</section>

	<section class="mt-32 px-60">
		<div class="flex justify-center">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative cursor-pointer"
				on:click={() => {
					playIntroVideo = true;
				}}
			>
				<enhanced:img class="w-[700px] rounded-md" src={image.placeholder.banner_1} alt="" />

				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</div>

				<div class="absolute top-2 right-2">
					<p class="text-[17px] font-medium text-white">Fresh Air Thursday — An Introduction</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
