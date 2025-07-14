<script lang="ts" context="module">
	import image from '^assets/image';
</script>

<header class="flex items-center justify-between px-4 py-2">
	<div class="flex items-center gap-2">
		<div class="w-[40px]">
			<enhanced:img class="w-[40px]" src={image.birch.logo.img_only} alt="" />
		</div>

		<a
			class="font-display text-bc-burnt-sienna scale-y-90 text-[40px] font-bold tracking-[0.02em]"
			href="/"
		>
			The Birch Collective
		</a>
	</div>

	<div class="flex items-center gap-8">
		<div class="relative">
			<p class="font-display text-bc-amber text-3xl font-bold">donate</p>
		</div>
		<div class="relative">
			<p class="font-display text-bc-amber text-3xl font-bold">get in touch</p>
		</div>

		<div class="relative">
			<p class="font-display text-3xl font-bold">menu</p>

			<enhanced:img
				class="absolute bottom-[-1] left-1/2 h-[4px] w-full -translate-x-1/2"
				src={image.illustration.drawn_line_black}
				alt=""
			/>
		</div>
	</div>
</header>
