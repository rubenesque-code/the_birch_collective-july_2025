<script lang="ts" module>
	type TextItem = string | { title: string; text: string };

	type ContentBlock =
		| { type: 'paragraph'; content: string }
		| { type: 'list'; items: TextItem[] }
		| { type: 'subsection'; title: string; content: ContentBlock[] }
		| { type: 'link'; text: string; url: string };
</script>

<script lang="ts">
	let {
		title,
		body
	}: {
		title?: string;
		body: ContentBlock[];
	} = $props();
</script>

<section class="section-mt flex justify-center">
	<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col">
		{#if title}
			<h2 class="text-bc-slate-pine section-title-bold text-left">{title}</h2>
		{/if}

		<div class="mt-[20px] flex flex-col gap-y-4">
			{#each body as block}
				{#if block.type === 'paragraph'}
					<p class="leading-relaxed">{block.content}</p>
				{:else if block.type === 'list'}
					<ul class="list-disc pl-4 leading-relaxed">
						{#each block.items as item}
							<li>
								{#if typeof item === 'string'}
									{item}
								{:else}
									<span class="font-medium">{item.title}</span>: <span>{item.text}</span>
								{/if}
							</li>
						{/each}
					</ul>
				{:else if block.type === 'subsection'}
					<div class="mt-4">
						<h3
							class="font-display decoration-bc-slate-pine/40 text-3xl font-bold underline decoration-2 underline-offset-4"
						>
							{block.title}
						</h3>
						<div class="mt-4 flex flex-col gap-y-4">
							{#each block.content as subBlock}
								{#if subBlock.type === 'paragraph'}
									<p class="leading-relaxed">{subBlock.content}</p>
								{:else if subBlock.type === 'list'}
									<ul class="list-disc pl-4 leading-relaxed">
										{#each subBlock.items as item}
											<li>
												{#if typeof item === 'string'}
													{item}
												{:else}
													<span class="font-medium">{item.title}</span>: <span>{item.text}</span>
												{/if}
											</li>
										{/each}
									</ul>
								{:else if subBlock.type === 'link'}
									<a
										class="inline-block text-blue-500 underline underline-offset-2"
										href={subBlock.url}
										target="_blank"
									>
										{subBlock.text}
									</a>
								{/if}
							{/each}
						</div>
					</div>
				{:else if block.type === 'link'}
					<a
						class="inline-block text-blue-500 underline underline-offset-2"
						href={block.url}
						target="_blank"
					>
						{block.text}
					</a>
				{/if}
			{/each}
		</div>
	</div>
</section>
