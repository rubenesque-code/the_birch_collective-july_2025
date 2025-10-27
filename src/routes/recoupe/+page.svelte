<script lang="ts" module>
	import { ArrowUpRight, MagnifyingGlassPlus } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		location_map,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';
	import {
		recoupe_intro,
		recoupe_participant_still,
		recoupe_participant_testimonial
	} from '^assets/videos';
	import { whatToExpectSection, whyJoinUsSection } from '^content/recoupe';

	import { Video } from '^components';
	import { ContentSectionContainer } from '^components/containers';
	import { HeaderSignUpButton, ImageDialog } from '^components/~pages-by-type/free-programme';
	import { ImageHeader } from '^components/~pages-by-route/programme';
	import { ImageGalleryDialog, SignUpFormModal } from '^components/~sections';

	const galleryImages = [
		[
			{ src: image.placeholder.caregiver_with_partipant_face_to_face, alt: '' },
			{ src: garden_shed_from_outside, alt: '' },
			{ src: participant_woman_glasses, alt: '' },
			{ src: group_and_facilitators_sitting_round_fireplace, alt: '' }
		],
		[
			{ src: image.placeholder.axe_chopping, alt: '' },
			{ src: image.placeholder.chillies, alt: '' },
			{ src: james_and_participants_peace_sign, alt: '' },
			{ src: indoor_workbench, alt: '' }
		]
	];
</script>

<script lang="ts">
	let playIntro = $state(false);
	let playTestimonial = $state(false);
	let showLocationMap = $state(false);
	let signUpFormIsOpen = $state(false);
	let galleryIsOpen = $state(false);
</script>

<ImageGalleryDialog
	bind:isOpen={galleryIsOpen}
	images={galleryImages.flat()}
	title="Images from <span class='text-bc-amber italic'>Recoupe</span>"
/>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<ImageDialog
	bind:isOpen={showLocationMap}
	imgSrc={location_map}
	title="How to get to <span class='text-bc-amber italic'>Recoupe</span>"
/>

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader
		heading="Recoupe: Working Woods"
		lead={['A weekly woodland sessions using traditional skills in Troopers Hill Woods']}
		align="center-left"
		headingColour="yellow"
	>
		<div class="4xl:mt-12 mt-8">
			<HeaderSignUpButton bind:formIsOpen={signUpFormIsOpen} />
		</div>
	</ImageHeader>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<p class="leading-relaxed">
				Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods.
				Our focus is to work sensitively with the land to create a thriving and diverse working
				woodland. We will mainly use hand tools and apply traditional woodland management techniques
				such as coppicing, charcoal burning, and hedge laying. This allows us to produce local
				products like: Beanpoles, pea sticks, Charcoal and Materials for traditional crafts,
				ensuring all parts of the tree are utilised.
			</p>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md">
		<ContentSectionContainer variant="text">
			<div class="4xl:gap-3 flex flex-col gap-4 md:gap-[8px]">
				{#each [{ title: 'currently running from', text: 'March 2025 - March 2026' }, { title: 'When', text: 'Tuesdays, 1pm — 5pm' }, { title: 'Age Group', text: 'anyone aged 18+' }, { title: 'Cost', text: 'free but booking is essential!' }] as item}
					<p class="info-line">
						<span class="info-title">{item.title}:</span>
						<span class="info-text">{item.text}</span>
					</p>
				{/each}

				<div class="flex flex-col">
					<p class="info-title">Location:</p>

					<div class="gap-4 md:mt-2 md:flex">
						<div
							class="border-my-grey-3/50 relative mt-1 max-w-[230px] cursor-pointer rounded-lg border-[4px] sm:max-w-[300px]"
							role="button"
							tabindex="0"
							aria-label="Show location map"
							onclick={() => (showLocationMap = true)}
							onkeydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									showLocationMap = true;
								}
							}}
						>
							<enhanced:img class="aspect-[5/3] object-cover" src={location_map} alt="" />

							<p
								class="text-bc-logo-black/40 4xl:text-base absolute right-1 bottom-1 flex items-center gap-1 text-sm"
							>
								<span>Click to </span>
								<span><MagnifyingGlassPlus weight="light" /></span>
							</p>
						</div>

						<div class="relative mt-3">
							<p class="info-text">
								Meet at Strawberry Lane Allotments to walk together to Troopers Hill Woods
							</p>

							<a
								class="bottom-0 left-0 mt-1 flex items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30 sm:mt-2"
								href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
								target="_blank"><span>See on google maps</span><span><ArrowUpRight /></span></a
							>
						</div>
					</div>
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-xl relative">
		<ContentSectionContainer variant="video">
			<Video
				title="Recoupe — An Intro"
				poster={image.placeholder.banner_1}
				posterAlt=""
				videoSrc={recoupe_intro}
				ariaLabel=""
				bind:isOpen={playIntro}
				titlePlacement="top"
			/>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">What To Expect</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text }}
						<div>
							<h4 class="sub-heading-lg">
								{title}
							</h4>

							<p class="mt-3 leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">What To Expect</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text }}
						<div>
							<h4 class="sub-heading-lg">
								{title}
							</h4>

							<p class="mt-3 leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">Why Join Us</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">This Is Suitable For You If You</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each whyJoinUsSection as { text, symbol }}
						<p class="flex items-center gap-3">
							<span>{[symbol]}</span>
							<span class="decoration-bc-amber/30 leading-[1.6em] text-black/90 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg flex justify-center">
		<div class="section-x-padding 4xl:max-w-[1600px] box-content w-full max-w-[1200px]">
			<div class="relative">
				<p class="4xl:text-lg text-right text-base text-black/70">
					Images from <span class="text-bc-amber font-medium italic">Fresh</span>
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

	<section class="section-mt-xl flex justify-center">
		<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col items-center">
			<p class="text-black/80 italic">
				<span>Ready to get on board?</span>
				<span>Fill out our online form - it takes around 3 minutes.</span>
			</p>

			<div class="mt-6 flex justify-center">
				<div class="relative flex items-center gap-8">
					<button
						class="font-display 4xl:text-[36px] cursor-pointer px-4 py-[6px] text-[27px] font-bold tracking-wide text-white uppercase md:text-[30px]"
						onclick={() => (signUpFormIsOpen = true)}
						type="button">Sign Up Today For Free</button
					>

					<div
						class="bg-bc-mineral-jade absolute top-0 left-0 -z-10 h-full w-full overflow-visible"
					></div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-mt-xl flex justify-center">
		<div class="w-full">
			<ContentSectionContainer variant="text">
				<div class="">
					<h2 class="heading-sm">Feedback</h2>

					<h4 class="sub-heading-lg after-heading-sm-mt">What Participants Say</h4>
				</div>
			</ContentSectionContainer>

			<div class="after-sub-heading-lg-mt">
				<ContentSectionContainer variant="video">
					<Video
						poster={recoupe_participant_still}
						posterAlt=""
						videoSrc={recoupe_participant_testimonial}
						ariaLabel=""
						bind:isOpen={playTestimonial}
					/>
				</ContentSectionContainer>
			</div>
		</div>
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
