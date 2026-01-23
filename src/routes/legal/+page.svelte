<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900"
>
	<Header />
	<main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto space-y-16">
			<!-- Terms of Service -->
			<section>
				<h1
					in:fly={{ y: 20, duration: 800, delay: 300 }}
					class="text-4xl font-bold tracking-tight text-gray-900 mb-8"
				>
					Terms of Service
				</h1>
				<p in:fly={{ y: 20, duration: 800, delay: 350 }} class="text-sm text-gray-500 mb-8">
					Effective Date: January 20, 2026
				</p>

				<div class="prose prose-lg prose-gray max-w-none space-y-6">
					<div in:fly={{ y: 20, duration: 800, delay: 400 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">1. The Service</h3>
						<p class="text-gray-600">
							Memory Locks provides physical locks with a digital dimension. By using our mobile app
							and digital albums, you agree to these terms.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 450 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">2. Your Content & Our License</h3>
						<p class="text-gray-600 mb-4">
							You retain ownership of the photos and videos you upload. To provide the service and
							support technological development, you grant Memory Locks a worldwide, royalty-free,
							and sublicensable license to host, store, use, and distribute your content.
						</p>
						<p class="text-gray-600">
							This license includes the right for Memory Locks to share or license media with
							research and technology partners for purposes of platform optimization and service
							development.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 500 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">3. Account Information</h3>
						<p class="text-gray-600">
							You agree to provide accurate account information (Name, Email, and Phone Number). You
							are responsible for all activity that occurs under your account.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 550 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">4. Public Access</h3>
						<p class="text-gray-600">
							The QR code on your lock is a public key. You acknowledge that any content uploaded to
							an album is intended for public viewing by anyone who scans the physical lock.
						</p>
					</div>
				</div>
			</section>

			<!-- Privacy Policy -->
			<section>
				<h1
					in:fly={{ y: 20, duration: 800, delay: 600 }}
					class="text-4xl font-bold tracking-tight text-gray-900 mb-8"
				>
					Privacy Policy
				</h1>
				<p in:fly={{ y: 20, duration: 800, delay: 650 }} class="text-sm text-gray-500 mb-8">
					Last Updated: January 20, 2026
				</p>

				<div class="prose prose-lg prose-gray max-w-none space-y-6">
					<div in:fly={{ y: 20, duration: 800, delay: 700 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
						<p class="text-gray-600 mb-4">
							We collect the following to manage your account and provide the Memory Locks
							experience:
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<span class="font-medium text-gray-900">Personal Data:</span> Your Name, Email Address
								and-or Phone Number.
							</li>
							<li>
								<span class="font-medium text-gray-900">User Media:</span> The images and videos you upload
								to your public albums.
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 750 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Data</h3>
						<p class="text-gray-600 mb-4">
							We use your contact info for account management. Regarding your media:
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<span class="font-medium text-gray-900">Public Display:</span> We host your media to be
								viewed via your lock’s QR code.
							</li>
							<li>
								<span class="font-medium text-gray-900">Innovation & Research:</span> To support the advancement
								of human-centric technology, Memory Locks may share de-identified or aggregated media
								with research partners. This helps train algorithms to better understand human interaction
								and emotion, ensuring future technology is more intuitive and responsive.
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 800 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">3. Sharing of Information</h3>
						<p class="text-gray-600 mb-4">
							We do not sell your personal contact information (email/phone) to third parties. We
							only share data with:
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<span class="font-medium text-gray-900">Technology Partners:</span> As described in Section
								2, for AI and research purposes.
							</li>
							<li>
								<span class="font-medium text-gray-900">Service Providers:</span> Partners who provide
								cloud storage and technical support.
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 850 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">4. Your Control & Deletion</h3>
						<p class="text-gray-600">
							You may delete your media or your account at any time through the app. Deletion
							removes the media from public view on our platform.
						</p>
					</div>
				</div>
			</section>

			<div class="flex justify-center pt-8" in:fly={{ y: 20, duration: 800, delay: 900 }}>
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
