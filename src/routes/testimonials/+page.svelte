<script lang="ts" module>
	import {
		fresh_air_thursday_participant_testimonial,
		fresh_air_thursday_participant_testimonial_placeholder,
		recoupe_participant_still,
		recoupe_participant_testimonial
	} from '^assets/videos';
</script>

<script lang="ts">
	import { ImageHeader, VideoSection } from '^components/~sections';

	let playFreshTestimonial = false;
	let playRecoupeTestimonial = false;
</script>

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader align="center-left" heading="Testimonials" />

	<section class="section-x-padding mt-16 flex justify-center">
		<div class="w-full max-w-[768px]">
			<div class="">
				<h2 class="text-bc-slate-pine section-title-bold text-left">What Participants Say</h2>

				<div class="mt-8 flex flex-col gap-6">
					<p class="text-xl leading-relaxed">
						"The time I got to spend with others on camp was so magical and beautiful I can’t fully
						describe it. If you're struggling with mental health or socialising, please give it a
						go."
					</p>
					<p class="text-xl leading-relaxed">
						"It was one of the best times of my life. I made friends, tested myself, and learned
						more about the world and myself."
					</p>
					<p class="text-xl leading-relaxed">
						"It gave me the confidence boost I needed and helped me feel more like myself."
					</p>
				</div>
			</div>
		</div>
	</section>

	<div class="mt-8">
		<VideoSection
			title="Fresh Air Thursday"
			poster={fresh_air_thursday_participant_testimonial_placeholder}
			videoSrc={fresh_air_thursday_participant_testimonial}
			bind:isOpen={playFreshTestimonial}
			mt={false}
		/>
	</div>

	<div class="mt-8">
		<VideoSection
			title="Recoupe"
			poster={recoupe_participant_still}
			videoSrc={recoupe_participant_testimonial}
			bind:isOpen={playRecoupeTestimonial}
			mt={false}
		/>
	</div>

	<section class="section-x-padding mt-16 flex justify-center">
		<div class="w-full max-w-[768px]">
			<div class="">
				<h2 class="text-bc-slate-pine section-title-bold text-left">What Referrers Say</h2>

				<div class="mt-6 flex flex-col gap-6">
					<div>
						<p class="text-xl leading-relaxed">
							"B reflected on how Camp Birch helped her feel more connected to herself and nature.
							She came away with tools for managing stress and adjusting to university life."
						</p>
						<p class="mt-2 text-xl text-black/70">
							— Emma Martin | Senior Personal Adviser | Bristol Through Care Team
						</p>
					</div>

					<div>
						<p class="text-xl leading-relaxed">
							"Camp Birch had a huge impact on our young people. Many came back more confident and
							motivated to re-engage with education, volunteering and wellbeing activities. I’d
							highly recommend The Birch Collective — plus it looked like so much fun"
						</p>
						<p class="mt-2 text-xl text-black/70">
							— Rosie Kinnear | Youth Development Lead | The Prince's Trust
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-x-padding mt-16 flex justify-center">
		<div class="w-full max-w-[768px]">
			<div class="mt-12">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Collaborators Say</h3>

				<div class="mt-6 flex flex-col gap-6">
					<div>
						<p class="text-xl leading-relaxed">
							"B reflected on how Camp Birch helped her feel more connected to herself and nature.
							She came away with tools for managing stress and adjusting to university life."
						</p>
						<p class="mt-2 text-xl text-black/70">
							— Emma Martin | Senior Personal Adviser | Bristol Through Care Team
						</p>
					</div>

					<div>
						<p class="text-xl leading-relaxed">
							"Camp Birch had a huge impact on our young people. Many came back more confident and
							motivated to re-engage with education, volunteering and wellbeing activities. I’d
							highly recommend The Birch Collective — plus it looked like so much fun"
						</p>
						<p class="mt-2 text-xl text-black/70">
							— Rosie Kinnear | Youth Development Lead | The Prince's Trust
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
