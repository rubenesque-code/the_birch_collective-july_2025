<script lang="ts" module>
	import type { DateValue } from '@internationalized/date';
	import { SignOut } from 'phosphor-svelte';
	import { elasticIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import {
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { isValidEmail, isValidUkPhoneNumber, strToLowercaseHyphenated } from '^helpers';

	import image from '^assets/image';

	import { Card, Carousel, Label, RadioGroup } from '^components/ui';
	import { getEmblaContext } from '^components/ui/carousel/context';
	import CarouselItem from './carousel-item.svelte';
	import {
		CheckboxGroup,
		DatePicker,
		Question,
		RadioGroupItem,
		Textarea,
		TextInput
	} from './elements';
	import { slides } from '^content/sign-up-form';
	import { signUpFormId } from '^constants';
</script>

<script lang="ts">
	let { onClickClose } = $props<{
		onClickClose: () => void;
	}>();

	const emblaCtx = getEmblaContext();

	let activeSlideIndex = $state(0);

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
		},

		programmesOfInterest: [] as string[],
		hopeToGet: '',
		referralComment: '',
		imagePermission: '',
		newsletterPermission: '',
		textUpdatePermission: '',
		referralSources: [] as string[]
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
		},

		programmesOfInterest: false,
		imagePermission: false,
		newsletterPermission: false,
		textUpdatePermission: false,
		referralSources: false,
		slideError: false
	});

	function validateCheckboxGroup(value: string[]) {
		return Boolean(value.length);
	}
	function validateRadioGroup(value: string) {
		return Boolean(value.length);
	}

	function handleNext() {
		if (activeSlideIndex === 0) {
			emblaCtx.scrollNext();
			activeSlideIndex = 1;
			return;
		}

		if (activeSlideIndex === 1) {
			emblaCtx.scrollNext();
			activeSlideIndex = 2;
			return;
		}

		if (activeSlideIndex === 2) {
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

			emblaCtx.scrollNext();
			activeSlideIndex = 3;
			return;
		}

		if (activeSlideIndex === 3) {
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

			emblaCtx.scrollNext();
			activeSlideIndex = 4;
			return;
		}

		if (activeSlideIndex === 4) {
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

			emblaCtx.scrollNext();
			activeSlideIndex = 5;
			return;
		}

		if (activeSlideIndex === 5) {
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

			emblaCtx.scrollNext();
			activeSlideIndex = 6;
			return;
		}

		if (activeSlideIndex === 6) {
			if (!formValue.lifeSavingMedication.length) {
				showFormError.slide = true;
				showFormError.lifeSavingMedication = true;
				return;
			}
			showFormError.lifeSavingMedication = false;
			emblaCtx.scrollNext();
			activeSlideIndex = 7;
			return;
		}

		if (activeSlideIndex === 7) {
			if (!validateCheckboxGroup(formValue.programmesOfInterest)) {
				showFormError.slideError = true;
				showFormError.programmesOfInterest = true;
				return;
			}
			showFormError.programmesOfInterest = false;
			emblaCtx.scrollNext();
			activeSlideIndex = 8;
			return;
		}

		if (activeSlideIndex === 8) {
			emblaCtx.scrollNext();
			activeSlideIndex = 9;
			return;
		}

		if (activeSlideIndex === 9) {
			if (
				!validateRadioGroup(formValue.imagePermission) ||
				!validateRadioGroup(formValue.newsletterPermission) ||
				!validateRadioGroup(formValue.textUpdatePermission)
			) {
				showFormError.slideError = true;

				if (!validateRadioGroup(formValue.imagePermission)) showFormError.imagePermission = true;
				if (!validateRadioGroup(formValue.newsletterPermission))
					showFormError.newsletterPermission = true;
				if (!validateRadioGroup(formValue.textUpdatePermission))
					showFormError.textUpdatePermission = true;

				return;
			}

			showFormError.imagePermission = false;
			showFormError.newsletterPermission = false;
			showFormError.textUpdatePermission = false;

			emblaCtx.scrollNext();
			activeSlideIndex = 10;
			return;
		}

		if (activeSlideIndex === 10) {
			if (!validateCheckboxGroup(formValue.referralSources)) {
				showFormError.slideError = true;
				showFormError.referralSources = true;
				return;
			}
			showFormError.referralSources = false;
			emblaCtx.scrollNext();
			return;
		}

		return true;
	}

	function onSelect() {
		activeSlideIndex = emblaCtx.selectedIndex;
	}

	$effect(() => {
		if (!emblaCtx.api) {
			return;
		}

		emblaCtx.api.on('select', onSelect);
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
							<span class="translate-x-[40px] translate-y-[-10px] text-[66px]">Birch</span>
							<span class="translate-x-[0px] translate-y-[-20px]">Collective</span>
						</a>
					</div>
				</Card.Header>

				<Card.Content class="mt-16 grow px-10">
					<p class="font-display text-bc-amber mt-4 text-center text-4xl font-bold">
						Thanks for taking the time to complete our sign-up form.
					</p>
					<div class="flex flex-col items-center">
						<p class="mt-8">To finish, click submit at the bottom of the page</p>
					</div>

					<div
						class="text-bc-logo-black/70 bg-my-grey-3/10 border-my-grey-2 mt-24 flex flex-col rounded-lg border p-4"
					>
						<h3 class="font-medium">What happens next?</h3>
						<p class="mt-2 leading-relaxed">
							One of the Birch team will be in touch with you shortly about the next steps in
							joining our programmes.
						</p>
					</div>
				</Card.Content>
			</Card.Content>
		</Card.Root>
	</Carousel.Item>
	<Carousel.Item class="flex h-full basis-full flex-col pl-0" id={signUpFormId.intro}>
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
					<h1 class="text-bc-amber/70 font-display mt-8 text-2xl font-bold">
						{slides.intro.title}
					</h1>
					<h2 class="font-display text-bc-logo-black mt-4 text-4xl font-bold">
						{slides.intro.subtitle}
					</h2>

					<p class="mt-10 leading-relaxed">{slides.intro.text}</p>
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
							{slides.confidentiality.title}
						</h2>
					</div>
				</Card.Header>

				<Card.Content class="mt-12 grow overflow-y-auto px-10">
					<p class="">
						<span>
							{slides.confidentiality.confidentiality.intro}
						</span>
					</p>
					<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
						{slides.confidentiality.confidentiality.text}
					</p>

					<p class="mt-10">
						{slides.confidentiality.gdpr.intro}
					</p>
					<p class="border-my-grey-3 bg-my-grey-3/10 mt-6 rounded-md border p-8">
						<span>
							{slides.confidentiality.gdpr.text}
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

	<CarouselItem title={slides.participantDetails.title} showError={showFormError.slide}>
		<Question title={slides.participantDetails.question.details.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slides.participantDetails.question.details.parts.name.label}
					placeholder="Enter here"
					bind:value={formValue.participantDetails.name}
					id={signUpFormId.participantDetails + 'name'}
					showError={showFormError.participantDetails.name}
					errorText="Please enter your full name"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantDetails.name = false;
					}}
				/>

				<div>
					<div class="mb-2 flex items-center gap-6">
						<Label class="text-black/50" for={signUpFormId.participantDetails + 'dob'}
							>{slides.participantDetails.question.details.parts.dob.label}</Label
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
					label={slides.participantDetails.question.details.parts.email.label}
					placeholder="Enter here"
					bind:value={formValue.participantDetails.email}
					id={signUpFormId.participantDetails + 'email'}
					showError={showFormError.participantDetails.email}
					errorText="Please enter a valid email"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantDetails.email = false;
					}}
				/>

				<TextInput
					label={slides.participantDetails.question.details.parts.phone.label}
					bind:value={formValue.participantDetails.phone}
					id={signUpFormId.participantDetails + 'phone'}
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

	<CarouselItem title={slides.participantAddress.title} showError={showFormError.slide}>
		<Question title={slides.participantAddress.question.address.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slides.participantAddress.question.address.parts.line1.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.line1}
					id={signUpFormId.participantAddress + 'line1'}
					showError={showFormError.participantAddress.line1}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantAddress.line1 = false;
					}}
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.line2.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.line2}
					id={signUpFormId.participantAddress + 'line2'}
					required="optional"
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.townOrCity.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.townOrCity}
					id={signUpFormId.participantAddress + 'town-or-city'}
					showError={showFormError.participantAddress.townOrCity}
					errorText="Please enter a response"
					onkeyup={() => {
						showFormError.slide = false;
						showFormError.participantAddress.townOrCity = false;
					}}
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.postcode.label}
					placeholder="Enter here"
					bind:value={formValue.participantAddress.postcode}
					id={signUpFormId.participantAddress + 'postcode'}
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

	<CarouselItem title={slides.emergencyContactDetails.title} showError={showFormError.slide}>
		<Question
			title={slides.emergencyContactDetails.question.emergencyContact.title}
			required={false}
		>
			<div class="flex flex-col gap-8">
				<TextInput
					label="Name"
					placeholder="Enter here"
					bind:value={formValue.emergencyContact.name}
					id={signUpFormId.emergencyContact + 'name'}
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
					id={signUpFormId.emergencyContact + 'phone'}
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
					id={signUpFormId.emergencyContact + 'relationship'}
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

	<CarouselItem title={slides.identity.title} showError={showFormError.slide}>
		<Question
			title={slides.identity.question.identity1.title}
			required={slides.identity.question.identity1.required}
			showError={showFormError.identity1}
			errorText={slides.identity.question.identity1.errorText}
		>
			<CheckboxGroup
				options={slides.identity.question.identity1.options.map((option) => ({
					value: strToLowercaseHyphenated(option),
					label: option
				}))}
				onCheckedChange={() => {
					showFormError.slide = false;
					showFormError.identity1 = false;
				}}
				bind:group={formValue.identity1}
				idPrefix={signUpFormId.identity}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.identity.question.ethnicity.title}
			required={slides.identity.question.ethnicity.required}
			showError={showFormError.ethnicity}
			errorText={slides.medicalDetails.question.lifeSavingMedication.errorText}
		>
			<Textarea
				bind:value={formValue.lifeSavingMedication}
				onkeyup={() => {
					showFormError.slide = false;
					showFormError.lifeSavingMedication = false;
				}}
			/>
		</Question>

		<div class="border-bc-amber/30 mt-4 border-b-2"></div>

		<Question
			title={slides.identity.question.identity2.title}
			required={slides.identity.question.identity2.required}
			showError={showFormError.identity1}
			errorText={slides.identity.question.identity2.errorText}
		>
			<CheckboxGroup
				options={slides.identity.question.identity2.options.map((option) => ({
					value: strToLowercaseHyphenated(option),
					label: option
				}))}
				onCheckedChange={() => {
					showFormError.slide = false;
					showFormError.identity2 = false;
				}}
				bind:group={formValue.identity2}
				idPrefix={signUpFormId.identity}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.medicalDetails.title} showError={showFormError.slide}>
		<Question
			title={slides.medicalDetails.question.healthIssues.title}
			required={slides.medicalDetails.question.healthIssues.required}
		>
			<Textarea bind:value={formValue.healthIssues} />
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.medicalDetails.question.lifeSavingMedication.title}
			required={slides.medicalDetails.question.lifeSavingMedication.required}
			showError={showFormError.lifeSavingMedication}
			errorText={slides.medicalDetails.question.lifeSavingMedication.errorText}
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

	<CarouselItem title={slides.programmeInterest.title} showError={showFormError.slideError}>
		<Question
			title={slides.programmeInterest.question.programmesOfInterest.title}
			required={slides.programmeInterest.question.programmesOfInterest.required}
			bind:showError={showFormError.programmesOfInterest}
			errorText={slides.programmeInterest.question.programmesOfInterest.errorText}
		>
			<CheckboxGroup
				options={slides.programmeInterest.question.programmesOfInterest.options.map((label) => ({
					value: strToLowercaseHyphenated(label),
					label
				}))}
				onCheckedChange={() => {
					showFormError.programmesOfInterest = false;
					showFormError.slideError = false;
				}}
				bind:group={formValue.programmesOfInterest}
				idPrefix={signUpFormId.programmesOfInterest}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question title={slides.programmeInterest.question.hopeToGet.title}>
			<Textarea bind:value={formValue.hopeToGet} />
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.referrals.title} showError={showFormError.slideError}>
		<Question title={slides.referrals.question.referralComment.title}>
			<Textarea bind:value={formValue.referralComment} />
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.newsletterPermissions.title} showError={showFormError.slideError}>
		<Question
			title={slides.newsletterPermissions.question.imagePermission.title}
			subtext={slides.newsletterPermissions.question.imagePermission.subtext}
			required={slides.newsletterPermissions.question.imagePermission.required}
			bind:showError={showFormError.imagePermission}
			errorText={slides.newsletterPermissions.question.imagePermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formValue.imagePermission}
				onValueChange={() => {
					showFormError.imagePermission = false;
					showFormError.slideError = false;
				}}
			>
				{#each slides.newsletterPermissions.question.imagePermission.options as option}
					<RadioGroupItem
						value={option}
						id={signUpFormId.imagePermission + option}
						labelText={option.charAt(0).toUpperCase() + option.slice(1)}
					/>
				{/each}
			</RadioGroup.Root>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.newsletterPermissions.question.newsletterPermission.title}
			subtext={slides.newsletterPermissions.question.newsletterPermission.subtext}
			required={slides.newsletterPermissions.question.newsletterPermission.required}
			bind:showError={showFormError.newsletterPermission}
			errorText={slides.newsletterPermissions.question.newsletterPermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formValue.newsletterPermission}
				onValueChange={() => {
					showFormError.newsletterPermission = false;
					showFormError.slideError = false;
				}}
			>
				{#each slides.newsletterPermissions.question.newsletterPermission.options as option}
					<RadioGroupItem
						value={option}
						id={signUpFormId.newsletterPermission + option}
						labelText={option.charAt(0).toUpperCase() + option.slice(1)}
					/>
				{/each}
			</RadioGroup.Root>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.newsletterPermissions.question.textUpdatePermission.title}
			subtext={slides.newsletterPermissions.question.textUpdatePermission.subtext}
			required={slides.newsletterPermissions.question.textUpdatePermission.required}
			bind:showError={showFormError.textUpdatePermission}
			errorText={slides.newsletterPermissions.question.textUpdatePermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formValue.textUpdatePermission}
				onValueChange={() => {
					showFormError.textUpdatePermission = false;
					showFormError.slideError = false;
				}}
			>
				{#each slides.newsletterPermissions.question.textUpdatePermission.options as option}
					<RadioGroupItem
						value={option}
						id={signUpFormId.textUpdatePermission + option}
						labelText={option.charAt(0).toUpperCase() + option.slice(1)}
					/>
				{/each}
			</RadioGroup.Root>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.referralSources.title} showError={showFormError.slideError}>
		<Question
			title={slides.referralSources.question.referralSources.title}
			required={slides.referralSources.question.referralSources.required}
			bind:showError={showFormError.referralSources}
			errorText={slides.referralSources.question.referralSources.errorText}
		>
			<CheckboxGroup
				options={slides.referralSources.question.referralSources.options.map((label) => ({
					value: strToLowercaseHyphenated(label),
					label
				}))}
				onCheckedChange={() => {
					showFormError.referralSources = false;
					showFormError.slideError = false;
				}}
				bind:group={formValue.referralSources}
				idPrefix={signUpFormId.referralSource}
			/>
		</Question>
	</CarouselItem>
</Carousel.Content>

<div class="relative flex w-full shrink-0 items-center justify-center p-3">
	<div class="relative">
		<Carousel.Previous
			class="absolute top-1/2 -left-6 size-7 !-translate-x-full !-translate-y-1/2 translate-none !cursor-pointer "
		/>
		<button
			class="bg-bc-amber cursor-pointer rounded-xl px-4 py-2 text-lg font-medium text-white"
			onclick={emblaCtx.scrollNext}
			type="button">Next</button
		>
	</div>
</div>
