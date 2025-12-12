
export class UserState {
    email = $state('');
    isStandardLoading = $state(false);
    standardSuccess = $state(false);
    standardError = $state('');

    async handleStandardSignup(email: string) {
        this.standardError = '';

        if (!email) {
            this.standardError = 'Please enter your email.';
            return;
        }

        // Basic client-side validation
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
                // Optional: keep email in input or clear it. 
                // this.email = ''; 
            } else {
                this.standardError = data.message || 'Something went wrong. Please try again.';
            }
        } catch (e) {
            console.error('Signup Network Error:', e);
            this.standardError = 'Unable to connect. Please check your internet connection.';
        } finally {
            this.isStandardLoading = false;
        }
    }
}

export const userState = new UserState();
