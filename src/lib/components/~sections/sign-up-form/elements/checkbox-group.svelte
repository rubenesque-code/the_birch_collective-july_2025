<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import Checkbox from './checkbox.svelte';
</script>

<script lang="ts">
	let {
		options,
		group = $bindable([]),
		idPrefix = '',
		onCheckedChange,
		children
	}: {
		options: { value: string; label: string }[];
		group: string[];
		idPrefix?: string;
		onCheckedChange: () => void;
		children?: Snippet<[option: { value: string; label: string }]>;
	} = $props();

	function toggleValue(value: string, checked: boolean) {
		if (checked) {
			group = [...group, value];
		} else {
			group = group.filter((v) => v !== value);
		}
	}
</script>

<div class="flex flex-col space-y-3">
	{#each options as option}
		<Checkbox
			id={idPrefix + option.value}
			label={option.label}
			checked={group.includes(option.value)}
			onCheckedChange={(checked) => {
				toggleValue(option.value, checked);
				onCheckedChange();
			}}
		/>

		{@render children?.(option)}
	{/each}
</div>
