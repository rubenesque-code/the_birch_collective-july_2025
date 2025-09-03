<script lang="ts" module>
	import image from '^assets/image';
	import { mission } from '^assets/videos';
	import { VideoModal } from '^components';
	import { Header } from '^components/~sections';
</script>

<script lang="ts">
	let playOurMission = false;
</script>

<Header />

<VideoModal
	bind:isOpen={playOurMission}
	onClickClose={() => (playOurMission = false)}
	mp4Src={mission}
/>

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-7xl font-bold tracking-wide">About Us</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<h2 class="font-display text-my-light-orangey-brown text-6xl font-bold">
					Connect Through Nature
				</h2>
				<p class="mt-8 text-xl leading-relaxed">
					At The Birch Collective, we believe in the power of nature, community, and connection.
					We’re a social enterprise dedicated to helping people aged 16-25 in Bristol and the
					surrounding areas who might be feeling isolated, overwhelmed, or unsure of their place in
					the world. Whether you’re dealing with anxiety, depression, or just looking for a space to
					belong, we’re here to walk alongside you.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-24 px-60">
		<div class="flex justify-center">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative cursor-pointer"
				on:click={() => {
					playOurMission = true;
				}}
			>
				<p class="text-right text-black/70">The Birch Collective — Our Mission</p>
				<enhanced:img
					class="mt-2 w-[900px] rounded-md"
					src={image.placeholder.mission_vid_placeholder}
					alt=""
				/>

				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="font-display text-bc-slate-pine text-6xl font-bold">What We Do</h2>

			<p class="mt-8 text-xl leading-relaxed">
				We run outdoor group experiences that bring you closer to nature 🌳, yourself ✨, and
				others. Our sessions are about more than just spending time outside—they’re about building a
				community where everyone is accepted for who they are. You’ll learn practical skills, like
				how to grow your own food or create something beautiful from natural materials, all while
				connecting with others who understand what you’re going through.
			</p>

			<p class="mt-4 text-xl leading-relaxed">
				We’re not a traditional support group. Instead, we focus on crafting a safe space where you
				can explore, play, and develop the resilience to face life’s challenges 💪. We believe that
				by grounding ourselves in nature and learning from each other, we can find strength,
				purpose, and a sense of belonging.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="font-display text-bc-slate-pine text-6xl font-bold">Why We Started</h2>

			<p class="mt-8 text-xl leading-relaxed">
				The Birch Collective was born during the Covid-19 pandemic, when isolation hit hard for
				many. We saw how connecting with nature and spending time with others—even virtually—helped
				people cope. What started as online conversations grew into weekly outdoor meet-ups, and
				now, we’re here with you in person every week with Fresh Air Thursdays and more.
			</p>
		</div>
	</section>

	<section class="mt-16 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="font-display text-bc-slate-pine text-6xl font-bold">Our Approach</h2>

			<p class="mt-8 text-xl leading-relaxed">
				🌿 We’re all about belonging . We believe that being rooted in your community and feeling
				connected to nature can make a huge difference. That’s why we create spaces where you can
				feel seen, heard, and valued.
			</p>

			<p class="mt-4 text-xl leading-relaxed">
				🎨 We’re also focused on play —exploring your creativity and curiosity through fun,
				adventurous activities. Whether it’s learning land skills or just enjoying a walk with new
				friends, we believe in the joy of discovery.
			</p>
			<p class="mt-4 text-xl leading-relaxed">
				💡At the heart of it all is empowerment. We’re here to help you feel inspired and explore
				your passions, unlocking the gifts you already have within yourself.
			</p>
			<p class="mt-4 text-xl leading-relaxed">
				🌟 Join Us If you’re between 16 and 25 and looking for something different—whether it’s new
				friends, new skills, or a deeper connection with nature—we’d love to meet you. Join us for
				one of our sessions, and let’s explore how we can build a better future together.
			</p>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
