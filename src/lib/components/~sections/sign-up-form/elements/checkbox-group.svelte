<script lang="ts" module>
	import Checkbox from './checkbox.svelte';
</script>

<script lang="ts">
	let {
		options,
		group = $bindable([]),
		idPrefix = '',
		onCheckedChange
	}: {
		options: { value: string; label: string }[];
		group: string[];
		idPrefix?: string;
		onCheckedChange: () => void;
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
	{/each}
</div>
