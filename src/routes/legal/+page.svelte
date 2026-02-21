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

				<div class="prose prose-lg prose-gray max-w-none space-y-6">
					<p in:fly={{ y: 20, duration: 800, delay: 380 }} class="text-gray-600">
						<strong>Last updated:</strong> [Insert date]
					</p>

					<div in:fly={{ y: 20, duration: 800, delay: 420 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">1. Operator</h3>
						<p class="text-gray-600">
							Memory Locks is operated by <strong>Blippkey AB</strong> (Org. No: 559392-6073),
							Attundagränd 3, 19161 Sollentuna, Stockholm, Sweden (“Blippkey”, “we”, “us”). Support:
							<strong>contact@memorylocks.com</strong>.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 460 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">2. The Service</h3>
						<p class="text-gray-600">
							Memory Locks provides physical locks connected to digital albums accessible via a QR
							code. By creating an account, downloading the app, or using our albums, you agree to
							these Terms.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 500 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">3. Public Access (Important)</h3>
						<p class="text-gray-600 mb-3">
							<strong>All albums are public by design.</strong> Anyone who scans the QR code on a lock
							can view the album content.
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>Content may be accessed worldwide.</li>
							<li>Third parties may copy, download, share, or re-post content.</li>
							<li>
								We are not responsible for how third parties use or redistribute content once it is
								publicly accessible.
							</li>
						</ul>
						<p class="text-gray-600 mt-3">
							Albums are not intended to be indexed by search engines, but we cannot guarantee that
							third parties will not share links or content elsewhere.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 540 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">4. Accounts & Authentication</h3>
						<p class="text-gray-600 mb-3">
							You can sign in using Apple or Google, or with email/phone using one-time passcodes
							(OTP). We do not store passwords.
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>You agree to provide accurate account information.</li>
							<li>You are responsible for activity that occurs under your account.</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 580 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">5. Your Content & License</h3>
						<p class="text-gray-600 mb-3">
							You retain ownership of the photos and videos you upload (“User Content”).
						</p>
						<p class="text-gray-600 mb-3">
							To operate the service and to fund ongoing storage and development, you grant Blippkey
							a worldwide, non-exclusive, royalty-free, sublicensable license to host, store, cache,
							reproduce, process, display, distribute, and otherwise use User Content for:
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>Operating and providing public QR-based album access</li>
							<li>Content moderation and safety review</li>
							<li>Platform analytics, performance, and reliability</li>
							<li>
								Licensing User Content to technology partners for research, model training, and
								related technological development
							</li>
						</ul>
						<p class="text-gray-600 mt-3">
							This license remains in effect until you delete the content or your account, except to
							the extent content may remain temporarily in backups or logs as described in the
							Privacy Policy.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 620 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">6. Content Rules</h3>
						<p class="text-gray-600 mb-3">You may not upload content that includes, for example:</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>Pornographic or sexually explicit content</li>
							<li>Graphic violence or gore</li>
							<li>Illegal content</li>
							<li>Content you do not have the rights to upload</li>
						</ul>
						<p class="text-gray-600 mt-3">
							We may remove or restrict content that violates these Terms. We may also reject
							uploads based on automated safety checks.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 660 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">7. Purchases</h3>
						<p class="text-gray-600 mb-3">
							The app is free to download and includes in-app purchases. Physical locks are sold
							separately through our online store and selected retail partners.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 700 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							8. Disclaimer & Limitation of Liability
						</h3>
						<p class="text-gray-600 mb-3">
							The service is provided “as is” and “as available”. To the maximum extent permitted by
							law, Blippkey is not liable for indirect, incidental, special, consequential, or
							punitive damages, or for loss of data, loss of profits, or third-party misuse of
							public content.
						</p>
						<p class="text-gray-600">
							Nothing in these Terms limits liability that cannot be limited under applicable law.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 740 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">9. Age</h3>
						<p class="text-gray-600">
							Memory Locks is available to users of all ages. If you are under the age at which you
							can legally enter into binding agreements in your country, you confirm that you are
							using the service with the involvement or consent of a parent or legal guardian.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 780 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">10. Governing Law</h3>
						<p class="text-gray-600">
							These Terms are governed by Swedish law. Disputes shall be resolved by Swedish courts,
							unless mandatory law provides otherwise.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 820 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">11. Changes</h3>
						<p class="text-gray-600">
							We may update these Terms from time to time. If changes are material, we will take
							reasonable steps to notify you (for example, in the app or on our website).
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

				<div class="prose prose-lg prose-gray max-w-none space-y-6">
					<p in:fly={{ y: 20, duration: 800, delay: 680 }} class="text-gray-600">
						<strong>Last updated:</strong> [Insert date]
					</p>

					<div in:fly={{ y: 20, duration: 800, delay: 720 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							1. Who We Are (Data Controller)
						</h3>
						<p class="text-gray-600">
							Blippkey AB (Org. No: 559392-6073) is the data controller for personal data processed
							through Memory Locks.
						</p>
						<p class="text-gray-600">
							Contact: <strong>contact@memorylocks.com</strong> • Address: Attundagränd 3, 19161 Sollentuna,
							Stockholm, Sweden.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 760 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">2. Data We Collect</h3>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<strong class="text-gray-900">Account data:</strong> name, email address, phone number,
								and authentication method (Apple/Google/OTP).
							</li>
							<li>
								<strong class="text-gray-900">Device data:</strong> device identifiers and push notification
								tokens (e.g., Firebase Cloud Messaging tokens) used to deliver native mobile notifications
								and associate devices with user accounts.
							</li>
							<li>
								<strong class="text-gray-900">User media:</strong> photos and videos you upload to public
								albums, plus related metadata (which we may minimize or remove).
							</li>
							<li>
								<strong class="text-gray-900">Analytics & tracking:</strong> cookies and identifiers used
								for GA4 and advertising tracking on web albums (where applicable and permitted).
							</li>
							<li>
								<strong class="text-gray-900">Server logs:</strong> limited operational logs retained
								for a short period (see retention below).
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 800 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">3. How We Use Data</h3>
						<p class="text-gray-600 mb-3">We use your data to:</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>Create and manage your account (passwordless OTP sign-in)</li>
							<li>Host and display public QR-accessible albums</li>
							<li>Moderate content and prevent prohibited uploads</li>
							<li>Operate, maintain, and improve performance and reliability</li>
							<li>
								License user media to technology partners for research, model training, and
								technological development to support the service’s long-term sustainability
							</li>
							<li>Run analytics (GA4) and advertising tracking where applicable</li>
							<li>Comply with legal obligations and enforce our terms</li>
							<li>Send service-related push notifications to your registered device</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 840 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">4. Legal Bases (EEA/UK Users)</h3>
						<p class="text-gray-600 mb-3">
							Where GDPR applies, we rely on one or more of the following legal bases:
						</p>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<strong class="text-gray-900">Contract</strong> (Art. 6(1)(b)): providing the service
								you request (accounts, albums, hosting).
							</li>
							<li>
								<strong class="text-gray-900">Legitimate interests</strong> (Art. 6(1)(f)): service security,
								abuse prevention, improving reliability, and sustaining the service model.
							</li>
							<li>
								<strong class="text-gray-900">Consent</strong> (Art. 6(1)(a)) where required (for example,
								cookies/advertising tracking depending on jurisdiction and configuration).
							</li>
							<li>
								<strong class="text-gray-900">Legal obligations</strong> (Art. 6(1)(c)) where applicable.
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 880 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							5. Content Moderation (Sightengine)
						</h3>
						<p class="text-gray-600">
							We use third-party AI moderation services (currently Sightengine) to automatically
							detect and prevent prohibited content (such as pornography or gore). Uploads may be
							rejected based on these checks.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 920 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">6. Sharing & Licensing</h3>

						<p class="text-gray-600 mb-3">
							We share personal data only as necessary to operate, sustain, and improve the Memory
							Locks service.
						</p>

						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<strong class="text-gray-900">Technology partners:</strong>
								User media may be licensed to technology partners, including artificial intelligence companies,
								for research, model training, and related technological development.
							</li>

							<li>
								<strong class="text-gray-900">Infrastructure providers:</strong>
								We use trusted cloud and storage providers (such as Cloudflare) to host, store, and securely
								deliver content.
							</li>

							<li>
								<strong class="text-gray-900">Analytics providers:</strong>
								We use analytics services (such as Google Analytics) to understand usage patterns and
								improve the performance of the service.
							</li>
						</ul>

						<p class="text-gray-600 mt-3">
							We do <strong>not</strong> sell your email address, phone number, or direct contact information.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 960 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							7. Storage, Locations & Transfers
						</h3>
						<p class="text-gray-600 mb-3">
							We use Cloudflare services including D1, Images, and Stream. Cloud infrastructure may
							process data across multiple regions.
						</p>
						<p class="text-gray-600">
							If personal data is transferred outside the EEA/UK, we will use appropriate safeguards
							where required (for example, standard contractual clauses).
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1000 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">8. Retention</h3>
						<ul class="list-disc pl-5 space-y-2 text-gray-600">
							<li>
								<strong class="text-gray-900">Account data:</strong> retained until you delete it.
							</li>
							<li>
								<strong class="text-gray-900">User media:</strong> retained until you delete it.
							</li>
							<li><strong class="text-gray-900">Server logs:</strong> retained for 7 days.</li>
							<li>
								<strong class="text-gray-900">Analytics:</strong> retained per GA4 configuration and your
								cookie choices where applicable.
							</li>
						</ul>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1040 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">9. Deletion</h3>
						<p class="text-gray-600">
							You can delete your media or your account through the app. Deletion removes the
							content from public view and deletes it from our active systems. Limited residual
							copies may persist temporarily in backups or logs for security and operational
							purposes.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1080 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">10. Your Rights (EEA/UK)</h3>
						<p class="text-gray-600 mb-3">
							If GDPR applies, you may have rights to access, correct, delete, restrict processing,
							object, and data portability, and to lodge a complaint with your supervisory
							authority.
						</p>
						<p class="text-gray-600">
							To make a request, contact: <strong>contact@memorylocks.com</strong>
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1120 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">11. Security</h3>
						<p class="text-gray-600">
							We use HTTPS encryption in transit and bot protection. No system is 100% secure, but
							we take reasonable steps to protect your data.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1160 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">12. Age</h3>
						<p class="text-gray-600">
							Memory Locks is available to users of all ages. Where required by applicable law, use
							by minors should occur with parental or guardian involvement. If we become aware that
							personal data has been provided without required authorization, we may take
							appropriate action.
						</p>
					</div>

					<div in:fly={{ y: 20, duration: 800, delay: 1200 }}>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">13. Changes</h3>
						<p class="text-gray-600">
							We may update this Privacy Policy from time to time. Updates will be posted in the app
							or on our website.
						</p>
					</div>
				</div>
			</section>

			<div class="flex justify-center pt-8" in:fly={{ y: 20, duration: 800, delay: 1240 }}>
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
