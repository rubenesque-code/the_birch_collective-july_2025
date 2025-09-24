<script lang="ts" module>
	import image from '^assets/image';
	import { Navigation } from '^components/~sections';
	import { Clover } from 'phosphor-svelte';
</script>

<Navigation />

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-60 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="relative flex w-full justify-end">
			<div class="max-w-[600px] text-white">
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Volunteer</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					We’re always on the lookout for passionate volunteers to help us grow and support our
					work!
				</p>
			</div>
		</div>
	</section>

	<section class="relative mt-16 flex justify-center overflow-visible px-60">
		<div class="w-full">
			<!-- <h2 class="font-display text-bc-slate-pine text-6xl font-bold">Book a Spot</h2> -->

			<div class="mt-12 grid grid-cols-2 gap-32">
				<div class="">
					<a class="w-[700px]" href="/recoupe">
						<enhanced:img
							class="aspect-video rounded-sm object-cover"
							src={image.placeholder.axe_chopping}
							alt=""
						/>

						<h3 class="font-display text-bc-slate-pine mt-3 text-[42px] font-bold">
							Volunteer at a Programme
						</h3>

						<p class="mt-2 text-xl leading-relaxed">
							Help us facilitate a programme or be there to support other participants
						</p>
					</a>
				</div>

				<div class="flex justify-end">
					<a class="w-[700px]" href="/fresh-air-thursday">
						<enhanced:img
							class="aspect-video rounded-sm object-cover"
							src={image.placeholder.group_photo}
							alt=""
						/>

						<h3 class="font-display text-bc-slate-pine mt-3 text-[42px] font-bold">
							Voluntary Roles
						</h3>

						<p class="mt-2 text-xl leading-relaxed">
							These are longer term and can be excellent work experience!
						</p>
					</a>
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
