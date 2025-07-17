<script lang="ts" context="module">
	import { ArrowRight, Basket, Plant, Plus, Quotes, Tree } from 'phosphor-svelte';

	import image from '^assets/image';

	import { Header } from '^components/~sections';
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
	<h2 class="font-display text-bc-amber text-center text-[140px] leading-none font-bold">
		The Birch Collective
	</h2>

	<!-- <h3 class="text-bc-amber max-w-[700px] text-center text-3xl uppercase">
		cultivating purpose, belonging, resilience and relationships with nature
	</h3> -->
</div>

<div class="mt-32 grid grid-cols-3 gap-10 px-52">
	<div class="relative">
		<enhanced:img
			class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
			src={image.placeholder.participant_1}
			alt=""
		/>

		<div class=" mt-4 flex w-full flex-col items-center justify-end overflow-hidden">
			<div class="flex flex-col justify-end overflow-hidden">
				<div class="relative flex flex-col gap-1 text-center text-[22px]">
					<span class="text-bc-amber scale-y-[-1] rotate-180 self-start text-[22px]"
						><Quotes weight="fill" /></span
					>
					<span class="line-clamp-2">I feel I've left feeling more accepting of myself. </span>

					<p class="text-center text-lg uppercase">Alissa - Participant</p>

					<span class="text-bc-amber absolute right-0 bottom-0 self-end"
						><Quotes weight="fill" /></span
					>
				</div>
			</div>
		</div>
	</div>

	<div class="relative">
		<enhanced:img
			class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
			src={image.placeholder.caregiver_with_partipant_face_to_face}
			alt=""
		/>

		<div class=" mt-4 flex w-full flex-col items-center justify-end overflow-hidden">
			<div class="flex flex-col justify-end overflow-hidden">
				<div class="relative flex flex-col gap-1 text-center text-[22px]">
					<span class="text-bc-amber scale-y-[-1] rotate-180 self-start text-[22px]"
						><Quotes weight="fill" /></span
					>
					<span class="line-clamp-2"
						>The Birch Collective has been a transformative experience, both for the individuals
						I...
					</span>

					<p class="text-center text-lg uppercase">Pauline - Support Worker</p>

					<span class="text-bc-amber absolute right-0 bottom-0 self-end"
						><Quotes weight="fill" /></span
					>
				</div>
			</div>
		</div>
	</div>

	<div class="relative">
		<enhanced:img
			class="aspect-[4/3] rounded-2xl object-cover object-[30%_50%]"
			src={image.placeholder.lying_in_grass}
			alt=""
		/>

		<div class=" mt-4 flex w-full flex-col items-center justify-end overflow-hidden">
			<div class="relative flex flex-col justify-end overflow-hidden">
				<div class="flex flex-col gap-1 text-center text-[22px]">
					<span class="text-bc-amber scale-y-[-1] rotate-180 self-start text-[22px]"
						><Quotes weight="fill" /></span
					>
					<span class="line-clamp-2">
						The time I got to spend with others on the camp was just something so magical and
						wonderful and beautiful
					</span>

					<p class="text-center text-lg uppercase">Jo - Participant</p>

					<span class="text-bc-amber absolute right-0 bottom-0 self-end"
						><Quotes weight="fill" /></span
					>
				</div>
			</div>
		</div>
	</div>
</div>

