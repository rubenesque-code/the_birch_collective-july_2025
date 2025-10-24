<script lang="ts" module>
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let { type, children }: { type: 'text' | 'video'; children: Snippet<[]> } = $props();
</script>

<div class="flex justify-center">
	<div
		class={`section-x-padding box-content w-full max-w-[900px] ${type === 'text' ? 'max-w-[768px]' : 'max-w-[900px]'}`}
	>
		{@render children()}
	</div>
</div>
