<script lang="ts" module>
	import image from '^assets/image';
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let {
		heading,
		lead,
		align = 'right',
		headingColour = 'white',
		children
	}: {
		heading: string;
		lead?: string | string[];
		align?: 'left' | 'right' | 'center-left';
		headingColour?: 'white' | 'yellow';
		children?: Snippet<[]>;
	} = $props();

	const leadNormalised = typeof lead === 'string' ? [lead] : lead;
</script>

<header class="relative flex justify-center">
	<div
		class={`section-x-padding relative box-content w-full overflow-visible pt-40 pb-20 md:pt-46 lg:pt-52 xl:pb-28 ${align !== 'center-left' ? 'max-w-[1800px]' : 'max-w-[1300px]'}`}
	>
		<div
			class={`relative flex w-full max-w-[90%] ${align === 'right' ? 'lg:justify-end' : 'lg:justify-start'}`}
		>
			<div class={`flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
				<h1
					id="programmes-heading"
					class={`page-title ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} ${headingColour === 'white' ? 'text-white' : 'text-my-pale-yellow'}`}
				>
					{heading}
				</h1>

				{#if lead}
					{#each leadNormalised as item, i}
						<p
							class={`4xl:text-[26px] 4xl:mt-10 mt-5 max-w-[600px] leading-relaxed font-medium text-white ${
								align === 'right' ? 'lg:text-right' : 'lg:text-left'
							} ${i === 0 && 'font-medium'}`}
						>
							{item}
						</p>
					{/each}
				{/if}

				{@render children?.()}
			</div>
		</div>
	</div>

	<div class="angled-polygon absolute top-0 left-0 -z-10 h-full w-full">
		<enhanced:img class="h-full w-full object-cover" src={image.placeholder.banner_1} alt="" />
		<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
	</div>
</header>

<style>
	.angled-polygon {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	@media (min-width: 768px) {
		.angled-polygon {
			clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
		}
	}
</style>
