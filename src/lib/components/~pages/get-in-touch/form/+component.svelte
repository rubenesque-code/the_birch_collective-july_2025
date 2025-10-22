<script lang="ts" module>
	import { Check, Square, Warning, X } from 'phosphor-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { fade, slide } from 'svelte/transition';

	import { isValidEmail } from '^helpers';
	import { enquiryFormHandler } from '^services';

	import type { SvelteSubmitEvent } from '^types';

	import ErrorPopUp from './error-pop-up.svelte';

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
	let messageInput: HTMLTextAreaElement;

	let nameInputIsFocused = $state(false);
	let emailInputIsFocused = $state(false);
	let messageInputIsFocused = $state(false);

	let nameValue: string = $state('');
	let emailValue: string = $state('');
	let messageValue: string = $state('');

	let isInput = $derived(Boolean(nameValue.length || emailValue.length || messageValue.length));

	let nameIsValid = $derived(nameValue.length);
	let emailIsValid = $derived(emailValue.length && isValidEmail(emailValue));
	let messageIsValid = $derived(messageValue.length);

	let showNameError = $state(false);
	let showEmailError = $state(false);
	let showMessageError = $state(false);

	const hideAllErrorPopups = () => {
		showNameError = false;
		showEmailError = false;
		showMessageError = false;
	};

	let postStatus: 'idle' | 'pending' | 'error' | 'success' = $state('idle');

	let formIsDisabled = $derived.by(() => postStatus === 'pending' || postStatus === 'success');

	const resetForm = () => {
		form.reset();

		nameValue = '';
		emailValue = '';
		messageValue = '';

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

		const requirementsMet = nameIsValid && emailIsValid && messageIsValid;

		if (!requirementsMet) {
			if (!nameIsValid) {
				showNameError = true;

				nameInput.focus();
			}

			if (!emailIsValid) {
				showEmailError = true;

				if (nameIsValid) emailInput.focus();
			}

			if (!messageIsValid) {
				showMessageError = true;

				if (nameIsValid && emailIsValid) messageInput.focus();
			}

			return;
		}

		postStatus = 'pending';

		toast.promise(
			() =>
				enquiryFormHandler.postEnquiry({
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
		);
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

<form
	class="flex flex-col gap-6 pt-2 pb-6 sm:pt-4"
	bind:this={form}
	onsubmit={handleSubmit}
	novalidate
>
	<div class="mt-4 flex flex-col gap-4">
		<h4 class="font-medium tracking-wide text-black/50 sm:text-[17px]">Your Details</h4>

		<div class="relative">
			<div class="relative">
				<input
					class={`input focus-visible:outline-my-grey-1 w-full rounded-sm border px-2 py-1 text-[15px] focus-visible:outline-2 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:outline-transparent focus-visible:!outline-none' : ''}`}
					placeholder="Name"
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

				<p class="font-real-text mt-[3px] text-right text-[13px] font-light text-black/40 italic">
					required
				</p>
			</div>

			<ErrorPopUp show={!nameIsValid && showNameError}>Please fill out your name.</ErrorPopUp>
		</div>

		<div class="relative">
			<div class="relative">
				<input
					class={`input focus-visible:outline-my-grey-1 w-full rounded-sm border px-2 py-1 text-[15px] focus-visible:outline-2 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:outline-transparent focus-visible:!outline-none' : ''}`}
					placeholder="Email"
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

				<p class="font-real-text mt-[3px] text-right text-[13px] font-light text-black/40 italic">
					required
				</p>
			</div>

			<ErrorPopUp show={!emailIsValid && showEmailError}>Please fill out a valid email.</ErrorPopUp>
		</div>
	</div>

	<div class="mt-4 flex flex-col gap-4">
		<h4 class="font-medium tracking-wide text-black/50 sm:text-[17px]">Your Enquiry</h4>

		<div class="relative">
			<div class="relative">
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<textarea
					class={`input focus-visible:outline-my-grey-1 h-[100px] w-full resize-none rounded-sm border px-2 py-1 text-[15px] focus-visible:outline-2 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:outline-transparent focus-visible:!outline-none' : ''}`}
					placeholder="Your message..."
					bind:this={messageInput}
					bind:value={messageValue}
					onkeydown={() => {
						showMessageError = false;
						nonTabbedInputSelection = true;
					}}
					onfocus={() => (messageInputIsFocused = true)}
					onblur={() => {
						if (!messageInputIsFocused) {
							return;
						}
						messageInputIsFocused = false;
						hideAllErrorPopups();
						nonTabbedInputSelection = false;
					}}
					onclick={() => {
						nonTabbedInputSelection = true;
					}}
					id={formId.message}
					name={formId.message}
					disabled={formIsDisabled}
				/>

				{#if postStatus === 'pending'}
					<div class="bg-my-grey-3/10 absolute inset-0 z-10"></div>
				{/if}

				<ErrorPopUp show={!messageIsValid && showMessageError}>Message required.</ErrorPopUp>
			</div>

			<div class="mt-[3px] flex items-center justify-between gap-1">
				<div>
					{#if messageValue?.length && !messageInputIsFocused}
						<span class="-translate-y-[2px] text-[14px]" transition:fade>
							{#if messageIsValid}
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

				<p class="font-real-text mt-[3px] text-right text-[13px] font-light text-black/40 italic">
					required
				</p>
			</div>
		</div>
	</div>

	<button
		class={`hover:border-my-grey-2 focus-visible:outline-my-grey-1 relative mt-8 w-[200px] max-w-full self-start rounded-sm border px-3 py-2 text-[13.5px] tracking-wider uppercase transition-colors duration-75 ease-in-out focus-visible:outline-2 ${isInput ? 'cursor-pointer' : 'pointer-events-none cursor-auto opacity-50'}`}
		type="submit"
		transition:slide={{ duration: 200 }}
		tabindex="0"
	>
		<span class="relative inline-block translate-y-[2px] leading-none text-black/90">
			{#if postStatus !== 'idle'}
				<span class="absolute top-1/2 -left-4 -translate-x-full -translate-y-1/2" transition:fade>
					{#if postStatus === 'pending'}
						<Square size="18" color="#affaa1" />
					{:else if postStatus === 'success'}
						<Check size="20" color="#9dd874" weight="bold" />
					{:else}
						<Warning size="18" color="#f98e72" weight="bold" />
					{/if}
				</span>
			{/if}
			<span
				class="{`font-real-text bg-white leading-none text-black/90 ${postStatus !== 'idle' ? 'text-black/70' : ''}`}}"
			>
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

	{#if postStatus !== 'idle'}
		<p transition:slide>
			{#if postStatus === 'pending'}
				Just a moment... sending enquiry.
			{:else if postStatus === 'success'}
				Thanks for your message. We'll be in touch asap.
			{:else}
				Oops...something went wrong sending the form. Please try again. If the problem persists, try
				an alternative method of contact.
			{/if}
		</p>
	{/if}
</form>
