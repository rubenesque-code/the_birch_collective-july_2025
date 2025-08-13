<script lang="ts" context="module">
	import { ArrowCircleRight, ArrowRight, ChatCircle, HandHeart, List } from 'phosphor-svelte';

	import image from '^assets/image';

	import { bannerVideoMp4, bannerVideoWebm } from '^assets/videos';

	// need distinction between paid and free.
	// programmes (for individuals to sign up to); 1:1 mentoring; tailored programs for groups; youth advisory board
	// for young people: group based nature programmes; 1:1 mentoring; youth advisory board; non-official volunteering (as mentor or something like that)?
	// for institution: tailored programs.

	// - linkedin icon in header
	// - wants colour changes on buttons
	// - having videos made for each programme -> land on it
	// - clear cta to sign up
	// - who, what, where, why, when

	// PROGRAMME PAGE.
	// - want google map. if it's big then don't worry.
	// - testimonials
	// - no booking system. just sign up and Birch will send the info.
	//    - sign up -> we'll send an email -> come to first session and see if it's for you.
	//    - some will be reassured by just being accepted and no vetting, etc.
	// - don't want feedback section on each programme page
	// - on form - legal text maybe make clear is legal, and so don't have to read.

	// TODO
	// - body font. Browser font seems good.

	// LANDING PAGE
	// - partners & supporters
	// - images/videos.
	// - other: donate, newsletter,
</script>

<div
	class="bg-bc-logo-black/50 fixed top-4 right-4 z-50 flex flex-col items-center gap-4 rounded-full p-4"
>
	<div class="rounded-full border border-white p-2 text-2xl text-white">
		<List />
	</div>
	<div class="rounded-full border border-white p-2 text-2xl text-white">
		<ChatCircle />
	</div>
	<div class="rounded-full border border-white p-2 text-2xl text-white">
		<HandHeart />
	</div>
</div>

