<script lang="ts" module>
	import { fade, scale } from 'svelte/transition';

	import { browser } from '$app/environment';
	import {
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { slides } from '^content/sign-up-form';
	import { toggleBodyScroll } from '^helpers';

	import { Card, Carousel, Checkbox, Input, Label, RadioGroup, Textarea } from '^components/ui';
	import NextButton from './next-button.svelte';
	import DatePicker from './elements/date-picker.svelte';
	import CarouselItem from './carousel-item.svelte';
	import { Checkbox as MyCheckbox, Question } from './elements';

	const formId = {
		newsletterPermission: 'newsletter-permission'
	};
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		if (browser) toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	let activeSlide: 'intro' | 'terms' = 'intro';

	let permitGoNext = $derived.by(() => {
		if (activeSlide === 'intro') {
			return true;
		}

		return false;
	});

	let newsletterPermission = $state<'yes' | 'no' | ''>('');
	$inspect('newsletterPermission', newsletterPermission);
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/90"
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed inset-0 z-[60] grid place-items-center"
		transition:scale={{ start: 0.9, opacity: 0, duration: 300 }}
	>
		<div>
			<div class="relative mx-2 overflow-visible shadow-xl">
				<button
					class="bg-my-grey-1 absolute -top-[12px] right-0 z-10 -translate-y-full cursor-pointer rounded-full px-2 py-1 text-[15px] font-medium tracking-wide text-white md:-top-[16px] xl:-top-[24px]"
					onclick={onClickClose}
					type="button"
				>
					Close
				</button>

				<div
					class="flex h-[80vh] max-h-[800px] w-[95vw] max-w-[800px] flex-col rounded-sm bg-white px-4 py-3"
				>
					<div class="relative flex grow flex-col">
						<Carousel.Root class="flex grow flex-col" opts={{ align: 'center' }}>
							<Carousel.Content hiddenParentClass="grow flex flex-col" class="ml-0 w-full grow">
								<CarouselItem title="Newsletter & Permissions">
									<Question
										question="Would you like to be added to the Birch Collectives monthly newsletter?"
										subtext="We'll inform you about new programmes and services we're running."
										isRequired
									>
										<RadioGroup.Root bind:value={newsletterPermission}>
											<div class="flex items-center space-x-3">
												<RadioGroup.Item
													value="yes"
													id={'sign-up-form' + formId.newsletterPermission + 'yes'}
												/>
												<Label
													class="text-base"
													for={'sign-up-form' + formId.newsletterPermission + 'yes'}>Yes</Label
												>
											</div>
											<div class="flex items-center space-x-3">
												<RadioGroup.Item
													value="no"
													id={'sign-up-form' + formId.newsletterPermission + 'no'}
												/>
												<Label
													class="text-base"
													for={'sign-up-form' + formId.newsletterPermission + 'no'}>No</Label
												>
											</div>
										</RadioGroup.Root>
									</Question>

									<!-- <Question
										question="Do you give The Birch Collective permission to take photographs or videos of you with the intention to use in publicity materials?"
										subtext="They'll be used in e.g. social media sites, website, reporting to funders, newspapers and magazine articles. Images will not be given to third parties."
										isRequired
									>
										<div class="flex flex-col gap-3">
											<MyCheckbox label="yes" />

											<MyCheckbox label="no" />
										</div>
									</Question> -->

									<!-- <Question
										question="Would you like to be added to a weekly text update/reminder telling you what's going on at Fresh Air Thursday?"
										subtext="You can be removed at anytime by simply replying STOP."
										isRequired
									>
										<div class="flex flex-col gap-3">
											<MyCheckbox label="yes" />
											<MyCheckbox label="no" />
										</div>
									</Question> -->
								</CarouselItem>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-0 text-lg leading-relaxed">
											<Card.Header class="bg-my-grey-3/5 flex items-center justify-between p-3">
												<Card.Title
													class="font-display text-[30px] font-bold tracking-wide text-black/70 uppercase"
												>
													Newsletter & Permissions</Card.Title
												>
												<div
													class="font-display text-bc-slate-pine/70 text-2xl font-bold tracking-wide uppercase"
												>
													Programme Signup
												</div>
											</Card.Header>

											<div class="mt-8 grid max-h-full grow place-items-center overflow-y-scroll">
												<div class="flex max-h-[400px] w-full flex-col gap-12 px-1 pr-4 pb-10">
													<div>
														<h3 class="text-[19px] font-medium text-black">
															<span
																>Would you like to be added to the Birch Collectives monthly
																newsletter?</span
															>
														</h3>
														<p class="mt-1 text-black/70">
															We'll inform you about new programmes and services we're running.
														</p>
														<span class="mt-1 text-sm text-black/50 italic">(required)</span>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>yes</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>no</Label
																>
															</div>
														</div>
													</div>
													<div>
														<h3 class="text-[19px] font-medium text-black">
															Do you give The Birch Collective permission to take photographs or
															videos of you with the intention to use in publicity materials?
														</h3>
														<p class="mt-1 text-black/70">
															They'll be used in e.g. social media sites, website, reporting to
															funders, newspapers and magazine articles. Images will not be given to
															third parties.
														</p>
														<span class="mt-1 text-sm text-black/50 italic">(required)</span>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>yes</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>no</Label
																>
															</div>
														</div>
													</div>

													<div>
														<h3 class="text-[19px] font-medium text-black">
															Would you like to be added to a weekly text update/reminder telling
															you what's going on at Fresh Air Thursday?
														</h3>
														<p class="mt-1 text-black/70">
															You can be removed at anytime by simply replying STOP.
														</p>
														<span class="mt-1 text-sm text-black/50 italic">(required)</span>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>yes</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>no</Label
																>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/30 font-display text-[24px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>How you heard about us</Card.Title
											>

											<div class="mt-8 grid max-h-full grow place-items-center overflow-y-scroll">
												<div class="flex max-h-[400px] w-full flex-col gap-12 px-1 pr-4 pb-10">
													<div>
														<h3 class="text-black">
															<span>How did you hear about the Birch Collective?</span>
														</h3>
														<span class="text-sm text-black/50 italic">(optional)</span>
														<p class="mt-2 text-[15px] text-black/70">
															Tick all that apply to you.
														</p>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>working class</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>someone with a disability</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>male or male identifying</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>care experienced</Label
																>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/30 font-display text-[24px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>For Referrals</Card.Title
											>

											<div class="mt-8 grid max-h-full grow place-items-center overflow-y-scroll">
												<div class="flex max-h-[400px] w-full flex-col gap-12 px-1 pr-4 pb-10">
													<div>
														<h3 class="text-black">
															<span
																>If you're a professional referreing a client, is there any
																additional information you think is important to share about your
																client?</span
															>
														</h3>
														<span class="text-sm text-black/50 italic">(optional)</span>

														<Textarea
															class="mt-2 h-[120px] w-full resize-none py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Enter response here"
															id="ethnicity"
														/>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/30 font-display text-[24px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Programme interest</Card.Title
											>

											<div class="mt-8 grid max-h-full grow place-items-center overflow-y-scroll">
												<div class="flex max-h-[400px] w-full flex-col gap-12 px-1 pr-4 pb-10">
													<div>
														<h3 class="text-black">
															<span
																>Which programmes are you interested in and would like some more
																information about?</span
															>
														</h3>
														<span class="text-sm text-black/50 italic">(required)</span>
														<p class="mt-2 text-[15px] text-black/70">
															Tick all that apply to you. Pick at least one.
														</p>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="programme-recoupe" />
																<Label class="text-base font-normal" for="programme-recoupe"
																	>Recoupe: Working</Label
																>
															</div>
															<div class="flex items-center gap-4">
																<Checkbox id="programme-recoupe" />
																<Label class="text-base font-normal" for="programme-recoupe"
																	>Fresh Air Thursday</Label
																>
															</div>
														</div>
													</div>

													<div>
														<Label class="flex items-end gap-3" for="ethnicity"
															><span class="text-lg font-normal"
																>What do you hope to get out of going to The Birch Collective's
																sessions or programmes?</span
															>
														</Label>

														<span class="text-sm text-black/50 italic">optional</span>

														<Textarea
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Enter response here"
															id="ethnicity"
														/>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Medical Details</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div class="flex w-full flex-col gap-24 px-1">
													<div>
														<Label class="flex items-end gap-3" for="ethnicity"
															><span class="text-lg font-normal"
																>Do you consider yourself to have any physical health issues or
																medical conditions, e.g ASD, Asthma or allergies?</span
															>
															<span
																class="-translate-y-[2px] text-right text-sm text-black/60 italic"
																>optional</span
															>
														</Label>
														<p class="mt-2 text-[15px] text-black/70">
															If yes, please provide us with some detail.
														</p>

														<Textarea
															class="mt-4 h-[100px] w-full resize-none py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Enter any health issues here"
															id="ethnicity"
														/>
													</div>

													<div>
														<Label class="flex items-end gap-3" for="ethnicity"
															><span class="text-lg font-normal"
																>Do you require any regular life saving medication, e.g inhalers,
																epipen or other?</span
															>
															<span
																class="-translate-y-[2px] text-right text-sm text-black/60 italic"
																>required</span
															>
														</Label>
														<p class="mt-2 text-[15px] text-black/70">
															If yes, please provide us with some detail. If no, please type 'no'.
														</p>

														<Textarea
															class="mt-4 h-[100px] w-full resize-none py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Enter life saving medication here or type 'no'"
															id="ethnicity"
														/>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/30 font-display text-[24px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Identity</Card.Title
											>

											<div class="mt-8 grid max-h-full grow place-items-center overflow-y-scroll">
												<div class="flex max-h-[400px] w-full flex-col gap-12 px-1 pr-4 pb-10">
													<div>
														<h3 class="text-black">
															<span>Do you identify as any of the following?</span>
														</h3>
														<span class="text-sm text-black/50 italic">(required)</span>
														<p class="mt-2 text-[15px] text-black/70">
															Tick all that apply to you. Pick at least one.
														</p>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>working class</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>someone with a disability</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>male or male identifying</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>care experienced</Label
																>
															</div>
														</div>
													</div>

													<div>
														<Label class="flex items-end gap-3" for="ethnicity"
															><span class="text-lg font-normal">Your ethnicity</span>
															<span
																class="-translate-y-[2px] text-right text-sm text-black/60 italic"
																>required</span
															>
														</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Enter your ethnicity here"
															id="ethnicity"
															type="text"
														/>
													</div>

													<div>
														<h3 class="text-black">
															<span>Do you identify as any of the following?</span>
														</h3>
														<span class="text-sm text-black/50 italic">(required)</span>
														<p class="mt-2 text-[15px] text-black/70">
															Tick all that apply to you. Pick at least one.
														</p>

														<div class="mt-6 flex flex-col gap-3">
															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>working class</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>someone with a disability</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>male or male identifying</Label
																>
															</div>

															<div class="flex items-center gap-4">
																<Checkbox id="identity-working-class" />
																<Label class="text-base font-normal" for="identity-working-class"
																	>care experienced</Label
																>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Emergency Contact Details</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div class="flex w-full flex-col gap-6 px-1">
													<div>
														<Label class="text-black/50" for="emergency full name">Full name</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Contact full name"
															id="emergency full name"
															type="text"
														/>
														<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
													</div>

													<div>
														<Label class="text-black/50" for="emergency phone">Phone number</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Contact phone number"
															id="phone"
															type="tel"
														/>
														<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
													</div>

													<div>
														<Label class="text-black/50" for="relationship">Relationship</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Contact relationship"
															id="relationship"
															type="text"
														/>
														<p class="mt-1 text-right text-sm text-black/60 italic">required</p>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Your Address</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div class="flex w-full flex-col gap-10 px-1">
													<div>
														<Label class="text-black/50" for="address line 1">Line 1</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Line 1"
															id="address line 1"
															type="text"
														/>
													</div>

													<div>
														<Label class="text-black/50" for="address line 2">Line 2</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Line 2"
															id="address line 2"
															type="text"
														/>
													</div>

													<div>
														<Label class="text-black/50" for="Town/City">Town/City</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Town/City"
															id="Town/City"
															type="text"
														/>
													</div>

													<div>
														<Label class="text-black/50" for="Postcode">Postcode</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Postcode"
															id="Postcode"
															type="text"
														/>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Your Details</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div class="flex w-full flex-col gap-10 px-1">
													<div>
														<Label class="text-black/50" for="full name">Full name</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Your full name"
															id="full name"
															type="text"
														/>
													</div>

													<div>
														<Label class="text-black/50" for="dob">Date of birth</Label>
														<div class="mt-2">
															<DatePicker />
														</div>
													</div>

													<div>
														<Label class="text-black/50" for="email">Email address</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Your email address"
															id="email"
															type="email"
														/>
													</div>

													<div>
														<Label class="text-black/50" for="phone">Phone number</Label>
														<Input
															class="mt-2 w-full py-2 !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
															placeholder="Your phone number"
															id="phone"
															type="tel"
														/>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<div class="grid grow place-items-center">
												<div>
													<Card.Title class="font-medium">{slides.intro.title}</Card.Title>

													<p class="mt-8">{slides.intro.text}</p>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>Confidentiality</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div>
													<p class="mt-8 leading-relaxed">
														First up, we need you to read and understand our confidentiality
														statement: Anything you talk about with one of our team is kept totally
														private within Birch. We won't share what you tell us with anyone else.
														But if there was an extreme situation, like if you or someone else was
														at risk of being seriously hurt, then we would need to break
														confidentiality to keep you safe. If this happened we would discuss it
														with you first and do our best to make sure you were involved in any
														decisions that have to be made. We know this can be scary and you might
														not want us to share anything, but we will support you through the whole
														thing.
													</p>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 underline decoration-2 underline-offset-4"
												>GDPR & GDPR Contacts</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div class="leading-relaxed">
													<p class="mt-8 leading-relaxed">
														By signing this form, you are giving us permission to contact you about
														opportunities and events from the Birch Collective. In order to comply
														with the General Data Protection Regulation, The Birch Collective is
														seeking your consent to hold your information on our database. We are
														required by our funders to gather information about the people who use
														our services. We will not share your information with third parties
														other than those you have agreed to. We use and store any information
														that you give us in accordance with the Data Protection Act 2003.
														Information you provide will be anonymised before being used in
														monitoring and evaluation reports for our current funders, to support
														funding applications. Your data will be held for a maximum of 2 years
														after your last engagement.
													</p>
													<p class="mt-4">
														For further details on our data protection and information sharing
														policies or for any queries about the data we hold, please get in touch:
													</p>
													<div class="mt-4 flex flex-col text-black/70">
														<p class="flex gap-2">
															<span class="font-medium">Email:</span><span
																>{PUBLIC_BIRCH_GDPR_CONTACT_EMAIL}</span
															>
														</p>
														<p class="flex gap-2">
															<span class="font-medium">Phone:</span><span
																>{PUBLIC_BIRCH_GDPR_CONTACT_PHONE}</span
															>
														</p>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
							</Carousel.Content>

							<div
								class="bg-my-grey-3/5 relative mt-4 flex w-full shrink-0 items-center justify-between p-3"
							>
								<Carousel.Previous class="static translate-none" />

								<NextButton bind:permitGoNext />

								<Carousel.Next class="static translate-none cursor-pointer" />
							</div>
						</Carousel.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
