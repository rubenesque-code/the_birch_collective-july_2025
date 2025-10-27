<script lang="ts" module>
	import { Circle, Download, Flower } from 'phosphor-svelte';

	import { seeding_change_intro, seeding_change_intro_still } from '^assets/videos';
	import {
		benefits,
		details,
		payWhatYouCan,
		whatToExpectSection,
		whyJoinUsSection
	} from '^content/seeding-change';

	import {
		photo_album_1,
		photo_album_2,
		photo_album_3,
		photo_album_4,
		photo_album_5,
		photo_album_6,
		photo_album_7,
		photo_album_8,
		photo_album_9
	} from '^assets/images/programmes/seeding-change';
	import { Video } from '^components';
	import { ContentSectionContainer } from '^components/containers';
	import { HeaderSignUpButton } from '^components/~pages-by-type/free-programme';
	import { ImageHeader } from '^components/~pages-by-route/programme';
	import { ImageGalleryDialog } from '^components/~sections';

	const galleryImages = [
		[
			{ src: photo_album_1, alt: '' },
			{ src: photo_album_2, alt: '' },
			{ src: photo_album_3, alt: '' },
			{ src: photo_album_4, alt: '' },
			{ src: photo_album_9, alt: '' }
		],
		[
			{ src: photo_album_5, alt: '' },
			{ src: photo_album_6, alt: '' },
			{ src: photo_album_7, alt: '' },
			{ src: photo_album_8, alt: '' }
		]
	];
</script>

<script lang="ts">
	let playIntro = false;
	let signUpFormIsOpen = false;
	let galleryIsOpen = $state(false);
</script>

<!-- <SignUpFormModal bind:isOpen={signUpFormIsOpen} /> -->

<ImageGalleryDialog
	bind:isOpen={galleryIsOpen}
	images={galleryImages.flat()}
	title="Images from <span class='text-bc-amber italic'>Seeding Change</span>"
/>

