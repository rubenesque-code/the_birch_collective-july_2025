<script lang="ts" module>
	import { type DateValue } from '@internationalized/date';
	import { CheckSquare, SignOut } from 'phosphor-svelte';
	import { scale } from 'svelte/transition';

	import {
		PUBLIC_BIRCH_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { isValidEmail, isValidUkPhoneNumber, strToLowercaseHyphenated } from '^helpers';

	import image from '^assets/image';

	import { signUpFormId } from '^constants';

	import { Card, Carousel, RadioGroup, Tooltip } from '^components/ui';
	import { getEmblaContext } from '^components/ui/carousel/context';
	import { slides } from '^content/sign-up-form';
	import CarouselItem from './carousel-item.svelte';
	import {
		CheckboxGroup,
		DatePicker,
		Question,
		RadioGroupItem,
		Textarea,
		TextInput
	} from './elements';

	const isNonEmpty = (v: string) => v.trim().length > 0;
	const hasSelection = (v: string[]) => v.length > 0;
	const isValidDate = (v?: DateValue) => v !== null;
</script>

<script lang="ts">
	let { onClickClose } = $props<{
		onClickClose: () => void;
	}>();

	const emblaCtx = getEmblaContext();

	let activeSlideIndex = $state(0);

	let isSettled = $state(true);

	$effect(() => {
		if (!emblaCtx.api) return;

		emblaCtx.api.on('select', () => (activeSlideIndex = emblaCtx.selectedIndex));
		emblaCtx.api.on('scroll', () => (isSettled = false));
		emblaCtx.api.on('settle', () => (isSettled = true));
	});

	let showSlideError = $state(false);

	const formState = {
		participantName: { value: '', isError: false, showError: false },
		participantDob: {
			value: undefined as DateValue | undefined,
			isError: false,
			showError: false
		},
		participantEmail: { value: '', isError: false, showError: false },
		participantPhone: { value: '', isError: false, showError: false },

		participantAddressLine1: { value: '', isError: false, showError: false },
		participantAddressLine2: { value: '', isError: false, showError: false },
		participantAddressTownOrCity: { value: '', isError: false, showError: false },
		participantAddressPostcode: { value: '', isError: false, showError: false },

		emergencyContactName: { value: '', isError: false, showError: false },
		emergencyContactPhone: { value: '', isError: false, showError: false },
		emergencyContactRelationship: { value: '', isError: false, showError: false },

		healthIssues: { value: '', isError: false, showError: false },
		lifeSavingMedication: { value: '', isError: false, showError: false },

		identity1: { value: [] as string[], isError: false, showError: false },
		ethnicity: { value: '', isError: false, showError: false },
		identity2: { value: [] as string[], isError: false, showError: false },

		programmesOfInterest: { value: [] as string[], isError: false, showError: false },
		hopeToGet: { value: '', isError: false, showError: false },
		referralComment: { value: '', isError: false, showError: false },
		imagePermission: { value: '', isError: false, showError: false },
		newsletterPermission: { value: '', isError: false, showError: false },
		textUpdatePermission: { value: '', isError: false, showError: false },
		referralSources: { value: [] as string[], isError: false, showError: false }
	};

	type QuestionId = keyof typeof formState;

	const questionValidation = new Map<QuestionId, () => boolean>([
		// Participant details
		['participantName', () => isNonEmpty(formState.participantName.value)],
		['participantDob', () => isValidDate(formState.participantDob.value)],
		['participantEmail', () => isValidEmail(formState.participantEmail.value)],
		['participantPhone', () => isValidUkPhoneNumber(formState.participantPhone.value)],

		// Participant address
		['participantAddressLine1', () => isNonEmpty(formState.participantAddressLine1.value)],
		['participantAddressLine2', () => true], // Optional
		[
			'participantAddressTownOrCity',
			() => isNonEmpty(formState.participantAddressTownOrCity.value)
		],
		['participantAddressPostcode', () => isNonEmpty(formState.participantAddressPostcode.value)],

		// Emergency contact
		['emergencyContactName', () => isNonEmpty(formState.emergencyContactName.value)],
		['emergencyContactPhone', () => isValidUkPhoneNumber(formState.emergencyContactPhone.value)],
		[
			'emergencyContactRelationship',
			() => isNonEmpty(formState.emergencyContactRelationship.value)
		],

		// Health info
		['healthIssues', () => true], // Optional text
		['lifeSavingMedication', () => true], // Optional text

		// Identity
		['identity1', () => hasSelection(formState.identity1.value)],
		['ethnicity', () => isNonEmpty(formState.ethnicity.value)],
		['identity2', () => hasSelection(formState.identity2.value)],

		// Programme info
		['programmesOfInterest', () => hasSelection(formState.programmesOfInterest.value)],
		['hopeToGet', () => isNonEmpty(formState.hopeToGet.value)],

		['referralComment', () => true], // Optional

		['imagePermission', () => isNonEmpty(formState.imagePermission.value)],
		['newsletterPermission', () => isNonEmpty(formState.newsletterPermission.value)],
		['textUpdatePermission', () => isNonEmpty(formState.textUpdatePermission.value)],

		['referralSources', () => hasSelection(formState.referralSources.value)]
	]);

	const slideIndexToQuestionIds: Record<number, QuestionId[]> = {
		2: ['participantName', 'participantDob', 'participantEmail', 'participantPhone']
	};

	function validateQuestions(questionIds: QuestionId[]) {
		for (let i = 0; i < questionIds.length; i++) {
			const isValid = questionValidation.get(questionIds[i])!();
			if (!isValid) return false;
		}

		return true;
	}

	function handleValidateSlide(index: number) {
		if (!slideIndexToQuestionIds[index]) return;

		const isValid = validateQuestions(slideIndexToQuestionIds[index]);

		showSlideError = isValid;

		return isValid;
	}

	function handleNext() {
		if (!isSettled) {
			return;
		}

		const noValidationSlides = [0, 1, 8];

		if (noValidationSlides.includes(activeSlideIndex)) {
			emblaCtx.scrollNext();
			return;
		}

		const slideIsValid = handleValidateSlide(activeSlideIndex);

		if (slideIsValid) {
			emblaCtx.scrollNext();
		}
	}

	let submitStatus: 'idle' | 'pending' | 'error' | 'success' = $state('idle');
</script>

<div
	class="bg-bc-logo-black/80 absolute top-8 right-10 z-40 flex items-center gap-2 overflow-visible rounded-full px-3 py-1 text-[15px]"
>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<button
					class="cursor-pointer rounded-full border border-white p-[6px] text-white"
					onclick={onClickClose}
					type="button"
				>
					<SignOut weight="fill" />
				</button>
			</Tooltip.Trigger>
			<Tooltip.Content class="z-[100] mr-2" side="left">
				<p class="text-base">Exit form</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</div>

{#if submitStatus !== 'idle'}
	<div
		class="absolute inset-0 z-30 grid place-items-center bg-white/90"
		transition:scale={{ opacity: 0.9, start: 0.9 }}
	>
		<div class="max-w-[600px]">
			{#if submitStatus === 'pending'}
				<div class="flex items-center gap-3">
					<svg
						class="mr-3 -ml-1 size-5 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						><circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						></circle><path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path></svg
					>
					<p class="text-lg">Sending...</p>
				</div>
			{:else if submitStatus === 'error'}
				<div>
					<p class="text-lg leading-relaxed">
						Something went wrong sending the form. If the problem persists, please contact: <a
							class="font-medium"
							href={`mailto:${PUBLIC_BIRCH_EMAIL}`}
							target="_blank">{PUBLIC_BIRCH_EMAIL}</a
						>
					</p>

					<button
						class="bg-bc-amber mt-6 cursor-pointer rounded-md border px-2 py-1 text-lg text-white"
						onclick={() => {
							submitStatus = 'pending';

							setTimeout(() => {
								// handleSubmit();
							}, 700);
						}}
						type="button">Try again</button
					>
				</div>
			{:else}
				<p class="flex items-center gap-2 text-lg leading-relaxed">
					<span>Form received.</span>
					<span class="text-2xl text-green-600">
						<CheckSquare weight="fill" />
					</span>
				</p>
				<p class="mt-2 text-lg leading-relaxed">
					A member of the Birch team will contact you shortly.
				</p>
				<button
					class="bg-bc-amber mt-4 cursor-pointer rounded-md border px-2 py-1 text-lg text-white"
					onclick={onClickClose}
					type="button">Exit</button
				>
			{/if}
		</div>
	</div>
{/if}

<Carousel.Content hiddenParentClass="flex flex-col h-full  relative" class=" ml-0 h-full w-full">
	<CarouselItem title={slides.participantDetails.title} showError={showSlideError}>
		<Question title={slides.participantDetails.question.details.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slides.participantDetails.question.details.parts.name.label}
					placeholder="Enter here"
					bind:value={formState.participantName.value}
					id={signUpFormId.participantDetails + 'name'}
					showError={formState.participantName.showError}
					errorText="Please enter your full name"
					onkeyup={() => {
						showSlideError = false;
						formState.participantName.showError = false;
					}}
				/>

				<DatePicker
					bind:value={formState.participantDob.value}
					onValueChange={() => {
						showSlideError = false;
						formState.participantDob.showError = false;
					}}
					label="Date of birth"
					id={signUpFormId.participantDetails + 'dob'}
					showError={formState.participantDob.showError}
					errorText="Please pick a date of birth"
				/>

				<TextInput
					label={slides.participantDetails.question.details.parts.email.label}
					placeholder="Enter here"
					bind:value={formState.participantEmail.value}
					id={signUpFormId.participantDetails + 'email'}
					showError={formState.participantEmail.showError}
					errorText="Please enter a valid email"
					onkeyup={() => {
						showSlideError = false;
						formState.participantEmail.showError = false;
					}}
				/>

				<TextInput
					label={slides.participantDetails.question.details.parts.phone.label}
					bind:value={formState.participantPhone.value}
					id={signUpFormId.participantDetails + 'phone'}
					showError={formState.participantPhone.showError}
					errorText="Please enter a valid UK phone number"
					inputmode="tel"
					placeholder="e.g. +44 7123 456789"
					type="tel"
					onkeyup={() => {
						showSlideError = false;
						formState.participantPhone.showError = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.participantAddress.title} showError={showSlideError}>
		<Question title={slides.participantAddress.question.address.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label={slides.participantAddress.question.address.parts.line1.label}
					placeholder="Enter here"
					bind:value={formState.participantAddressLine1.value}
					id={signUpFormId.participantAddress + 'line1'}
					showError={formState.participantAddressLine1.showError}
					errorText="Please enter a response"
					onkeyup={() => {
						showSlideError = false;
						formState.participantAddressLine1.showError = false;
					}}
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.line2.label}
					placeholder="Enter here"
					bind:value={formState.participantAddressLine2.value}
					id={signUpFormId.participantAddress + 'line2'}
					required="optional"
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.townOrCity.label}
					placeholder="Enter here"
					bind:value={formState.participantAddressTownOrCity.value}
					id={signUpFormId.participantAddress + 'town-or-city'}
					showError={formState.participantAddressTownOrCity.showError}
					errorText="Please enter a response"
					onkeyup={() => {
						showSlideError = false;
						formState.participantAddressTownOrCity.showError = false;
					}}
				/>

				<TextInput
					label={slides.participantAddress.question.address.parts.postcode.label}
					placeholder="Enter here"
					bind:value={formState.participantAddressPostcode.value}
					id={signUpFormId.participantAddress + 'postcode'}
					showError={formState.participantAddressPostcode.showError}
					errorText="Please enter a response"
					onkeyup={() => {
						showSlideError = false;
						formState.participantAddressPostcode.showError = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.emergencyContact.title} showError={showSlideError}>
		<Question title={slides.emergencyContact.question.emergencyContact.title} required={false}>
			<div class="flex flex-col gap-8">
				<TextInput
					label="Name"
					placeholder="Enter here"
					bind:value={formState.emergencyContactName.value}
					id={signUpFormId.emergencyContact + 'name'}
					showError={formState.emergencyContactName.showError}
					errorText="Please enter a response"
					onkeyup={() => {
						showSlideError = false;
						formState.emergencyContactName.showError = false;
					}}
				/>

				<TextInput
					label="Phone number"
					inputmode="tel"
					placeholder="e.g. +44 7123 456789"
					bind:value={formState.emergencyContactPhone.value}
					id={signUpFormId.emergencyContact + 'phone'}
					showError={formState.emergencyContactPhone.showError}
					type="tel"
					errorText="Please enter a valid UK phone number"
					onkeyup={() => {
						showSlideError = false;
						formState.emergencyContactPhone.showError = false;
					}}
				/>

				<TextInput
					label="Relationship"
					placeholder="e.g. mother, friend"
					bind:value={formState.emergencyContactRelationship.value}
					id={signUpFormId.emergencyContact + 'relationship'}
					showError={formState.emergencyContactRelationship.showError}
					errorText="Please enter a response"
					onkeyup={() => {
						showSlideError = false;
						formState.emergencyContactRelationship.showError = false;
					}}
				/>
			</div>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.identity.title} showError={showSlideError}>
		<Question
			title={slides.identity.question.identity1.title}
			required={slides.identity.question.identity1.required}
			showError={formState.identity1.showError}
			errorText={slides.identity.question.identity1.errorText}
		>
			<CheckboxGroup
				options={slides.identity.question.identity1.options.map((option) => ({
					value: strToLowercaseHyphenated(option),
					label: option
				}))}
				onCheckedChange={() => {
					showSlideError = false;
					formState.identity1.showError = false;
				}}
				bind:group={formState.identity1.value}
				idPrefix={signUpFormId.identity}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.identity.question.ethnicity.title}
			required={slides.identity.question.ethnicity.required}
			showError={formState.ethnicity.showError}
			errorText={slides.identity.question.ethnicity.errorText}
		>
			<Textarea
				bind:value={formState.ethnicity.value}
				onkeyup={() => {
					showSlideError = false;
					formState.ethnicity.showError = false;
				}}
			/>
		</Question>

		<div class="border-bc-amber/30 mt-4 border-b-2"></div>

		<Question
			title={slides.identity.question.identity2.title}
			required={slides.identity.question.identity2.required}
			showError={formState.identity2.showError}
			errorText={slides.identity.question.identity2.errorText}
		>
			<CheckboxGroup
				options={slides.identity.question.identity2.options.map((option) => ({
					value: strToLowercaseHyphenated(option),
					label: option
				}))}
				onCheckedChange={() => {
					showSlideError = false;
					formState.identity2.showError = false;
				}}
				bind:group={formState.identity2.value}
				idPrefix={signUpFormId.identity}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.medicalDetails.title} showError={showSlideError}>
		<Question
			title={slides.medicalDetails.question.healthIssues.title}
			required={slides.medicalDetails.question.healthIssues.required}
		>
			<Textarea bind:value={formState.healthIssues.value} />
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question
			title={slides.medicalDetails.question.lifeSavingMedication.title}
			required={slides.medicalDetails.question.lifeSavingMedication.required}
			showError={formState.lifeSavingMedication.showError}
			errorText={slides.medicalDetails.question.lifeSavingMedication.errorText}
		>
			<Textarea
				bind:value={formState.lifeSavingMedication.value}
				onkeyup={() => {
					showSlideError = false;
					formState.lifeSavingMedication.showError = false;
				}}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.programmeInterest.title} showError={showSlideError}>
		<Question
			title={slides.programmeInterest.question.programmesOfInterest.title}
			required={slides.programmeInterest.question.programmesOfInterest.required}
			bind:showError={formState.programmesOfInterest.showError}
			errorText={slides.programmeInterest.question.programmesOfInterest.errorText}
		>
			<CheckboxGroup
				options={slides.programmeInterest.question.programmesOfInterest.options.map((label) => ({
					value: strToLowercaseHyphenated(label),
					label
				}))}
				onCheckedChange={() => {
					formState.programmesOfInterest.showError = false;
					showSlideError = false;
				}}
				bind:group={formState.programmesOfInterest.value}
				idPrefix={signUpFormId.programmesOfInterest}
			/>
		</Question>

		<div class="border-bc-amber/30 border-b-2"></div>

		<Question title={slides.programmeInterest.question.hopeToGet.title}>
			<Textarea bind:value={formState.hopeToGet.value} />
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.referrals.title} showError={showSlideError}>
		<Question title={slides.referrals.question.referralComment.title}>
			<Textarea bind:value={formState.referralComment.value} />
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.referralSources.title} showError={showSlideError}>
		<Question
			title={slides.referralSources.question.referralSources.title}
			required={slides.referralSources.question.referralSources.required}
			bind:showError={formState.referralSources.showError}
			errorText={slides.referralSources.question.referralSources.errorText}
		>
			<CheckboxGroup
				options={slides.referralSources.question.referralSources.options.map((label) => ({
					value: strToLowercaseHyphenated(label),
					label
				}))}
				onCheckedChange={() => {
					formState.referralSources.showError = false;
					showSlideError = false;
				}}
				bind:group={formState.referralSources.value}
				idPrefix={signUpFormId.referralSource}
			/>
		</Question>
	</CarouselItem>

	<CarouselItem title={slides.newsletterPermissions.title} showError={showSlideError}>
		<Question
			title={slides.newsletterPermissions.question.imagePermission.title}
			subtext={slides.newsletterPermissions.question.imagePermission.subtext}
			required={slides.newsletterPermissions.question.imagePermission.required}
			bind:showError={formState.imagePermission.showError}
			errorText={slides.newsletterPermissions.question.imagePermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formState.imagePermission.value}
				onValueChange={() => {
					formState.imagePermission.showError = false;
					showSlideError = false;
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
			bind:showError={formState.newsletterPermission.showError}
			errorText={slides.newsletterPermissions.question.newsletterPermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formState.newsletterPermission.value}
				onValueChange={() => {
					formState.newsletterPermission.showError = false;
					showSlideError = false;
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
			bind:showError={formState.textUpdatePermission.showError}
			errorText={slides.newsletterPermissions.question.textUpdatePermission.errorText}
		>
			<RadioGroup.Root
				bind:value={formState.textUpdatePermission.value}
				onValueChange={() => {
					formState.textUpdatePermission.showError = false;
					showSlideError = false;
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
</Carousel.Content>

<div class="relative flex w-full shrink-0 items-center justify-center p-3">
	<div class="relative">
		<Carousel.Previous
			class="absolute top-1/2 -left-6 size-7 !-translate-x-full !-translate-y-1/2 translate-none !cursor-pointer "
		/>
		<button
			class={`bg-bc-amber  rounded-xl px-4 py-2 text-lg font-medium text-white ${isSettled ? 'cursor-pointer' : 'cursor-auto opacity-70'}`}
			onclick={() => {
				if (!isSettled) {
					return;
				}

				if (activeSlideIndex < 11) handleNext();
				// else handleSubmit();
			}}
			type="button"
		>
			{#if activeSlideIndex !== 11}
				Next
			{:else}
				Submit
			{/if}
		</button>
	</div>
</div>
