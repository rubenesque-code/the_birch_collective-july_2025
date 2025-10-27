<script lang="ts" module>
	import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-svelte';

	import {
		PUBLIC_BIRCH_EMAIL,
		PUBLIC_BIRCH_PHONE_1,
		PUBLIC_BIRCH_PHONE_2
	} from '$env/static/public';

	import { ImageHeader } from '^components/~sections';
	import { socials } from '^constants';
	import { Form } from '^components/~pages-by-route/get-in-touch';
</script>

<div class="">
	<ImageHeader
		heading="Get In Touch"
		align="center-left"
		lead="If you have anything you would like to ask us, or if you want to find out more about the The Birch Collective then why not get in touch with us!"
	/>

	<div class="flex justify-center">
		<section class="section-x-padding relative mt-16 flex w-full max-w-[1600px] justify-center">
			<div class="grid w-full gap-x-40 gap-y-16 xl:grid-cols-2">
				<div>
					<h3 class="text-2xl font-medium">Enquiry Form</h3>

					<div class="max-w-[768px]">
						<Form />
					</div>
				</div>
				<div class="grid gap-y-10 sm:grid-cols-2 sm:gap-x-20">
					<div>
						<h3 class="text-2xl font-medium">Contact</h3>

						<div class="mt-6">
							<h4
								class="decoration-bc-amber text-lg font-medium text-black/80 underline decoration-2 underline-offset-2"
							>
								Email
							</h4>

							<a class="mt-2 inline-block" href={`mailto:${PUBLIC_BIRCH_EMAIL}`} target="_blank"
								>{PUBLIC_BIRCH_EMAIL}</a
							>
						</div>

						<div class="mt-6">
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
							<p class="mt-[6px] text-base text-black/80 italic">Only answered on Thursdays.</p>
						</div>
					</div>

					<div class="sm:pl-10">
						<h3 class="text-2xl font-medium">Socials</h3>

						<div class="mt-7 inline-grid grid-cols-2 gap-6 md:gap-8">
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
</div>
