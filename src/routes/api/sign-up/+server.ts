import type { RequestHandler } from '@sveltejs/kit';
import { google } from 'googleapis';

import { env } from '$env/dynamic/private';

import type { NewSignUpEntryProps } from '^types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body: NewSignUpEntryProps = await request.json();

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: env.SIGN_UP_SHEET_CLIENT_EMAIL,
				private_key: env.SIGN_UP_SHEET_PRIVATE_KEY?.replace(/\\n/g, '\n')
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		});

		const sheets = google.sheets({ version: 'v4', auth });

		await sheets.spreadsheets.values.append({
			spreadsheetId: env.SIGN_UP_SHEET_SPREADSHEET_ID,
			range: `${body.programmeName}!A2:AR`,
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [
					[
						...Object.values({
							...body.values
						})
					]
				]
			}
		});

		return new Response(null, { status: 200 });
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Internal server error';

		return new Response(JSON.stringify({ statusCode: 500, message: errorMessage }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
