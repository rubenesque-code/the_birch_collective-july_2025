<script lang="ts" module>
	import { cn } from '^lib/utils';
</script>

<script lang="ts">
	let {
		title,
		body,
		class: className
	}: {
		title?: string;
		body: Array<string | { title: string; text: string }>;
		class?: string;
	} = $props();
</script>

<section class={cn('flex justify-center', className)}>
	<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col gap-y-4">
		{#if title}
			<h2 class="text-bc-slate-pine section-title-bold text-left">{title}</h2>
		{/if}

		{#each body as text}
			<p class="leading-relaxed">{text}</p>
		{/each}
	</div>
</section>
