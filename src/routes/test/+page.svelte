<script lang="ts" module>
	import { pageContent } from '^content/practice-methodology';

	import { ImageHeader, TextSection } from '^components/~sections';
</script>

<script lang="ts">
</script>

<main>
	<ImageHeader
		heading="Our Trauma Informed Practise & Community Mental Health Approach"
		align="center-left"
	/>

	<TextSection
		title={pageContent['policies-practices'].title}
		body={pageContent['policies-practices'].paragraphs}
	/>

	<section class="section-mt flex justify-center">
		<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col gap-y-4">
			<h2 class="text-bc-slate-pine section-title-bold text-left">{pageContent.context.title}</h2>

			<h3 class="section-title-small">{pageContent.context.subsections[0].subtitle}</h3>

			{#each pageContent.context.subsections[0].content as item}
				{#if item.type === 'paragraph'}
					<p class="leading-relaxed">{item.text}</p>
				{:else if item.type === 'link'}
					<a
						class="mt-4 inline-block text-blue-500 underline underline-offset-2"
						href={item.url}
						target="_blank">{item.text}</a
					>
				{/if}
			{/each}
		</div>
	</section>
</main>
