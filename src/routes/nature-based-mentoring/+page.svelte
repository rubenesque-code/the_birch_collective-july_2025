<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';

	import image from '^assets/image';

	import { Navigation } from '^components/~sections';
	import {
		caseStudies,
		howItWorks,
		toolsAndPlanning,
		whoItsFor
	} from '^content/one-to-one-mentoring';
</script>

<Navigation />

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
						1:1 Nature Based Mentoring
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						Therapeutic, trauma-informed nature connection for individuals facing complex
						challenges.
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
					Our One-to-One Nature Mentoring service provides tailored, relationship-based support for
					individuals experiencing significant life challenges — including poor mental health,
					social isolation, psychosis, neurodivergence, trauma, and transitions from in-patient
					care. We meet people where they are — physically, emotionally, and psychologically — and
					co-create a pathway towards confidence, connection, and resilience through immersive,
					nature-based experiences.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Who It's For</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each whoItsFor as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">How It Works</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each howItWorks as { title, text }}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<h3 class="text-xl font-medium">{title}</h3>
								<p class="text-xl leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Outcomes We Aim For
			</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each whoItsFor as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Case Studies</h2>

			<div class="mt-[20px] flex flex-col gap-8">
				{#each caseStudies as { title, text }}
					<div class="text-lg leading-relaxed">
						<h4 class="font-medium">{title}</h4>
						<p class="mt-3">{text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">System Integration</h2>

			<p class="mt-[20px] text-lg">
				Our service is embedded in a <span class="font-medium">multi-agency care model</span>, with
				referrals from:
			</p>

			<ul class="mt-3 list-disc pl-4 text-lg">
				{#each ['Second Step', 'CAHMS and Barnardo’s', 'ICB/ICHP commissioners', 'Hospital teams (pre and post-discharge)', 'Westport Active Partnership, who manage triage and ‘What Matters to You’ conversations'] as item}
					<li class="mt-1">{item}</li>
				{/each}
			</ul>

			<p class="mt-5">
				We collaborate closely with health professionals, providing flexible, non-clinical support
				alongside clinical care. We help build the bridge between hospital and community — easing
				transitions, reducing re-admissions, and supporting longer-term stability.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Practical Tools & Planning
			</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each toolsAndPlanning as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
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
