<script lang="ts" context="module">
	import { ArrowCircleRight, ArrowRight, Flower } from 'phosphor-svelte';

	import image from '^assets/image';

	import { bannerVideoMp4 } from '^assets/videos';
	import { internalRoute } from '^constants';
	import { updateSiteState } from '^state';

	import { OurMissionModal } from '^components/~sections';

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
	// - a section with nice nature bg image.
	// - a quote or 2

	// LANDING PAGE
	// - other: newsletter,
	// - our impact - what they want??

	const introductoryBullets = [
		'We work alongside you, young adults, to empower and support your transition into adulthood',
		"We want you to unlock your potential to engage fully with life, and to respond resiliently to life's challenges",
		'We believe that developing connections with the natural world gives you a sense of belonging',
		'We offer you the chance to be part of an inclusive community where you can explore'
	];

	const offers = [
		{
			link: internalRoute['free-programmes'],
			imgSrc: image.placeholder.banner_4,
			imgAlt: 'Free programmes banner',
			title: 'Free Programmes',
			text: "If you're 16-25 and interested in nature based activities for wellbeing, click here. They're free!"
		},
		{
			link: internalRoute['paid-services'],
			imgSrc: image.placeholder.banner_15,
			imgAlt: 'Paid services banner',
			title: 'Paid For Services',
			text: 'For young people, organisations, schools, youth groups, and professionals who want to bring nature-based learning and wellbeing into their work.'
		}
	];

	const impact = [
		'96% gained confidence and practical skills through our nature-based programmes.',
		'91% reported improved mental and physical wellbeing after taking part.',
		'90% strengthened their social connections — with many moving on into education, training, or employment.'
	];

	const support = [
		{
			title: 'Volunteer',
			link: '/volunteer',
			imgSrc: image.placeholder.axe_chopping,
			imgAlt: 'Person chopping wood during an outdoor volunteer activity',
			text: 'Be a part of the team. It can be excellent work experience!'
		},
		{
			title: 'Make a Donation',
			link: '/donate',
			imgSrc: image.placeholder.chillies,
			imgAlt: 'Close-up of chillies',
			text: 'Any donation is appreciated!'
		}
	];
</script>

<OurMissionModal
	onClickCloseShowreel={() => {
		updateSiteState.showreel.setIsOpen(false);
	}}
/>

