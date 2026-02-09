/**
 * Manages the global user state, specifically for the signup flow.
 * utilizes Svelte 5's fine-grained reactivity ($state).
 */
export class UserState {
	// Reactive state properties
	email = $state('');
	isStandardLoading = $state(false);
	standardSuccess = $state(false);
	standardError = $state('');

	/**
	 * Handles the standard signup process specifically for the waitlist.
	 * Validates email, sends request to API, and updates local state based on result.
	 *
	 * @param email - The user's email address.
	 */
	async handleStandardSignup(email: string) {
		this.standardError = '';

		// Immediate feedback for empty input
		if (!email) {
			this.standardError = 'Please enter your email.';
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			this.standardError = 'That doesn’t look like a valid email.';
			return;
		}

		this.isStandardLoading = true;
		this.standardSuccess = false;

		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, type: 'standard' })
			});

			const data = await response.json();

			if (response.ok && data.success) {
				this.standardSuccess = true;
			} else {
				// Graceful error handling using server message or fallback
				this.standardError = data.message || 'Something went wrong. Please try again.';
			}
		} catch (e) {
			// Network-level error handling
			console.error('Signup Network Error:', e);
			this.standardError = 'Unable to connect. Please check your internet connection.';
		} finally {
			// Always reset loading state, regardless of outcome
			this.isStandardLoading = false;
		}
	}
}

export const userState = new UserState();
