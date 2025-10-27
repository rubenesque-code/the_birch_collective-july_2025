<script lang="ts" module>
	import { siteState, updateSiteState } from '^lib/state';

	import { Dialog, Label, RadioGroup } from '^components/ui';
	import type { SvelteSubmitEvent } from '^lib/types';

	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	import { isValidEmail } from '^helpers';
	import { sendEnquiryToBirch } from '^services';
	import { Check, Square, Warning, X } from 'phosphor-svelte';
	import { fade, slide } from 'svelte/transition';
	import ErrorPopUp from '^components/~pages-by-route/get-in-touch/form/error-pop-up.svelte';

	const formId = {
		name: 'name',
		email: 'email',
		message: 'message',
		supportingFile: 'supportingFile'
	};
</script>

<script lang="ts">
	let form: HTMLFormElement;

	let nameInput: HTMLInputElement;
	let emailInput: HTMLInputElement;

	let nameInputIsFocused = $state(false);
	let emailInputIsFocused = $state(false);

	let nameValue: string = $state('');
	let emailValue: string = $state('');
	let userTypeValue: string = $state('');

	let isInput = $derived(Boolean(nameValue.length || emailValue.length));

	let nameIsValid = $derived(nameValue.length);
	let emailIsValid = $derived(emailValue.length && isValidEmail(emailValue));
	let userTypeIsValid = $derived(userTypeValue.length);

	let showNameError = $state(false);
	let showEmailError = $state(false);
	let showUserTypeError = $state(false);

	const hideAllErrorPopups = () => {
		showNameError = false;
		showEmailError = false;
		showUserTypeError = false;
	};

	let postStatus: 'idle' | 'pending' | 'error' | 'success' = $state('idle');

	let formIsDisabled = $derived.by(() => postStatus === 'pending' || postStatus === 'success');

	const resetForm = () => {
		form.reset();

		nameValue = '';
		emailValue = '';
		userTypeValue = '';

		isInput = false;
	};

	const handleSubmit = async (e: SvelteSubmitEvent) => {
		e.preventDefault();

		if (!form) {
			return;
		}

		if (postStatus === 'pending') {
			return;
		}

		const requirementsMet = nameIsValid && emailIsValid && userTypeIsValid;

		if (!requirementsMet) {
			if (!nameIsValid) {
				showNameError = true;

				nameInput.focus();
			}

			if (!emailIsValid) {
				showEmailError = true;

				if (nameIsValid) emailInput.focus();
			}

			if (!userTypeIsValid) {
				showUserTypeError = true;
			}

			return;
		}

		postStatus = 'pending';

		/* 		toast.promise(
			sendEnquiryToBirch({
				name: nameValue,
				email: emailValue,
				message: messageValue,
				onError: () => {
					postStatus = 'error';
				},
				onSuccess: () => {
					postStatus = 'success';

					setTimeout(resetForm, 500);

					setTimeout(() => (postStatus = 'idle'), 3000);
				}
			}),
			{
				loading: 'Sending form...',
				success: "Thanks for your enquiry. We'll be in touch shortly.",
				error:
					'Oops...something went wrong sending the form. Please try again. If the problem persists, try an alternative method of contact.',
				duration: 4000
			}
		); */
	};

	let nonTabbedInputSelection = $state(false);

	onMount(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				nonTabbedInputSelection = false;
			}
		};

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<Dialog.Root open={siteState.newsletter.isOpen} onOpenChange={updateSiteState.newsletter.setIsOpen}>
	<Dialog.Content class="p-12 sm:max-w-[600px]">
		<Dialog.Header class="flex flex-col items-center text-center">
			<Dialog.Title class="font-display text-5xl font-bold">Join Our Newsletter</Dialog.Title>
			<p class="text-bc-logo-black/70 mt-4 text-center">
				Stay informed about our programmes by signing up to our newsletter
			</p>
		</Dialog.Header>

		<form
			class="flex flex-col gap-6 pt-2 pb-6 sm:pt-4"
			bind:this={form}
			onsubmit={handleSubmit}
			novalidate
		>
			<div class="mt-4 flex flex-col gap-4">
				<div class="relative">
					<div class="relative">
						<input
							class={`input focus-visible:outline-my-grey-1 border-my-grey-3 w-full rounded-sm border px-2 py-1 text-[15px] focus-visible:outline-2 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:outline-transparent focus-visible:!outline-none' : ''}`}
							placeholder="Enter your name here"
							id={formId.name}
							name={formId.name}
							bind:this={nameInput}
							bind:value={nameValue}
							onkeydown={() => {
								showNameError = false;
								nonTabbedInputSelection = true;
							}}
							onblur={() => {
								if (!nameInputIsFocused) {
									return;
								}
								nameInputIsFocused = false;
								hideAllErrorPopups();
								nonTabbedInputSelection = false;
							}}
							onfocus={() => {
								nameInputIsFocused = true;
							}}
							onclick={() => {
								nonTabbedInputSelection = true;
							}}
							disabled={formIsDisabled}
							type="text"
						/>

						{#if postStatus === 'pending'}
							<div class="bg-my-grey-3/10 absolute inset-0 z-10"></div>
						{/if}
					</div>

					<div class="mt-[3px] flex items-center justify-between gap-1">
						<div>
							{#if nameValue?.length && !nameInputIsFocused}
								<span class="-translate-y-[2px] text-[14px]" transition:fade>
									{#if nameIsValid}
										<span class="text-check-mark-green">
											<Check weight="duotone" />
										</span>
									{:else}
										<span class="text-bright-red">
											<X weight="duotone" />
										</span>
									{/if}
								</span>
							{/if}
						</div>
					</div>

					<ErrorPopUp show={!nameIsValid && showNameError}>Please fill out your name.</ErrorPopUp>
				</div>

				<div class="relative">
					<div class="relative">
						<input
							class={`input focus-visible:outline-my-grey-1 border-my-grey-3 w-full rounded-sm border px-2 py-1 text-[15px] focus-visible:outline-2 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:outline-transparent focus-visible:!outline-none' : ''}`}
							placeholder="Enter your email here"
							id={formId.email}
							name={formId.email}
							bind:this={emailInput}
							bind:value={emailValue}
							onkeydown={() => {
								showEmailError = false;
								nonTabbedInputSelection = true;
							}}
							onblur={() => {
								if (!emailInputIsFocused) {
									return;
								}
								emailInputIsFocused = false;
								hideAllErrorPopups();
								nonTabbedInputSelection = false;
							}}
							onfocus={() => {
								emailInputIsFocused = true;
							}}
							onclick={() => {
								nonTabbedInputSelection = true;
							}}
							disabled={formIsDisabled}
							type="text"
						/>

						{#if postStatus === 'pending'}
							<div class="bg-my-grey-3/10 absolute inset-0 z-10"></div>
						{/if}
					</div>

					<div class="mt-[3px] flex items-center justify-between gap-1">
						<div>
							{#if emailValue?.length && !emailInputIsFocused}
								<span class="-translate-y-[2px] text-[14px]" transition:fade>
									{#if emailIsValid}
										<span class="text-check-mark-green">
											<Check weight="duotone" />
										</span>
									{:else}
										<span class="text-bright-red">
											<X weight="duotone" />
										</span>
									{/if}
								</span>
							{/if}
						</div>
					</div>

					<ErrorPopUp show={!emailIsValid && showEmailError}
						>Please fill out a valid email.</ErrorPopUp
					>
				</div>

				<div class="relative mt-2">
					<div class="relative">
						<RadioGroup.Root class="flex items-center gap-x-8" bind:value={userTypeValue}>
							<div class="flex items-center gap-x-2">
								<RadioGroup.Item value="participant" id="option-one" />
								<Label class="text-base font-normal" for="option-one">I'm a participant</Label>
							</div>

							<div class="flex items-center gap-x-2">
								<RadioGroup.Item value="referrer" id="option-two" />
								<Label class="text-base font-normal" for="option-two"
									>I'm a referrer or professional</Label
								>
							</div>
						</RadioGroup.Root>

						{#if postStatus === 'pending'}
							<div class="bg-my-grey-3/10 absolute inset-0 z-10"></div>
						{/if}
					</div>

					<ErrorPopUp show={!userTypeValue.length && showUserTypeError}
						>Please select either participant or referrer/professional</ErrorPopUp
					>
				</div>
			</div>

			<div class="flex w-full justify-center">
				<button
					class={`hover:border-my-grey-2 focus-visible:outline-my-grey-1 border-bc-slate-pine bg-bc-slate-pine relative mt-4 w-[200px] max-w-full self-start rounded-sm border-2 px-3 py-2 text-[13.5px] tracking-wider text-white uppercase transition-colors duration-75 ease-in-out focus-visible:outline-2 ${isInput ? 'cursor-pointer' : 'pointer-events-none cursor-auto opacity-50'}`}
					type="submit"
					transition:slide={{ duration: 200 }}
					tabindex="0"
				>
					<span class="relative inline-block translate-y-[2px] leading-none text-black/90">
						{#if postStatus !== 'idle'}
							<span
								class="absolute top-1/2 -left-4 -translate-x-full -translate-y-1/2"
								transition:fade
							>
								{#if postStatus === 'pending'}
									<Square size="18" color="#affaa1" />
								{:else if postStatus === 'success'}
									<Check size="20" color="#9dd874" weight="bold" />
								{:else}
									<Warning size="18" color="#f98e72" weight="bold" />
								{/if}
							</span>
						{/if}
						<span class="{`leading-none font-medium text-white `}}">
							{#if postStatus === 'idle'}
								Submit
							{:else if postStatus === 'pending'}
								Sending...
							{:else if postStatus === 'error'}
								Try again
							{:else}
								Sent!
							{/if}
						</span>
					</span>
				</button>
			</div>

			{#if postStatus !== 'idle'}
				<p transition:slide>
					{#if postStatus === 'pending'}
						Just a moment... sending enquiry.
					{:else if postStatus === 'success'}
						Thanks for your message. We'll be in touch asap.
					{:else}
						Oops...something went wrong sending the form. Please try again. If the problem persists,
						try an alternative method of contact.
					{/if}
				</p>
			{/if}
		</form>
	</Dialog.Content>
</Dialog.Root>

<!-- <div
	class="border-bc-slate-pine fixed top-2 right-2 left-2 z-[200] rounded-lg border-4 bg-white px-4 py-2"
>
<button class='absolute' onclick={} type="button">
			<X />
		</button>
	<div class="flex justify-between">
		<p class="font-medium">We now have a newsletter!</p>

		
	</div>

	<div class="mt-4">
		<div class="flex flex-col gap-2">
			<p class="text-lg">I'm a</p>

			<RadioGroup.Root class="flex items-center gap-x-8" bind:value={response}>
				<div class="flex items-center gap-x-2">
					<RadioGroup.Item value="participant" id="option-one" />
					<Label class="text-base" for="option-one">participant</Label>
				</div>

				<div class="flex items-center gap-x-2">
					<RadioGroup.Item value="referrer" id="option-two" />
					<Label class="text-base" for="option-two">referrer</Label>
				</div>
			</RadioGroup.Root>
		</div>
	</div>
</div> -->
