<script lang="ts" module>
	import { amy, james, ro, tim } from '^assets';

	import { ImageHeader, TextSection } from '^sections';
	import { StaffMember } from '^pages/meet-the-team';
</script>

<script lang="ts">
	const teamMembers = [
		{
			name: 'Amy Cox',
			role: 'Founder/Facilitator',
			imgSrc: amy,
			body: 'Amy has a background in education, landwork, and craft, with over 10 years of experience working with young people. She completed an apprenticeship in Forestry and green woodworking at the Cherry Wood Project and is a qualified basket maker. Amy has worked on land-based learning projects with partners like Westonbirt Arboretum, South Glos Council, and Off the Record. She co-runs Fireside Forest School, mentoring children and young people to connect with nature for their development and mental health. Amy also leads community weaving workshops and is studying herbalism at the School of Intuitive Herbalism. Amy lives in her yurt on a farm and loves to sleep outside under the stars.'
		},
		{
			name: 'James',
			role: 'Marketing & Communication Co-ordinator',
			imgSrc: james,
			body: 'James has a background in fundraising and communications, having worked at Amnesty International UK, where he developed skills in storytelling and community engagement. He co-founded Mafia Weekend CIC, managing creative projects and initiatives aimed at fostering community connections through film-making. James holds a BA in Acting with Collaborative and devised theatre from the Royal Central School of Speech and Drama.'
		},
		{
			name: 'Ro Fry',
			role: 'Founder/Facilitator',
			imgSrc: ro,
			body: 'Ro is a qualified Primary School Teacher and Forest School Practitioner with a strong focus on experiential education and play. She holds a degree in anthropology from Manchester University, fueling her interest in culture and community life. Ro completed a Land-Based Learning Apprenticeship at Embercombe and has worked with organisations like APE Project, Windmill Hill City Farm, and St Werburghs City Farm, where she managed the Child and Youth Project. Ro has training in Mediation, Non-Violent Communication, is a keen potter and loves climbing trees.'
		},
		{
			name: 'Tim George',
			role: 'Founder/Facilitator',
			imgSrc: tim,
			body: 'Tim is an educator, facilitator, and land-worker with 10 years of experience supporting young people facing emotional distress and neurological diversity. He has worked primarily in the not-for-profit sector with organizations focused on community food, experiential education, and nature-based therapies, including St Werburghs City Farm and Off The Record (Bristol). Tim has training in child and adolescent psychotherapy with the Tavistock and Portman Trust and holds a background in Environmental Policy and Economics from LSE, fostering his commitment to environmental and social justice.'
		}
	];
</script>

<ImageHeader heading="Meet The Team" align="center-left" />

<TextSection
	body={[
		"The Birch Collective is run by three Co-Directors who lead our sessions. Together, we have over 25 years’ experience working with young people, especially those from diverse backgrounds. We've worked in places like pupil referral units, schools, youth mental health services, and youth organizations, supporting teens and young adults just like you."
	]}
/>

<section class="section-mt flex justify-center">
	<div class="section-x-padding box-content max-w-[1200px]">
		<div>
			<div class="flex justify-center">
				<h2 class="font-display text-bc-slate-pine text-center text-6xl font-bold tracking-wide">
					Staff
				</h2>
			</div>

			<div class="mt-12 grid w-full max-w-[1200px] gap-12 sm:grid-cols-2 xl:grid-cols-4">
				{#each teamMembers as item}
					<StaffMember {...item} />
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section-mt flex justify-center">
	<div class="section-x-padding box-content w-full max-w-[1200px]">
		<div>
			<div class="flex justify-center">
				<h2 class="font-display text-bc-slate-pine text-center text-6xl font-bold tracking-wide">
					Board Members
				</h2>
			</div>

			<p class="text-bc-logo-black/70 mt-12 w-full max-w-[1200px] pl-8">Coming soon...</p>

			<!-- <div class="mt-12 grid w-full max-w-[1200px] grid-cols-4 gap-12">
				{#each teamMembers as item}
					<StaffMember {...item} />
				{/each}
			</div> -->
		</div>
	</div>
</section>
