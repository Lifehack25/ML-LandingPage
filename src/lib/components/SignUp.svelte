<script lang="ts">
	import viewport from '$lib/actions/viewport';
	import { Turnstile } from 'svelte-turnstile';
	import { userState } from '$lib/state/user.svelte';

	let email = $state('');
	let turnstileToken = $state('');
</script>

<section id="signup" class="relative pt-24 pb-48 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
	<!-- Background Decoration -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/20 to-transparent pointer-events-none"
	></div>

	<div class="relative z-10 text-center mb-12 px-4">
		<h2
			use:viewport
			class="reveal-on-scroll text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4"
		>
			Join the Waitlist!
		</h2>
		<p use:viewport class="reveal-on-scroll reveal-delay-100 text-xl text-gray-600 font-light">
			Be the first to know when we launch.
		</p>
	</div>

	<div class="relative z-10 max-w-lg mx-auto">
		<div
			use:viewport
			class="reveal-on-scroll reveal-delay-200 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl"
		>
			<form
				class="space-y-4"
				onsubmit={(e) => {
					e.preventDefault();
					userState.handleStandardSignup(email, turnstileToken);
				}}
			>
				{#if userState.standardSuccess}
					<div
						class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-8 text-center relative overflow-hidden"
					>
						<div
							class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"
						></div>
						<div
							class="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30"
						></div>

						<div class="relative z-10 mb-6 flex justify-center">
							<div
								class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-100 animate-[bounce_1s_ease-out]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>

						<h4 class="text-2xl font-bold text-gray-900 font-serif mb-2 relative z-10">
							Welcome Aboard!
						</h4>
						<p class="text-gray-600 relative z-10">
							You're officially on the list. We'll be in touch soon.
						</p>
					</div>
				{:else}
					<input
						type="email"
						required
						bind:value={email}
						placeholder="Enter your email"
						disabled={userState.isStandardLoading}
						class="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50"
					/>

					<Turnstile
						siteKey="0x4AAAAAACghBGr6aGFNBQgv"
						on:turnstile-callback={(e) => (turnstileToken = e.detail.token)}
					/>

					{#if userState.standardError}
						<p class="text-red-500 text-sm ml-2">{userState.standardError}</p>
					{/if}
					<button
						type="submit"
						disabled={userState.isStandardLoading}
						class="cursor-pointer w-full bg-brand-500 text-white font-semibold py-4 rounded-xl hover:bg-brand-600 transition-all duration-200 ease-out shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center transform hover:-translate-y-0.5"
					>
						{#if userState.isStandardLoading}
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Joining...
						{:else}
							Join Waitlist
						{/if}
					</button>
				{/if}
			</form>
		</div>
	</div>
</section>
