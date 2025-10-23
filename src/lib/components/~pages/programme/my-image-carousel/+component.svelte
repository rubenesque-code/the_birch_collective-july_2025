<script lang="ts" module>
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';
</script>

<div class="">
	<p class="text-right text-base text-black/70">
		Images from <span class="text-bc-amber font-medium italic">Fresh</span>
	</p>

	<div class="relative mt-1 flex h-[calc(600px+12px)] gap-3 overflow-hidden">
		<div class="absolute top-0 left-0 -z-10 flex h-full flex-col gap-3">
			<div class="flex h-[300px] w-full gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img
						class="h-full w-full"
						src={image.placeholder.caregiver_with_partipant_face_to_face}
						alt=""
					/>
				</div>

				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={garden_shed_from_outside} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={participant_woman_glasses} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[3200/2133] h-full">
					<enhanced:img
						class="h-full w-full"
						src={group_and_facilitators_sitting_round_fireplace}
						alt=""
					/>
				</div>
			</div>

			<div class="flex h-[300px] w-full gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.axe_chopping} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.chillies} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={james_and_participants_peace_sign} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={indoor_workbench} alt="" />
				</div>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-between">
		<button class="" type="button">
			<span><CaretLeft /></span>
		</button>

		<button class="" type="button">
			<span><CaretRight /></span>
		</button>
	</div>
</div>