<div class="max-w-screen overflow-hidden pb-40">
	<section class="flex h-screen flex-col md:max-h-screen">
		<div class="relative h-screen w-screen grow">
			<video class="absolute top-0 left-0 h-full w-full object-cover" loop muted>
				<source src={bannerVideoMp4} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				class="from-bc-slate-pine 3xl:h-2/3 absolute bottom-0 left-0 z-10 h-3/4 w-full bg-gradient-to-t to-transparent"
			></div>

			<div class="3xl:px-20 4xl:px-40 absolute bottom-[40px] z-20 w-full p-4 lg:px-8 2xl:px-12">
				<h2
					class="font-display xs-sm:text-[62px] xxs:text-6xl flex flex-col text-[56px] leading-[1.1em] font-semibold tracking-wide text-white sm:max-w-[450px] lg:text-7xl"
				>
					Connect Through Nature
				</h2>

				<p class="mt-6 font-medium text-white sm:mt-8 lg:mt-10">Start today in Bristol!</p>
				<p class="mt-4 max-w-[600px] leading-[1.5em] font-medium text-white">
					Join in through one of our programmes! They're both free and paid, and range from one-day
					drop-ins to longer adventures.
				</p>

				<div class="xs:mt-10 mt-8">
					<button
						class="bg-my-pale-yellow xs-sm:px-5 xs-sm:py-[10px] relative flex items-center gap-4 rounded-3xl px-3 py-2 tracking-wide"
						type="button"
					>
						<span class="xs-sm:text-lg text-[17px] font-medium">Get Involved Today</span>
						<span class="xs-sm:text-2xl text-xl"><ArrowRight /></span>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section
		class="xs-sm:px-6 xs-sm:mt-14 3xl:mt-32 3xl:px-20 4xl:px-40 relative mt-10 flex justify-center px-4 lg:px-8 xl:mt-24 2xl:px-12"
	>
		<div
			class="bg-my-pale-yellow 3xl:-top-1/2 3xl:-right-1/2 3xl:-translate-y-1/2 absolute top-0 right-0 -z-10 aspect-square w-[80%] translate-x-1/2 -translate-y-1/2 rounded-full"
		></div>

		<div class="flex w-full flex-col justify-between gap-x-12 gap-y-12 xl:flex-row">
			<div class="w-full xl:max-w-[550px] 2xl:max-w-[640px]">
				<h2
					class="font-display text-bc-amber xs-sm:text-[52px] text-[48px] leading-[1.15em] font-bold sm:text-6xl"
				>
					Welcome to <span class="">The Birch Collective</span>
				</h2>
				<p class="xs-sm:mt-8 mt-6">
					<span class="text-bc-logo-black xs-sm:text-xl text-lg leading-[1.45em]">
						The Birch Collective believes in the power of nature, community, and connection. We’re a
						social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
						areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
						Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
						we’re here to walk alongside you.
					</span>
				</p>
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="xs-sm:aspect-[4/3] md-lg:aspect-video relative aspect-square cursor-pointer md:aspect-[5/3]"
				on:click={() => {
					updateSiteState.showreel.setIsOpen(true);
				}}
			>
				<enhanced:img
					class="3xl:w-[700px] h-full w-full max-w-full rounded-md object-cover object-left"
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

	<section
		class="xs-sm:mt-20 3xl:mt-36 3xl:px-20 4xl:px-40 relative mt-16 flex justify-center px-4 md:px-6 lg:px-8 xl:mt-28 2xl:px-12"
	>
		<div class="w-full">
			<h2
				class="text-bc-slate-pine font-display xs-sm:text-[50px] text-[46px] leading-[1.15em] font-bold md:text-center xl:text-[56px]"
			>
				Cultivating Purpose, Belonging & Resilience
			</h2>

			<div class="flex justify-center">
				<div class="mt-6 flex w-full flex-col gap-3 md:mt-8 md:max-w-[600px] md:items-center">
					{#each introductoryBullets as text}
						<p class="flex items-center gap-4">
							<span class="text-bc-amber/50 relative inline-block">
								<Flower weight="fill" />

								<span
									class="bg-bc-amber/50 absolute top-1/2 left-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2"
								></span>
							</span>
							<span
								class="decoration-bc-amber/30 leading-relaxed text-black/90 underline underline-offset-2"
							>
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>

			<div class="mt-12 flex justify-center">
				<a
					class="bg-bc-slate-pine/70 xs-sm:px-5 xs-sm:py-3 relative flex items-center gap-4 rounded-3xl px-3 py-2 tracking-wide text-white"
					href={internalRoute['about-us']}
				>
					<span class="xs-sm:text-lg text-[17px] font-medium">Read more</span>
					<span class="xs-sm:text-2xl text-xl"><ArrowRight /></span>
				</a>
			</div>
		</div>
	</section>

	<section class="section-standard">
		<div class="w-full">
			<div class="relative inline-block flex-col items-start">
				<h2 class="section-title">What We Offer</h2>

				<enhanced:img
					class="absolute bottom-1 h-[2px] w-full opacity-70"
					src={image.illustration.drawn_line_black}
				/>
			</div>

			<div
				class="3xl:gap-x-40 mt-8 flex w-full flex-col justify-between gap-x-20 gap-y-16 xl:flex-row"
			>
				{#each offers as offer}
					<a
						class="group/tile focus:ring-bc-amber 3xl:w-[700px] relative block focus:ring-2 focus:outline-none"
						href={offer.link}
						aria-label={offer.title}
					>
						<div class="relative">
							<enhanced:img
								class="xs-sm:aspect-[4/3] md-:aspect-video aspect-square rounded-sm object-cover md:aspect-[5/3]"
								src={offer.imgSrc}
								alt={offer.imgAlt}
							/>

							<div
								class="from-bc-slate-pine/80 absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-gradient-to-t to-transparent p-2 pb-6 tracking-wide xl:p-4"
							>
								<h3 class="card-title text-white">
									{offer.title}
								</h3>
							</div>
						</div>

						<div class="xs-sm:mt-4 mt-3 pl-2 xl:pl-4">
							<p class="max-w-[640px] leading-relaxed xl:max-w-[500px]">
								{offer.text}
							</p>

							<span
								class="text-bc-slate-pine xs-sm:text-3xl mt-3 inline-block text-[26px] sm:text-4xl"
							>
								<ArrowCircleRight />
							</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="section-standard">
		<div class="w-full">
			<h2
				class="text-bc-slate-pine font-display xs-sm:text-[50px] text-[46px] leading-[1.15em] font-bold md:text-center xl:text-[56px]"
			>
				Our Impact
			</h2>

			<div class="flex justify-center">
				<div class="w-full md:max-w-[600px]">
					<p class="md-lg:mt-5 text-bc-logo-black/80 mt-3 leading-relaxed sm:mt-4">
						Of the 192 unique participants we worked with in 2024:
					</p>

					<div class="mt-6 flex flex-col gap-3 md:mt-8 md:items-center">
						{#each impact as text}
							<p class="flex items-center gap-4">
								<span class="text-bc-amber/50 relative inline-block">
									<Flower weight="fill" />

									<span
										class="bg-bc-amber/50 absolute top-1/2 left-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2"
									></span>
								</span>
								<span
									class="decoration-bc-amber/30 leading-relaxed text-black/90 underline underline-offset-2"
								>
									{text}
								</span>
							</p>
						{/each}
					</div>
				</div>
			</div>

			<div class="mt-12 flex justify-center">
				<a
					class="bg-bc-slate-pine/70 xs-sm:px-5 xs-sm:py-3 relative flex items-center gap-4 rounded-3xl px-3 py-2 tracking-wide text-white"
					href={internalRoute['about-us']}
				>
					<span class="xs-sm:text-lg text-[17px] font-medium">Read more</span>
					<span class="xs-sm:text-2xl text-xl"><ArrowRight /></span>
				</a>
			</div>
		</div>
	</section>

	<section class="section-standard">
		<div class="w-full">
			<div class="relative inline-block flex-col items-start">
				<h2 class="section-title">Support Us</h2>

				<enhanced:img
					class="absolute bottom-1 h-[2px] w-full opacity-70"
					src={image.illustration.drawn_line_black}
				/>
			</div>

			<div
				class="3xl:gap-x-40 mt-8 flex w-full flex-col justify-between gap-x-20 gap-y-16 xl:flex-row"
			>
				{#each support as item}
					<a
						class="group/tile focus:ring-bc-amber 3xl:w-[700px] relative block focus:ring-2 focus:outline-none"
						href={item.link}
						aria-label={item.title}
					>
						<div class="relative">
							<enhanced:img
								class="xs-sm:aspect-[4/3] md-lg:aspect-video aspect-square rounded-sm object-cover md:aspect-[5/3]"
								src={item.imgSrc}
								alt={item.imgAlt}
							/>

							<div
								class="from-bc-slate-pine/80 absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-gradient-to-t to-transparent p-4 pb-6 tracking-wide"
							>
								<div class="flex w-full items-center justify-between gap-4">
									<h3 class="card-title text-white">
										{item.title}
									</h3>

									<span class="xs-sm:translate-y-[6px] text-2xl text-white sm:text-3xl">
										<ArrowRight weight="bold" />
									</span>
								</div>
							</div>
						</div>

						<div class="xs-sm:mt-4 mt-3 flex flex-col items-start pl-2 xl:pl-4">
							<p class="max-w-[640px] leading-relaxed">
								{item.text}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- <section class="relative mt-36 flex justify-center px-40">
		<div>
			<h2 class="font-display text-bc-slate-pine text-[52px] leading-[1.25em] font-bold">
				Partners & Supporters
			</h2>

			<div class="mt-6"><PartnersAndSupportersCarousel /></div>
		</div>
	</section> -->
</div>
