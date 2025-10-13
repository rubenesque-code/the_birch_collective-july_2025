<script lang="ts" module>
	import type { DateValue } from '@internationalized/date';
	import { SignOut } from 'phosphor-svelte';
	import { elasticIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { browser } from '$app/environment';
	import {
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { isValidEmail, isValidUkPhoneNumber, toggleBodyScroll } from '^helpers';

	import image from '^assets/image';

	import { Card, Carousel, Label, RadioGroup } from '^components/ui';
	import CarouselItem from './carousel-item.svelte';
	import {
		CheckboxGroup,
		DatePicker,
		Question,
		RadioGroupItem,
		Textarea,
		TextInput
	} from './elements';
	import NextButton from './next-button.svelte';
	import { getEmblaContext } from '^components/ui/carousel/context';
	import { onMount } from 'svelte';

	const formId = {
		intro: 'intro',
		newsletterPermission: 'sign-up-form-newsletter-permission',
		imagePermission: 'sign-up-form-image-permission',
		textUpdatePermission: 'sign-up-form-text-permission',
		referralSource: 'sign-up-form-referral-source',
		programmesOfInterest: 'programmes-of-interest',
		referralComment: 'referral-comment',
		participantAddress: 'participant-address',
		participantDetails: 'participant-details',
		emergencyContact: 'emergency-contact',
		identity: 'identity',
		medical: 'medical'
	};

	const slideContent = {
		participantDetails: {
			title: 'Your Details',
			question: {
				details: {
					title: 'Your Details',
					id: 'participant-details',
					parts: {
						name: {
							label: 'Full name',
							required: true
						},
						dob: {
							label: 'Date of birth',
							required: false
						},
						email: {
							label: 'Email address',
							required: true
						},
						phone: {
							label: 'Phone number',
							required: true
						}
					}
				}
			}
		},

		participantAddress: {
			title: 'Your Address',
			question: {
				address: {
					title: 'Your Address',
					id: 'your-address',
					parts: {
						line1: {
							label: 'Address line 1',
							required: true
						},
						line2: {
							label: 'Address line 2',
							required: false
						},
						townOrCity: {
							label: 'Town/City',
							required: true
						},
						postcode: {
							label: 'Postcode',
							required: true
						}
					}
				}
			}
		},

		emergencyContactDetails: {
			title: 'Emergency Contact',
			question: {
				emergencyContact: {
					title: 'Emergency Contact Details',
					id: 'emergency-contact-details',
					parts: {
						name: {
							label: 'name',
							required: 'Please enter a response'
						},
						phone: {
							label: 'phone number',
							required: 'Please enter a response'
						},
						relationship: {
							label: 'relationship',
							required: 'Please enter a response'
						}
					}
				}
			}
		},

		identity: {
			title: 'Identity',
			question: {
				identity1: {
					title: 'Do you identify as any of the following?',
					required: 'Tick all that apply to you. Pick at least one.',
					errorText: 'Please select at least one option',
					id: 'identity-1',
					options: [
						'Working class',
						'Someone with a disability',
						'Male or male identifying',
						'Care experienced',
						'LGBTQ+',
						'English as a second language',
						'Black or a person of colour',
						'Unemployed or not in education or training',
						'None of the above'
					]
				},
				ethnicity: {
					title: 'Your ethnicity',
					required: 'Please enter a response',
					errorText: 'Please enter a response',
					id: 'ethnicity'
				},
				identity2: {
					title: 'Do you identify as any of the following?',
					required: 'Tick all that apply to you. Pick at least one.',
					errorText: 'Please select at least one option',
					id: 'identity-2',
					options: [
						'girl/woman/female',
						'boy/man/male',
						'non-binary',
						'queer',
						'other',
						'prefer not to say'
					]
				}
			}
		},

		medicalDetails: {
			title: 'Medical Details',
			question: {
				healthIssues: {
					title:
						'Do you consider yourself to have any physical health issues or medical conditions, e.g ASD, Asthma or allergies?',
					subtext: 'If yes, please provide us with some detail.',
					required: 'Response optional',
					id: 'health-issues'
				},
				lifeSavingMedication: {
					title:
						'Do you require any regular life saving medication, e.g inhalers, epipen or other?',
					required: "If yes, please provide us with some detail. If no, please type 'no'.",
					errorText: 'Please enter a response',
					id: 'life-saving-medication'
				}
			}
		}
	};

	type Slide =
		| 'intro'
		| 'terms'
		| 'referral-sources'
		| 'newsletter-and-permissions'
		| 'referrals'
		| 'programmes-of-interest'
		| 'participant-details'
		| 'participant-address'
		| 'emergency-contact-details'
		| 'identity'
		| 'medical-details';
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		if (browser) toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	const emblaCtx = getEmblaContext('<Carousel.Next/>');

	let activeSlide:
		| 'intro'
		| 'confidentiality'
		| 'participant-details'
		| 'participant-address'
		| 'emergency-contact-details'
		| 'identity'
		| 'referral-sources'
		| 'newsletter-and-permissions'
		| 'referrals'
		| 'programmes-of-interest'
		| 'medical-details' = 'intro';

	let formValue = $state({
		healthIssues: '',
		lifeSavingMedication: '',

		identity1: [] as string[],
		ethnicity: '',
		identity2: [] as string[],

		emergencyContact: {
			name: '',
			phone: '',
			relationship: ''
		},

		participantAddress: {
			line1: '',
			line2: '',
			townOrCity: '',
			postcode: ''
		},

		participantDetails: {
			name: '',
			dob: undefined as DateValue | undefined,
			email: '',
			phone: ''
		}
	});

	let showFormError = $state({
		slide: false,

		lifeSavingMedication: false,

		identity1: false,
		ethnicity: false,
		identity2: false,

		emergencyContact: {
			name: false,
			phoneNumber: false,
			relationship: false
		},

		participantAddress: {
			line1: false,
			line2: false,
			townOrCity: false,
			postcode: false
		},

		participantDetails: {
			name: false,
			dob: false,
			email: false,
			phone: false
		}
	});

	let programmesOfInterest = $state<string[]>([]);
	let showProgrammesOfInterestError = $state(false);
	let hopeToGet = $state<string>('');

	let referralComment = $state<string>('');

	let imagePermission = $state<string>('');
	let showImagePermissionError = $state(false);

	let newsletterPermission = $state<string>('');
	let showNewsletterPermissionError = $state(false);

	let textUpdatePermission = $state<string>('');
	let showTextUpdatePermissionError = $state(false);

	let referralSources = $state<string[]>([]);
	let showReferralSourcesError = $state(false);

	let showSlideError = $state(false);

	function validateCheckboxGroup(value: string[]) {
		return Boolean(value.length);
	}
	function validateRadioGroup(value: string) {
		return Boolean(value.length);
	}

	function scrollNext() {
		emblaCtx.scrollNext();
	}

	function handleNext() {
		if (activeSlide === 'intro') {
			scrollNext();
			activeSlide = 'confidentiality';
			return;
		}

		if (activeSlide === 'confidentiality') {
			scrollNext();
			activeSlide = 'participant-details';
			return;
		}

		if (activeSlide === 'participant-details') {
			if (
				!formValue.participantDetails.name.length ||
				!formValue.participantDetails.dob ||
				!isValidEmail(formValue.participantDetails.email) ||
				!isValidUkPhoneNumber(formValue.participantDetails.phone)
			) {
				showFormError.slide = true;

				showFormError.participantDetails.name = !formValue.participantDetails.name.length;
				showFormError.participantDetails.dob = !formValue.participantDetails.dob;
				showFormError.participantDetails.email = !isValidEmail(formValue.participantDetails.email);
				showFormError.participantDetails.phone = !isValidUkPhoneNumber(
					formValue.participantDetails.phone
				);

				return;
			}

			showFormError.participantDetails.name = false;
			showFormError.participantDetails.dob = false;
			showFormError.participantDetails.email = false;
			showFormError.participantDetails.phone = false;

			scrollNext();
			activeSlide = 'participant-address';
			return;
		}

		if (activeSlide === 'participant-address') {
			if (
				!formValue.participantAddress.line1.length ||
				!formValue.participantAddress.townOrCity.length ||
				!formValue.participantAddress.postcode.length
			) {
				showFormError.slide = true;

				showFormError.participantAddress.line1 = !formValue.participantAddress.line1.length;
				showFormError.participantAddress.townOrCity =
					!formValue.participantAddress.townOrCity.length;
				showFormError.participantAddress.postcode = !formValue.participantAddress.postcode.length;

				return;
			}

			showFormError.participantAddress.line1 = false;
			showFormError.participantAddress.townOrCity = false;
			showFormError.participantAddress.postcode = false;

			scrollNext();
			activeSlide = 'emergency-contact-details';
			return;
		}

		if (activeSlide === 'emergency-contact-details') {
			if (
				!formValue.emergencyContact.name ||
				!formValue.emergencyContact.phone ||
				!formValue.emergencyContact.relationship
			) {
				showFormError.slide = true;

				showFormError.emergencyContact.name = !formValue.emergencyContact.name.length;
				showFormError.emergencyContact.phoneNumber = !formValue.emergencyContact.phone.length;
				showFormError.emergencyContact.relationship =
					!formValue.emergencyContact.relationship.length;

				return;
			}

			showFormError.participantAddress.line1 = false;
			showFormError.participantAddress.townOrCity = false;
			showFormError.participantAddress.postcode = false;

			scrollNext();
			activeSlide = 'identity';
			return;
		}

		if (activeSlide === 'identity') {
			if (
				!formValue.identity1.length ||
				!formValue.ethnicity.length ||
				!formValue.identity2.length
			) {
				showFormError.slide = true;

				showFormError.identity1 = !formValue.identity1.length;
				showFormError.ethnicity = !formValue.ethnicity.length;
				showFormError.identity2 = !formValue.identity2.length;

				return;
			}

			showFormError.identity1 = false;
			showFormError.ethnicity = false;

			scrollNext();
			activeSlide = 'medical-details';
			return;
		}

		if (activeSlide === 'medical-details') {
			if (!formValue.lifeSavingMedication.length) {
				showFormError.slide = true;
				showFormError.lifeSavingMedication = true;
				return;
			}
			showFormError.lifeSavingMedication = false;
			scrollNext();
			activeSlide = 'programmes-of-interest';
			return;
		}

		if (activeSlide === 'programmes-of-interest') {
			if (!validateCheckboxGroup(programmesOfInterest)) {
				showSlideError = true;
				showProgrammesOfInterestError = true;
				return;
			}
			showProgrammesOfInterestError = false;
			scrollNext();
			activeSlide = 'referrals';
			return;
		}

		if (activeSlide === 'referrals') {
			scrollNext();
			activeSlide = 'newsletter-and-permissions';
			return;
		}

		if (activeSlide === 'newsletter-and-permissions') {
			if (
				!validateRadioGroup(imagePermission) ||
				!validateRadioGroup(newsletterPermission) ||
				!validateRadioGroup(textUpdatePermission)
			) {
				showSlideError = true;

				if (!validateRadioGroup(imagePermission)) showImagePermissionError = true;
				if (!validateRadioGroup(newsletterPermission)) showNewsletterPermissionError = true;
				if (!validateRadioGroup(textUpdatePermission)) showTextUpdatePermissionError = true;

				return;
			}
			showImagePermissionError = false;
			scrollNext();
			activeSlide = 'referral-sources';
			return;
		}

		if (activeSlide === 'referral-sources') {
			if (!validateCheckboxGroup(referralSources)) {
				showSlideError = true;
				showReferralSourcesError = true;
				return;
			}
			showReferralSourcesError = false;
			scrollNext();
			return;
		}

		return true;
	}

	function onSelect() {
		const activeIndex = emblaCtx.selectedIndex;
		console.log('activeIndex:', activeIndex);
	}

	$effect(() => {
		emblaCtx.api?.on('select', onSelect);
	});
</script>

<div
	class="bg-bc-logo-black/80 absolute top-8 right-10 z-50 flex items-center gap-2 rounded-full px-3 py-1 text-[15px]"
>
	<button
		class="cursor-pointer rounded-full border border-white p-[6px] text-white"
		onclick={onClickClose}
		type="button"
	>
		<SignOut weight="fill" />
	</button>
</div>

<Carousel.Content hiddenParentClass="flex flex-col h-full relative" class=" ml-0 h-full w-full">
	<Carousel.Item class="flex h-full basis-full flex-col pl-0" id={formId.intro}>
		<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
			<Card.Content class="flex h-full grow flex-col p-0 text-lg leading-relaxed">
				<Card.Header class="flex justify-between px-10">
					<div class="flex shrink-0 -translate-x-[10px]">
						<div class="translate-x-[10px] translate-y-[21px]">
							<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
						</div>

						<a class="font-display relative flex flex-col text-4xl font-bold" href="/">
							<span class="translate-x-[20px]">The</span>
							<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
							<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
						</a>
					</div>
				</Card.Header>

				<Card.Content class="mt-10 grow px-10">
					<h1 class="text-bc-amber/70 font-display mt-8 text-2xl font-bold">Programme Sign Up</h1>
					<h2 class="font-display text-bc-logo-black mt-4 text-4xl font-bold">
						Welcome to The Birch Collective!
					</h2>

					<p class="mt-10 leading-relaxed">
						The following questions help us get to know a bit about you. We need to take some really
						basic info from you, such as your contact details. This means we can get in touch with
						you so we can discuss getting started - so please double-check the details you're giving
						us are correct!
					</p>
				</Card.Content>
			</Card.Content>
		</Card.Root>
	</Carousel.Item>

	<Carousel.Item class="flex h-full basis-full flex-col pl-0">
		<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
			<Card.Content class="flex h-full grow flex-col  p-0 text-lg leading-relaxed">
				<Card.Header class="flex justify-between px-10">
					<div>
						<h2 class="font-display text-bc-logo-black mt-12 text-4xl font-bold">
							Confidentiality
						</h2>
					</div>
				</Card.Header>

				<Card.Content class="mt-12 grow overflow-y-auto px-10">
					<p class="">
						<span>
							First up, we need you to read and understand our confidentiality statement:
						</span>
					</p>
					<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
						Anything you talk about with one of our team is kept totally private within Birch. We
						won't share what you tell us with anyone else. But if there was an extreme situation,
						like if you or someone else was at risk of being seriously hurt, then we would need to
						break confidentiality to keep you safe. If this happened we would discuss it with you
						first and do our best to make sure you were involved in any decisions that have to be
						made. We know this can be scary and you might not want us to share anything, but we will
						support you through the whole thing.
					</p>

					<p class="mt-10">We also need you to read our GDPR statement:</p>
					<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
						<span>
							By signing this form, you are giving us permission to contact you about opportunities
							and events from the Birch Collective. In order to comply with the General Data
							Protection Regulation, The Birch Collective is seeking your consent to hold your
							information on our database. We are required by our funders to gather information
							about the people who use our services. We will not share your information with third
							parties other than those you have agreed to. We use and store any information that you
							give us in accordance with the Data Protection Act 2003. Information you provide will
							be anonymised before being used in monitoring and evaluation reports for our current
							funders, to support funding applications. Your data will be held for a maximum of 2
							years after your last engagement. For further details on our data protection and
							information sharing policies or for any queries about the data we hold, please get in
							touch:
						</span>
						<span class="mt-4 flex flex-col gap-2">
							<span class="flex items-center gap-2">
								<span>Email:</span>
								<a
									class="font-medium"
									href={`mailto:${PUBLIC_BIRCH_GDPR_CONTACT_EMAIL}`}
									target="_blank">{PUBLIC_BIRCH_GDPR_CONTACT_EMAIL}</a
								>
							</span>

							<span class="flex items-center gap-2">
								<span>Phone:</span>

								<a
									class="font-medium"
									href={`tel:${PUBLIC_BIRCH_GDPR_CONTACT_PHONE}`}
									target="_blank">{PUBLIC_BIRCH_GDPR_CONTACT_PHONE}</a
								>
							</span>
						</span>
					</p>
				</Card.Content>
			</Card.Content>
		</Card.Root>
	</Carousel.Item>

	<CarouselItem title={slideContent.participantDetails.title} showError={showFormError.slide}>
		<Question title={slideContent.participantDetails.question.details.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slideContent.participantDetails.question.details.parts.name.label}
					placeholder="Enter here"
					bind:value={formValue.participantDetails.name}
					id={formId.participantDetails + 'name'}
					showError={showFormError.participantDetails.name}
					errorText="Please enter your full name"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantDetails.name = false;
					}}
				/>

				<div>
					<div class="mb-2 flex items-center gap-6">
						<Label class="text-black/50" for={formId.participantDetails + 'dob'}
							>{slideContent.participantDetails.question.details.parts.dob.label}</Label
						>
					</div>

					<DatePicker
						bind:value={formValue.participantDetails.dob}
						onValueChange={() => {
							showFormError.slide = false;
							showFormError.participantDetails.dob = false;
						}}
					/>

					{#if showFormError.participantDetails.dob}
						<p
							class="mt-6 text-sm text-red-500"
							transition:fade={{ duration: 100, delay: 50, easing: elasticIn }}
						>
							Please pick a Date of Birth
						</p>
					{/if}
				</div>

				<TextInput
					label={slideContent.participantDetails.question.details.parts.email.label}
					placeholder="Enter here"
					bind:value={formValue.participantDetails.email}
					id={formId.participantDetails + 'email'}
					showError={showFormError.participantDetails.email}
					errorText="Please enter a valid email"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantDetails.email = false;
					}}
				/>

				<TextInput
					label={slideContent.participantDetails.question.details.parts.phone.label}
					bind:value={formValue.participantDetails.phone}
					id={formId.participantDetails + 'phone'}
					showError={showFormError.participantDetails.phone}
					errorText="Please enter a valid UK phone number"
					inputmode="tel"
					placeholder="e.g. +44 7123 456789"
					type="tel"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantDetails.phone = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slideContent.participantAddress.title} showError={showFormError.slide}>
		<Question title={slideContent.participantAddress.question.address.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slideContent.participantAddress.question.address.parts.line1.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.line1}
					id={formId.participantAddress + 'line1'}
					showError={showFormError.participantAddress.line1}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantAddress.line1 = false;
					}}
				/>

				<TextInput
					label={slideContent.participantAddress.question.address.parts.line2.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.line2}
					id={formId.participantAddress + 'line2'}
					required="optional"
				/>

				<TextInput
					label={slideContent.participantAddress.question.address.parts.townOrCity.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.townOrCity}
					id={formId.participantAddress + 'town-or-city'}
					showError={showFormError.participantAddress.townOrCity}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantAddress.townOrCity = false;
					}}
				/>

				<TextInput
					label={slideContent.participantAddress.question.address.parts.postcode.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.postcode}
					id={formId.participantAddress + 'postcode'}
					showError={showFormError.participantAddress.postcode}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantAddress.postcode = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slideContent.emergencyContactDetails.title} showError={showFormError.slide}>
		<Question
			title={slideContent.emergencyContactDetails.question.emergencyContact.title}
			required={false}
		>
			<div class="flex flex-col gap-8">
				<TextInput
					label="Name"
					placeholder="Enter here"
					bind:value={formValue.emergencyContact.name}
					id={formId.emergencyContact + 'name'}
					showError={showFormError.emergencyContact.name}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.emergencyContact.name = false;
					}}
				/>

				<TextInput
					label="Phone number"
					inputmode="tel"
					placeholder="e.g. +44 7123 456789"
					bind:value={formValue.emergencyContact.phone}
					id={formId.emergencyContact + 'phone'}
					showError={showFormError.emergencyContact.phoneNumber}
					type="tel"
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.emergencyContact.phoneNumber = false;
					}}
				/>

				<TextInput
					label="Relationship"
					placeholder="e.g. mother, friend"
					bind:value={formValue.emergencyContact.relationship}
					id={formId.emergencyContact + 'relationship'}
					showError={showFormError.emergencyContact.relationship}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.emergencyContact.relationship = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slideContent.identity.title} showError={showFormError.slide}>
		<Question
			title={slideContent.identity.question.identity1.title}
			required={slideContent.identity.question.identity1.required}
			showError={showFormError.identity1}
			errorText={slideContent.identity.question.identity1.errorText}
		>
			<CheckboxGroup
				options={slideContent.identity.question.identity1.options.map((option) => ({
					value: option
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[^\w+-]+/g, ''),
					label: option
				}))}
				onCheckedChange={() => {
					showFormError.slide = false;
					showFormError.identity1 = false;
				}}
				bind:group={formValue.identity1}
				idPrefix={formId.identity}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slideContent.identity.question.ethnicity.title}
			required={slideContent.identity.question.ethnicity.required}
			showError={showFormError.ethnicity}
			errorText={slideContent.medicalDetails.question.lifeSavingMedication.errorText}
		>
			<TextInput
				bind:value={formValue.lifeSavingMedication}
				onkeyup={() => {
					showFormError.slide = false;
					showFormError.lifeSavingMedication = false;
				}}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title={slideContent.medicalDetails.title} showError={showFormError.slide}>
		<Question
			title={slideContent.medicalDetails.question.healthIssues.title}
			required={slideContent.medicalDetails.question.healthIssues.required}
		>
			<Textarea bind:value={formValue.healthIssues} />
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slideContent.medicalDetails.question.lifeSavingMedication.title}
			required={slideContent.medicalDetails.question.lifeSavingMedication.required}
			showError={showFormError.lifeSavingMedication}
			errorText={slideContent.medicalDetails.question.lifeSavingMedication.errorText}
		>
			<Textarea
				bind:value={formValue.lifeSavingMedication}
				onkeyup={() => {
					showFormError.slide = false;
					showFormError.lifeSavingMedication = false;
				}}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title="Programme interest" showError={showSlideError}>
		<Question
			title="Which programmes are you interested in and would like some more information about?"
			required="Tick all that apply to you. Pick at least one."
			bind:showError={showProgrammesOfInterestError}
			errorText="Please select at least one option"
		>
			<CheckboxGroup
				options={[
					{ value: '1-1-nature-based-mentoring', label: '1:1 Nature-Based Mentoring' },
					{ value: 'fresh-air-thursdays', label: 'Fresh Air Thursdays' },
					{ value: 'recoupe-working-woods', label: 'Recoupe: Working Woods' },
					{
						value: 'seeding-change-plant-your-future',
						label: 'Seeding Change: Plant Your Future'
					},
					{ value: 'steering-group-workshops', label: 'Steering Group Workshops' },
					{ value: 'therapeutic-forest-school', label: 'Therapeutic Forest School' }
				]}
				onCheckedChange={() => {
					showProgrammesOfInterestError = false;
					showSlideError = false;
				}}
				bind:group={programmesOfInterest}
				idPrefix={formId.programmesOfInterest}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title="What do you hope to get out of going to The Birch Collective's sessions or programmes?"
		>
			<Textarea bind:value={hopeToGet} />
		</Question>
	</CarouselItem>

	<CarouselItem title="Referrals" showError={showSlideError}>
		<Question
			title="If you're a professional referring a client, is there any additional information you think is important to share about your client?"
		>
			<Textarea bind:value={referralComment} />
		</Question>
	</CarouselItem>

	<CarouselItem title="Newsletter & Permissions" showError={showSlideError}>
		<Question
			title="Do you give The Birch Collective permission to take photographs or videos of you with the intention to use in publicity materials?"
			subtext="They'll be used in e.g. social media sites, website, reporting to funders, newspapers and magazine articles. Images will not be given to third parties."
			required="Please select a response"
			bind:showError={showImagePermissionError}
			errorText="Please select a response"
		>
			<RadioGroup.Root
				bind:value={imagePermission}
				onValueChange={() => {
					showImagePermissionError = false;
					showSlideError = false;
				}}
			>
				<RadioGroupItem value="yes" id={formId.imagePermission + 'yes'} labelText="Yes" />
				<RadioGroupItem value="no" id={formId.imagePermission + 'no'} labelText="No" />
			</RadioGroup.Root>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title="Would you like to be added to the Birch Collectives monthly newsletter?"
			subtext="We'll inform you about new programmes and services we're running."
			required="Please select a response"
			bind:showError={showNewsletterPermissionError}
			errorText="Please select a response"
		>
			<RadioGroup.Root
				bind:value={newsletterPermission}
				onValueChange={() => {
					showNewsletterPermissionError = false;
					showSlideError = false;
				}}
			>
				<RadioGroupItem value="yes" id={formId.newsletterPermission + 'yes'} labelText="Yes" />
				<RadioGroupItem value="no" id={formId.newsletterPermission + 'no'} labelText="No" />
			</RadioGroup.Root>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title="Would you like to be added to a weekly text update/reminder telling you what's going on at Fresh Air Thursday?"
			subtext="You can be removed at anytime by simply replying STOP."
			required="Please select a response"
			bind:showError={showTextUpdatePermissionError}
			errorText="Please select a response"
		>
			<RadioGroup.Root
				bind:value={textUpdatePermission}
				onValueChange={() => {
					showTextUpdatePermissionError = false;
					showSlideError = false;
				}}
			>
				<RadioGroupItem value="yes" id={formId.textUpdatePermission + 'yes'} labelText="Yes" />
				<RadioGroupItem value="no" id={formId.textUpdatePermission + 'no'} labelText="No" />
			</RadioGroup.Root>
		</Question>
	</CarouselItem>

	<CarouselItem title="How did you find out about us?" showError={showSlideError}>
		<Question
			title="How did you hear about the Birch Collective?"
			required="Tick all that apply to you"
			bind:showError={showReferralSourcesError}
			errorText="Please select at least one response"
		>
			<CheckboxGroup
				options={[
					{ value: 'birch-social', label: 'The Birch Collective social media' },
					{ value: 'other-social', label: 'Other social media' },
					{ value: 'web-search', label: 'Web search' },
					{ value: 'teacher', label: 'Teacher' },
					{ value: 'gp', label: 'GP or other medical professional' },
					{ value: 'friend', label: 'Friend' },
					{ value: 'parent-carer', label: 'Parent or carer' },
					{ value: 'other', label: 'Other' }
				]}
				onCheckedChange={() => {
					showReferralSourcesError = false;
					showSlideError = false;
				}}
				bind:group={referralSources}
				idPrefix={formId.referralSource}
			/>
		</Question>
	</CarouselItem>
</Carousel.Content>

<div class="relative flex w-full shrink-0 items-center justify-center p-3">
	<div class="relative">
		<Carousel.Previous
			class="absolute top-1/2 -left-6 size-7 !-translate-x-full !-translate-y-1/2 translate-none !cursor-pointer "
		/>
		<NextButton handleGoNext={handleNext} />
	</div>
</div>
