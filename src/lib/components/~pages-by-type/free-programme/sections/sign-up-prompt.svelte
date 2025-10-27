<script lang="ts">
	let { onOpenSignUp }: { onOpenSignUp: () => void } = $props();
</script>

<div class="flex justify-center">
	<div class="section-x-padding box-content flex w-full max-w-[768px] flex-col items-center">
		<p class="text-black/80 italic">
			<span>Ready to get on board?</span>
			<span>Fill out our online form - it takes around 3 minutes.</span>
		</p>

		<div class="mt-6 flex justify-center">
			<div class="relative flex items-center gap-8">
				<button
					class="font-display 4xl:text-[36px] cursor-pointer px-4 py-[6px] text-[27px] font-bold tracking-wide text-white uppercase md:text-[30px]"
					onclick={onOpenSignUp}
					type="button">Sign Up Today For Free</button
				>

				<div
					class="bg-bc-mineral-jade absolute top-0 left-0 -z-10 h-full w-full overflow-visible"
				></div>
			</div>
		</div>
	</div>
</div>
