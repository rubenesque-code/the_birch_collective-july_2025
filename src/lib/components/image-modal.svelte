<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Dialog } from '^components';
</script>

<script lang="ts">
	let {
		isOpen = $bindable(),
		imgSrc,
		imgAlt = '',
		title
	}: {
		isOpen: boolean;
		imgSrc: EnhancedImg;
		imgAlt?: string;
		title?: string;
	} = $props();
</script>

<Dialog.Root
	open={isOpen}
	onOpenChange={(value) => {
		if (value === false) isOpen = false;
	}}
>
	<Dialog.Content
		class="flex h-[1600px] max-h-[calc(100vh-24px)] !w-[1600px] !max-w-[calc(100vw-24px)] flex-col !p-2  lg:max-h-[calc(100vh-40px)] lg:!max-w-[calc(100vw-40px)] "
	>
		{#if title}
			<Dialog.Header
				class="absolute top-4 left-4 flex shrink-0 flex-col items-center pb-1 text-center"
			>
				<Dialog.Title class="!text-base md:text-lg">{@html title}</Dialog.Title>
			</Dialog.Header>
		{/if}

		<div class="relative mt-10 grid h-full w-full grow place-items-center">
			<enhanced:img
				class="absolute top-1/2 left-1/2 h-full max-h-full w-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
				src={imgSrc}
				alt={imgAlt}
			/>
		</div>
	</Dialog.Content>
</Dialog.Root>
