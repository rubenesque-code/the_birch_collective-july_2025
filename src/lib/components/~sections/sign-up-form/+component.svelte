<script lang="ts" module>
	import { fade, scale } from 'svelte/transition';

	import { browser } from '$app/environment';
	import {
		PUBLIC_BIRCH_GDPR_CONTACT_EMAIL,
		PUBLIC_BIRCH_GDPR_CONTACT_PHONE
	} from '$env/static/public';

	import { slides } from '^content/sign-up-form';
	import { toggleBodyScroll } from '^helpers';

	import { Card, Carousel, Checkbox, Input, Label } from '^components/ui';
	// import { Input } from '^components/ui/input';
	import NextButton from './next-button.svelte';
	import DatePicker from './date-picker.svelte';
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	let activeSlide: 'intro' | 'terms' = 'intro';

	let permitGoNext = $derived.by(() => {
		if (activeSlide === 'intro') {
			return true;
		}

		return false;
	});
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
					<div class="bg-my-grey-3/5 flex items-start justify-between p-3">
						<h3 class="font-display text-3xl font-bold">
							<span class="text-black">The Birch Collective</span>
						</h3>
						<h2 class="font-display text-bc-slate-pine text-3xl font-bold">Programme Signup</h2>
					</div>

					<div class="relative flex grow flex-col">
						<Carousel.Root class="flex grow flex-col " opts={{ align: 'center' }}>
							<Carousel.Content
								hiddenParentClass="grow flex flex-col px-6"
								class="ml-0 w-full grow "
							>
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
