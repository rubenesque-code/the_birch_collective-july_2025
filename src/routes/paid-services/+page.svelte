<script lang="ts" module>
	import { internalRoute } from '^constants';

	import image from '^assets/image';

	import { Navigation } from '^components/~sections';
	import { Tile } from '^pages/free-programmes';
</script>

<Navigation />

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-60 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="relative flex w-full justify-end">
			<div class="max-w-[600px] text-white">
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Paid Services</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					For organisations, schools, youth groups, and professionals who want to bring nature-based
					learning and wellbeing into their work.
				</p>
			</div>
		</div>
	</section>

	<section class="relative mt-16 flex justify-center overflow-visible px-60">
		<div class="mt-12 flex flex-wrap justify-center gap-y-32">
			<div class="flex basis-1/2 justify-start">
				<Tile
					link={internalRoute['nature-based-mentoring']}
					imgAlt=""
					imgSrc={image.placeholder.stay_calm_and_listen_to_nature}
					text="NHS-backed support offered in various outdoor settings to help people connect with nature and improve wellbeing."
					title="1:1 Nature Based Mentoring"
				/>
			</div>

			<div class="flex basis-1/2 justify-end">
				<Tile
					link={internalRoute['therapeutic-forest-school']}
					imgAlt=""
					imgSrc={image.placeholder.therapeutic_forest_school}
					title="Therapeutic Forest School"
					text="Structured, trauma-informed group sessions for children and young people, delivered in green spaces."
				/>
			</div>

			<div class="flex basis-1/2 justify-start">
				<Tile
					link={internalRoute['bespoke-nature-workshops']}
					imgAlt=""
					imgSrc={image.placeholder.lying_in_grass}
					title="Bespoke Nature Workshops for Organisations"
					text="Custom-designed sessions for schools, support services, or teams – ranging from team-building to therapeutic intervention."
				/>
			</div>

			<div class="flex basis-1/2 justify-end">
				<Tile
					link={internalRoute['corporate-nature-team-days']}
					imgAlt=""
					imgSrc={image.placeholder.stay_calm_and_listen_to_nature}
					title="Corporate Nature Team Days"
					text="Team building, wellbeing, and making a real difference outdoors"
				/>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
