<script lang="ts">
	import '../app.css';

	import { Toaster } from '^components/ui';

	let { children } = $props();
</script>

{@render children()}

<Toaster toastOptions={{ class: '!text-lg' }} />
