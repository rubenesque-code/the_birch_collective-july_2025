<script lang="ts" context="module">
	import image from '^assets/image';

	import { Header } from '^components/~sections';
	import { ArrowRight } from 'phosphor-svelte';
</script>

<Header />

<section>
	<div class="relative overflow-hidden">
		<enhanced:img
			class="aspect-[22/9] w-full overflow-hidden object-cover object-[50%_20%]"
			src={image.placeholder.standing_around_fire}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 min-h-1/2 w-full bg-gradient-to-t to-transparent pt-28 pb-16 pl-40"
		>
			<div class="">
				<h2 class="font-display text-[80px] leading-none font-bold text-white">
					Recoupe: Working Woods
				</h2>

				<p class="mt-6 max-w-[550px] text-2xl leading-relaxed font-medium text-white">
					A weekly woodland sessions using traditional skills in Troopers Hill Woods
				</p>

				<button
					class="bg-bc-amber mt-6 flex items-center gap-2 rounded-md px-4 py-2 text-lg font-semibold text-white uppercase"
					type="button"
				>
					<span class="">Sign Up!</span>
					<span><ArrowRight weight="bold" /></span>
				</button>
			</div>
		</div>
	</div>
</section>

<section class="mt-20 flex justify-center">
	<div class="max-w-[800px]">
		<p class="text-2xl leading-relaxed">
			Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods. Our
			focus is to work sensitively with the land to create a thriving and diverse working woodland.
			We will mainly use hand tools and apply traditional woodland management techniques such as
			coppicing, charcoal burning, and hedge laying. This allows us to produce local products like:
			Beanpoles, pea sticks, Charcoal and Materials for traditional crafts, ensuring all parts of
			the tree are utilised.
		</p>
	</div>
</section>

<section class="mt-16 flex justify-center">
	<div class="flex w-full max-w-[1800px] justify-center">
		<div class="grid w-full grid-cols-4 justify-between gap-y-8 pl-20">
			<div class="flex">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="relative">
						<h3 class="  font-display text-recoupe-green text-bc-amber text-[40px] font-bold">
							When
						</h3>

						<div class="absolute bottom-[-0px] left-1/2 w-[74px] -translate-x-1/2 scale-y-75">
							<enhanced:img
								class="h-full w-full object-cover"
								sizes="80px"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</div>
					</div>

					<p class="mt-6 text-xl text-black/90">Every Tuesday, 1pm - 5pm</p>
				</div>
			</div>

			<div class="flex">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="relative">
						<h3 class="  font-display text-recoupe-green text-bc-amber text-[40px] font-bold">
							Where
						</h3>

						<div class="absolute bottom-[-0px] left-1/2 w-[74px] -translate-x-1/2 scale-y-75">
							<enhanced:img
								class="h-full w-full object-cover"
								sizes="80px"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</div>
					</div>

					<p class="mt-6 text-center text-xl text-black/90">
						Meet at Strawberry Lane allotments to walk together to Troopers Hill Woods
					</p>
				</div>
			</div>

			<div class="">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="relative">
						<h3 class="  font-display text-recoupe-green text-bc-amber text-[40px] font-bold">
							How Much
						</h3>

						<div class="absolute bottom-[-0px] left-1/2 h-[3px] w-full -translate-x-1/2">
							<enhanced:img
								class="h-full w-full object-cover"
								sizes="80px"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</div>
					</div>

					<p class="mt-6 text-center text-xl text-black/90">Free for everyone, always</p>
				</div>
			</div>

			<div class="">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="relative">
						<h3 class="  font-display text-recoupe-green text-bc-amber text-[40px] font-bold">
							Who For
						</h3>

						<div class="absolute bottom-[-0px] left-1/2 h-[3px] w-full -translate-x-1/2">
							<enhanced:img
								class="h-full w-full object-cover"
								sizes="80px"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</div>
					</div>

					<p class="mt-6 text-xl">Anyone aged 18+ (no experience needed)</p>
				</div>
			</div>
		</div>
	</div>
</section>
