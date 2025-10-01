const details = [
	'Join a 7-month journey for 18–25 year olds in Bristol to build confidence, connection, and purpose through nature.',
	'Experience two transformative seasonal camps: September 5–7: 2-night immersive intro & April 2–5: 3-night celebration and reflection',
	'Take part in 5 monthly evening sessions (Aug, Oct, Dec, Feb, Mar) to deepen friendships, explore skills, and reflect on your next steps.',
	'Free minibus from central Bristol, all equipment provided, and all meals and snacks provided (all dietary needs catered for).',
	'Expect hands-on group and solo activities like fire lighting, foraging, walks, games, and creative tasks that challenge and energise.',
	'A safe and inclusive space to try something new, supported by experienced facilitators and outdoor educators.',
	'Keep growing through Fresh Air Thursdays—our weekly land-skills and wellbeing group open to all camp participants.'
];
const whatToExpectSection = [
	'Survival Skills: Foraging, fire lighting, nature connection',
	'Cook and eat together around the fire',
	'Time to hang out around the fire',
	'Go on nature walks, play group games, and have fun',
	'Take time to relax on your own and with others',
	'Learn simple ways to feel less stressed and more grounded',
	'Get mentoring and support to reflect and plan your next steps',
	'Take a break from your phone and reconnect with what matters',
	'Make new friends and build real connections',
	'All food, transport, and equipment provided – free and pay-what-you-can places available'
];

const benefits = [
	'Grow your confidence and feel more sure of yourself',
	'Make friends and build a supportive community',
	'Feel more connected to nature, your values, and your direction in life',
	'Increased sense of well-being and resilience to meet the challenges of life',
	'Empowered to make positive changes',
	'Learn new and transferable practical skills that might even become your future career or hobby',
	'Feel calmer, more resilient, and ready to face life’s ups and downs',
	'Be supported through one-to-one mentoring and group sessions',
	'Enjoy a fun, welcoming space where all identities are celebrated'
];

const whyJoinUsSection = [
	{
		text: 'Would benefit from time spent outside with other young adults.',
		symbol: '🌳'
	},
	{
		text: 'Are struggling to engage with study or work.',
		symbol: '📚'
	},
	{
		text: 'Have mental or physical health struggles.',
		symbol: '❤️‍🩹'
	},
	{
		text: 'Are experiencing loneliness or isolation.',
		symbol: '🌙'
	}
];

const payWhatYouCan = [
	{
		title: 'Full Cost',
		cost: 750,
		text: [
			'I never struggle to meet my basic needs*',
			'I own my home or property OR I rent a higher-end property',
			'I own a car',
			'I’m working OR I don’t need to work to meet my needs',
			'I have access to savings',
			'I have expendable income',
			'I regularly buy new items',
			'I can easily afford more than one holiday a year'
		]
	},
	{
		title: 'Reduced',
		cost: 400,
		text: [
			'I comfortably able to meet my basic needs*',
			'I might have some debt but it doesn’t stop me from meeting my basic needs*',
			'I own a car',
			'I own my home or property OR I rent a higher-end property',
			'I am employed OR I don’t need to work to meet my needs',
			'I have access to savings',
			'I have expendable income',
			'I buy new things regularly',
			'I can afford an annual holiday, or to take time off work'
		]
	},
	{
		title: 'Subsidised',
		cost: 150,
		text: [
			'Meeting my basic needs can be stressful but I still meet them most of the time*',
			'I might have some debt but it doesn’t stop me from meeting my basic needs*',
			'I rent a mid-level home or I have subsidised housing',
			'I own or lease a car',
			'I’m working',
			'I might have access to some savings',
			'I have expendable income',
			'I can buy new or second hand items',
			'I can afford to go on holiday every year or few years'
		]
	},
	{
		title: 'Bursary',
		cost: 50,
		text: [
			'Meeting my basic needs is stressful and sometimes I struggle to*',
			'I have debt that makes it hard for me to meet my basic needs sometimes',
			'I rent a lower-end home or have unstable housing',
			'I don’t have access to a car',
			'I am unemployed or underemployed',
			'I’m eligible for state benefits',
			'I don’t have access to any savings',
			'I don’t really have expendable income and rarely buy new things',
			'I can’t afford to go away or take time off work without financial burden'
		]
	},
	{
		title: 'Free',
		cost: 0,
		text: [
			'For those currently seeking asylum',
			'For those for whom a bursary place would still be too much to manage'
		]
	}
];

export { whatToExpectSection, whyJoinUsSection, details, benefits, payWhatYouCan };
/* {
	full: {
		title: 'Full Cost',
		cost: 750,
		text: [
			'I never struggle to meet my basic needs*',
			'I own my home or property OR I rent a higher-end property',
			'I own a car',
			'I’m working OR I don’t need to work to meet my needs',
			'I have access to savings',
			'I have expendable income',
			'I regularly buy new items',
			'I can easily afford more than one holiday a year'
		]
	},
	reduced: {
		title: 'Reduced',
		cost: 400,
		text: [
			'I comfortably able to meet my basic needs*',
			'I might have some debt but it doesn’t stop me from meeting my basic needs*',
			'I own a car',
			'I own my home or property OR I rent a higher-end property',
			'I am employed OR I don’t need to work to meet my needs',
			'I have access to savings',
			'I have expendable income',
			'I buy new things regularly',
			'I can afford an annual holiday, or to take time off work'
		]
	},
	subsidised: {
		title: 'Subsidised',
		cost: 150,
		text: [
			'Meeting my basic needs can be stressful but I still meet them most of the time*',
			'I might have some debt but it doesn’t stop me from meeting my basic needs*',
			'I rent a mid-level home or I have subsidised housing',
			'I own or lease a car',
			'I’m working',
			'I might have access to some savings',
			'I have expendable income',
			'I can buy new or second hand items',
			'I can afford to go on holiday every year or few years'
		]
	},
	bursary: {
		title: 'Bursary',
		cost: 50,
		text: [
			'Meeting my basic needs is stressful and sometimes I struggle to*',
			'I have debt that makes it hard for me to meet my basic needs sometimes',
			'I rent a lower-end home or have unstable housing',
			'I don’t have access to a car',
			'I am unemployed or underemployed',
			'I’m eligible for state benefits',
			'I don’t have access to any savings',
			'I don’t really have expendable income and rarely buy new things',
			'I can’t afford to go away or take time off work without financial burden'
		]
	},
	free: {
		title: 'Free',
		cost: 0,
		text: [
			'For those currently seeking asylum',
			'For those for whom a bursary place would still be too much to manage'
		]
	}
} */
