type SvelteSubmitEvent = SubmitEvent & {
	currentTarget: EventTarget & HTMLFormElement;
};

export type { SvelteSubmitEvent };
