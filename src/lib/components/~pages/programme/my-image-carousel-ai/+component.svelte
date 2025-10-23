<script lang="ts">
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';
	import { tweened } from 'svelte/motion';

	/* ------------------------------------------------------------------ */
	/* 1. Images – keep them in an array so we can loop easily            */
	/* ------------------------------------------------------------------ */
	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';

	const photos = [
		{ src: image.placeholder.caregiver_with_partipant_face_to_face, ratio: '192/128' },
		{ src: garden_shed_from_outside, ratio: '256/320' },
		{ src: participant_woman_glasses, ratio: '256/320' },
		{ src: group_and_facilitators_sitting_round_fireplace, ratio: '3200/2133' },
		{ src: image.placeholder.axe_chopping, ratio: '192/128' },
		{ src: image.placeholder.chillies, ratio: '192/128' },
		{ src: james_and_participants_peace_sign, ratio: '256/320' },
		{ src: indoor_workbench, ratio: '256/320' }
	];

	/* ------------------------------------------------------------------ */
	/* 2. Reactive state                                                  */
	/* ------------------------------------------------------------------ */
	let container: HTMLDivElement; // the visible window
	let track: HTMLDivElement; // the inner scrolling strip
	const translate = tweened(0, { duration: 300, easing: cubicOut });

	let pageWidth = 0; // width of one “page” (the visible area)
	let maxTranslate = 0; // most-negative value we can go

	// Update pageWidth / maxTranslate when the container resizes
	$: if (container) {
		pageWidth = container.clientWidth;
		maxTranslate = -(track.scrollWidth - pageWidth);
	}

	/* ------------------------------------------------------------------ */
	/* 3. Swipe / pan handling                                            */
	/* ------------------------------------------------------------------ */
	function handler(event: SwipeCustomEvent) {
		const { direction, distanceX, type } = event.detail;

		// ---- 3a. Pan (drag) – move while the finger is down ----------------
		if (type === 'pan') {
			const newX = $translate + distanceX;
			// Clamp inside the allowed range
			translate.set(
				Math.min(0, Math.max(maxTranslate, newX)),
				{ duration: 0 } // instant while dragging
			);
			return;
		}

		// ---- 3b. Swipe end – snap to the nearest page --------------------
		if (type === 'swipe') {
			const velocity = Math.abs(event.detail.velocityX);
			const threshold = pageWidth * 0.2; // 20 % of page = “intent”

			let target = $translate;

			if (direction === 'left' && distanceX < -threshold) {
				target = Math.max(maxTranslate, $translate - pageWidth);
			} else if (direction === 'right' && distanceX > threshold) {
				target = Math.min(0, $translate + pageWidth);
			} else {
				// not enough movement → snap back to current page
				target = -Math.round(-$translate / pageWidth) * pageWidth;
			}

			// Animate to the final position (fast if it was a fast swipe)
			translate.set(target, {
				duration: velocity > 1 ? 150 : 300,
				easing: cubicOut
			});
		}
	}

	/* ------------------------------------------------------------------ */
	/* 4. Arrow navigation                                                */
	/* ------------------------------------------------------------------ */
	function goPrev() {
		const target = Math.min(0, $translate + pageWidth);
		translate.set(target);
	}
	function goNext() {
		const target = Math.max(maxTranslate, $translate - pageWidth);
		translate.set(target);
	}
</script>

<div class="mx-auto max-w-5xl">
	<p class="text-right text-base text-black/70">
		Images from <span class="text-bc-amber font-medium italic">Fresh</span>
	</p>

	<!-- ====================== CAROUSEL ====================== -->
	<div class="carousel mt-1" bind:this={container} use:useSwipe={{ handler }}>
		<div class="track" bind:this={track} style:transform="translateX({$translate}px)">
			{#each photos as photo}
				<div class="item" style:aspect-ratio={photo.ratio} style:height="300px">
					<enhanced:img class="h-full w-full object-cover" src={photo.src} alt="" />
				</div>
			{/each}
		</div>
	</div>

	<!-- ====================== ARROWS ====================== -->
	<div class="mt-4 flex items-center justify-between">
		<button on:click={goPrev} class="p-2">
			<CaretLeft size={32} />
		</button>

		<button on:click={goNext} class="p-2">
			<CaretRight size={32} />
		</button>
	</div>
</div>

<style>
	/* basic layout – feel free to tweak */
	.carousel {
		@apply relative overflow-hidden;
		height: calc(600px + 12px);
	}
	.track {
		@apply flex gap-3 transition-none; /* transition is handled by tweened */
	}
	.item {
		@apply border-my-grey-3/40 flex-shrink-0 border;
		height: 300px;
	}
</style>
