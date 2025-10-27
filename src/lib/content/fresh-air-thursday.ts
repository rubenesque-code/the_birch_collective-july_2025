import image from '^assets/image';
import { location_map } from '^images/programmes/fresh-air-thursday';
import {
	garden_shed_from_outside,
	group_and_facilitators_sitting_round_fireplace,
	indoor_workbench,
	james_and_participants_peace_sign,
	participant_woman_glasses
} from '^images/programmes/fresh-air-thursday';

const hero = {
	title: 'Fresh Air Thursdays',
	lead: [
		'A weekly group every Thursday. Currently running upto December 18th 2025',
		"5 minutes from St George's Park, Bristol"
	],
	intro: [
		'Fresh is our weekly group for 16-25 year olds. We offer a range of activities designed at a pace to make learning accessible and to draw out your creativity. There is no fixed time limit to attendance, attend all year round, once a month or just one off, totally up to you.  You can attend until your 26 birthday. If you are older the 26 or reach that age there are opportunities to return as peer mentor to support others, if this is of interest to you.'
	]
};

const info = {
	main: [
		{ title: 'currently running from', text: 'February 20th 2025 - December 18th 2025' },
		{ title: 'Time', text: '1pm — 5pm' },
		{ title: 'Age Group', text: 'anyone 16 — 25 years old' },
		{ title: 'Cost', text: 'free but booking is essential!' }
	],
	location: {
		map: location_map,
		text: 'Strawberry Lane Community Gardens',
		mapLink: 'https://maps.app.goo.gl/32cRvbigC2fC3pPF9',
		modalTitle: "Images from <span class='text-bc-amber italic'>Fresh</span>"
	}
};

const expect = [
	{
		title: 'Nature Based Craft',
		text: 'Making all manner of things from willow with our resident willow expert Amy, from baskets to bird feeders, fences to climbing structures for plants. - Natural and traditional building techniques - such as using cob, building using round wood timber or using hazel to make fences. - Making functional or decorative items from found and foraged items in the garden or nearby woodland.',
		symbols: ['🌿', '🌾', '🧵']
	},
	{
		title: 'Organic horticulture and permaculture',
		text: 'Our team has many years experience in growing organic vegetables. We will explore and offer learning in a range of wildlife friendly food growing and horticulture techniques and practices. - We also explore wider land management techniques such as; coppicing, hedging, habitat creation and permaculture techniques for designing spaces.',
		symbols: ['🌱', '🥕', '🌻']
	},
	{
		title: 'Cookery',
		text: 'Outdoor cookery or cooking on the campfire is a fine art and also a greatly satisfying process. - Ro is a master and loves teaching people suitable recipes but importantly how to build and maintain fires that allow you to cook a wide range of treats, without ending up with burnt grub!',
		symbols: ['🍲', '🔥', '🍳']
	},
	{
		title: 'Nature based awareness and mindfulness techniques',
		text: "Alongside all the 'doing' we also encourage people to just be. - During sessions we will share with you simple practices to enable you to feel a greater sense of inner peace, calm and aid in managing stress. - We suggest ways to use the natural world as the lens through which to see the world and our personal struggles through, offering new perspective and comfort.",
		symbols: ['🧘', '🌙', '🌸']
	}
];

const joinUs = [
	{
		text: 'Seeking to spend more time in the outdoors and meet new people.',
		symbols: ['🌳']
	},
	{
		text: 'Struggling with family and relationship issues.',
		symbols: ['💔']
	},
	{
		text: 'Experiencing feelings of loneliness or isolation.',
		symbols: ['😔']
	},
	{
		text: 'Struggling to engage with study.',
		symbols: ['📚']
	},
	{
		text: 'Not in education, employment or training.',
		symbols: ['❌']
	},
	{
		text: 'Experiencing low-level mental health issues.',
		symbols: ['🌧️']
	}
];

const galleryImages = [
	[
		{ src: image.placeholder.caregiver_with_partipant_face_to_face, alt: '' },
		{ src: garden_shed_from_outside, alt: '' },
		{ src: participant_woman_glasses, alt: '' },
		{ src: group_and_facilitators_sitting_round_fireplace, alt: '' }
	],
	[
		{ src: image.placeholder.axe_chopping, alt: '' },
		{ src: image.placeholder.chillies, alt: '' },
		{ src: james_and_participants_peace_sign, alt: '' },
		{ src: indoor_workbench, alt: '' }
	]
];

export { hero, info, expect, joinUs, galleryImages };
