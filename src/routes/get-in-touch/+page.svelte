<script lang="ts" module>
	import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-svelte';

	import {
		PUBLIC_BIRCH_EMAIL,
		PUBLIC_BIRCH_PHONE_1,
		PUBLIC_BIRCH_PHONE_2
	} from '$env/static/public';

	import image from '^assets/image';

	import { Navigation } from '^components/~sections';
	import { Form } from '^pages/get-in-touch';
	import { socials } from '^constants';
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
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Get In Touch</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					If you have anything you would like to ask us, or if you want to find out more about the
					The Birch Collective then why not get in touch with us!
				</p>
			</div>
		</div>
	</section>

	<section class="relative mt-16 flex justify-center overflow-visible px-60">
		<div class="grid w-full grid-cols-2 gap-40">
			<div>
				<h3 class="text-2xl font-medium">Enquiry Form</h3>

				<div>
					<Form />
				</div>
			</div>
			<div class="grid grid-cols-2">
				<div>
					<h3 class="text-2xl font-medium">Contact</h3>
					<div class="mt-4">
						<h4
							class="decoration-bc-amber text-lg font-medium text-black/80 underline decoration-2 underline-offset-2"
						>
							Email
						</h4>

						<a class="mt-2 inline-block" href={`mailto:${PUBLIC_BIRCH_EMAIL}`} target="_blank"
							>{PUBLIC_BIRCH_EMAIL}</a
						>
					</div>

					<div class="mt-3">
						<h4
							class="decoration-bc-amber text-lg font-medium text-black/80 underline decoration-2 underline-offset-2"
						>
							Phone
						</h4>
						<div class="mt-2">
							<a href={`tel:${PUBLIC_BIRCH_PHONE_1}`} target="_blank">{PUBLIC_BIRCH_PHONE_1}</a>
							<span>or</span>
							<a href={`tel:${PUBLIC_BIRCH_PHONE_2}`} target="_blank">{PUBLIC_BIRCH_PHONE_2}</a>
						</div>
						<p class="mt-1 text-black/90 italic">Only answered on Thursdays.</p>
					</div>
				</div>

				<div>
					<h3 class="text-2xl font-medium">Socials</h3>

					<div class="mt-4 inline-grid grid-cols-2 gap-8">
						{#each [{ href: socials.fb, icon: FacebookLogo }, { href: socials.insta, icon: InstagramLogo }, { href: socials.tiktok, icon: TiktokLogo }, { href: socials.linkedIn, icon: LinkedinLogo }] as item}
							<a
								class="bg-bc-slate-pine grid place-items-center rounded-full p-[5px]"
								href={item.href}
								target="_blank"
							>
								<span class="text-[33px] text-white">
									<svelte:component this={item.icon} />
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>
