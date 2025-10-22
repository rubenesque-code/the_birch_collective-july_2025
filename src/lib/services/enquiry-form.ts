import axios from 'axios';

import { PUBLIC_BIRCH_EMAIL, PUBLIC_DEVMODE_ENQUIRY_EMAIL } from '$env/static/public';

const sendEnquiryToBirch = async ({
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
			_subject: `New enquiry from ${formValues.name}.`
		});

		onSuccess();
	} catch (err) {
		if (onError) {
			onError();
		}

		throw new Error('Post enquiry error: ' + JSON.stringify(err));
	}
};

export { sendEnquiryToBirch };