<section class="mt-32">
	<h2 class="font-display text-bc-slate-pine text-center text-7xl font-bold tracking-[0.02em]">
		Cultivating Purpose, Belonging and Resilience
	</h2>

	<div class="mt-12 flex justify-center">
		<div class="flex flex-col items-center gap-y-4">
			<div class="flex max-w-[600px] items-center gap-4 text-2xl">
				<div class="text-bc-amber border-bc-amber rounded-full p-1 text-4xl">
					<Tree weight="light" />
				</div>
				<p class="text-[22px] leading-relaxed">
					We walk alongside you to empower and support your transition into adulthood.
				</p>
			</div>

			<div class="flex max-w-[600px] items-center gap-4 text-2xl">
				<div class="text-bc-amber border-bc-amber rounded-full p-1 text-4xl">
					<Tree weight="light" />
				</div>
				<p class="text-[22px] leading-relaxed">
					We want you to unlock your potential to engage fully with life, and to respond resiliently
					to life's challenges.
				</p>
			</div>

			<div class="flex max-w-[600px] items-center gap-4 text-2xl">
				<div class="text-bc-amber border-bc-amber rounded-full p-1 text-4xl">
					<Tree weight="light" />
				</div>
				<p class="text-[22px] leading-relaxed">
					We believe that developing connections with the natural world gives you a sense of
					belonging, and helps you find purpose in life.
				</p>
			</div>
			<div class="flex max-w-[600px] items-center gap-4 text-2xl">
				<div class="text-bc-amber border-bc-amber rounded-full p-1 text-4xl">
					<Tree weight="light" />
				</div>
				<p class="text-[22px] leading-relaxed">
					We offer you the chance to be part of an inclusive community where you can explore new
					found skills and interests.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 grid px-52">
	<h2 class="font-display text-bc-slate-pine text-center text-7xl font-bold tracking-[0.02em]">
		Programmes
	</h2>

	<!-- <div class="flex justify-center">
		<p class="mt-6 max-w-[700px] text-center text-2xl font-light">
			We have a range of offers to suit your needs, from online courses to weekly hang outs and
			residential programmes.
		</p>
	</div> -->

	<div class="mt-12 grid grid-cols-3 gap-10">
		<div>
			<div>
				<enhanced:img
					class="aspect-video rounded-2xl object-cover"
					src={image.placeholder.chillies}
					alt=""
				/>
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-5xl font-bold tracking-wide">
				Fresh Air Thursday
			</h4>

			<p class="mt-4 text-xl leading-relaxed font-light">
				A free weekly group for 16-25 year olds, Just a 5-minute walk form St George's Park!
			</p>

			<div class="mt-3 text-xl font-light">
				<p>Includes:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p class="font-medium">Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p class="font-medium">Nature based craft</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plus />
					</span>
					<p class="font-medium italic">And more!</p>
				</div>
			</div>

			<div
				class="bg-bc-slate-pine mt-6 inline-flex items-center gap-2 self-start rounded-md px-2 py-1 font-medium text-white uppercase"
			>
				<span>Find out more</span>
				<span><ArrowRight /></span>
			</div>
		</div>

		<div>
			<div>
				<enhanced:img
					class="aspect-video rounded-2xl object-cover"
					src={image.placeholder.seeding_change}
					alt=""
				/>
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-5xl font-bold tracking-wide">
				Seeding Change
			</h4>
			<p class="mt-4 line-clamp-2 text-xl leading-relaxed font-light">
				A FREE camp for 18–25-year-olds who are feeling low, unmotivated, or ready for a fresh start
				— connect with nature, yourself, and others, just 35 minutes from Bristol.
			</p>

			<div class="mt-3 text-xl font-light">
				<p>Includes:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p class="font-medium">Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p class="font-medium">Nature based craft</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plus />
					</span>
					<p class="font-medium italic">And more!</p>
				</div>
			</div>

			<div
				class="bg-bc-slate-pine mt-6 inline-flex items-center gap-2 self-start rounded-md px-2 py-1 font-medium text-white uppercase"
			>
				<span>Find out more</span>
				<span><ArrowRight /></span>
			</div>
		</div>

		<div>
			<div>
				<enhanced:img
					class="aspect-video rounded-2xl object-cover"
					src={image.placeholder.therapeutic_forest_school}
					alt=""
				/>
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-5xl font-bold tracking-wide">
				Therapeutic Forest School
			</h4>
			<p class="mt-4 line-clamp-2 text-xl leading-relaxed font-light">
				Tailored programs for specific groups, co-designed with partner organisations.
			</p>

			<div class="mt-3 text-xl font-light">
				<p>Includes:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p class="font-medium">Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p class="font-medium">Nature based craft</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plus />
					</span>
					<p class="font-medium italic">And more!</p>
				</div>
			</div>

			<div
				class="bg-bc-slate-pine mt-6 inline-flex items-center gap-2 self-start rounded-md px-2 py-1 font-medium text-white uppercase"
			>
				<span>Find out more</span>
				<span><ArrowRight /></span>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 grid px-52">
	<h2 class="font-display text-bc-slate-pine text-center text-7xl font-bold tracking-[0.02em]">
		Support Us
	</h2>

	<div class="flex justify-center">
		<p class="mt-4 max-w-[700px] text-center text-xl">
			If you like our work, there are a number of ways you can support us.
		</p>
	</div>

	<div class="mt-12 flex justify-center">
		<div class="grid max-w-[1100px] grid-cols-2 gap-16">
			<div class="relative">
				<enhanced:img
					class="aspect-square w-full object-cover"
					src={image.placeholder.donate}
					alt=""
				/>
				<div class="absolute inset-0 flex flex-col items-center justify-end">
					<div class="text-bc-amber bg-white px-6 py-1">
						<p class="font-display text-4xl font-bold tracking-wide">Donate</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<enhanced:img
					class="aspect-square w-full object-cover"
					src={image.placeholder.volunteer}
					alt=""
				/>
				<div class="absolute inset-0 flex flex-col items-center justify-end">
					<div class="text-bc-amber bg-white px-6 py-1">
						<p class="font-display text-4xl font-bold tracking-wide">Volunteer</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 grid px-52">
	<h2 class="font-display text-bc-slate-pine text-center text-7xl font-bold tracking-[0.02em]">
		Partners & Supporters
	</h2>

	<div class="flex justify-center">
		<p class="mt-4 max-w-[700px] text-center text-xl">
			We are proud to work alongside and receive support from our partners and supporters.
		</p>
	</div>
</section>

<!-- <style>
	.two-tone-text-main-title {
		background: linear-gradient(to top, #d17a22 50%, #b25d17 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style> -->
