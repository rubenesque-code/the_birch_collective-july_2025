<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Video } from '^components';
</script>

<script lang="ts">
	let props: {
		title?: string;
		poster: EnhancedImg;
		posterAlt?: string;
		videoSrc: string;
		ariaLabel?: string;
		modalCloseCallback?: () => void;
		isOpen: boolean;
		titlePlacement?: 'above' | 'top';
	} = $props();
</script>

<section class="flex justify-center">
	<div class="section-x-padding box-content flex w-full max-w-[900px]">
		<Video {...props} />
	</div>
</section>
