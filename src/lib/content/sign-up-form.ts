const slides = {
	intro: {
		title: 'Programme Sign Up',
		subtitle: 'Welcome to The Birch Collective!',
		text: "The following questions help us get to know a bit about you. We need to take some really basic info from you, such as your contact details. This means we can get in touch with you so we can discuss getting started - so please double-check the details you're giving us are correct!"
	},

	confidentiality: {
		title: 'Confidentiality',

		confidentiality: {
			intro: 'First up, we need you to read and understand our confidentiality statement:',
			text: "Anything you talk about with one of our team is kept totally private within Birch. We won't share what you tell us with anyone else. But if there was an extreme situation, like if you or someone else was at risk of being seriously hurt, then we would need to break confidentiality to keep you safe. If this happened we would discuss it with you first and do our best to make sure you were involved in any decisions that have to be made. We know this can be scary and you might not want us to share anything, but we will support you through the whole thing."
		},

		gdpr: {
			intro: 'We also need you to read our GDPR statement:',
			text: 'By signing this form, you are giving us permission to contact you about opportunities and events from the Birch Collective. In order to comply with the General Data Protection Regulation, The Birch Collective is seeking your consent to hold your information on our database. We are required by our funders to gather information about the people who use our services. We will not share your information with third parties other than those you have agreed to. We use and store any information that you give us in accordance with the Data Protection Act 2003. Information you provide will be anonymised before being used in monitoring and evaluation reports for our current funders, to support funding applications. Your data will be held for a maximum of 2 years after your last engagement. For further details on our data protection and information sharing policies or for any queries about the data we hold, please get in touch:'
		}
	},

	participantDetails: {
		title: 'Your Details',
		question: {
			details: {
				title: 'Your Details',
				id: 'participant-details',
				parts: {
					name: {
						label: 'Full name',
						required: true
					},
					dob: {
						label: 'Date of birth',
						required: false
					},
					email: {
						label: 'Email address',
						required: true
					},
					phone: {
						label: 'Phone number',
						required: true
					}
				}
			}
		}
	},

	participantAddress: {
		title: 'Your Address',
		question: {
			address: {
				title: 'Your Address',
				id: 'your-address',
				parts: {
					line1: {
						label: 'Address line 1',
						required: true
					},
					line2: {
						label: 'Address line 2',
						required: false
					},
					townOrCity: {
						label: 'Town/City',
						required: true
					},
					postcode: {
						label: 'Postcode',
						required: true
					}
				}
			}
		}
	},

	emergencyContact: {
		title: 'Emergency Contact',
		question: {
			emergencyContact: {
				title: 'Emergency Contact Details',
				id: 'emergency-contact-details',
				parts: {
					name: {
						label: 'name',
						required: 'Please enter a response'
					},
					phone: {
						label: 'phone number',
						required: 'Please enter a response'
					},
					relationship: {
						label: 'relationship',
						required: 'Please enter a response'
					}
				}
			}
		}
	},

	identity: {
		title: 'Identity',
		question: {
			identity1: {
				title: 'Do you identify as any of the following?',
				required: 'Tick all that apply to you. Pick at least one.',
				errorText: 'Please select at least one option',
				id: 'identity-1',
				options: [
					'Working class',
					'Someone with a disability',
					'Male or male identifying',
					'Care experienced',
					'LGBTQ+',
					'English as a second language',
					'Black or a person of colour',
					'Unemployed or not in education or training',
					'None of the above'
				]
			},
			ethnicity: {
				title: 'Your ethnicity',
				required: 'Please enter a response',
				errorText: 'Please enter a response',
				id: 'ethnicity'
			},
			identity2: {
				title: 'Do you identify as any of the following?',
				required: 'Tick all that apply to you. Pick at least one.',
				errorText: 'Please select at least one option',
				id: 'identity-2',
				options: [
					'girl/woman/female',
					'boy/man/male',
					'non-binary',
					'queer',
					'other',
					'prefer not to say'
				]
			}
		}
	},

	medicalDetails: {
		title: 'Medical Details',
		question: {
			healthIssues: {
				title:
					'Do you consider yourself to have any physical health issues or medical conditions, e.g ASD, Asthma or allergies?',
				subtext: 'If yes, please provide us with some detail.',
				required: 'Response optional',
				id: 'health-issues'
			},
			lifeSavingMedication: {
				title: 'Do you require any regular life saving medication, e.g inhalers, epipen or other?',
				required: "If yes, please provide us with some detail. If no, please type 'no'.",
				errorText: 'Please enter a response',
				id: 'life-saving-medication'
			}
		}
	},

	programmeInterest: {
		title: 'Programme interest',
		question: {
			programmesOfInterest: {
				title: 'Which programmes are you interested in and would like some more information about?',
				required: 'Tick all that apply to you. Pick at least one.',
				errorText: 'Please select at least one option',
				id: 'programmes-of-interest',
				options: [
					'1:1 Nature-Based Mentoring',
					'Fresh Air Thursdays',
					'Recoupe: Working Woods',
					'Seeding Change: Plant Your Future',
					'Steering Group Workshops',
					'Therapeutic Forest School'
				]
			},
			hopeToGet: {
				title:
					"What do you hope to get out of going to The Birch Collective's sessions or programmes?",
				id: 'hope-to-get'
			}
		}
	},

	referrals: {
		title: 'Referrals',
		question: {
			referralComment: {
				title:
					"If you're a professional referring a client, is there any additional information you think is important to share about your client?",
				id: 'referral-comment'
			}
		}
	},

	newsletterPermissions: {
		title: 'Newsletter & Permissions',
		question: {
			imagePermission: {
				title:
					'Do you give The Birch Collective permission to take photographs or videos of you with the intention to use in publicity materials?',
				subtext:
					"They'll be used in e.g. social media sites, website, reporting to funders, newspapers and magazine articles. Images will not be given to third parties.",
				required: 'Please select a response',
				errorText: 'Please select a response',
				id: 'image-permission',
				options: ['yes', 'no']
			},
			newsletterPermission: {
				title: 'Would you like to be added to the Birch Collectives monthly newsletter?',
				subtext: "We'll inform you about new programmes and services we're running.",
				required: 'Please select a response',
				errorText: 'Please select a response',
				id: 'newsletter-permission',
				options: ['yes', 'no']
			},
			textUpdatePermission: {
				title:
					"Would you like to be added to a weekly text update/reminder telling you what's going on at Fresh Air Thursday?",
				subtext: 'You can be removed at anytime by simply replying STOP.',
				required: 'Please select a response',
				errorText: 'Please select a response',
				id: 'text-update-permission',
				options: ['yes', 'no']
			}
		}
	},

	referralSources: {
		title: 'How did you find out about us?',
		question: {
			referralSources: {
				title: 'How did you hear about the Birch Collective?',
				required: 'Tick all that apply to you',
				errorText: 'Please select at least one response',
				id: 'referral-sources',
				options: [
					'The Birch Collective social media',
					'Other social media',
					'Web search',
					'Teacher',
					'GP or other medical professional',
					'Friend',
					'Parent or carer',
					'Other'
				]
			}
		}
	}
};

export { slides };
