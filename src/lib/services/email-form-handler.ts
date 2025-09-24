import axios from 'axios';

import { PUBLIC_BIRCH_EMAIL, PUBLIC_DEVMODE_ENQUIRY_EMAIL } from '$env/static/public';

const enquiryFormHandler = {
	postEnquiry: async ({
		onSuccess,
		onError,
		...formValues
	}: {
		name: string;
		email: string;
		message: string;
		onSuccess: () => void;
		onError?: () => void;
	}) => {
		try {
			axios.defaults.headers.post['Content-Type'] = 'application/json';

			const recipient = import.meta.env.DEV ? PUBLIC_DEVMODE_ENQUIRY_EMAIL : PUBLIC_BIRCH_EMAIL;

			await axios.post(`https://formsubmit.co/ajax/${recipient}`, {
				...formValues,
				_subject: `New message from ${formValues.name}. Subject: Enquiry`
			});

			onSuccess();
		} catch (err) {
			console.error('err:', err);

			if (onError) {
				onError();
			}

			throw new Error('Post enquiry error');
		}
	}
};

export default enquiryFormHandler;
