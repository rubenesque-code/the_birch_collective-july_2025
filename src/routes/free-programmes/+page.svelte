<script lang="ts" module>
	import image from '^assets/image';
	import { Header } from '^components/~sections';
	import { Clover } from 'phosphor-svelte';
</script>

<Header />

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-60 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="relative flex w-full justify-end">
			<div class="max-w-[600px] text-white">
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Free Programmes</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					Want to spend more time outdoors, learn practical skills, and feel more connected? We run
					nature-based sessions that help you slow down, get hands-on, and grow alongside others.
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
							Recoupe: Working Woods
						</h3>

						<p class="mt-2 text-xl leading-relaxed">
							A weekly woodland sessions using traditional skills in Troopers Hill Woods.
						</p>

						<div class="mt-3">
							<p class="text-xl">Expect to learn skills in:</p>
							<div class="mt-3 flex flex-col gap-2">
								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">woodland management for wildflife</p>
								</div>

								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">green woodworking</p>
								</div>

								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">tree planting</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="flex justify-end">
					<a class="w-[700px]" href="/free-programmes">
						<enhanced:img
							class="aspect-video rounded-sm object-cover"
							src={image.placeholder.group_photo}
							alt=""
						/>

						<h3 class="font-display text-bc-slate-pine mt-3 text-[42px] font-bold">
							Fresh Air Thursdays
						</h3>

						<p class="mt-2 text-xl leading-relaxed">
							A FREE weekly group for 16-25 year olds, just a 5-minute walk from St George's Park!
						</p>

						<div class="mt-3">
							<p class="text-xl">What to expect:</p>
							<div class="mt-3 flex flex-col gap-2">
								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">hanging out and having fun in our garden!</p>
								</div>

								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">foraging walks</p>
								</div>

								<div class="flex items-center gap-2">
									<span class="text-bc-pale-sandstone text-2xl"><Clover /></span>
									<p class="text-xl text-black/80">organic food growing</p>
								</div>
							</div>
						</div>
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
