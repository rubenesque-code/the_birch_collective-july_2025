<script lang="ts" module>
	import image from '^assets/image';
	import { Header } from '^components/~sections';
</script>

<script lang="ts">
	let playTestimonial = false;
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
					<h1 class="font-display text-7xl font-bold tracking-wide">Our Practice Methodology</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="mt-8 text-xl leading-relaxed">...</p>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<div class="">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">
					Trauma Informed Practice Methodology
				</h3>
				<div class="mt-8 flex flex-col gap-6">
					<p class="text-xl leading-relaxed">...</p>
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
