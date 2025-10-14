import type { ProgrammeName } from '^lib/types';

type FormValues = {
	full_name: string;
	date_of_birth: string;
	email: string;
	phone_number: string;
	address: string;
	emergency_contact: string;
	identities: string;
	ethnicity: string;
	genders: string;
	health_issues: string;
	life_saving_medications: string;
	programmes_of_interest: string;
	hope_to_get: string;
	professional_referral_info: string;
	sources: string;
	newsletter_opt_in: string;
	image_opt_in: string;
	fresh_air_thursday_text_opt_in: string;
};

async function addSignUpToGoogleSheet(input: {
	programmeName: ProgrammeName;
	formValues: FormValues;
}) {
	try {
		const dateNow = new Date().toUTCString();

		const { full_name, ...restFormValues } = input.formValues;

		const nameParts = full_name.split(/\s+(.*)/).filter(Boolean);

		const res = await fetch('/api/sign-up', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				pageName: input.programmeName,
				sheetValues: {
					entry_date: dateNow,
					first_name: nameParts[0],
					second_name: nameParts[1],
					...restFormValues
				}
			})
		});

		if (!res.ok) {
			const error = await res.json();
			console.error('Server error:', error);
			return;
		}

		console.log('Form submitted successfully!');
	} catch (err) {
		console.error('Network error:', err);
	}
}

export { addSignUpToGoogleSheet };
