<script lang="ts">
	let { formIsOpen = $bindable() }: { formIsOpen: boolean } = $props();
</script>

<button
	class="xs-sm:px-5 xs-sm:py-[10px] relative flex cursor-pointer items-center gap-4 rounded-3xl bg-white px-3 py-2 tracking-wide"
	onclick={() => (formIsOpen = true)}
	type="button"
>
	<span class="xs-sm:text-lg text-[15.5px] font-medium uppercase">Sign Up</span>
</button>
