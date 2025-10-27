<script lang="ts">
	let {
		formIsOpen = $bindable(),
		text = 'Sign Up',
		disabled = false
	}: { formIsOpen: boolean; text?: string; disabled?: boolean } = $props();
</script>

<div class="4xl:mt-12 mt-8">
	<button
		class="xs-sm:px-5 xs-sm:py-[10px] relative flex cursor-pointer items-center gap-4 rounded-3xl bg-white px-3 py-2 tracking-wide"
		onclick={() => {
			if (disabled) return;

			formIsOpen = true;
		}}
		type="button"
	>
		<span class="xs-sm:text-lg 4xl:text-xl text-[15.5px] font-medium uppercase">{text}</span>
	</button>
</div>
