<script lang="ts" module>
	import { Checkbox, Label } from '^components/ui';
</script>

<script lang="ts">
	let {
		id,
		label,
		checked = $bindable()
	} = $props<{
		id: string;
		label: string;
		checked: boolean | undefined;
	}>();

	let checkedDerived = $derived<boolean>(typeof checked === 'undefined' ? false : checked);
</script>

<div class="flex items-center gap-4">
	<Checkbox {id} bind:checked={checkedDerived} />
	<Label class="text-base font-normal" for={id}>{label}</Label>
</div>