<div class="relative max-w-screen overflow-hidden pb-40">
	<ImageHeader
		heading="Seeding Change: Plant your future"
		lead={[
			'A FREE camp for 18–25-year-olds who are feeling low, unmotivated, or ready for a fresh start — connect with nature, yourself, and others, just 35 minutes from Bristol.'
		]}
		align="center-left"
		headingColour="yellow"
	>
		<div class="4xl:mt-12 mt-8">
			<HeaderSignUpButton bind:formIsOpen={signUpFormIsOpen} text="Sign Ups are now closed" />
		</div>
	</ImageHeader>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<p class="leading-relaxed">
				Seeding Change is a free or pay-what-you-can programme for 18–25-year-olds in Bristol who
				want to feel more connected, confident, and inspired. Over 7 months, you’ll join two
				seasonal camps and monthly evening sessions to explore nature, learn new skills, and reflect
				on what matters to you. Whether you're feeling stuck, stressed, or simply ready for a
				change, this is a chance to pause, grow, and discover your next steps—supported by a warm
				and welcoming community.
			</p>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md">
		<ContentSectionContainer type="text">
			<div class="4xl:gap-3 flex flex-col gap-4 md:gap-[8px]">
				{#each [{ title: 'Dates', text: 'First 2 night Camp: 5th - 7th September, Second 3 night Camp: 2nd - 5th April with 5 evening Meet-ups in Aug, Oct, Dec, Feb & March over 7 months., Participation needed throughout.' }, { title: 'Who for?', text: '18 - 25 year olds in Bristol' }, { title: 'Where', text: 'A beautiful location in wales 35 minutes from Bristol' }, { title: 'Cost', text: 'Ranges - free and pay what you can' }] as item}
					<p class="info-line">
						<span class="info-title">{item.title}:</span>
						<span class="info-text">{item.text}</span>
					</p>
				{/each}
			</div>

			<div class="mt-6">
				<a
					class="text-bc-logo-black/50 flex items-center gap-2 text-base"
					href="https://drive.google.com/file/d/1Jvi9YNXeQ-szYOVZTjUiFIW8jSOX7S7d/view?usp=sharing"
					target="_blank"
				>
					<span>
						<Download />
					</span>
					<span>Download information pack</span></a
				>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md relative">
		<ContentSectionContainer type="video">
			<Video
				title="Seeding Change — An Intro"
				poster={seeding_change_intro_still}
				posterAlt=""
				videoSrc={seeding_change_intro}
				ariaLabel=""
				bind:isOpen={playIntro}
				titlePlacement="top"
			/>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Details</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">What is Seeding Change</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each details as text}
						<p class="flex items-center gap-3">
							<span class="text-bc-amber/50 relative inline-block">
								<Flower weight="fill" />

								<span
									class="bg-bc-amber/50 absolute top-1/2 left-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2"
								></span>
							</span>
							<span class="decoration-bc-amber/30 leading-[1.6em] text-black/90 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Activities</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">What To Expect</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each whatToExpectSection as text}
						<p class="flex items-center gap-3">
							<span class="text-bc-amber/50 relative inline-block">
								<Flower weight="fill" />

								<span
									class="bg-bc-amber/50 absolute top-1/2 left-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2"
								></span>
							</span>
							<span class="decoration-bc-amber/30 leading-[1.6em] text-black/90 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Benefits</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">What You'll Get From This Journey</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each benefits as text}
						<p class="flex items-center gap-3">
							<span class="text-bc-amber/50 relative inline-block">
								<Flower weight="fill" />

								<span
									class="bg-bc-amber/50 absolute top-1/2 left-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2"
								></span>
							</span>
							<span class="decoration-bc-amber/30 leading-[1.6em] text-black/90 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Why join us</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">This Is Suitable For You If You</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each whyJoinUsSection as { text, symbol }}
						<p class="flex items-center gap-3">
							<span>{symbol}</span>
							<span class="leading-[1.6em] text-black/90 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">The Costs</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">Pay What You Can — How It Works</h4>

			<div class="mt-8">
				<p class="w-full leading-relaxed">
					The true cost of a place on Seeding Change is £750 per person. The cost reflects:
				</p>

				<div class="mt-4 flex flex-col gap-4 leading-relaxed">
					<div class="flex items-center gap-3">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Four trained facilitators (1:3 ratio)</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>A camp chef and all meals/snacks</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Return minibus travel from Bristol</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Access to all equipment and kit</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>
							27 acres of wild woodland at Botany Bay Activity Centre We’ve been generously funded
							to make this programme free or affordable to anyone who needs it. But if you’re in a
							position to contribute something, your donation helps us keep running camps in future
							for people who might have a little less
						</p>
					</div>
				</div>
			</div>

			<div class="mt-8">
				<div class="grid gap-y-8">
					{#each payWhatYouCan as { title, cost, text }}
						<div class="basis-full">
							<div class="sub-heading-sm flex items-center gap-2">
								<h4>{title}</h4>
								-
								<p>£{cost}</p>
							</div>

							<div class="mt-4 flex flex-col gap-4">
								{#each text as item}
									<div class="flex items-center gap-2">
										<span class="text-bc-amber/30 text-[10px]">
											<Circle weight="fill" />
										</span>
										<p>{item}</p>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg flex justify-center">
		<div class="section-x-padding 4xl:max-w-[1600px] box-content w-full max-w-[1200px]">
			<div class="relative">
				<p class="4xl:text-lg text-right text-base text-black/70">
					Images from <span class="text-bc-amber font-medium italic">Seeding Change</span>
				</p>

				<div class="relative mt-1">
					<div
						class="xs:h-[calc(500px+12px)] 4xl:h-[calc(800px+12px)] relative h-[calc(440px+12px)] sm:h-[calc(600px+12px)]"
						onclick={() => (galleryIsOpen = true)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								galleryIsOpen = true;
							}
						}}
						role="button"
						tabindex="0"
						aria-label="Open image gallery"
					>
						<div class="absolute top-0 left-0 flex h-full w-full flex-col gap-3 overflow-hidden">
							{#each galleryImages as row, i}
								<div class="image-gallery-row-container">
									{#each row as item}
										<div class="h-full" style:aspect-ratio={item.src.img.w / item.src.img.h}>
											<enhanced:img
												class="h-full w-full cursor-pointer"
												src={item.src}
												alt={item.alt}
											/>
										</div>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Info</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">More Info</h4>

			<div class="after-sub-heading-lg-mt">
				<a
					class="flex items-center gap-2 text-base"
					href="https://drive.google.com/file/d/1Jvi9YNXeQ-szYOVZTjUiFIW8jSOX7S7d/view?usp=sharing"
					target="_blank"
				>
					<span>
						<Download />
					</span>
					<span>Download our information pack</span></a
				>
			</div>
		</ContentSectionContainer>
	</section>
</div>

<style>
	.section-mt-xl {
		@apply mt-12 md:mt-20;
	}
	.section-mt-lg {
		@apply xs-sm:mt-14 4xl:mt-24 mt-10;
	}
	.section-mt-md {
		@apply xs-sm:mt-7 4xl:mt-16 mt-5;
	}

	.info-line {
		@apply 4xl:gap-2 flex flex-col gap-[2px] sm:gap-1 md:flex-row md:items-center;
	}
	.info-title {
		@apply font-display text-bc-amber 4xl:text-3xl text-[25px] font-bold capitalize;
	}
	.info-text {
		@apply 4xl:text-[23px] text-base text-black/90 uppercase md:text-[19px];
	}

	.heading-sm {
		@apply text-my-grey-1 4xl:text-lg text-[16px] font-medium tracking-wide uppercase;
	}
	.sub-heading-lg {
		@apply text-bc-slate-pine font-display 4xl:text-[48px] text-[40px] leading-[1.25em] font-bold capitalize;
	}
	.sub-heading-sm {
		@apply text-bc-amber font-display 4xl:text-[36px] text-[32px] leading-[1.25em] font-bold capitalize;
	}
	.after-heading-sm-mt {
		@apply mt-3;
	}
	.after-sub-heading-lg-mt {
		@apply mt-6;
	}

	.image-gallery-row-container {
		@apply xs:h-[250px] 4xl:h-[400px] flex h-[220px] w-full gap-3 sm:h-[300px];
	}
</style>
