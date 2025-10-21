<script>
	import { logo_img } from '^assets/images/birch';
	import { living_wage_logo } from '^assets/images/other';
	import { internalRoute, socials } from '^constants';
	import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-svelte';
</script>

<footer class="mt-32 flex w-full items-center justify-between px-8 pb-12">
	<div class="max-w-[800px]">
		<div class="text-bc-slate-pine flex flex-row gap-8 text-3xl">
			{#each [{ icon: FacebookLogo, link: socials.fb }, { icon: InstagramLogo, link: socials.insta }, { icon: LinkedinLogo, link: socials.linkedIn }, { icon: TiktokLogo, link: socials.tiktok }] as item}
				<a href={item.link} target="_blank">
					<svelte:component this={item.icon} />
				</a>
			{/each}
		</div>

		<div class="mt-8 flex flex-row gap-x-8 gap-y-4">
			{#each [{ label: 'Free programmes', route: internalRoute['free-programmes'] }, { label: 'Paid services', route: internalRoute['paid-services'] }, { label: 'About us', route: internalRoute['about-us'] }] as item}
				<a
					class="text-bc-logo-black/70 text-lg font-medium underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>
		<div class="mt-3 flex flex-row gap-x-8 gap-y-4">
			{#each [{ label: 'Feedback', route: internalRoute['about-us'] }, { label: 'Make a complaint', route: internalRoute['paid-services'] }] as item}
				<a
					class="text-bc-logo-black/70 text-lg font-medium underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<p class="text-bc-logo-black/60 mt-6 text-lg leading-relaxed">
			The Birch Collective is a Bristol based CIC specialising in working alongside people in
			nature. We are proud to be a Living Wage employer.
		</p>

		<div class="mt-6 flex flex-row gap-x-8 gap-y-4">
			{#each [{ label: 'Get in touch', route: internalRoute['get-in-touch'] }] as item}
				<a
					class="text-bc-logo-black/70 text-lg font-medium underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>

	<div class="flex items-center gap-8">
		<enhanced:img class="w-[120px]" src={living_wage_logo} alt="" />

		<enhanced:img class="w-[70px]" src={logo_img} alt="" />
	</div>
</footer>
