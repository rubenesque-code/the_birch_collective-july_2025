<script lang="ts" module>
	import { ArrowCircleRight } from 'phosphor-svelte';

	import type { EnhancedImg } from '^assets/image';

	import { ImageHeader } from '^components/~sections';

	type Programme = {
		link: string;
		imgSrc: EnhancedImg;
		imgAlt?: string;
		title: string;
		text: string;
	};
</script>

<script lang="ts">
	let {
		heading,
		lead,
		programmes = [],
		align
	}: {
		heading: string;
		lead: string;
		programmes: Programme[];
		align?: 'left' | 'right';
	} = $props();

	const keyFor = (p: Programme) => p.link ?? p.title;
</script>

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader {heading} {lead} {align} />

	<main class="mt-8 flex justify-center">
		<div class="section-standard w-full max-w-[1800px]">
			<div class="3xl:gap-x-40 grid w-full justify-between gap-x-20 gap-y-16 lg:grid-cols-2">
				{#each programmes as programme, i (keyFor(programme))}
					<article aria-labelledby={`tile-${programme.title}`}>
						<a
							class="group/tile focus:ring-bc-amber relative block w-full focus:ring-2 focus:outline-none"
							href={programme.link}
							aria-label={programme.title}
						>
							<div class="relative">
								<enhanced:img
									class="xs-sm:aspect-[4/3] aspect-square rounded-sm object-cover md:aspect-[5/3] lg:aspect-square xl:aspect-[4/3]"
									src={programme.imgSrc}
									alt={programme.imgAlt ?? programme.title}
									loading="lazy"
								/>

								<div
									class="from-bc-slate-pine/80 absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-gradient-to-t to-transparent p-4 pb-6 tracking-wide xl:p-4"
								>
									<h3 id={`tile-${programme.title}`} class="card-title text-white">
										{programme.title}
									</h3>
								</div>
							</div>

							<div class="xs-sm:mt-4 mt-3 pl-2 xl:pl-4">
								<p class="max-w-[640px] leading-relaxed xl:max-w-[500px]">
									{programme.text}
								</p>

								<span
									class="text-bc-slate-pine xs-sm:text-3xl mt-3 inline-block text-[26px] sm:text-4xl"
								>
									<ArrowCircleRight />
								</span>
							</div>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</main>
</div>
