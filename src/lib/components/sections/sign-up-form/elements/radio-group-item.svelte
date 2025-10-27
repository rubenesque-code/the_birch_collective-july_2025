<script lang="ts" module>
	import { Label, RadioGroup } from '^components/ui';
</script>

<script lang="ts">
	let { id, labelText, value } = $props<{
		id: string;
		labelText: string;
		value: string;
	}>();
</script>

<div class="flex items-center space-x-3">
	<RadioGroup.Item {value} {id} />
	<Label class="text-base" for={id}>{labelText}</Label>
</div>
