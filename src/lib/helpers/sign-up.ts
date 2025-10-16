import type { DateValue } from '@internationalized/date';

import type { NewSignUpEntryProps } from '^types';

const isNonEmpty = (v: string) => v.trim().length > 0;
const hasSelection = (v: string[]) => v.length > 0;
const isValidDate = (v?: DateValue | null) => Boolean(v);

async function addSignUpToGoogleSheet(props: NewSignUpEntryProps) {
	const res = await fetch('/api/sign-up', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(props)
	});

	if (!res.ok) {
		const error = await res.json();
		console.error('Server error:', error);
		throw new Error(error.message || 'Failed to submit sign-up to Google Sheet');
	}

	return { success: true };
}

export { addSignUpToGoogleSheet, hasSelection, isNonEmpty, isValidDate };
