<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { toast } from 'svelte-sonner';
	import { Check, FileImage, Square, Warning, X } from 'phosphor-svelte';

	import { isEmail } from '^helpers';
	import { emailFormHandler } from '^services';

	import type { SvelteSubmitEvent } from '^types';

	import ErrorPopUp from './error-pop-up.svelte';
	import { Checkbox } from '^components/ui';

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

	let nameInputIsFocused = false;
	let emailInputIsFocused = false;
	let messageInputIsFocused = false;
	let fileInputIsFocused = false;

	let nameValue: string;
	let emailValue: string;
	let messageValue: string;

	let fileInput: HTMLInputElement;
	let fileName: null | string = null;
	let filePreview: string | null = null;
	let fileType: null | 'pdf' | 'image';

	let sendUserCopy = false;

	$: isInput = Boolean(
		nameValue?.length || emailValue?.length || messageValue?.length || fileName?.length
	);

	$: nameIsValid = nameValue?.length;
	$: emailIsValid = emailValue?.length && isEmail(emailInput.value);
	$: messageIsValid = messageValue?.length;

	let showNameError = false;
	let showEmailError = false;
	let showMessageError = false;
	let showAttachmentGenericError = false;
	let showAttachmentSizeError = false;

	const hideAllErrorPopups = () => {
		showNameError = false;
		showEmailError = false;
		showMessageError = false;
		showAttachmentGenericError = false;
		showAttachmentSizeError = false;
	};

	let postStatus: 'idle' | 'pending' | 'error' | 'success' = 'idle';

	$: formIsDisabled = postStatus === 'pending' || postStatus === 'success';

	const onFileChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		showAttachmentSizeError = false;

		const files = e.currentTarget.files;

		if (!files) {
			showAttachmentGenericError = true;

			fileName = '';

			return;
		}

		const file = files[0];

		fileName = file.name;

		filePreview = URL.createObjectURL(file);

		fileType = file.type.includes('pdf') ? 'pdf' : 'image';
	};

	const resetForm = () => {
		form.reset();

		nameValue = '';
		emailValue = '';
		messageValue = '';

		fileName = null;
		fileType = null;
		isInput = false;
		sendUserCopy = false;
	};

	const handleSubmit = async (e: SvelteSubmitEvent) => {
		if (!form) {
			return;
		}

		if (postStatus === 'pending') {
			return;
		}

		const formData = new FormData(e.currentTarget);

		let fileIsValid: null | boolean = null;

		// * shows as just a file here and not a FileList for some reason.
		const file = formData.get(formId.supportingFile) as File;

		if (!file) {
			fileIsValid = false;
		} else {
			const sizeLimit = 2000000;

			const fileIsTooLarge = file.size > sizeLimit;

			fileIsValid = !fileIsTooLarge;
		}

		// I guess this is intended to only show invalid if they've tried to upload a file and it errored.
		const requirementsMet = nameIsValid && emailIsValid && messageIsValid && fileIsValid;

		if (!requirementsMet) {
			if (!nameIsValid) {
				showNameError = true;

				nameInput.focus();
			}

			if (!emailIsValid) {
				showEmailError = true;

				if (nameIsValid) emailInput.focus();
			}

			if (!fileIsValid) {
				showAttachmentSizeError = true;

				if (nameIsValid && emailIsValid) fileInput.focus();
			}

			if (!messageIsValid) {
				showMessageError = true;

				if (nameIsValid && emailIsValid && fileIsValid) messageInput.focus();
			}

			return;
		}

		postStatus = 'pending';

		toast.promise(
			() =>
				emailFormHandler.enquiry.sendToHelpdesk({
					form,
					onError: () => {
						postStatus = 'error';
					},
					onSuccess: () => {
						postStatus = 'success';

						setTimeout(resetForm, 500);

						setTimeout(() => (postStatus = 'idle'), 3000);

						if (sendUserCopy) {
							toast.promise(
								() =>
									emailFormHandler.enquiry.sendCopyToUser({
										email: emailValue,
										name: nameValue,
										message: messageValue
									}),
								{
									loading: 'Sending you a copy...',
									success:
										"We've sent you a copy of your enquiry. Please check your spam folder if you can't see it.",
									error:
										"Oops...something went wrong sending you a copy of your enquiry. We've received your message anyway and will be in touch asap!",
									duration: 4000
								}
							);
						}
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

	let nonTabbedInputSelection = false;

	onMount(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				nonTabbedInputSelection = false;
			}
			if (fileInputIsFocused) {
				if (e.key === 'Enter') {
					fileInput.click();
				}
			}
		};

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

<form
	class="flex flex-col gap-6 rounded-lg bg-my-grey-3/10 px-3 pb-6 pt-2 sm:px-6 sm:pt-4"
	bind:this={form}
	on:submit|preventDefault={handleSubmit}
	novalidate
>
	<h3 class="mt-4 text-center font-real-text text-xl font-medium sm:text-2xl">
		Receive Expert Help in 24 Hours
	</h3>

	<div class="mt-4 flex flex-col gap-4">
		<h4 class="font-medium tracking-wide text-black/50 sm:text-[17px]">Your Details</h4>

		<div class="relative">
			<div class="relative">
				<input
					class={`input w-full rounded-md border  px-2 py-1 text-[15px] focus-visible:outline-2 focus-visible:outline-my-grey-1 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:!outline-none focus-visible:outline-transparent' : ''}`}
					placeholder="Name"
					id={formId.name}
					name={formId.name}
					bind:this={nameInput}
					bind:value={nameValue}
					on:keydown={() => {
						showNameError = false;
						nonTabbedInputSelection = true;
					}}
					on:blur={() => {
						if (!nameInputIsFocused) {
							return;
						}
						nameInputIsFocused = false;
						hideAllErrorPopups();
						nonTabbedInputSelection = false;
					}}
					on:focus={() => {
						nameInputIsFocused = true;
					}}
					on:click={() => {
						nonTabbedInputSelection = true;
					}}
					disabled={formIsDisabled}
					type="text"
				/>

				{#if postStatus === 'pending'}
					<div class="absolute inset-0 z-10 bg-my-grey-3/10"></div>
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

				<p class="mt-[3px] text-right font-real-text text-[13px] font-light italic text-black/40">
					required
				</p>
			</div>

			<ErrorPopUp show={!nameIsValid && showNameError}>Please fill out your name.</ErrorPopUp>
		</div>

		<div class="relative">
			<div class="relative">
				<input
					class={`input w-full rounded-md border px-2 py-1 text-[15px] focus-visible:outline-2 focus-visible:outline-my-grey-1 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:!outline-none focus-visible:outline-transparent' : ''}`}
					placeholder="Email"
					id={formId.email}
					name={formId.email}
					bind:this={emailInput}
					bind:value={emailValue}
					on:keydown={() => {
						showEmailError = false;
						nonTabbedInputSelection = true;
					}}
					on:blur={() => {
						if (!emailInputIsFocused) {
							return;
						}
						emailInputIsFocused = false;
						hideAllErrorPopups();
						nonTabbedInputSelection = false;
					}}
					on:focus={() => {
						emailInputIsFocused = true;
					}}
					on:click={() => {
						nonTabbedInputSelection = true;
					}}
					disabled={formIsDisabled}
					type="text"
				/>

				{#if postStatus === 'pending'}
					<div class="absolute inset-0 z-10 bg-my-grey-3/10"></div>
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

				<p class="mt-[3px] text-right font-real-text text-[13px] font-light italic text-black/40">
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
					class={`input h-[100px] w-full resize-none  rounded-md border px-2 py-1 text-[15px] focus-visible:outline-2 focus-visible:outline-my-grey-1 sm:text-base ${postStatus === 'pending' ? 'opacity-40' : ''} ${nonTabbedInputSelection ? 'focus-visible:!outline-none focus-visible:outline-transparent' : ''}`}
					placeholder="Your message..."
					bind:this={messageInput}
					bind:value={messageValue}
					on:keydown={() => {
						showMessageError = false;
						nonTabbedInputSelection = true;
					}}
					on:focus={() => (messageInputIsFocused = true)}
					on:blur={() => {
						if (!messageInputIsFocused) {
							return;
						}
						messageInputIsFocused = false;
						hideAllErrorPopups();
						nonTabbedInputSelection = false;
					}}
					on:focus={() => {
						messageInputIsFocused = true;
					}}
					on:click={() => {
						nonTabbedInputSelection = true;
					}}
					id={formId.message}
					name={formId.message}
					disabled={formIsDisabled}
				/>

				{#if postStatus === 'pending'}
					<div class="absolute inset-0 z-10 bg-my-grey-3/10"></div>
				{/if}
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

				<p class="mt-[3px] text-right font-real-text text-[13px] font-light italic text-black/40">
					required
				</p>
			</div>

			<ErrorPopUp show={!messageIsValid && showMessageError}
				>Please fill out some details about your order.</ErrorPopUp
			>
		</div>
	</div>

	<div>
		<h4 class="font-medium tracking-wide text-black/50 sm:text-[17px]">Upload a Supporting File</h4>

		<div class="mt-4 flex flex-col gap-1">
			<div class="relative flex items-baseline gap-8">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label
					class="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-md border bg-transparent bg-white px-2 pb-[4px] pt-[8px] text-[15px] text-[#9ca3af] transition-colors duration-100 ease-in-out hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-my-grey-1"
					for={formId.supportingFile}
					on:focus={() => (fileInputIsFocused = true)}
					on:blur={() => (fileInputIsFocused = false)}
					tabindex="0"
				>
					<span class="-translate-y-[2px]"><FileImage /></span>
					<span>Choose image/pdf</span>
				</label>

				<p class="mt-[3px] font-real-text text-[13px] font-light italic text-black/40">optional</p>

				<ErrorPopUp show={showAttachmentSizeError} useCloseButton>
					Please attach a smaller file (2mb limit).
				</ErrorPopUp>

				<ErrorPopUp show={showAttachmentGenericError} useCloseButton>
					File error! Please try again.
				</ErrorPopUp>
			</div>

			<input
				class="invisible h-0 w-0"
				type="file"
				name={formId.supportingFile}
				id={formId.supportingFile}
				accept=".png, .jpeg, .jpg, .webp, .pdf, .avif"
				on:change={onFileChange}
				disabled={formIsDisabled}
				bind:this={fileInput}
			/>

			<p class="mt-[3px] font-real-text text-[13px] font-light italic text-black/40">
				*File size limit: 2mb. Accepted file types: png, jpeg, jpg, webp, avif and pdf.
			</p>
		</div>

		{#if filePreview && fileType}
			<div
				class={`mt-4 flex items-center gap-4 ${formIsDisabled ? 'pointer-events-none opacity-60 grayscale' : ''}`}
			>
				{#if fileType === 'image'}
					<div>
						<div
							class="grid h-[130px] w-[130px] place-items-center overflow-hidden rounded-md border bg-white p-1"
						>
							<img
								class="overflow-hidden object-contain"
								src={filePreview}
								alt="uploaded file preview"
							/>
						</div>

						<p class="mt-[3px] text-[14px] italic text-my-grey-1">Image/pdf preview</p>
					</div>
				{/if}

				<div class="flex flex-col items-start gap-4">
					<div class="flex items-center gap-2">
						{#if fileType === 'pdf'}
							<p class="text-sm text-my-grey-1">Your file:</p>
						{/if}
						<p class="max-w-[300px] truncate text-sm text-black/90">{fileName}</p>
					</div>

					<div class="flex gap-4">
						<button
							class="bg-transparent text-[11px] uppercase tracking-[0.075em] text-my-grey-1/80 transition-colors duration-100 ease-in-out hover:underline focus-visible:outline-2 focus-visible:outline-my-grey-1"
							on:click={() => {
								fileInput.value = '';
								filePreview = null;
								fileName = null;
							}}
							type="button"
							tabindex="0">remove file</button
						>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<label
							class="cursor-pointer bg-transparent text-[11px] uppercase tracking-[0.075em] text-my-grey-1/80 transition-colors duration-100 ease-in-out hover:underline focus-visible:outline-2 focus-visible:outline-my-grey-1"
							for={formId.supportingFile}
							tabindex="0">change file</label
						>
					</div>
				</div>
			</div>
		{/if}
	</div>

	{#if isInput}
		<button
			class="relative mt-8 w-[200px] max-w-full self-start rounded-md border px-3 py-2 text-[13.5px] uppercase tracking-wider transition-colors duration-75 ease-in-out hover:border-my-grey-2 focus-visible:outline-2 focus-visible:outline-my-grey-1"
			type="submit"
			transition:slide={{ duration: 200 }}
			tabindex="0"
		>
			<span class="relative inline-block translate-y-[2px] leading-none text-black/90">
				{#if postStatus !== 'idle'}
					<span class="absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2" transition:fade>
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
					class="{`bg-white font-real-text leading-none text-black/90 ${postStatus !== 'idle' ? 'text-black/70' : ''}`}}"
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
					Oops...something went wrong sending the form. Please try again. If the problem persists,
					try an alternative method of contact.
				{/if}
			</p>
		{/if}

		<div
			class="{`flex items-center gap-2 ${postStatus !== 'idle' ? 'opacity-70' : ''}`}}"
			transition:slide
			role="group"
		>
			<Checkbox.Root
				class="border-[rgb(229, 231, 235)] h-[16px] w-[16px] rounded-none border focus-visible:outline-2 focus-visible:outline-my-grey-1 data-[state=checked]:bg-my-grey-2 "
				disabled={formIsDisabled}
				bind:checked={sendUserCopy}
				tabindex={0}
				id="receive-email"
			/>
			<label class="translate-y-[2px] text-sm leading-none text-my-grey-1" for="receive-email"
				>Receive a copy of this message</label
			>
		</div>
	{/if}
</form>
