<script lang="ts" module>
	import image from '^assets/image';
</script>

<script lang="ts">
	let {
		heading,
		lead,
		align = 'right',
		titleColour = 'white'
	}: {
		heading: string;
		lead?: string;
		align?: 'left' | 'right' | 'center';
		titleColour?: 'white' | 'yellow';
	} = $props();
</script>

<header class="relative flex justify-center">
	<div
		class="section-x-padding relative flex w-full max-w-[1800px] justify-center overflow-visible pt-40 pb-20 md:pt-46 lg:pt-52 xl:pb-28"
	>
		<div
			class={`relative flex w-full ${align === 'right' ? 'lg:justify-end' : align === 'left' ? 'lg:justify-start' : 'justify-center'}`}
		>
			<div
				class={`flex max-w-[600px] flex-col ${
					align === 'right' ? 'lg:items-end' : 'lg:items-start'
				}`}
			>
				<h1
					id="programmes-heading"
					class={`page-title ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} ${titleColour === 'white' ? 'text-white' : 'text-my-pale-yellow'}`}
				>
					{heading}
				</h1>

				{#if lead}
					<p
						class={`mt-5 max-w-[600px] leading-relaxed font-medium text-white xl:text-[22px] ${
							align === 'right' ? 'lg:text-right' : 'lg:text-left'
						}`}
					>
						{lead}
					</p>
				{/if}
			</div>
		</div>
	</div>

	<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
		<enhanced:img class="h-full w-full object-cover" src={image.placeholder.banner_1} alt="" />
		<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
	</div>
</header>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}
</style>
