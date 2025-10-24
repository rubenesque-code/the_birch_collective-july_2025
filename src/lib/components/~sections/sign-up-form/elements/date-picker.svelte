<script lang="ts" module>
	import { fade } from 'svelte/transition';
	import { elasticIn } from 'svelte/easing';
	import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';
	import CalendarIcon from '@lucide/svelte/icons/calendar';

	import { cn } from '^utils';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Label } from '^components/ui';
</script>

<script lang="ts">
	let {
		value = $bindable(),
		onValueChange,
		label,
		id = '',
		showError,
		errorText
	}: {
		value: DateValue | undefined;
		onValueChange: () => void;
		label?: string;
		id?: string;
		showError?: boolean;
		errorText?: string;
	} = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let contentRef = $state<HTMLElement | null>(null);
</script>

<div>
	{#if label}
		<div class="mb-2 flex items-center gap-6">
			<Label class="text-black/50" for={id}>{label}</Label>
		</div>
	{/if}

	<Popover.Root>
		<Popover.Trigger
			class={cn(
				buttonVariants({
					variant: 'outline',
					class: 'border-input w-[280px] max-w-full justify-start text-left text-base font-normal'
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
				{onValueChange}
			/>
		</Popover.Content>
	</Popover.Root>

	{#if showError}
		<p
			class="mt-6 text-sm text-red-500"
			transition:fade={{ duration: 100, delay: 50, easing: elasticIn }}
		>
			{errorText}
		</p>
	{/if}
</div>
