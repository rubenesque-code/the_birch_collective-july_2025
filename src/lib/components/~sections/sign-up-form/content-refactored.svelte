<script lang="ts" module>
	import { type DateValue } from '@internationalized/date';

	import { isValidEmail, isValidUkPhoneNumber } from '^helpers';

	import { getEmblaContext } from '^components/ui/carousel/context';

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

		if (!isValid) {
			showSlideError = true;
			return;
		}
		showSlideError = false;
	}

	function handleNext() {
		if (!isSettled) {
			return;
		}

		switch (activeSlideIndex) {
			case 0:
				emblaCtx.scrollNext();
				break;

			default:
				break;
		}
	}
</script>
