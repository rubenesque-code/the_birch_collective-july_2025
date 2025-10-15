import axios from 'axios';

import { dev } from '$app/environment';

const notifySignUp = async ({ emails, subject }: { emails: string[]; subject: string }) => {
	axios.defaults.headers.post['Content-Type'] = 'application/json';

	const recipients = dev ? ['a.ruben00001@gmail.com'] : emails;

	console.log('NOTIFYING SIGN UP', recipients);

	const notifications = recipients.map((email) =>
		axios.post(
			`https://formsubmit.co/ajax/${email}`,

			{
				_subject: subject
			}
		)
	);

	await axios.all(notifications);
};

export { notifySignUp };
