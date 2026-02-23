<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Delete Your Data - Memory Locks</title>
	<meta
		name="description"
		content="Learn how to delete your data or your account on Memory Locks."
	/>
</svelte:head>

<div
	class="min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900"
>
	<Header />
	<main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto space-y-16">
			<section>
				<h1
					in:fly={{ y: 20, duration: 800, delay: 300 }}
					class="text-4xl font-bold tracking-tight text-gray-900 mb-8"
				>
					Delete Your Data – Memory Locks
				</h1>

				<div class="prose prose-lg prose-gray max-w-none space-y-6">
					<p in:fly={{ y: 20, duration: 800, delay: 380 }} class="text-gray-600">
						At Memory Locks, you are always in control of your data. You can delete individual
						content from a lock or permanently delete your entire account directly from within the
						app.
					</p>

					<hr class="my-8 border-gray-200" in:fly={{ y: 20, duration: 800, delay: 400 }} />

					<div in:fly={{ y: 20, duration: 800, delay: 420 }}>
						<h3 class="text-2xl font-semibold text-gray-900 mb-4">
							1. Delete Media from a Memory Lock Album
						</h3>
						<p class="text-gray-600 mb-4">You can remove specific photos or videos at any time.</p>
						<p class="text-gray-600 mb-2 font-medium">To delete content from a Memory Lock:</p>
						<ol class="list-decimal pl-5 space-y-2 text-gray-600 mb-4">
							<li>Open the Memory Locks app.</li>
							<li>Select the Memory Lock from the main page.</li>
							<li>Tap the Album button.</li>
							<li>Tap <strong>Edit</strong> in the top-right corner.</li>
							<li>Select and remove the media you wish to delete.</li>
							<li>Tap <strong>Publish Album</strong> to confirm your changes.</li>
						</ol>
						<p class="text-gray-600 mt-4">
							Once published, the selected media is permanently deleted from our servers and can no
							longer be accessed or restored.
						</p>
					</div>

					<hr class="my-8 border-gray-200" in:fly={{ y: 20, duration: 800, delay: 440 }} />

					<div in:fly={{ y: 20, duration: 800, delay: 460 }}>
						<h3 class="text-2xl font-semibold text-gray-900 mb-4">
							2. Permanently Delete Your Account
						</h3>
						<p class="text-gray-600 mb-4">
							Deleting your account removes your personal data and associated Memory Locks content.
						</p>
						<p class="text-gray-600 mb-2 font-medium">To delete your account:</p>
						<ol class="list-decimal pl-5 space-y-2 text-gray-600 mb-4">
							<li>Open the Memory Locks app.</li>
							<li>
								Tap the <strong>Account</strong> button in the top-right corner of the main page.
							</li>
							<li>Tap <strong>Delete Account</strong>.</li>
							<li>Follow the on-screen confirmation steps.</li>
						</ol>
						<p class="text-gray-600 mb-2 font-medium">After confirmation:</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600 mt-2">
							<li>Your account will be permanently deleted.</li>
							<li>
								Your associated Memory Locks and stored media will be permanently removed (if you
								choose to delete all content).
							</li>
							<li>This action cannot be undone.</li>
						</ul>
					</div>

					<hr class="my-8 border-gray-200" in:fly={{ y: 20, duration: 800, delay: 480 }} />

					<div in:fly={{ y: 20, duration: 800, delay: 500 }}>
						<h3 class="text-2xl font-semibold text-gray-900 mb-4">
							Important Note on Manual Deletion
						</h3>
						<p class="text-gray-600 mb-4">
							For security and verification purposes, we do not process manual data deletion
							requests over email or support channels. All data and account deletion must be
							securely initiated directly from within the Memory Locks app using the steps provided
							above.
						</p>
					</div>
				</div>
			</section>

			<div class="flex justify-center pt-8" in:fly={{ y: 20, duration: 800, delay: 540 }}>
				<CreativeButton
					href="/"
					className="px-8 py-3 shadow-lg hover:shadow-xl hover:shadow-brand-500/30"
				>
					Back to Landing Page
				</CreativeButton>
			</div>
		</div>
	</main>
	<Footer />
</div>
