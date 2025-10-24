<script lang="ts" module>
	import { scale } from 'svelte/transition';
	import { CheckSquare } from 'phosphor-svelte';

	import { PUBLIC_BIRCH_EMAIL } from '$env/static/public';

	import { LoadingSpinner } from '^components';
</script>

<script lang="ts">
	let {
		submitStatus = $bindable(),
		handleSubmit,
		onClose
	}: {
		submitStatus: 'idle' | 'pending' | 'error' | 'success';
		handleSubmit: () => void;
		onClose: () => void;
	} = $props();
</script>

<div
	class="absolute inset-0 z-30 grid place-items-center rounded-lg bg-white/90 px-8"
	transition:scale={{ opacity: 0.9, start: 0.9 }}
>
	<div class="max-w-[600px]">
		{#if submitStatus === 'pending'}
			<div class="flex items-center gap-3">
				<LoadingSpinner class="mr-3 -ml-1" />
				<p class="text-lg">Sending...</p>
			</div>
		{:else if submitStatus === 'error'}
			<div>
				<p class="text-lg leading-relaxed">
					Something went wrong sending the form. If the problem persists, please contact: <a
						class="font-medium"
						href={`mailto:${PUBLIC_BIRCH_EMAIL}`}
						target="_blank">{PUBLIC_BIRCH_EMAIL}</a
					>
				</p>

				<button
					class="bg-bc-amber mt-6 cursor-pointer rounded-md border px-2 py-1 text-lg text-white"
					onclick={() => {
						submitStatus = 'pending';

						setTimeout(() => {
							handleSubmit();
						}, 700);
					}}
					type="button">Try again</button
				>
			</div>
		{:else}
			<p class="flex items-center gap-3 text-lg leading-relaxed">
				<span>Sign up received</span>
				<span class="text-2xl text-green-600">
					<CheckSquare weight="fill" />
				</span>
			</p>

			<p class="text-bc-logo-black/95 mt-3 text-lg leading-relaxed">
				A member of the Birch team will contact you shortly.
			</p>

			<button
				class="bg-bc-amber mt-6 cursor-pointer rounded-md border px-2 py-1 text-[17px] font-medium tracking-wide text-white"
				onclick={onClose}
				type="button">Close</button
			>
		{/if}
	</div>
</div>
