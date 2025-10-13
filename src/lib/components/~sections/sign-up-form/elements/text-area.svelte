<script lang="ts" module>
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import type { WithElementRef } from '^lib/utils';

	import { Textarea } from '^components/ui';
</script>

<script lang="ts">
	let {
		value = $bindable(),
		onkeyup,
		placeholder = 'Enter response here'
	}: {
		value: string;
		onkeyup?: WithElementRef<HTMLTextareaAttributes>['onkeyup'];
		placeholder?: string;
	} = $props();
</script>

<Textarea
	class="focus-visible:border-bc-logo-black mt-2 h-[120px] w-full resize-none py-2 !text-base focus:outline-none focus-visible:ring-0 "
	placeholder="Enter response here"
	bind:value
	{onkeyup}
/>
