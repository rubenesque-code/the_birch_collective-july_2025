<script lang="ts" context="module">
	import { ArrowRight, Basket, Plant, Plus, Quotes, Tree } from 'phosphor-svelte';

	import image from '^assets/image';

	import { Header } from '^components/~sections';

	// need distinction between paid and free.
	// programmes (for individuals to sign up to); 1:1 mentoring; tailored programs for groups; youth advisory board
	// for young people: group based nature programmes; 1:1 mentoring; youth advisory board; non-official volunteering (as mentor or something like that)?
	// for institution: tailored programs.
</script>

<Header />

<div class="relative">
	<enhanced:img
		class="aspect-[22/9] w-full overflow-hidden object-cover object-[50%_20%]"
		src={image.placeholder.standing_around_fire}
		alt=""
	/>
</div>

<div class="mt-16 flex flex-col items-center">
	<h2 class="font-display text-bc-amber text-center text-[80px] leading-none font-bold">
		Cultivating Purpose, Belonging & Resilience
	</h2>

	<!-- <h3 class="text-bc-amber max-w-[700px] text-center text-3xl uppercase">
		cultivating purpose, belonging, resilience and relationships with nature
	</h3> -->
	<p class="mt-12 max-w-[1200px] text-center text-2xl leading-relaxed">
		Through strong, supportive relationships, we enable young people to overcome obstacles, acquire
		new skills, and improve their wellbeing, ensuring they are prepared for their transition to
		adulthood.
	</p>

	<div class="mt-12 flex items-center gap-6">
		<button
			type="button"
			class="bg-bc-slate-pine rounded-xl px-4 py-3 text-lg font-medium text-white"
		>
			Get in Touch
		</button>
		<button
			type="button"
			class="bg-bc-slate-pine rounded-xl px-4 py-3 text-lg font-medium text-white"
		>
			Sign Up
		</button>
		<button
			type="button"
			class="bg-bc-burnt-sienna rounded-xl px-4 py-3 text-lg font-medium text-white"
		>
			Donate
		</button>
	</div>
</div>

<section class="mt-32 flex justify-center px-52">
	<div>
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			Free Programmes For Young People
		</h2>

		<div class="mt-8 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed">
				Open-access programmes supporting wellbeing, connection, and confidence through nature-based
				activities.
			</p>
		</div>

		<div class="mt-10 grid grid-cols-4 gap-4">
			<div class="bg-bc-pale-sandstone relative flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.participant_1}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">Fresh Air Thursday</h2>
					<p class="mt-4 text-lg leading-relaxed font-light">
						A free weekly group for 16-25 year olds, Just a 5-minute walk form St George's Park!
					</p>
					<div class="flex grow items-end justify-end">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div class="bg-bc-pale-sandstone relative flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.standing_around_fire}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">ReCoupe: Working Woods</h2>
					<p class="mt-4 text-lg leading-relaxed font-light">
						A woodland conservation and green skills programme for 18+, supporting hands-on learning
						and employability.
					</p>
					<div class="flex grow items-end justify-end">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div class="bg-bc-pale-sandstone relative flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.stay_calm_and_listen_to_nature}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">
						Seeding Change: Plant Your Future (Camp Birch)
					</h2>
					<p class="mt-4 line-clamp-3 text-lg leading-relaxed font-light">
						A 7-month journey with seasonal camps, evening meetups, and mentoring for 18–25s,
						supporting purpose, leadership, and community building.
					</p>
					<div class="flex grow items-end justify-end pt-3">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div class="bg-bc-pale-sandstone relative flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.group_photo}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">
						Youth Advisory Board & Steering Group Workshops
					</h2>
					<p class="mt-4 text-lg leading-relaxed font-light">
						Opportunities for 16–25s to shape our work, co-design programmes, and gain leadership
						experience.
					</p>
					<div class="flex grow items-end justify-end">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-32 flex justify-center px-52">
	<div>
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			Paid Services / Partner With Us
		</h2>

		<div class="mt-8 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed">
				For organisations, schools, youth groups, and professionals who want to bring nature-based
				learning and wellbeing into their work.
			</p>
		</div>

		<div class="mt-10 grid grid-cols-8 gap-4">
			<div></div>
			<div class="bg-bc-pale-sandstone relative col-span-2 flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.caregiver_with_partipant_face_to_face}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">1:1 Nature-Based Mentoring</h2>
					<p class="mt-4 text-lg leading-relaxed font-light">
						Tailored support for young people facing challenges, combining nature connection with
						therapeutic mentoring.
					</p>
					<div class="flex grow items-end justify-end">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div class="bg-bc-pale-sandstone relative col-span-2 flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.stay_calm_and_listen_to_nature}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">Therapeutic Forest School</h2>
					<p class="mt-4 line-clamp-3 text-lg leading-relaxed font-light">
						Structured, trauma-informed group sessions for children and young people, delivered in
						green spaces.
					</p>
					<div class="flex grow items-end justify-end pt-3">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div class="bg-bc-pale-sandstone relative col-span-2 flex flex-col rounded-2xl">
				<enhanced:img
					class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
					src={image.placeholder.therapeutic_forest_school}
					alt=""
				/>

				<div class="mt-4 flex w-full grow flex-col rounded-b-2xl p-7">
					<h2 class="font-display text-4xl font-bold tracking-wide">
						Bespoke Nature Workshops for Organisations
					</h2>
					<p class="mt-4 text-lg leading-relaxed font-light">
						Custom-designed sessions for schools, support services, or teams – ranging from
						team-building to therapeutic intervention.
					</p>
					<div class="flex grow items-end justify-end">
						<span class="bg-bc-slate-pine rounded-full p-2 text-xl text-white">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	</div>
