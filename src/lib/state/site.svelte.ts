type Showreel = {
	isOpen: boolean;
};

type NewsletterSignupPopover = {
	isOpen: boolean;
};

type SiteState = {
	showreel: Showreel;
	newsletter: NewsletterSignupPopover;
};

export const siteInitState: SiteState = {
	showreel: {
		isOpen: false
	},
	newsletter: {
		isOpen: false
	}
};

export const siteState = $state(siteInitState);

export const updateSiteState = {
	showreel: {
		toggleIsOpen: () => {
			siteState.showreel.isOpen = !siteState.showreel.isOpen;
		},

		setIsOpen: (value: boolean) => {
			siteState.showreel.isOpen = value;
		}
	},
	newsletter: {
		toggleIsOpen: () => {
			siteState.newsletter.isOpen = !siteState.newsletter.isOpen;
		},

		setIsOpen: (value: boolean) => {
			siteState.newsletter.isOpen = value;
		}
	}
};

export { type SiteState };
