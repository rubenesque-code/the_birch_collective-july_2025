<script lang="ts" context="module">
	import {
		ArrowRight,
		PersonSimpleHike,
		Plant,
		Quotes,
		Resize,
		Tree,
		UsersThree,
		Wind
	} from 'phosphor-svelte';

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

<div class="flex flex-col items-center py-10">
	<h2 class="font-display text-center text-[100px] font-bold">The Birch Collective</h2>

	<h3 class="text-bc-amber max-w-[700px] text-center text-3xl uppercase">
		cultivating purpose, belonging, resilience and relationships with nature
	</h3>
</div>

<div class="mt-20 grid grid-cols-3 gap-10 px-52">
	<div class="relative">
		<enhanced:img
			class="aspect-[9/12] object-cover object-[30%_50%]"
			src={image.placeholder.participant_1}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end bg-gradient-to-t to-transparent p-2"
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
			class="aspect-[9/12] object-cover object-[30%_50%]"
			src={image.placeholder.caregiver_with_partipant_face_to_face}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end bg-gradient-to-t to-transparent p-2"
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
			class="aspect-[9/12] object-cover object-[50%_50%]"
			src={image.placeholder.lying_in_grass}
			alt=""
		/>

		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col justify-end bg-gradient-to-t to-transparent p-2"
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
					<PersonSimpleHike />
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

<!-- <div class="px-44 py-10">
	<div class="flex items-center gap-4"><h3 class="text-2xl font-semibold">What's on</h3></div>

	<div class="mt-6 flex items-center gap-12">
		<a class="group/card relative aspect-[9/13] w-[400px]" href="/fresh-air-thursday">
			<enhanced:img
				class="h-full w-full object-cover object-left"
				src={image.placeholder.james_and_helper_talking_to_participant}
				alt=""
			/>

			<div
				class="bg-bc-amber absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
			>
				<h4
					class="font-fjalla text-bc-black1 font-display text-[32px] font-bold tracking-wide text-white"
				>
					Fresh Air Thursdays
				</h4>

				<div class="flex items-center gap-4">
					<p class="font-montserrat mt-2 text-[15px] font-medium text-white">
						Get stuck in at our weekly meet-up.
					</p>

					<span
						class="border-bc-soft-black group-hover/card:bg-bc-soft-black rounded-full p-1 text-white transition-transform duration-300 ease-in-out group-hover/card:translate-x-[6px] group-hover/card:text-white"
					>
						<ArrowRight />
					</span>
				</div>
			</div>
		</a>
	</div>
</div> -->