<div class="max-w-screen overflow-hidden pb-40">
	<section class="flex max-h-screen flex-col">
		<div class="relative grow">
			<video class="h-full w-full object-cover" loop muted>
				<source src={bannerVideoMp4} type="video/mp4" />
				<source src={bannerVideoWebm} type="video/webm" />
				Your browser does not support the video tag.
			</video>

			<header class="absolute top-0 left-0 z-10 flex w-full items-start justify-between p-4">
				<div class="flex shrink-0">
					<div class="translate-x-[10px] translate-y-[21px]">
						<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
					</div>

					<h1 class="font-display flex flex-col text-4xl font-bold">
						<span class="translate-x-[20px]">The</span>
						<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
						<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
					</h1>
				</div>

				<!-- <div class="flex items-center gap-4">
					<p
						class="bg-bc-slate-pine rounded-md px-2 py-1 text-lg font-medium tracking-wide text-white"
					>
						Donate
					</p>
					<p
						class="bg-bc-slate-pine rounded-md px-2 py-1 text-lg font-medium tracking-wide text-white"
					>
						Get in Touch
					</p>
					<p
						class="bg-bc-slate-pine rounded-md px-2 py-1 text-lg font-medium tracking-wide text-white"
					>
						About Us
					</p>
					<p
						class="bg-bc-slate-pine rounded-md px-2 py-1 text-lg font-medium tracking-wide text-white"
					>
						Programmes
					</p>
					<p
						class="bg-bc-slate-pine rounded-md px-2 py-1 text-lg font-medium tracking-wide text-white"
					>
						Get Involved
					</p>
				</div> -->
			</header>

			<div
				class="from-bc-slate-pine absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent"
			></div>

			<div class="absolute bottom-[100px] left-[150px] z-20 w-full">
				<h2 class="font-display flex flex-col text-7xl font-semibold tracking-wide text-white">
					Connect Through Nature
				</h2>

				<p class="mt-16 text-xl font-medium text-white">Start today in Bristol!</p>
				<p class="mt-4 max-w-[690px] text-xl leading-[1.5em] font-medium text-white">
					Join in through one of our programmes! They are both free and paid, and range from one-day
					drop-ins to longer adventures.
				</p>

				<div class="mt-10 flex items-center gap-12">
					<button
						class="bg-my-pale-yellow relative flex items-center gap-4 rounded-3xl px-5 py-3 tracking-wide"
						type="button"
					>
						<span class="text-lg font-medium">Get Involved Today</span>
						<span class="text-2xl"><ArrowRight /></span>
					</button>
				</div>

				<!-- <div class="mt-10 flex items-center gap-12">
					<a
						class="font-display relative flex items-center gap-4 text-4xl font-bold tracking-wide text-white"
						href="/"
					>
						<span>Programmes</span>
						<span>
							<enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</span>
					</a>

					<button
						class="font-display relative flex items-center gap-2 text-4xl font-bold tracking-wide text-white"
						type="button"
					>
						<span class="text-white">Our Mission</span>
						<enhanced:img class="w-[20px]" src={image.illustration.play_icon_white} alt="" />

						<span
							><enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_amber}
								alt=""
							/></span
						>
					</button>
				</div> -->
			</div>
		</div>
	</section>

	<section class="relative mt-32 flex justify-center px-40">
		<div
			class="bg-my-pale-yellow absolute -top-1/2 -right-1/2 -z-10 aspect-square w-[80%] -translate-y-1/2 rounded-full"
		></div>

		<div class="flex w-full justify-between">
			<div class="mt-8 w-[600px]">
				<h2 class="font-display text-my-light-orangey-brown text-6xl font-bold">
					Welcome to <span class="">The Birch Collective</span>
				</h2>
				<div class="mt-8">
					<span class="text-lg">
						The Birch Collective believes in the power of nature, community, and connection. We’re a
						social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
						areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
						Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
						we’re here to walk alongside you.
					</span>
				</div>

				<!-- <p class="mt-12 inline-flex items-center gap-2 rounded-md text-black/30">
					<span>Read more about us</span>
					<span><ArrowRight /></span>
				</p> -->
			</div>
			<div class="relative">
				<enhanced:img
					class="w-[700px] rounded-md"
					src={image.placeholder.mission_vid_placeholder}
					alt=""
				/>

				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</div>

				<div class="absolute top-2 right-2">
					<p class="text-[17px] font-medium text-white">The Birch Collective — Our Mission</p>
				</div>
			</div>
		</div>
	</section>

	<!-- <section class="mt-28 flex justify-center">
		<enhanced:img
			class="h-[3px] w-[250px] object-cover"
			src={image.illustration.drawn_line_black}
			alt=""
		/>
	</section> -->

	<section class="relative mt-40 flex justify-center overflow-hidden px-40 pb-20">
		<div class="w-full">
			<h2 class="text-center text-3xl font-bold">What We Offer</h2>

			<div class="mt-4 flex justify-center">
				<p class="max-w-[600px] text-center text-lg">
					We have a range of programmes, from free to paid, and from drop-ins to week-long nature
					camps, that are inclusive and supportive.
				</p>
			</div>

			<div class="mt-20 grid w-full grid-cols-2 justify-between gap-40">
				<div class="relative overflow-visible border-3 border-black p-4">
					<enhanced:img
						class="aspect-square w-full object-cover"
						src={image.placeholder.standing_around_fire}
						alt=""
					/>

					<div
						class="bg-my-light-orangey-brown absolute bottom-0 left-1/2 z-20 w-3/4 -translate-x-1/2 translate-y-[80px] p-8 text-black"
					>
						<h3 class="font-display text-5xl font-bold">Free Programmes</h3>
						<div class="flex items-end gap-4">
							<p class="mt-5 text-lg leading-relaxed">
								If you're 16-25 and interested in nature based activities for wellbeing, click here.
								They're free!
							</p>

							<span class="text-[54px]"><ArrowCircleRight weight="thin" /></span>
						</div>
					</div>
				</div>

				<div class="relative overflow-visible border-3 border-black p-4">
					<enhanced:img
						class="aspect-square w-full object-cover"
						src={image.placeholder.group_photo}
						alt=""
					/>

					<div
						class="bg-my-pale-yellow absolute bottom-0 left-1/2 z-20 w-3/4 -translate-x-1/2 translate-y-[80px] p-8 text-black"
					>
						<h3 class="font-display text-5xl font-bold">Work With Us</h3>
						<div class="flex items-end gap-4">
							<p class="mt-5 text-lg leading-relaxed">
								For young people, organisations, schools, youth groups, and professionals who want
								to bring nature-based learning and wellbeing into their work.
							</p>

							<span class="text-[54px]"><ArrowCircleRight weight="thin" /></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="relative mt-40 flex justify-center overflow-hidden px-40">
		<div>
			<div
				class="bg-bc-pale-sandstone/30 absolute -top-0 -left-1/2 -z-10 aspect-square w-[65%] rounded-full"
			></div>

			<div class="w-full">
				<h2 class="text-center text-3xl font-bold">Our Impact</h2>

				<div class="mt-4 flex justify-center">
					<p class="max-w-[600px] text-center text-lg">
						We aim to have a lasting impact on young peoples' lives. As well as drop-in sessions, we
						offer a long-term path for our participants.
					</p>
				</div>

				<div class="mt-20 grid w-full grid-cols-4 justify-between gap-10">
					<div class="flex flex-col items-center gap-3">
						<div>
							<p class="font-display text-6xl font-bold">
								100<span class="ml-[2px] text-4xl">s</span>
							</p>

							<enhanced:img
								class="h-[4px] w-full object-cover"
								src={image.illustration.line_2_yellow}
								alt=""
							/>
						</div>

						<p class="max-w-[300px] text-center text-[19px] leading-relaxed text-black">
							Of young people supported since 2018
						</p>
					</div>

					<div class="flex flex-col items-center gap-3 rounded-md">
						<div>
							<p class="font-display text-6xl font-bold">
								80<span class="ml-[2px] text-4xl">%</span>
							</p>

							<enhanced:img
								class="h-[3px] w-full object-cover"
								src={image.illustration.line_2_yellow}
								alt=""
							/>
						</div>

						<p class="max-w-[300px] text-center text-lg leading-relaxed text-black/80">
							Have improved mental health and wellbeing
						</p>
					</div>

					<div class="flex flex-col items-center gap-3 rounded-md">
						<div>
							<p class="font-display text-6xl font-bold">
								78<span class="ml-[2px] text-4xl">%</span>
							</p>

							<enhanced:img
								class="h-[3px] w-full object-cover"
								src={image.illustration.line_2_yellow}
								alt=""
							/>
						</div>

						<p class="max-w-[300px] text-center text-lg leading-relaxed text-black/80">
							Have improved improved behaviour for learning
						</p>
					</div>

					<div class="flex flex-col items-center gap-3 rounded-md">
						<div>
							<p class="font-display text-6xl font-bold">
								90<span class="ml-[2px] text-4xl">%</span>
							</p>

							<enhanced:img
								class="h-[3px] w-full object-cover"
								src={image.illustration.line_2_yellow}
								alt=""
							/>
						</div>

						<p class="max-w-[300px] text-center text-lg leading-relaxed text-black/80">
							Have improved social interactions
						</p>
					</div>
				</div>

				<div class="mt-20 flex justify-center">
					<div class="grid grid-cols-2 items-center gap-16">
						<div class="">
							<div class="flex flex-col text-lg">
								<p class="relative flex max-w-[600px]">
									<span
										class="font-display text-my-light-orangey-brown absolute -top-2 -left-1 -translate-x-full text-7xl font-bold"
										>"</span
									>
									<span class="max-w-[440px] text-xl leading-relaxed">
										The young person I work with is delighted with The Birch Collective, and now
										feels more ready to take on life.
									</span>
								</p>
								<div class="mt-4">
									<p class="font-display text-bc-slate-pine text-3xl font-bold">
										- Carol Baskin, Support Worker
									</p>
								</div>
							</div>
						</div>

						<div class="flex justify-center">
							<div class="bg-my-pale-yellow rotate-2 rounded-md p-4">
								<enhanced:img
									class="aspect-square w-[440px] rounded-md object-cover"
									src={image.placeholder.participant_1}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-16 flex justify-center">
				<p class="bg-bc-slate-pine rounded-md px-3 py-2 font-medium text-white">Read more</p>
			</div>
		</div>
	</section>

	<section class="relative mt-40 flex justify-center overflow-hidden px-40 pb-40">
		<div>
			<div class="w-full">
				<h2 class="text-center text-3xl font-bold">Other Ways To Get Involved</h2>

				<!-- <div class="mt-4 flex justify-center">
					<p class="max-w-[600px] text-center text-lg">
						We aim to have a lasting impact on young peoples' lives. As well as drop-in sessions, we
						offer a long-term path for our participants.
					</p>
				</div> -->

				<div class="mt-12 grid w-full grid-cols-3 justify-between gap-10">
					<div>
						<div class="relative">
							<enhanced:img src={image.placeholder.caregiver_with_partipant_face_to_face} alt="" />

							<div
								class="bg-my-light-orangey-brown absolute bottom-0 left-1/2 z-20 w-3/4 -translate-x-1/2 translate-y-1/2 p-8 text-black"
							>
								<h3 class="font-display text-4xl font-bold">Help Out at a Programme</h3>
								<div class="flex items-end gap-4">
									<p class="mt-5 text-lg leading-relaxed">
										If you want to help out at one of our programmes, get in touch!
									</p>

									<span class="text-[44px]"><ArrowCircleRight weight="thin" /></span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class="relative">
							<enhanced:img src={image.placeholder.stay_calm_and_listen_to_nature} alt="" />

							<div
								class="bg-bc-slate-pine absolute bottom-0 left-1/2 z-20 w-3/4 -translate-x-1/2 translate-y-1/2 p-8 text-white"
							>
								<h3 class="font-display text-4xl font-bold">Voluntary Roles</h3>
								<div class="flex items-end gap-4">
									<p class="mt-5 text-lg leading-relaxed">
										These are longer term and can be excellent work experience!
									</p>

									<span class="text-[44px]"><ArrowCircleRight weight="thin" /></span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class="relative">
							<enhanced:img src={image.placeholder.chillies} alt="" />

							<div
								class="bg-my-pale-yellow absolute bottom-0 left-1/2 z-20 w-3/4 -translate-x-1/2 translate-y-1/2 p-8"
							>
								<h3 class="font-display text-4xl font-bold">Donate</h3>
								<div class="flex items-end gap-4">
									<p class="mt-5 text-lg leading-relaxed">
										We appreciate any donation, no matter how small!
									</p>

									<span class="text-[44px]"><ArrowCircleRight weight="thin" /></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- <style>
	.two-tone-text-main-title {
		background: linear-gradient(to bottom, #e18a2f 50%, #e6b777 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style> -->
