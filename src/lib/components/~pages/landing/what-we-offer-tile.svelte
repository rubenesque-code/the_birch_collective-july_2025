<script lang="ts">
	import type { EnhandcedImg } from '^assets/image';
	import { ArrowCircleRight } from 'phosphor-svelte';

	let {
		imgSrc,
		imgAlt,
		link,
		text,
		title
	}: { imgSrc: EnhandcedImg; imgAlt: string; title: string; text: string; link: string } = $props();
</script>

<a class="group/tile relative block md:w-[700px]" href={link}>
	<div class="relative">
		<enhanced:img class="aspect-video rounded-sm object-cover" src={imgSrc} alt={imgAlt} />

		<div
			class="absolute right-2 bottom-2 z-10 flex justify-end opacity-0 transition-opacity duration-300 ease-linear group-hover/tile:opacity-100"
		>
			<span class="text-my-pale-yellow text-[40px]">
				<ArrowCircleRight weight="fill" />
			</span>
		</div>
	</div>

	<h3
		class="text-bc-amber font-display mt-[14px] pl-2 text-center text-[42px] font-bold tracking-wide"
	>
		{title}
	</h3>

	<p class="mt-2 pl-2 text-center text-xl leading-relaxed">{text}</p>
</a>
