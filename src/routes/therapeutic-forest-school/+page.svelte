<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		poster,
		photo_album_1,
		photo_album_2,
		photo_album_3,
		photo_album_4
		// photo_album_5
	} from '^assets/images/programmes/tfs';

	import { Navigation } from '^components/~sections';
	import {
		activities,
		cancellationPolicy,
		groupSizingAndStaff,
		locations,
		outcomes,
		pricing,
		sessionFormat,
		weAsk,
		weProvide,
		whoFor
	} from '^content/tfs';

	import { ImageModal } from '^components';
	import { PUBLIC_BIRCH_EMAIL } from '$env/static/public';
	import { internalRoute } from '^constants';
</script>

<script lang="ts">
	let showPoster = false;
</script>

<Navigation />

<ImageModal
	bind:isOpen={showPoster}
	onClickClose={() => (showPoster = false)}
	src={poster}
	border={false}
	isEnhanced
></ImageModal>

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-my-pale-yellow text-7xl font-bold tracking-wide">
						Therapeutic Forest School
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						Structured, trauma-informed group sessions for children and young people, delivered in
						green spaces.
					</p>
				</div>
			</div>

			<!-- <div class="">
				<button
					class="shrink-0 cursor-pointer rounded-full bg-white/90 px-5 py-[10px] text-[20px] font-medium tracking-wide whitespace-nowrap text-black/70 uppercase"
					onclick={() => (signUpFormIsOpen = true)}
					type="button">Sign Up</button
				>
			</div> -->
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="text-xl leading-relaxed">
					Therapeutic Forest School (TFS) is our outdoor wellbeing programme for teenagers and
					adults. We focus on connection: to nature, to others, and to self. Sessions take place in
					the beautiful Bristol location Stokes Park Woodland — where participants can explore,
					create, and grow in safe, inclusive environments.
				</p>

				<div class="mt-10 text-xl leading-relaxed">
					<h3 class="font-medium">For Enquiries</h3>
					<p class="mt-4">If interested, please reach out to us:</p>

					<div class="mt-4">
						<div class="flex gap-2">
							<p class="font-medium">Email —</p>
							<a class="" href={`mailto:${PUBLIC_BIRCH_EMAIL}`} target="_blank"
								>{PUBLIC_BIRCH_EMAIL}</a
							>
						</div>
						<div class="mt-2 flex gap-2">
							<p class="font-medium">Our online form —</p>
							<a class="" href={internalRoute['get-in-touch']}>click here</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Who It's For</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each whoFor as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">What We Offer</h2>

			<p class="mt-4">
				Each session is tailored and trauma-informed, with a focus on building confidence,
				resilience, and connection.
			</p>

			<p class="mt-4 font-medium">Activities include:</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each activities as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div>
			<p class="text-right text-black/70">
				Images from <span class="text-bc-amber font-medium italic">Therapeutic Forest School</span>
			</p>

			<div class="mt-1 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[4/3] h-full">
					<enhanced:img
						class="h-full w-full object-cover object-bottom"
						src={photo_album_1}
						alt=""
					/>
				</div>

				<div class="border-my-grey-3/40 aspect-[4/3] h-full">
					<enhanced:img class="h-full w-full" src={photo_album_2} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[3/4] h-full">
					<enhanced:img class="h-full w-full" src={photo_album_3} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[3/4] h-full">
					<enhanced:img class="h-full w-full" src={photo_album_4} alt="" />
				</div>
			</div>

			<!-- <div class="mt-3 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[3/4] h-full">
					<enhanced:img class="h-full w-full" src={photo_album_5} alt="" />
				</div>
			</div> -->
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Outcomes for Participants
			</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each outcomes as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Session Format</h2>

			<p class="mt-4">
				We recommend booking a minimum 6-week block to allow trust and confidence to grow.
			</p>

			<p class="mt-4 font-medium">Each 2-hour session typically includes:</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each sessionFormat as text, i}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/70">
								{i + 1}.
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-4">
				As the programme develops, sessions become more participant-led, allowing individuals to
				choose their activities and deepen their own nature connection.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Our Sites</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each locations as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Group Size & Staffing
			</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each groupSizingAndStaff as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Pricing</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each pricing as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">What We Provide</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each weProvide as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				What We Ask From You
			</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each weAsk as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Cancellation Policy
			</h2>

			<div class="mt-4">
				<div class="flex flex-col gap-3">
					{#each cancellationPolicy as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Literature</h2>

			<h4 class="text-bc-slate-pine font-display text-[40px] font-bold capitalize">
				TFS Poster With Some More Info
			</h4>

			<div class=" mt-12">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<enhanced:img
					class="max-h-[600px] w-[768px] cursor-pointer object-contain"
					onclick={() => (showPoster = true)}
					src={poster}
					alt=""
				/>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
