<script lang="ts" context="module">
	import image from '^assets/image';

	import { Navigation } from '^components/~sections';
	import {
		ArrowRight,
		CaretDown,
		Check,
		Clock,
		EnvelopeSimple,
		Mountains,
		PersonSimpleHike,
		Tree
	} from 'phosphor-svelte';

	// what want for 1:1 mentoring, therapeutic forest school...

	// want all of that info in seeding change?
	// how to find out more section in seeding change: zoom session, download info pack.
	// - also, download interest form
	// - deadline to apply
	// - places confirmed
	// click here to give feedback - in feedback section.

	// resources tab on programme page, for e.g. link to feedback form, pdfs (?)

	// MEETING 31 July
	// seperate section of site for 'give feedback'
	// videos are currently explanations by the facilatator
	// are also videos of testimonials
	// about us page has 3-4 minute video Henry has made
	// potentially want a where page that has accessibility
</script>

<Navigation />

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
		<p class="text-[22px] leading-relaxed">
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

<section class="mt-24 flex justify-center px-52">
	<div class="max-w-[1800px]">
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			What to Expect
		</h2>

		<div class="mt-8 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed text-black/70">
				You’ll learn a wide range of practical woodland skills and traditional crafts.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-24">
			<div class="flex max-w-[500px] flex-col items-center gap-5">
				<h3 class="font-display text-4xl font-bold text-black/70">
					Organic Growing & Horticulture
				</h3>

				<enhanced:img
					class="border-bc-pale-sandstone border-6"
					src={image.placeholder.chillies}
					alt=""
				/>

				<p
					class="border-bc-pale-sandstone/50 line-clamp-2 overflow-hidden px-2 pb-2 text-xl text-black/60"
				>
					Our team has many years experience in growing organic vegetables. We will explore and
					offer learning in a range of wildlife friendly food growing and horticulture techniques
					and practices. - We also explore wider land management techniques such as; coppicing,
					hedging, habitat creation and permaculture techniques for designing spaces.
				</p>
			</div>

			<div class="flex max-w-[500px] flex-col items-center gap-4">
				<h3 class="font-display text-4xl font-bold text-black/70">Nature based craft</h3>

				<enhanced:img
					class="border-bc-pale-sandstone max-w-[500px] border-6"
					src={image.placeholder.axe_chopping}
					alt=""
				/>

				<p
					class="border-bc-pale-sandstone/50 line-clamp-2 overflow-hidden px-2 pb-2 text-xl text-black/60"
				>
					Making all manner of things from willow with our resident willow expert Amy, from baskets
					to bird feeders, fences to climbing structures for plants. - Natural and traditional
					building techniques - such as using cob, building using round wood timber or using hazel
					to make fences. - Making functional or decorative items from found and foraged items in
					the garden or nearby woodland.
				</p>
			</div>
		</div>

		<div class="mt-12 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed text-black/80">
				You can also expect to take part in:
			</p>
		</div>

		<div class="mt-8 flex justify-center">
			<div class="flex max-w-[770px] flex-col gap-4">
				<div class="flex items-center gap-4">
					<span class="text-bc-burnt-sienna/50 rounded-full p-2 text-3xl"
						><Tree weight="fill" /></span
					>
					<p class="text-xl">
						Traditional Seasonal Woodland Management: Learn coppicing, charcoal burning, and hedge
						laying to help restore the woodland and encourage biodiversity.
					</p>
				</div>

				<div class="flex items-center gap-4">
					<span class="text-bc-burnt-sienna/50 rounded-full p-2 text-3xl"
						><Tree weight="fill" /></span
					>
					<p class="text-xl">
						<b>Wildlife Habitat Creation and Tree Planting:</b>
						Identify and map wildlife species, learning how to create habitats for birds, bats, and insects.
					</p>
				</div>

				<button class="mt-4 flex items-center gap-2 self-center"
					><span class="text-black/70">read more</span><span class="text-sm"><CaretDown /></span
					></button
				>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 flex justify-center px-52">
	<div class="max-w-[1800px]">
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			Who is this suitable for?
		</h2>

		<div class="mt-16 flex justify-center">
			<div class="flex gap-16">
				<div class="flex max-w-[550px] flex-col gap-4">
					<div class="flex items-center gap-4">
						<span class="text-bc-burnt-sienna/50 rounded-full text-3xl"
							><PersonSimpleHike weight="fill" /></span
						>
						<p class="text-xl">Anyone who enjoys being outdoors and learning practical skills.</p>
					</div>

					<div class="flex items-center gap-4">
						<span class="text-bc-burnt-sienna/50 rounded-full text-3xl"
							><Mountains weight="fill" /></span
						>
						<p class="text-xl">People keen to restore nature and boost biodiversity.</p>
					</div>
				</div>

				<div class="w-[600px]">
					<enhanced:img
						class="border-bc-pale-sandstone aspect-[5/3] border-8 object-cover"
						src={image.placeholder.standing_around_fire}
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 flex justify-center px-52">
	<div>
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			More About Recoupe
		</h2>

		<div class="mt-12 flex justify-center">
			<div class="grid max-w-[1200px] grid-cols-2 gap-20">
				<div class="">
					<p class="text-xl">
						Our goal is to build a healthy ecosystem with abundance at its core, creating a
						nurturing green space for nature and people to enjoy, explore and thrive.
					</p>

					<h3 class="text-bc-amber mt-6 text-xl font-bold">The benefits</h3>

					<div class="mt-5 flex flex-col gap-0 text-xl">
						<div class="flex items-center gap-4">
							<span class="text-bc-sea-foam-teal rounded-full p-[8px] text-2xl">
								<Check weight="fill" />
							</span>
							<p class="text-black/70">Grow your confidence and feel more sure of yourself</p>
						</div>
						<div class="flex items-center gap-4">
							<span class="text-bc-sea-foam-teal rounded-full p-[8px] text-2xl">
								<Check weight="fill" />
							</span>
							<p class="text-black/70">Make friends and build a supportive community</p>
						</div>
						<div class="flex items-center gap-4">
							<span class="text-bc-sea-foam-teal rounded-full p-[8px] text-2xl">
								<Check weight="fill" />
							</span>
							<p class="text-black/70">
								Feel more connected to nature, your values, and your direction in life
							</p>
						</div>
					</div>
				</div>

				<div>
					<p class="text-xl text-black/70">
						We strive to cultivate a vibrant environment where life flourishes in harmony, offering
						a sanctuary for both wildlife and communities to connect, grow, and prosper. By
						fostering biodiversity and sustainable practices, we aim to create a lasting legacy of
						balance and renewal for generations to come.
					</p>
					<p class="mt-4 text-xl text-black/70">
						Our vision is rooted in the belief that nature and humanity can coexist in mutual
						benefit, transforming landscapes into thriving havens of productivity and peace.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-28">
	<div class="flex justify-center">
		<div>
			<div class="flex justify-center gap-20">
				<div class="relative flex flex-col items-center rounded-lg p-4">
					<div class="flex flex-col items-center">
						<button class=" font-display text-bc-amber text-4xl font-bold" type="button">
							click here to book a place
						</button>

						<p class="mt-1 flex items-center gap-2 text-center text-sm text-black/50">
							<span><Clock /></span>
							<span>Takes 3 mins</span>
						</p>
					</div>

					<div class="absolute top-[3px] left-1/2 w-[120px] -translate-x-1/2 scale-y-50">
						<enhanced:img
							class="h-full w-full object-cover opacity-40"
							sizes="80px"
							src={image.illustration.drawn_line_black}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[120px] -translate-x-1/2 scale-y-[0.50]">
						<enhanced:img
							class="h-full w-full object-cover opacity-40"
							sizes="80px"
							src={image.illustration.drawn_line_black}
							alt=""
						/>
					</div>
				</div>

				<div class="relative flex flex-col items-center rounded-lg p-4">
					<div class="flex flex-col items-center">
						<button
							class=" font-display text-recoupe-green text-bc-amber text-4xl font-bold"
							type="button"
						>
							click here to register interest
						</button>

						<p class="mt-1 flex items-center gap-2 text-center text-sm text-black/50">
							<span class=""><EnvelopeSimple /></span>
							<span>We'll send you updates</span>
						</p>
					</div>

					<div class="absolute top-[3px] left-1/2 w-[120px] -translate-x-1/2 scale-y-50">
						<enhanced:img
							class="h-full w-full object-cover opacity-40"
							sizes="80px"
							src={image.illustration.drawn_line_black}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[120px] -translate-x-1/2 scale-y-[0.50]">
						<enhanced:img
							class="h-full w-full object-cover opacity-40"
							sizes="80px"
							src={image.illustration.drawn_line_black}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 flex justify-center px-52">
	<div class="w-full">
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			Feedback
		</h2>

		<div class="mt-12 flex w-full justify-center">
			<div class="flex w-full max-w-[1200px] justify-between gap-20">
				<div class="basis-1/2">
					<h3 class="text-bc-amber font-display mt-6 text-center text-4xl font-bold tracking-wide">
						What Participants Say
					</h3>

					<div class="mt-6 flex flex-col items-center gap-6 text-xl">
						<div class="flex items-center gap-4">
							<p class="max-w-[480px] leading-relaxed text-black/70">
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
								The time I got to spend with others on camp was so magical and beautiful I can’t fully
								describe it. If you're struggling with mental health or socialising, please give it a
								go.
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
							</p>
						</div>

						<div class="flex items-center gap-4">
							<p class="max-w-[480px] leading-relaxed text-black/70">
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
								It was one of the best times of my life. I made friends, tested myself, and learned more
								about the world and myself.
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
							</p>
						</div>

						<div class="flex items-center gap-4">
							<p class="max-w-[480px] leading-relaxed text-black/70">
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
								It gave me the confidence boost I needed and helped me feel more like myself
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
							</p>
						</div>
					</div>
				</div>

				<div class="basis-1/2">
					<h3 class="text-bc-amber font-display mt-6 text-center text-4xl font-bold tracking-wide">
						What Referrers Say
					</h3>

					<div class="mt-6 flex flex-col items-center gap-6 text-xl">
						<div class="flex max-w-[480px] flex-col gap-2">
							<p class="leading-relaxed text-black/70">
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
								B reflected on how Camp Birch helped her feel more connected to herself and nature. She
								came away with tools for managing stress and adjusting to university life.
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
							</p>

							<p class="text-lg text-black/60">
								<span class="text-bc-mighty-silver">—</span>
								<span class="text-bc-amber"
									>Emma Martin | Senior Personal Adviser | Bristol Through Care Team</span
								>
							</p>
						</div>

						<div class="flex max-w-[480px] flex-col gap-2">
							<p class="leading-relaxed text-black/70">
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
								Camp Birch had a huge impact on our young people. Many came back more confident and motivated
								to re-engage with education, volunteering and wellbeing activities. I’d highly recommend
								The Birch Collective — plus it looked like so much fun
								<span class="text-bc-sea-foam-teal text-3xl">"</span>
							</p>

							<p class="text-lg text-black/60">
								<span class="text-bc-mighty-silver">—</span>
								<span class="text-bc-amber"
									>Rosie Kinnear | Youth Development Lead | The Prince's Trust</span
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
