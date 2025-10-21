<script lang="ts" module>
	import type { EnhancedImg } from '^assets/image';

	import { Dialog } from '^components/ui';
</script>

<script lang="ts">
	let {
		imgSrc,
		name,
		role,
		body
	}: {
		imgSrc: EnhancedImg;
		name: string;
		role: string;
		body: string;
	} = $props();

	let isOpen = $state(false);
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<div class="flex cursor-pointer flex-col items-center">
			<enhanced:img
				class=" aspect-square w-[200px] rounded-full object-cover"
				src={imgSrc}
				alt=""
			/>
			<p class="mt-4 text-xl font-medium underline decoration-1 underline-offset-6">{name}</p>
			<p class="mt-3 text-lg break-normal [word-break:keep-all] whitespace-normal">{role}</p>
		</div>
	</Dialog.Trigger>

	<Dialog.Content
		class="flex h-screen !w-[calc(100vw+2px)] !max-w-none flex-col items-center gap-x-20 gap-y-12 p-4 lg:flex-row lg:items-start lg:p-20"
	>
		<div
			class="bg-my-pale-yellow flex w-full shrink-0 flex-row items-center gap-6 p-6 pb-8 lg:w-auto lg:flex-col lg:pb-16"
		>
			<enhanced:img
				class=" aspect-square w-[200px] rounded-full object-cover"
				src={imgSrc}
				alt=""
			/>

			<div class="max-w-[220px]">
				<h1 class="font-display text-center text-4xl leading-[1.3em] font-bold">{name}</h1>
				<p class="mt-4 text-center text-base break-normal [word-break:keep-all] whitespace-normal">
					{role}
				</p>
			</div>
		</div>

		<div class="mt-8 max-w-[768px] grow overflow-y-auto">
			<p class="leading-relaxed">
				{body}
			</p>
		</div>
	</Dialog.Content>
</Dialog.Root>
