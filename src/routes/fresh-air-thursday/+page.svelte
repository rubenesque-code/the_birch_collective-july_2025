<script lang="ts" module>
	import image from '^assets/image';
	import {
		fresh_air_thursday_introduction as introVideo,
		fresh_air_thursday_participant_testimonial as testimonialVideo,
		fresh_air_thursday_participant_testimonial_placeholder as testimonialVideoPlaceholder
	} from '^videos';

	import * as content from '^content/fresh-air-thursday';

	import {
		ContentSectionContainer,
		ImageGalleryWithModal,
		ImageHeader,
		SignUpFormModal,
		VideoWithModal
	} from '^components';
	import {
		HeaderSignUpButton,
		InfoSectionLocation,
		SignUpPromptSection
	} from '^pages-by-type/free-programme';
</script>

<script lang="ts">
	let playIntro = $state(false);
	let playTestimonial = $state(false);
	let signUpFormIsOpen = $state(false);
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader
		heading={content.hero.title}
		lead={content.hero.lead}
		align="center-left"
		headingColour="yellow"
	>
		<HeaderSignUpButton bind:formIsOpen={signUpFormIsOpen} />
	</ImageHeader>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<p class="leading-relaxed">
				{content.hero.intro}
			</p>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md">
		<ContentSectionContainer type="text">
			<div class="4xl:gap-3 flex flex-col gap-4 md:gap-[8px]">
				{#each content.info.main as item}
					<p class="info-line">
						<span class="info-title">{item.title}:</span>
						<span class="info-text">{item.text}</span>
					</p>
				{/each}

				<InfoSectionLocation
					mapAlt=""
					mapLink={content.info.location.mapLink}
					mapSrc={content.info.location.map}
					modalTitle={content.info.location.modalTitle}
					locationText={content.info.location.text}
				/>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-xl relative">
		<ContentSectionContainer type="video">
			<VideoWithModal
				title="Fresh — An Intro"
				poster={image.placeholder.banner_1}
				posterAlt=""
				videoSrc={introVideo}
				ariaLabel=""
				bind:isOpen={playIntro}
				titlePlacement="top"
			/>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">What To Expect</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each content.expect as { title, text }}
						<div>
							expect
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
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Why Join Us</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">This Is Suitable For You If You're</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each content.joinUs as { text, symbols }}
						<p class="flex items-center gap-3">
							<span>{[symbols[0]]}</span>
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
		<ImageGalleryWithModal
			images={content.galleryImages}
			title="Images from <span class='text-bc-amber font-medium italic'>Fresh</span>"
		/>
	</section>

	<section class="section-mt-xl">
		<SignUpPromptSection onOpenSignUp={() => (signUpFormIsOpen = true)} />
	</section>

	<section class="section-mt-xl flex justify-center">
		<div class="w-full">
			<ContentSectionContainer type="text">
				<div class="">
					<h2 class="heading-sm">Feedback</h2>

					<h4 class="sub-heading-lg after-heading-sm-mt">What Participants Say</h4>
				</div>
			</ContentSectionContainer>

			<div class="after-sub-heading-lg-mt">
				<ContentSectionContainer type="video">
					<VideoWithModal
						poster={testimonialVideoPlaceholder}
						posterAlt=""
						videoSrc={testimonialVideo}
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
</style>
