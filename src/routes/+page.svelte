<script lang="ts" context="module">
	import { ArrowRight, Play } from 'phosphor-svelte';

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
</script>

<div class="max-w-screen overflow-hidden pb-40">
	<section class="flex max-h-screen flex-col">
		<div class="relative grow">
			<video class="h-full w-full object-cover" loop muted>
				<source src={bannerVideoMp4} type="video/mp4" />
				<source src={bannerVideoWebm} type="video/webm" />
				Your browser does not support the video tag.
			</video>

			<div class="absolute top-0 left-0 z-10 w-full p-4">
				<h1 class="font-display flex flex-col text-4xl font-bold">
					<span class="translate-x-[40px]">The</span>
					<span class="translate-x-[60px] translate-y-[-10px] text-[66px]">Birch</span>
					<span class="translate-x-[20px] translate-y-[-20px]">Collective</span>
				</h1>
			</div>
			<div
				class="from-bc-slate-pine absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent"
			></div>

			<div class="absolute bottom-[100px] left-[150px] z-20 w-full">
				<h2 class="font-display flex flex-col text-6xl font-semibold tracking-wide text-white">
					Connect Through Nature
				</h2>

				<p class="mt-10 text-xl text-white">Start today in Bristol!</p>
				<p class="mt-2 max-w-[690px] text-xl leading-[1.5em] text-white">
					Join in through one of our programmes! They are both free and paid, and range from one-day
					drop-ins to longer adventures.
				</p>

				<div class="mt-10 flex items-center gap-12">
					<!-- <a
						class="bg-my-light-orangey-brown inline-flex items-center gap-4 rounded-full px-6 py-[12px] text-xl tracking-wide text-white uppercase"
						href="/"
					>
						<span>Programmes</span>
						<span
							class="text-bc-amber grid aspect-square h-[34px] w-[34px] place-items-center rounded-full border border-white bg-white text-2xl"
							><ArrowRight weight="bold" /></span
						>
					</a> -->
					<a
						class="font-display relative flex items-center gap-4 text-4xl font-bold tracking-wide text-white"
						href="/"
					>
						<span>Programmes</span>
						<!-- <span class="text-xl"><ArrowRight weight="bold" /></span> -->
						<span
							><enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_black}
								alt=""
							/></span
						>
					</a>

					<button
						class="font-display relative flex items-center gap-2 text-4xl font-bold tracking-wide text-white"
						type="button"
					>
						<span class="text-white">Our Mission</span>
						<enhanced:img class="w-[20px]" src={image.illustration.play_icon_white} alt="" />
						<!-- <span class="text-xl"><Play weight="fill" /></span> -->

						<span
							><enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_black}
								alt=""
							/></span
						>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="px-40 py-40">
		<div class="flex justify-center">
			<div class="flex items-center gap-10">
				<p class="font-display mr-10 text-[200px] leading-none">1</p>

				<div class="flex max-w-[600px] flex-col gap-5">
					<h3 class="font-bebas text-bc-slate-pine text-5xl tracking-wide">Free Programmes</h3>
					<p class="text-lg leading-relaxed">
						Open-access programmes supporting wellbeing, connection, and confidence through
						nature-based activities.
					</p>
				</div>

				<div>
					<enhanced:img
						class="aspect-video max-w-[500px] object-cover"
						src={image.placeholder.chillies}
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- <section class="mt-24 px-40">
		<div class="flex justify-center">
			<div class="flex max-w-[760px] flex-col items-center">
				<p class="mt-4 text-2xl leading-[1.5em]">
					At The Birch Collective, we believe in the power of nature, community, and connection.
					We’re a social enterprise dedicated to helping people aged 16-25 in Bristol and the
					surrounding areas who might be feeling isolated, overwhelmed, or unsure of their place in
					the world. Whether you’re dealing with anxiety, depression, or just looking for a space to
					belong, we’re here to walk alongside you.
				</p>

				<button
					class="border-bc-slate-pine/60 mt-12 flex items-center gap-2 border-b-2 pb-1 text-xl tracking-wide uppercase"
					type="button"
				>
					<span class="text-bc-amber">Watch a video About Us</span>
					<span
						class="text-bc-slate-pine grid aspect-square h-[40px] w-[40px] place-items-center rounded-full p-[6px] text-2xl"
						><Play weight="duotone" /></span
					>
				</button>
			</div>
		</div>
	</section> -->

	<section class="mt-24 px-40 pb-40">
		<div class="">
			<div class="relative inline-block">
				<h2 class="font-display text-5xl font-bold">What We Do</h2>

				<!-- <div
					class="skewed-rectangle bg-bc-slate-pine absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-125 -skew-3"
				></div> -->
			</div>

			<div class="mt-4 grid grid-cols-3 gap-x-6">
				<div class="relative">
					<enhanced:img
						class="mt-4 aspect-[9/12] object-cover"
						src={image.placeholder.stay_calm_and_listen_to_nature}
						alt=""
					/>

					<div
						class="from-bc-slate-pine absolute right-0 bottom-0 left-0 flex h-1/2 justify-center bg-linear-to-t to-transparent"
					>
						<div class="flex flex-col justify-end p-6 pb-8">
							<h3 class="font-oswald text-3xl font-medium tracking-wide text-white">
								Free Programmes
							</h3>

							<div class="mt-5 flex items-end gap-1">
								<div class=" text-xl leading-[1.6em] text-white">
									<p class="font-medium">
										Open-access programmes supporting wellbeing, connection, and confidence through
										nature-based activities.
									</p>
									<p class="mt-2 font-medium">If you're 16-25, click here! They're free!</p>
								</div>
								<span
									class="grid aspect-square h-[45px] w-[45px] place-items-center rounded-full border border-white text-[27px] text-white"
									><ArrowRight weight="bold" /></span
								>
							</div>
						</div>
					</div>
				</div>
				<div class="">
					<enhanced:img
						class="mt-4 aspect-[9/12] object-cover"
						src={image.placeholder.stay_calm_and_listen_to_nature}
						alt=""
					/>
				</div>
				<div class="">
					<enhanced:img
						class="mt-4 aspect-[9/12] object-cover"
						src={image.placeholder.stay_calm_and_listen_to_nature}
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-32 flex justify-center px-52">
		<div>
			<h2 class="font-display text-bc-slate-pine text-center text-[68px] leading-none font-bold">
				Free Programmes For Young People
			</h2>

			<div class="mt-8 flex justify-center">
				<p class="max-w-[770px] text-center text-xl leading-relaxed">
					Open-access programmes supporting wellbeing, connection, and confidence through
					nature-based activities.
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
							A woodland conservation and green skills programme for 18+, supporting hands-on
							learning and employability.
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
</div>

<style>
	.skewed-rectangle {
		clip-path: polygon(
			0% 0%,
			/* top-left */ 100% 0%,
			/* top-right */ 120% 130%,
			/* bottom-right (pushed right & down) */ 0% 100% /* bottom-left */
		);
	}
</style>
