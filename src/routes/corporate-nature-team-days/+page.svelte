<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';

	import image from '^assets/image';

	import { Navigation } from '^components/~sections';
	import {
		activities,
		bookingTerms,
		bring,
		pricesInclude,
		provided,
		skillsLearnt
	} from '^content/corporate-nature-team-days';

	import { PUBLIC_BIRCH_JAMES_EMAIL } from '$env/static/public';
	import { internalRoute } from '^constants';
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
						Corporate Nature Team Days
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						Team building, wellbeing, and making a real difference outdoors
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px] text-lg leading-relaxed">
				<p class="text-xl">
					The Birch Collective is a Bristol-based social enterprise using nature, creativity, and
					community to support people’s wellbeing and skills. We run woodland and garden projects
					that bring people together, restore biodiversity, and pass on traditional outdoor skills.
				</p>

				<p class="mt-4 text-xl">
					When your team joins us for a Corporate Nature Team Day, you’re not just ticking the “away
					day” box — you’re building stronger connections in your team while helping us keep these
					spaces thriving for the people and wildlife who depend on them. Your support also helps
					fund our year-round community and wellbeing programmes.
				</p>

				<p class="mt-4 text-xl italic">
					ReCoupe: Working Woods is a space where we support people with their wellbeing and mental
					health. Because of this, we are limiting external involvement and can only accommodate one
					corporate volunteer per month per organisation. Our bespoke team days offer a safe,
					purposeful alternative designed specifically for corporate groups.
				</p>

				<div class="mt-10 text-lg leading-relaxed">
					<h3 class="font-medium">For Enquiries</h3>
					<p class="mt-4">If interested, please reach out to us.</p>

					<div class="mt-4">
						<div class="flex gap-2">
							<p class="font-medium">Email:</p>
							<a class="" href={`mailto:${PUBLIC_BIRCH_JAMES_EMAIL}`} target="_blank"
								>{PUBLIC_BIRCH_JAMES_EMAIL}</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">What's in the Day</h2>

			<p class="mt-4">
				You’ll step straight into the seasonal needs of our sites — no two days are the same, and
				the work is always purposeful. Alongside conservation tasks, we also focus on <span
					class="font-medium">team bonding, mindfulness, and nature connection</span
				>, so your staff leave refreshed as well as accomplished.
			</p>

			<p class="mt-4 font-medium">Example activities:</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each activities as text}
						<div class="flex items-center gap-3">
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8 font-medium">Skills learned:</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each skillsLearnt as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8 font-medium">Facilitators:</p>

			<p class="mt-4">
				Our experienced woodland leaders ensure safety, skill-sharing, and plenty of good humour
				throughout the day. We also build in space for reflection, team connection, and wellbeing.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Group Sizes & Schedule
			</h2>

			<p class="mt-4 font-medium">Mondays (11am–3pm):</p>
			<p class="mt-4">
				Our most popular option. A <span class="font-medium">private, tailored day</span> designed specifically
				for corporate teams of 5–25 people. Two skilled facilitators will guide your group through purposeful
				conservation tasks, skill-sharing, and team-building activities. These days are a fantastic way
				to strengthen connections, boost wellbeing, and make a tangible difference to local green spaces.
			</p>

			<p class="mt-4 font-medium">Tuesdays (1–5pm):</p>
			<p class="mt-4">
				An opportunity for <span>individual staff members</span> to join our active ReCoupe: Working
				Woods volunteer day alongside community participants. Ideal for staff using their personal
				volunteering allowance or for scoping a future team day.
				<span class="italic">(Max. 1 person per organisation per month)</span>.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Practical Details</h2>

			<p class="mt-8 font-medium">Location:</p>
			<p class="mt-4">Troopers Hill Woods, Bristol (meet at Strawberry Lane Allotments)</p>

			<p class="mt-8 font-medium">What's Provided:</p>
			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each provided as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8 font-medium">What to bring:</p>
			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each bring as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8 font-medium">Accessibility:</p>
			<p class="mt-4">
				Some tasks can be adapted for different mobility needs — get in touch to discuss. On-street
				parking available; toilets on site.
			</p>

			<p class="mt-8 font-medium">Health & Safety:</p>
			<p class="mt-4">
				Full risk assessments, public liability insurance, and trained first aiders provided.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px] text-lg leading-relaxed">
			<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Pricing & Booking</h2>

			<p class="mt-8 font-medium">Mondays:</p>
			<p class="mt-4">
				Priced per person, with a minimum group size agreed in advance. We invoice based on
				confirmed numbers (not attendance on the day). Prices include:
			</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each pricesInclude as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-8 font-medium">Tuesdays:</p>
			<p class="mt-4">
				We welcome 2 staff members per organisation per month. A donation from the corporate
				organisation is encouraged to support our ongoing community and wellbeing programmes.
			</p>

			<p class="mt-8 font-medium">Booking terms</p>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each bookingTerms as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<div class="flex flex-col gap-1">
								<p class="leading-relaxed">{text}</p>
							</div>
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
