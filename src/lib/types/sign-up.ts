import type { ProgrammeName } from './programme';

type NewSignUpEntryProps = {
	programmeName: ProgrammeName;
	// ORDER OF PROPS MUST BE AS BELOW
	values: {
		entryDate: string;
		firstName: string;
		secondName: string;
		participantDob: string;
		participantEmail: string;
		participantPhone: string;
		participantAddress: string;
		emergencyContactDetails: string;
		identity1: string;
		ethnicity: string;
		identity2: string;
		healthIssues: string;
		lifeSavingMedication: string;
		programmesOfInterest: string;
		hopeToGet: string;
		referralComment: string;
		referralSources: string;
		newsletterPermission: string;
		imagePermission: string;
		freshAirThursdayTextPermission: string;
	};
};

export type { NewSignUpEntryProps };