</section>

<section class="mt-32 flex justify-center px-52">
	<div class="w-full">
		<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
			Our Impact
		</h2>

		<div class="mt-8 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed">
				We cherish feedback from our participants and use it to improve our programmes. We also use
				data to see the impact we're having.
			</p>
		</div>

		<div class="flex justify-center">
			<div class="border-bc-amber/40 mt-12 w-[120px] border-b-3"></div>
		</div>

		<div class="mt-12 flex justify-center">
			<div class="grid w-full grid-cols-2 flex-col items-center gap-x-40 gap-y-20">
				<div class="flex items-center gap-8">
					<div class="flex flex-col items-center gap-y-6">
						<enhanced:img
							class="border-bc-amber/80 aspect-square w-[120px] rounded-full border-[6px] object-cover"
							src={image.placeholder.participant_1}
							alt=""
						/>

						<p class="flex gap-1 text-center text-2xl">
							<span class="text-bc-amber/70 scale-x-[-1] text-xl"><Quotes weight="fill" /></span>
							I feel I've left feeling more accepting of other people and myself
							<span class="text-bc-amber/70 text-xl"><Quotes weight="fill" /></span>
						</p>
						<p class="text-xl text-black/70">Pauline - Participant</p>
					</div>
				</div>

				<div class="flex items-center gap-8">
					<div class="flex flex-col items-center gap-y-6">
						<enhanced:img
							class="border-bc-slate-pine/80 aspect-square w-[120px] rounded-full border-[6px] object-cover"
							src={image.placeholder.caregiver_with_partipant_face_to_face}
							alt=""
						/>

						<p class=" gap-1 text-center text-2xl">
							<span class="text-bc-slate-pine/70 float-left scale-x-[-1] text-xl"
								><Quotes weight="fill" /></span
							>
							<span class="text-center">
								The young person I work with is delighted with The Birch Collective, and so much
								enjoys spending time in nature.
							</span>
							<span class="text-bc-slate-pine/70 float-right text-xl"><Quotes weight="fill" /></span
							>
						</p>
						<p class="text-xl text-black/70">Carol - Support Worker</p>
					</div>
				</div>

				<div class="flex items-center gap-8">
					<div class="flex flex-col items-center gap-y-6">
						<enhanced:img
							class="border-bc-slate-pine/80 aspect-square w-[120px] rounded-full border-[6px] object-cover"
							src={image.placeholder.caregiver_with_partipant_face_to_face}
							alt=""
						/>

						<p class=" gap-1 text-center text-2xl">
							<span class="text-bc-slate-pine/70 float-left scale-x-[-1] text-xl"
								><Quotes weight="fill" /></span
							>
							<span class="text-center">
								The young person I work with is delighted with The Birch Collective, and so much
								enjoys spending time in nature.
							</span>
							<span class="text-bc-slate-pine/70 float-right text-xl"><Quotes weight="fill" /></span
							>
						</p>
						<p class="text-xl text-black/70">Carol - Support Worker</p>
					</div>
				</div>

				<div class="flex items-center gap-8">
					<div class="flex flex-col items-center gap-y-6">
						<enhanced:img
							class="border-bc-amber/80 aspect-square w-[120px] rounded-full border-[6px] object-cover"
							src={image.placeholder.participant_1}
							alt=""
						/>

						<p class="flex gap-1 text-center text-2xl">
							<span class="text-bc-amber/70 scale-x-[-1] text-xl"><Quotes weight="fill" /></span>
							I feel I've left feeling more accepting of other people and myself
							<span class="text-bc-amber/70 text-xl"><Quotes weight="fill" /></span>
						</p>
						<p class="text-xl text-black/70">Pauline - Participant</p>
					</div>
				</div>

				<!-- <div class="flex gap-8">
					<p class="text-bc-mineral-jade font-display text-5xl font-bold">80%</p>
					<p class="text-2xl">of participants report improved mental wellbeing</p>
				</div> -->
			</div>
		</div>

		<div class="flex justify-center">
			<div class="border-bc-amber/40 mt-12 w-[120px] border-b-3"></div>
		</div>

		<div class="mt-12 flex justify-center">
			<p class="max-w-[770px] text-center text-xl leading-relaxed">
				During the last academic year, out of the young people we worked with:
			</p>
		</div>

		<div class="mt-12 flex justify-center">
			<div class="flex max-w-[450px] flex-col gap-10">
				<div class="flex items-center gap-10">
					<p class="font-display text-bc-amber text-6xl font-bold">80%</p>
					<p class="text-[24px]">have improved wellbeing</p>
				</div>

				<div class="flex items-center gap-10">
					<p class="font-display text-bc-slate-pine text-6xl font-bold">78%</p>
					<p class="text-[24px]">have improved improved behaviour for learning</p>
				</div>

				<div class="flex max-w-[776px] items-center gap-10">
					<p class="font-display text-bc-amber text-6xl font-bold">90%</p>
					<p class="text-[24px]">have improved social interactions</p>
				</div>
			</div>
		</div>
	</div>
</section>
