import type { RequestHandler } from '@sveltejs/kit';
import { google } from 'googleapis';

import { env } from '$env/dynamic/private';
import type { ProgrammeName } from '^lib/types';

type SheetValues = {
	entry_date: string;
	first_name: string;
	second_name: string;
	date_of_birth: string;
	email: string;
	phone_number: string;
	address: string;
	emergency_contact: string;
	identities: string;
	ethnicity: string;
	genders: string;
	health_issues: string;
	life_saving_medications: string;
	programmes_of_interest: string;
	hope_to_get: string;
	professional_referral_info: string;
	sources: string;
	newsletter_opt_in: string;
	image_opt_in: string;
	fresh_air_thursday_text_opt_in: string;
};

type Body = { pageName: ProgrammeName } & { sheetValues: SheetValues };

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body: Body = await request.json();

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
			range: `${body.pageName}!A2:AR`,
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [
					[
						...Object.values({
							...body.sheetValues
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
