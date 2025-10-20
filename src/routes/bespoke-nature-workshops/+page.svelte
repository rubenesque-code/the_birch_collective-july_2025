<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';

	import {
		howItWorks,
		menuOfSkillsAndActivities,
		pastClients,
		pricingGuide
	} from '^content/bespoke-workshops';

	import { PUBLIC_BIRCH_EMAIL } from '$env/static/public';
	import { internalRoute } from '^constants';
</script>

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
						Bespoke Nature Workshops for Organisations
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						Design your own outdoor experience
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px] text-lg leading-relaxed">
				<p class="text-xl">
					Our Tailored Natural Skills Programmes offer a flexible, creative, and therapeutic
					approach to outdoor learning. You choose the outcomes you want to achieve — we’ll build a
					bespoke workshop or series of sessions to meet your group’s needs, interests, and
					abilities.
				</p>

				<div class="mt-10 text-lg leading-relaxed">
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
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">How It Works</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each howItWorks as { title, text }}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<h3 class="text-lg font-medium">{title}</h3>
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Menu of Skills and Activities
			</h2>

			<h4 class="mt-8 font-medium">Practical Nature-Based Skills</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each menuOfSkillsAndActivities.practicalNatureBasedSkills as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>

			<h4 class="mt-8 font-medium">Craft & Creative</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each menuOfSkillsAndActivities.craftAndCreative as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>

			<h4 class="mt-8 font-medium">Foraging & Medicine Making</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each menuOfSkillsAndActivities.foragingAndMedicineMaking as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>

			<h4 class="mt-8 font-medium">Nature Connection & Group Work</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each menuOfSkillsAndActivities.natureConnectionAndGroupWork as text}
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
				Images from <span class="text-bc-amber font-medium italic">Birch</span>
			</p>

			<div class="mt-1 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img
						class="h-full w-full"
						src={image.placeholder.caregiver_with_partipant_face_to_face}
						alt=""
					/>
				</div>

				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={garden_shed_from_outside} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={participant_woman_glasses} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[3200/2133] h-full">
					<enhanced:img
						class="h-full w-full"
						src={group_and_facilitators_sitting_round_fireplace}
						alt=""
					/>
				</div>
			</div>

			<div class="mt-3 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.axe_chopping} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.chillies} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={james_and_participants_peace_sign} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={indoor_workbench} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Pricing Guide</h2>

			<p class="mt-4">
				We offer a <span class="font-medium">tiered pricing structure</span> depending on your organisation
				type:
			</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each pricingGuide as { title, text }}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="">
								<h3 class="font-medium">{title}</h3>
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8">
				Costs vary depending on duration, number of facilitators, materials, and location.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Past Clients Include
			</h2>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each pastClients as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Get Started</h2>

			<p class="mt-4">
				Tell us what you need and we’ll co-create a programme that works. Whether it’s a one-off
				workshop, a seasonal series, or a deeper partnership — we’re here to support your group’s
				wellbeing, creativity, and connection to nature.
			</p>

			<div class="mt-4">
				<div class="flex gap-2">
					<p class="font-medium">Email —</p>
					<a class="" href={`mailto:${PUBLIC_BIRCH_EMAIL}`} target="_blank">{PUBLIC_BIRCH_EMAIL}</a>
				</div>
				<div class="mt-2 flex gap-2">
					<p class="font-medium">Our online form —</p>
					<a class="" href={internalRoute['get-in-touch']}>click here</a>
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
