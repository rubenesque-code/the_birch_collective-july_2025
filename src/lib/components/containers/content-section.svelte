<script lang="ts" module>
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let { variant, children }: { variant: 'text' | 'video'; children: Snippet<[]> } = $props();
</script>

<div class="flex justify-center">
	<div
		class={`section-x-padding box-content w-full ${variant === 'text' ? '4xl:max-w-[900px] max-w-[768px]' : '4xl:max-w-[1200px] max-w-[900px]'}`}
	>
		{@render children()}
	</div>
</div>
