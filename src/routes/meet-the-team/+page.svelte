<script lang="ts" module>
	import { User } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		fresh_air_thursday_introduction,
		fresh_air_thursday_participant_testimonial,
		fresh_air_thursday_participant_testimonial_placeholder
	} from '^assets/videos';
	import { VideoModal } from '^components';
	import { amy, james, ro, tim } from '^assets';
</script>

<script lang="ts">
	let playIntro = false;
	let playTestimonial = false;
</script>

<VideoModal
	bind:isOpen={playIntro}
	onClickClose={() => (playIntro = false)}
	mp4Src={fresh_air_thursday_introduction}
/>

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
					<h1 class="font-display text-7xl font-bold tracking-wide">Meet The Team</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="text-xl leading-relaxed">
					The Birch Collective is run by three Co-Directors who lead our sessions. Together, we have
					over 25 years’ experience working with young people, especially those from diverse
					backgrounds. We've worked in places like pupil referral units, schools, youth mental
					health services, and youth organizations, supporting teens and young adults just like you.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-20 px-60">
		<div class="flex w-full justify-center">
			<div>
				<div class="flex justify-center">
					<div class="w-full max-w-[768px]">
						<h2
							class="font-display text-bc-slate-pine text-center text-6xl font-bold tracking-wide"
						>
							Staff
						</h2>
					</div>
				</div>

				<div class="mt-12 grid w-full max-w-[1200px] grid-cols-4 gap-12">
					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={amy}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">
							Amy Cox
						</p>
						<p class="mt-3 text-lg">Founder/Facilitator</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={james}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">James</p>
						<p class="mt-3 text-center text-lg">Marketing & Communication Co-ordinator</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={ro}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">Ro Fry</p>
						<p class="mt-3 text-lg">Founder/Facilitator</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={tim}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">
							Tim George
						</p>
						<p class="mt-3 text-center text-lg">Founder/Facilitator</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-20 px-60">
		<div class="flex w-full justify-center">
			<div>
				<div class="flex justify-center">
					<div class="w-full max-w-[768px]">
						<h2
							class="font-display text-bc-slate-pine text-center text-6xl font-bold tracking-wide"
						>
							The Board
						</h2>
					</div>
				</div>

				<div class="mt-12 grid w-full max-w-[1200px] grid-cols-4 gap-12">
					<div class="flex cursor-pointer flex-col items-center">
						<div
							class="bg-bc-pale-sandstone grid aspect-square w-[200px] place-items-center rounded-full object-cover text-8xl text-white"
						>
							<User weight="fill" />
						</div>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">
							Member WithoutImage
						</p>
						<p class="mt-3 text-lg">Teacher</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={james}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">James</p>
						<p class="mt-3 text-center text-lg">Marketing & Communication Co-ordinator</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={ro}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">Ro Fry</p>
						<p class="mt-3 text-lg">Founder/Facilitator</p>
					</div>

					<div class="flex cursor-pointer flex-col items-center">
						<enhanced:img
							class=" aspect-square w-[200px] rounded-full object-cover"
							src={tim}
							alt=""
						/>
						<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">
							Tim George
						</p>
						<p class="mt-3 text-center text-lg">Founder/Facilitator</p>
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
