<script lang="ts" module>
	import type { DateValue } from '@internationalized/date';

	const validators = {
		nonEmpty: (value: string) => value.trim().length > 0,
		validEmail: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
		validUkPhone: (value: string) => /^(\+44|0)[0-9]{10}$/.test(value),
		validDate: (value: DateValue | undefined) => value !== undefined,
		hasSelection: (value: string[]) => value.length > 0,
		alwaysValid: () => true
	};

	const validatorMap: Record<ValueType, (typeof validators)[keyof typeof validators]> = {
		string: validators.nonEmpty,
		date: validators.validDate,
		phone: validators.validUkPhone,
		stringArray: validators.hasSelection,
		email: validators.validEmail,
		optional: validators.alwaysValid
	};

	type ValueType = 'string' | 'date' | 'stringArray' | 'phone' | 'email' | 'optional';

	type Key =
		| 'participantName'
		| 'participantDob'
		| 'participantEmail'
		| 'participantPhone'
		| 'participantAddressLine1';

	type FormEntry = Record<
		Key,
		{
			valueType: ValueType;
			required: boolean;
			initValue: string | undefined | string[];
			validate: (typeof validators)[keyof typeof validators];
		}
	>;

	const formMeta: FormEntry = {
		participantName: {
			valueType: 'string',
			required: true,
			initValue: '',
			validate: validators.nonEmpty
		},
		participantDob: {
			valueType: 'string',
			required: true,
			initValue: '',
			validate: validators.nonEmpty
		},
		participantEmail: {
			valueType: 'string',
			required: true,
			initValue: '',
			validate: validators.validEmail
		},
		participantPhone: {
			valueType: 'string',
			required: true,
			initValue: '',
			validate: validators.validUkPhone
		},
		participantAddressLine1: {
			valueType: 'string',
			required: true,
			initValue: '',
			validate: validators.hasSelection
		}
	} as const;

	type FormState = {
		[K in keyof FormMetaType]: FieldState<FormMetaType[K]['initValue']>;
	};

	type FormMetaType = typeof formMeta;
	type FieldState<T> = {
		value: T;
		showError: boolean;
	};

	function createFormState<T extends Record<string, any>>(meta: T): FormState {
		const state: any = {};
		for (const [key, config] of Object.entries(meta)) {
			state[key] = {
				value: config.initValue,
				showError: false
			};
		}
		return state;
	}

	function createValidationMap<T extends Record<string, any>>(
		meta: T,
		state: FormState
	): Map<keyof T, () => boolean> {
		const map = new Map<keyof T, () => boolean>();
		for (const [key, config] of Object.entries(meta)) {
			map.set(key as keyof T, () => config.validate(state[key as keyof FormState].value));
		}
		return map;
	}
</script>

<script lang="ts">
	const formState = $state(createFormState(formMeta));
	const questionValidation = createValidationMap(formMeta, formState);

	console.log('questionValidation:', questionValidation.get('participantAddressLine1')!('abc'));
</script>
