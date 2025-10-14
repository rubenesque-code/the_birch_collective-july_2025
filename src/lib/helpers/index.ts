export * from './sign-up';

function emailToEmailHref(email: string, subject: string = 'Enquiry') {
	return `mailto:${email}?subject=${subject}`;
}

const toggleBodyScroll = ({ triggerDisableOn }: { triggerDisableOn: boolean }) => {
	if (triggerDisableOn) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
};

const isValidEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

function isValidUkPhoneNumber(phone: string): boolean {
	const cleaned = phone.trim();

	// Accepts +44 or 0 at the start, followed by 9–10 digits (allowing spaces, dashes, or parentheses)
	const pattern =
		/^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)[\s.-]?\d{3}[\s.-]?\d{3,4}$|^(?:\+44\s?1\d{3}|\(?01\d{3}\)?)\s?\d{3}\s?\d{3,4}$/;

	return pattern.test(cleaned);
}

function strToLowercaseHyphenated(str: string) {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w+-]+/g, '');
}

export {
	emailToEmailHref,
	toggleBodyScroll,
	isValidEmail,
	isValidUkPhoneNumber,
	strToLowercaseHyphenated
};
