<!-- src/routes/free-programmes/+page.svelte -->
<script lang="ts" module>
	import { internalRoute } from '^constants';

	import image, { type EnhandcedImg } from '^assets/image';
	import { group_photo as seeding_change } from '^assets/images/programmes/seeding-change';
	import { group_photo as steering } from '^assets/images/programmes/steering-group';

	import { Page } from '^pages/programme-list';

	type Programme = {
		link: string;
		imgSrc: EnhandcedImg;
		imgAlt?: string;
		title: string;
		text: string;
	};

	const heading = 'Free Programmes';
	const lead =
		'Want to spend more time outdoors, learn practical skills, and feel more connected? We run nature-based sessions that help you slow down, get hands-on, and grow alongside others.';

	const programmes: Programme[] = [
		{
			link: internalRoute['recoupe'],
			imgAlt: '',
			imgSrc: image.placeholder.axe_chopping,
			title: 'Recoupe: Working Woods',
			text: 'A weekly woodland sessions using traditional skills in Troopers Hill Woods.'
		},
		{
			link: internalRoute['fresh-air-thursday'],
			imgAlt: '',
			imgSrc: image.placeholder.group_photo,
			title: 'Fresh Air Thursdays',
			text: "A FREE weekly group for 16–25 year olds, just a 5-minute walk from St George's Park!"
		},
		{
			link: internalRoute['seeding-change'],
			imgAlt: '',
			imgSrc: seeding_change,
			title: 'Seeding Change: Plant Your Future (Camp Birch)',
			text: 'A 7-month journey with seasonal camps, evening meetups, and mentoring for 18–25s, supporting purpose, leadership, and community building.'
		},
		{
			link: internalRoute['youth-advisory-and-steering'],
			imgAlt: '',
			imgSrc: steering,
			title: 'Steering Group Workshops',
			text: 'Three interactive workshops on Mental Health, Social Action & Nature — led by and for 18–25s.'
		}
	];
</script>

<Page {heading} {lead} {programmes} align="right" />
