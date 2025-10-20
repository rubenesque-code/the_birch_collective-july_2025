<script lang="ts" module>
	import image from '^assets/image';
	import {
		fresh_air_thursday_participant_testimonial,
		fresh_air_thursday_participant_testimonial_placeholder
	} from '^assets/videos';
	import { VideoModal } from '^components';
</script>

<script lang="ts">
	let playTestimonial = false;
</script>

<VideoModal
	bind:isOpen={playTestimonial}
	onClickClose={() => (playTestimonial = false)}
	mp4Src={fresh_air_thursday_participant_testimonial}
/>

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-7xl font-bold tracking-wide">Testimonials</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="mt-8 text-xl leading-relaxed">
					We've had a bunch of great testimonials given to us by professionals and our young people
					participants alike. We greatly value the feedback; it helps us develop our programmes and
					keeps us focused on our goals! Read on to get a flavour of why we do what we do!
				</p>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<div class="">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Participants Say</h3>
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

				<div class="mt-8 flex justify-center">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="relative cursor-pointer"
						on:click={() => {
							playTestimonial = true;
						}}
					>
						<p class="text-right text-black/70">Fresh Air Thursday Testimonial</p>
						<enhanced:img
							class="mt-2 w-[900px] rounded-md"
							src={fresh_air_thursday_participant_testimonial_placeholder}
							alt=""
						/>

						<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-12 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<div class="mt-12">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Referrers Say</h3>

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

	<section class="mt-12 flex justify-center px-60">
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

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
