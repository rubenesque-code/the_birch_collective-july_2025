<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';

	import { cn } from '^utils';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value = $state<DateValue | undefined>();
	let contentRef = $state<HTMLElement | null>(null);
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			buttonVariants({
				variant: 'outline',
				class: 'border-input w-[280px] justify-start text-left text-base font-normal'
			}),
			!value && 'text-muted-foreground '
		)}
		id="dob"
	>
		<CalendarIcon />
		{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
	</Popover.Trigger>

	<Popover.Content bind:ref={contentRef} class="z-[70] w-auto p-0">
		<Calendar
			type="single"
			captionLayout="dropdown"
			maxValue={today(getLocalTimeZone())}
			bind:value
		/>
	</Popover.Content>
</Popover.Root>
