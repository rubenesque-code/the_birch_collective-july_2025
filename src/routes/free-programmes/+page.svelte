<script lang="ts" module>
	import { internalRoute } from '^constants';

	import image from '^assets/image';
	import { group_photo as seeding_change } from '^assets/images/programmes/seeding-change';
	import { group_photo as steering } from '^assets/images/programmes/steering-group';

	import { Tile } from '^pages/free-programmes';
</script>

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-60 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="relative flex w-full justify-end">
			<div class="max-w-[600px] text-white">
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Free Programmes</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					Want to spend more time outdoors, learn practical skills, and feel more connected? We run
					nature-based sessions that help you slow down, get hands-on, and grow alongside others.
				</p>
			</div>
		</div>
	</section>

	<section class="relative mt-16 flex justify-center overflow-visible px-60">
		<div class="mt-12 grid grid-cols-2 justify-between gap-32">
			<Tile
				link={internalRoute['recoupe']}
				imgAlt=""
				imgSrc={image.placeholder.axe_chopping}
				text="A weekly woodland sessions using traditional skills in Troopers Hill Woods."
				title="Recoupe: Working Woods"
			/>

			<Tile
				link={internalRoute['fresh-air-thursday']}
				imgAlt=""
				imgSrc={image.placeholder.group_photo}
				title="Fresh Air Thursdays"
				text="A FREE weekly group for 16-25 year olds, just a 5-minute walk from St George's Park!"
			/>

			<Tile
				link={internalRoute['seeding-change']}
				imgAlt=""
				imgSrc={seeding_change}
				title="Seeding Change: Plant Your Future (Camp Birch)"
				text="A 7-month journey with seasonal camps, evening meetups, and mentoring for 18–25s, supporting purpose, leadership, and community building."
			/>

			<Tile
				link={internalRoute['youth-advisory-and-steering']}
				imgAlt=""
				imgSrc={steering}
				title="Steering Group Workshops"
				text="Three interactive workshops on Mental Health, Social Action & Nature — led by and for 18–25s."
			/>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
