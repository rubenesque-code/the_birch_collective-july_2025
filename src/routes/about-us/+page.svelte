<script lang="ts" module>
	import image from '^assets/image';
	import { mission } from '^assets/videos';

	import { ImageHeader, TextSection, VideoSection } from '^components/~sections';
</script>

<script lang="ts">
	let playOurMission = false;
</script>

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader
		heading="About Us"
		lead="Cultivating belonging, purpose and resilience."
		align="center-left"
	/>

	<section class="section-mt flex justify-center">
		<div class="section-x-padding box-content w-full max-w-[768px]">
			<h2 class="text-bc-amber page-intro-section-main-title">Connect Through Nature</h2>

			<p class="mt-8 leading-relaxed">
				At The Birch Collective, we believe in the power of nature, community, and connection. We’re
				a social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
				areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
				Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
				we’re here to walk alongside you.
			</p>
		</div>
	</section>

	<VideoSection
		title="The Birch Collective — Our Mission"
		poster={image.placeholder.mission_vid_placeholder}
		posterAlt="Team outdoors, mission placeholder"
		videoSrc={mission}
		ariaLabel="Play video: Our Mission"
		bind:isOpen={playOurMission}
	/>

	<TextSection
		title="What We Do"
		body={[
			`We run outdoor group experiences that bring you closer to nature 🌳, yourself ✨, and others. Our sessions are about more than just spending time outside—they’re about building a community where everyone is accepted for who they are. You’ll learn practical skills, like how to grow your own food or create something beautiful from natural materials, all while connecting with others who understand what you’re going through.`,
			`We’re not a traditional support group. Instead, we focus on crafting a safe space where you can explore, play, and develop the resilience to face life’s challenges 💪. We believe that by grounding ourselves in nature and learning from each other, we can find strength, purpose, and a sense of belonging.`
		]}
	/>

	<TextSection
		title="Why We Started"
		body={[
			`The Birch Collective was born during the Covid-19 pandemic, when isolation hit hard for many. We saw how connecting with nature and spending time with others—even virtually—helped people cope. What started as online conversations grew into weekly outdoor meet-ups, and now, we’re here with you in person every week with Fresh Air Thursdays and more.`
		]}
	/>

	<TextSection
		title="Our Approach"
		body={[
			`🌿 We’re all about belonging. We believe that being rooted in your community and feeling connected to nature can make a huge difference. That’s why we create spaces where you can feel seen, heard, and valued.`,
			`🎨 We’re also focused on play—exploring your creativity and curiosity through fun, adventurous activities. Whether it’s learning land skills or just enjoying a walk with new friends, we believe in the joy of discovery.`,
			`💡 At the heart of it all is empowerment. We’re here to help you feel inspired and explore your passions, unlocking the gifts you already have within yourself.`,
			`🌟 Join Us: If you’re between 16 and 25 and looking for something different—whether it’s new friends, new skills, or a deeper connection with nature—we’d love to meet you. Join us for one of our sessions, and let’s explore how we can build a better future together.`
		]}
	/>
</div>
