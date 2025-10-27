<script lang="ts" module>
	import { Card } from '^components/ui';
</script>

<script lang="ts">
	let { title } = $props<{
		title: string;
	}>();
</script>

<Card.Header class="bg-my-grey-3/5 flex items-center justify-between p-3">
	<Card.Title class="font-display text-[30px] font-bold tracking-wide text-black/70 uppercase"
		>{title}</Card.Title
	>
	<div class="font-display text-bc-slate-pine/70 text-2xl font-bold tracking-wide uppercase">
		Programme Signup
	</div>
</Card.Header>
