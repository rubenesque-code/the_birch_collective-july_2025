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
		marginTop
	}: {
		title?: string;
		poster: EnhancedImg;
		posterAlt?: string;
		videoSrc: string;
		ariaLabel?: string;
		modalCloseCallback?: () => void;
		isOpen: boolean;
		marginTop?: 'md' | 'lg';
	} = $props();

	if (!poster) poster = image.placeholder.mission_vid_placeholder;

	const open = () => (isOpen = true);
	const close = () => {
		isOpen = false;
		modalCloseCallback?.();
	};
</script>

<section
	class={`flex justify-center ${!marginTop ? '' : marginTop === 'md' ? 'section-mt-md ' : 'section-mt-lg'}`}
>
	<div class="section-x-padding box-content flex w-full max-w-[900px]">
		<div class="relative">
			<p class="text-right text-[15px] text-black/70 sm:text-base">{title}</p>

			<button
				type="button"
				class="focus:ring-bc-amber relative mt-1 w-full rounded-md focus:ring-2 focus:outline-none sm:mt-2"
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
	</div>
</section>

<VideoModal bind:isOpen onClickClose={close} mp4Src={videoSrc} />
