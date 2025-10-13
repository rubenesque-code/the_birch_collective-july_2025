<script lang="ts" module>
	import { SignOut } from 'phosphor-svelte';
	import { fade, scale } from 'svelte/transition';

	import { browser } from '$app/environment';
	import {
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { toggleBodyScroll } from '^helpers';

	import image from '^assets/image';
	import { Card, Carousel, RadioGroup } from '^components/ui';
	import CarouselItem from './carousel-item.svelte';
	import { CheckboxGroup, Question, RadioGroupItem, Textarea, TextInput } from './elements';
	import NextButton from './next-button.svelte';

	const formId = {
		newsletterPermission: 'sign-up-form-newsletter-permission',
		imagePermission: 'sign-up-form-image-permission',
		textUpdatePermission: 'sign-up-form-text-permission',
		referralSource: 'sign-up-form-referral-source',
		programmesOfInterest: 'programmes-of-interest',
		referralComment: 'referral-comment',
		identity: 'identity',
		emergencyContact: 'emergency-contact'
	};

	const slideContent = {
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
		},
		identity: {
			title: 'Identity',
			question: {
				identity: {
					title: 'Do you identify as any of the following?',
					required: 'Tick all that apply to you. Pick at least one.',
					errorText: 'Please select at least one option',
					id: 'identity',
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
				}
			}
		}
	};
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		if (browser) toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	let activeSlide:
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
		| 'medical-details' = 'identity';

	let formValue = $state({
		healthIssues: '',
		lifeSavingMedication: '',

		identity: [] as string[],
		ethnicity: '',

		emergencyContact: {
			name: '',
			phone: '',
			relationship: ''
		}
	});

	let showFormError = $state({
		slide: false,

		lifeSavingMedication: false,
		identity: false,
		ethnicity: false,

		emergencyContact: {
			name: false,
			phoneNumber: false,
			relationship: false
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

	function handleNext({ scrollNext }: { scrollNext: () => void }) {
		if (activeSlide === 'identity') {
			if (!formValue.identity.length || !formValue.ethnicity.length) {
				showFormError.slide = true;

				if (!formValue.identity.length) showFormError.identity = true;
				else showFormError.identity = false;

				if (!formValue.ethnicity.length) showFormError.ethnicity = true;
				else showFormError.ethnicity = false;

				return;
			}

			showFormError.identity = false;
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
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/90"
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed inset-0 z-[60] grid place-items-center"
		transition:scale={{ start: 0.9, opacity: 0, duration: 300 }}
	>
		<div>
			<div class="relative mx-2 overflow-visible shadow-xl">
				<Carousel.Root
					class="relative flex h-[800px] max-h-[90vh] w-[95vw] max-w-[800px] flex-col rounded-lg bg-white px-4 py-3"
					opts={{ align: 'center' }}
				>
					<Carousel.Content hiddenParentClass="flex flex-col h-full" class="ml-0 h-full w-full">
						<CarouselItem
							title={slideContent.emergencyContactDetails.title}
							showError={showFormError.slide}
							{onClickClose}
						>
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
									/>

									<TextInput
										label="Phone number"
										inputmode="tel"
										placeholder="e.g. +44 7123 456789"
										bind:value={formValue.emergencyContact.phone}
										id={formId.emergencyContact + 'phone'}
										showError={showFormError.emergencyContact.phoneNumber}
										type="tel"
									/>

									<TextInput
										label="Relationship"
										placeholder="Enter here"
										bind:value={formValue.emergencyContact.relationship}
										id={formId.emergencyContact + 'relationship'}
										showError={showFormError.emergencyContact.relationship}
									/>
								</div>
							</Question>
						</CarouselItem>

						<CarouselItem
							title={slideContent.identity.title}
							showError={showFormError.slide}
							{onClickClose}
						>
							<Question
								title={slideContent.identity.question.identity.title}
								required={slideContent.identity.question.identity.required}
								showError={showFormError.identity}
								errorText={slideContent.identity.question.identity.errorText}
							>
								<CheckboxGroup
									options={slideContent.identity.question.identity.options.map((option) => ({
										value: option
											.toLowerCase()
											.replace(/\s+/g, '-')
											.replace(/[^\w+-]+/g, ''),
										label: option
									}))}
									onCheckedChange={() => {
										showFormError.slide = false;
										showFormError.identity = false;
									}}
									bind:group={formValue.identity}
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
						<CarouselItem
							title={slideContent.medicalDetails.title}
							showError={showFormError.slide}
							{onClickClose}
						>
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

						<CarouselItem title="Programme interest" showError={showSlideError} {onClickClose}>
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

						<CarouselItem title="Referrals" showError={showSlideError} {onClickClose}>
							<Question
								title="If you're a professional referring a client, is there any additional information you think is important to share about your client?"
							>
								<Textarea bind:value={referralComment} />
							</Question>
						</CarouselItem>

						<CarouselItem
							title="Newsletter & Permissions"
							showError={showSlideError}
							{onClickClose}
						>
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
									<RadioGroupItem
										value="yes"
										id={formId.newsletterPermission + 'yes'}
										labelText="Yes"
									/>
									<RadioGroupItem
										value="no"
										id={formId.newsletterPermission + 'no'}
										labelText="No"
									/>
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
									<RadioGroupItem
										value="yes"
										id={formId.textUpdatePermission + 'yes'}
										labelText="Yes"
									/>
									<RadioGroupItem
										value="no"
										id={formId.textUpdatePermission + 'no'}
										labelText="No"
									/>
								</RadioGroup.Root>
							</Question>
						</CarouselItem>

						<CarouselItem
							title="How did you find out about us?"
							showError={showSlideError}
							{onClickClose}
						>
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

						<Carousel.Item class="flex h-full basis-full flex-col pl-0">
							<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
								<Card.Content class="flex h-full grow flex-col  p-0 text-lg leading-relaxed">
									<Card.Header class="flex justify-between px-10">
										<div>
											<h2 class="font-display text-bc-logo-black mt-12 text-4xl font-bold">
												Confidentiality
											</h2>
										</div>

										<div
											class="bg-bc-logo-black/80 flex items-center gap-2 rounded-full px-3 py-1 text-[15px]"
										>
											<button
												class="!cursor-pointer rounded-full border border-white p-[6px] text-white"
												onclick={onClickClose}
												type="button"
											>
												<SignOut weight="fill" />
											</button>
										</div>
									</Card.Header>

									<Card.Content class="mt-12 grow overflow-y-auto px-10">
										<p class="">
											<span>
												First up, we need you to read and understand our confidentiality statement:
											</span>
										</p>
										<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
											Anything you talk about with one of our team is kept totally private within
											Birch. We won't share what you tell us with anyone else. But if there was an
											extreme situation, like if you or someone else was at risk of being seriously
											hurt, then we would need to break confidentiality to keep you safe. If this
											happened we would discuss it with you first and do our best to make sure you
											were involved in any decisions that have to be made. We know this can be scary
											and you might not want us to share anything, but we will support you through
											the whole thing.
										</p>

										<p class="mt-10">We also need you to read our GDPR statement:</p>
										<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
											<span>
												By signing this form, you are giving us permission to contact you about
												opportunities and events from the Birch Collective. In order to comply with
												the General Data Protection Regulation, The Birch Collective is seeking your
												consent to hold your information on our database. We are required by our
												funders to gather information about the people who use our services. We will
												not share your information with third parties other than those you have
												agreed to. We use and store any information that you give us in accordance
												with the Data Protection Act 2003. Information you provide will be
												anonymised before being used in monitoring and evaluation reports for our
												current funders, to support funding applications. Your data will be held for
												a maximum of 2 years after your last engagement. For further details on our
												data protection and information sharing policies or for any queries about
												the data we hold, please get in touch:
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

						<Carousel.Item class="flex h-full basis-full flex-col pl-0">
							<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
								<Card.Content class="flex h-full grow flex-col p-0 text-lg leading-relaxed">
									<Card.Header class="flex justify-between px-10">
										<div class="flex shrink-0 -translate-x-[10px]">
											<div class="translate-x-[10px] translate-y-[21px]">
												<enhanced:img class="w-[68px]" src={image.birch.logo.img_only} alt="" />
											</div>

											<a class="font-display relative flex flex-col text-4xl font-bold" href="/">
												<span class="translate-x-[20px]">The</span>
												<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span
												>
												<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
											</a>
										</div>
										<div
											class="bg-bc-logo-black/80 flex items-center gap-2 rounded-full px-3 py-1 text-[15px]"
										>
											<button
												class="rounded-full border border-white p-[6px] text-white"
												onclick={onClickClose}
												type="button"
											>
												<SignOut weight="fill" />
											</button>
										</div>
									</Card.Header>

									<Card.Content class="grow px-10">
										<h1 class="text-bc-amber/60 mt-8 font-medium">Sign Up</h1>
										<h2 class="font-display text-bc-logo-black mt-2 text-4xl font-bold">
											Welcome to The Birch Collective!
										</h2>

										<p class="mt-10">
											The following questions help us get to know a bit about you. We need to take
											some really basic info from you, such as your contact details. This means we
											can get in touch with you so we can discuss getting started - so please
											double-check the details you're giving us are correct!
										</p>
									</Card.Content>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>
					</Carousel.Content>

					<div class="relative flex w-full shrink-0 items-center justify-between p-3">
						<div></div>

						<div class="relative">
							<Carousel.Previous
								class="absolute top-1/2 -left-6 size-7 !-translate-x-full !-translate-y-1/2 translate-none !cursor-pointer "
							/>
							<NextButton handleGoNext={handleNext} />
						</div>

						<!-- <Carousel.Next class="static translate-none cursor-pointer" /> -->
						<div></div>
					</div>
				</Carousel.Root>
			</div>
		</div>
	</div>
{/if}

<!-- Medical Details
Identity
Emergency Contact Details
Your Address
Your Details -->

<!-- 						
						
						

						

						<Carousel.Item class="flex basis-full flex-col pl-0">
							<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
								<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
									<Card.Title
										class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
										>Emergency Contact Details</Card.Title
									>

									<div class="grid max-h-full grow place-items-center overflow-auto">
										<div class="flex w-full flex-col gap-6 px-1">
											<div>
												<Label class="text-black/50" for="emergency full name">Full name</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Contact full name"
													id="emergency full name"
													type="text"
												/>
												<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
											</div>

											<div>
												<Label class="text-black/50" for="emergency phone">Phone number</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Contact phone number"
													id="phone"
													type="tel"
												/>
												<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
											</div>

											<div>
												<Label class="text-black/50" for="relationship">Relationship</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Contact relationship"
													id="relationship"
													type="text"
												/>
												<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
											</div>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>

						<Carousel.Item class="flex basis-full flex-col pl-0">
							<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
								<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
									<Card.Title
										class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
										>Your Address</Card.Title
									>

									<div class="grid max-h-full grow place-items-center overflow-auto">
										<div class="flex w-full flex-col gap-10 px-1">
											<div>
												<Label class="text-black/50" for="address line 1">Line 1</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Line 1"
													id="address line 1"
													type="text"
												/>
											</div>

											<div>
												<Label class="text-black/50" for="address line 2">Line 2</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Line 2"
													id="address line 2"
													type="text"
												/>
											</div>

											<div>
												<Label class="text-black/50" for="Town/City">Town/City</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Town/City"
													id="Town/City"
													type="text"
												/>
											</div>

											<div>
												<Label class="text-black/50" for="Postcode">Postcode</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Postcode"
													id="Postcode"
													type="text"
												/>
											</div>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>

						<Carousel.Item class="flex basis-full flex-col pl-0">
							<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
								<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
									<Card.Title
										class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
										>Your Details</Card.Title
									>

									<div class="grid max-h-full grow place-items-center overflow-auto">
										<div class="flex w-full flex-col gap-10 px-1">
											<div>
												<Label class="text-black/50" for="full name">Full name</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Your full name"
													id="full name"
													type="text"
												/>
											</div>

											<div>
												<Label class="text-black/50" for="dob">Date of birth</Label>
												<div class="mt-2">
													<DatePicker />
												</div>
											</div>

											<div>
												<Label class="text-black/50" for="email">Email address</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Your email address"
													id="email"
													type="email"
												/>
											</div>

											<div>
												<Label class="text-black/50" for="phone">Phone number</Label>
												<Input
													class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
													placeholder="Your phone number"
													id="phone"
													type="tel"
												/>
											</div>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>

						

						

						
					 -->

<!-- 	let activeSlide: 'intro' | 'terms' | 'referralSources' = 'referralSources';

	let newsletterPermission = $state<'yes' | 'no' | ''>('');
	let imagePermission = $state<'yes' | 'no' | ''>('');
	let textPermission = $state<'yes' | 'no' | ''>(''); -->

<!-- 	
	working class
someone with a disablity
male or male identifying
care experienced
lgbtq+
english as a second language
black or a person of colours
unemployed or not in education or training
none of the above 
-->

<!-- girl/woman/female
boy/man/male
non-binary
queer
other
prefer not to say -->

<!-- 1:1 Nature-Based Mentoring
Fresh-Air-Thursdays
Recoupe: working Woods
Seeding Change: Plant your future
Steering Group Workshops
Therapeutic forest school -->
