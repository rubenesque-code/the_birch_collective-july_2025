<script lang="ts" context="module">
	import { Basket, Footprints, Plant, Quotes, Tree, UsersThree, Wind } from 'phosphor-svelte';

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
	<h2 class="font-display two-tone-text-main-title text-center text-[140px] leading-none font-bold">
		The Birch Collective
	</h2>

	<!-- <h3 class="text-bc-amber max-w-[700px] text-center text-3xl uppercase">
		cultivating purpose, belonging, resilience and relationships with nature
	</h3> -->
</div>

<div class="mt-16 grid grid-cols-3 gap-10 px-52">
	<div class="relative">
		<enhanced:img
			class="aspect-[9/10] rounded-md object-cover object-[30%_50%]"
			src={image.placeholder.participant_1}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end rounded-b-md bg-gradient-to-t to-transparent p-2"
		>
			<p class="flex flex-col text-center text-[22px]">
				<span class="text-bc-amber scale-y-[-1] rotate-180 self-start"
					><Quotes weight="fill" /></span
				>
				<span class="text-white">I feel I've left feeling more accepting of myself.</span>
				<span class="text-bc-amber self-end"><Quotes weight="fill" /></span>
			</p>
		</div>
	</div>

	<div class="relative">
		<enhanced:img
			class="aspect-[9/10] rounded-md object-cover object-[30%_50%]"
			src={image.placeholder.caregiver_with_partipant_face_to_face}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end rounded-b-md bg-gradient-to-t to-transparent p-2"
		>
			<p class="flex flex-col text-center text-[22px]">
				<span class="text-bc-amber scale-y-[-1] rotate-180 self-start"
					><Quotes weight="fill" /></span
				>
				<span class="text-white"
					>The Birch Collective has been a transformative experience, both for the individuals I
					care for and for myself as a caregiver.</span
				>
				<span class="text-bc-amber self-end"><Quotes weight="fill" /></span>
			</p>
		</div>
	</div>

	<div class="relative">
		<enhanced:img
			class="aspect-[9/10] rounded-md object-cover object-[50%_50%]"
			src={image.placeholder.lying_in_grass}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end rounded-b-md bg-gradient-to-t to-transparent p-2"
		>
			<p class="flex flex-col text-center text-[22px]">
				<span class="text-bc-amber scale-y-[-1] rotate-180 self-start"
					><Quotes weight="fill" /></span
				>
				<span class="text-white"
					>The time I got to spend with others on the camp was just something so magical and
					wonderful and beautiful.</span
				>
				<span class="text-bc-amber self-end"><Quotes weight="fill" /></span>
			</p>
		</div>
	</div>
</div>

<section class="mt-32">
	<h2 class="font-display text-bc-slate-pine text-center text-6xl font-bold">What We Do</h2>

	<div class="mt-8 flex justify-center">
		<div class="flex max-w-[700px] flex-col gap-4">
			<div class="flex items-center gap-4 text-xl">
				<div class="text-bc-amber text-4xl">
					<Footprints />
				</div>
				<p>We work alongside you to empower and support your transition into adulthood.</p>
			</div>
			<div class="flex items-center gap-4 text-xl">
				<div class="text-bc-amber text-4xl">
					<Wind />
				</div>
				<p>
					We want you to unlock your potential to engage fully with life, and to respond resiliently
					to life's challenges.
				</p>
			</div>
			<div class="flex items-center gap-4 text-xl">
				<div class="text-bc-amber text-4xl">
					<Tree />
				</div>
				<p>
					We believe that developing connections with the natural world gives you a sense of
					belonging, and helps you find purpose in life.
				</p>
			</div>
			<div class="flex items-center gap-4 text-xl">
				<div class="text-bc-amber text-4xl">
					<UsersThree />
				</div>
				<p>
					We offer you the chance to be part of an inclusive community where you can explore new
					found skills and interests.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mt-20 grid px-52">
	<h2 class="font-display text-bc-slate-pine text-center text-6xl font-bold">Programmes</h2>

	<div class="flex justify-center">
		<p class="mt-4 max-w-[700px] text-center text-xl">
			We have a range of offers to suit your needs, from online courses to weekly hang outs and
			residential programmes.
		</p>
	</div>

	<div class="mt-8 grid grid-cols-3 gap-10">
		<div>
			<div>
				<enhanced:img class="aspect-video object-cover" src={image.placeholder.chillies} alt="" />
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-4xl font-bold tracking-wide">
				Fresh Air Thursday
			</h4>
			<p class="mt-4 text-lg">
				A free weekly group for 16-25 year olds, Just a 5-minute walk form St George's Park!
			</p>

			<div class="mt-4 text-lg">
				<p>Includes:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p>Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p>Nature based craft</p>
				</div>
			</div>
		</div>

		<div>
			<div>
				<enhanced:img
					class="aspect-video object-cover"
					src={image.placeholder.seeding_change}
					alt=""
				/>
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-4xl font-bold tracking-wide">
				Seeding Change
			</h4>
			<p class="mt-4 text-lg">
				A FREE camp for 18–25-year-olds who are feeling low, unmotivated, or ready for a fresh start
				— connect with nature, yourself, and others, just 35 minutes from Bristol.
			</p>

			<div class="mt-4 text-lg">
				<p>This programme involves:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p>Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p>Nature based craft</p>
				</div>
			</div>
		</div>

		<div>
			<div>
				<enhanced:img
					class="aspect-video object-cover"
					src={image.placeholder.therapeutic_forest_school}
					alt=""
				/>
			</div>
			<h4 class="font-display text-bc-amber mt-4 text-4xl font-bold tracking-wide">
				Therapeutic Forest School
			</h4>
			<p class="mt-4 text-lg">
				Tailored programs for specific groups, co-designed with partner organisations.
			</p>

			<div class="mt-4 text-lg">
				<p>This programme involves:</p>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Plant />
					</span>
					<p>Herb growing</p>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<span class="text-bc-slate-pine">
						<Basket />
					</span>
					<p>Nature based craft</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-20 grid px-52">
	<h2 class="font-display text-bc-slate-pine text-center text-6xl font-bold">Support Us</h2>

	<div class="flex justify-center">
		<p class="mt-4 max-w-[700px] text-center text-xl">
			If you like our work, there are a number of ways you can support us.
		</p>
	</div>

	<div class="flex justify-center">
		<div class="mt-8 grid max-w-[1100px] grid-cols-2 gap-16">
			<div class="relative">
				<enhanced:img
					class="aspect-square w-full object-cover"
					src={image.placeholder.donate}
					alt=""
				/>
				<div class="absolute inset-0 flex flex-col items-start justify-end">
					<div class="bg-bc-slate-pine px-6 py-3 text-white">
						<p class="font-display text-3xl font-bold">Donate</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<enhanced:img
					class="aspect-square w-full object-cover"
					src={image.placeholder.volunteer}
					alt=""
				/>
				<div class="absolute inset-0 flex flex-col items-start justify-end">
					<div class="bg-bc-slate-pine px-6 py-3 text-white">
						<p class="font-display text-3xl font-bold">Volunteer</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.two-tone-text-main-title {
		background: linear-gradient(to top, #d17a22 50%, #b25d17 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style>
