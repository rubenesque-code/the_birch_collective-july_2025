<!-- src/routes/paid-services/+page.svelte -->
<script lang="ts" module>
	import { internalRoute } from '^constants';

	import image, { type EnhandcedImg } from '^assets/image';

	import { Page } from '^pages/programme-list';

	type Programme = {
		link: string;
		imgSrc: EnhandcedImg;
		imgAlt?: string;
		title: string;
		text: string;
	};

	const heading = 'Paid Services';
	const lead =
		'For organisations, schools, youth groups, and professionals who want to bring nature-based learning and wellbeing into their work.';

	const programmes: Programme[] = [
		{
			link: internalRoute['nature-based-mentoring'],
			imgSrc: image.placeholder.stay_calm_and_listen_to_nature,
			imgAlt: '',
			title: '1:1 Nature Based Mentoring',
			text: 'NHS-backed support offered in various outdoor settings to help people connect with nature and improve wellbeing.'
		},
		{
			link: internalRoute['therapeutic-forest-school'],
			imgSrc: image.placeholder.therapeutic_forest_school,
			imgAlt: '',
			title: 'Therapeutic Forest School',
			text: 'Structured, trauma-informed group sessions for children and young people, delivered in green spaces.'
		},
		{
			link: internalRoute['bespoke-nature-workshops'],
			imgSrc: image.placeholder.lying_in_grass,
			imgAlt: '',
			title: 'Bespoke Nature Workshops for Organisations',
			text: 'Custom-designed sessions for schools, support services, or teams – ranging from team-building to therapeutic intervention.'
		},
		{
			link: internalRoute['corporate-nature-team-days'],
			imgSrc: image.placeholder.stay_calm_and_listen_to_nature,
			imgAlt: '',
			title: 'Corporate Nature Team Days',
			text: 'Team building, wellbeing, and making a real difference outdoors'
		}
	];
</script>

<Page {heading} {lead} {programmes} align="right" />
