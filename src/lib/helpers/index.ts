function emailToEmailHref(email: string, subject: string = 'Enquiry') {
  return `mailto:${email}?subject=${subject}`
}

const toggleBodyScroll = ({ triggerDisableOn }: { triggerDisableOn: boolean }) => {
  if (triggerDisableOn) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

export { emailToEmailHref, toggleBodyScroll }