<script lang="ts" module>
	import image, { type EnhancedImg } from '^assets/image';

	import { VideoModal } from '^components';
</script>

<script lang="ts">
	let {
		title,
		poster,
		posterAlt = '',
		videoSrc,
		ariaLabel = 'Play video',
		modalCloseCallback,
		isOpen = $bindable(false),
		titlePlacement
	}: {
		title?: string;
		poster: EnhancedImg;
		posterAlt?: string;
		videoSrc: string;
		ariaLabel?: string;
		modalCloseCallback?: () => void;
		isOpen: boolean;
		titlePlacement?: 'above' | 'top';
	} = $props();

	if (!poster) poster = image.placeholder.mission_vid_placeholder;

	const open = () => (isOpen = true);
	const close = () => {
		isOpen = false;
		modalCloseCallback?.();
	};
</script>

<div class="relative">
	{#if title}
		<p
			class={`3xl:text-lg z-10 text-right text-[17px] font-medium sm:text-base ${titlePlacement === 'top' ? 'absolute top-2 right-2 text-white' : 'text-black/70'}`}
		>
			{title}
		</p>
	{/if}

	<button
		type="button"
		class="focus:ring-bc-amber relative mt-1 w-full cursor-pointer rounded-md focus:ring-2 focus:outline-none sm:mt-2"
		aria-label={ariaLabel}
		onclick={open}
	>
		<enhanced:img
			class="aspect-video w-full rounded-md object-cover md:aspect-video"
			src={poster}
			alt={posterAlt}
		/>

		<span
			class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			aria-hidden="true"
		>
			<enhanced:img
				class="w-[35px] sm:w-[40px] md:w-[50px]"
				src={image.illustration.play_icon_white}
				alt=""
			/>
		</span>
	</button>
</div>

<VideoModal bind:isOpen onClickClose={close} mp4Src={videoSrc} />
