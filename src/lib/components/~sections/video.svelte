<script lang="ts" module>
	import image, { type EnhandcedImg } from '^assets/image';

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
		isOpen = $bindable(false)
	}: {
		title?: string;
		poster: EnhandcedImg;
		posterAlt?: string;
		videoSrc: string;
		ariaLabel?: string;
		modalCloseCallback?: () => void;
		isOpen: boolean;
	} = $props();

	if (!poster) poster = image.placeholder.mission_vid_placeholder;

	const open = () => (isOpen = true);
	const close = () => {
		isOpen = false;
		modalCloseCallback?.();
	};
</script>

<section class="section-mt flex justify-center">
	<div class="section-x-padding box-content flex w-full max-w-[900px]">
		<div class="relative">
			<p class="text-right text-black/70">{title}</p>

			<button
				type="button"
				class="focus:ring-bc-amber relative mt-2 w-full rounded-md focus:ring-2 focus:outline-none"
				aria-label={ariaLabel}
				onclick={open}
			>
				<enhanced:img class="w-full rounded-md" src={poster} alt={posterAlt} />

				<span
					class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					aria-hidden="true"
				>
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</span>
			</button>
		</div>
	</div>
</section>

<VideoModal bind:isOpen onClickClose={close} mp4Src={videoSrc} />
