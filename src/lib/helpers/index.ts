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

const isEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export { emailToEmailHref, toggleBodyScroll, isEmail };
