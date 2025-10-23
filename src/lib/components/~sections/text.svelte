<script lang="ts">
	let {
		title,
		body,
		marginTop = 'md'
	}: {
		title?: string;
		body: Array<string | { title: string; text: string }>;
		marginTop?: 'md' | 'lg';
	} = $props();
</script>

<section class={`flex justify-center ${marginTop === 'md' ? 'section-mt-md' : 'section-mt-lg'}`}>
	<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col gap-y-4">
		{#if title}
			<h2 class="text-bc-slate-pine section-title-bold text-left">{title}</h2>
		{/if}

		{#each body as text}
			<p class="leading-relaxed">{text}</p>
		{/each}
	</div>
</section>
