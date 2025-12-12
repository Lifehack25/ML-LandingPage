
export class UserState {
    email = $state('');
    isStandardLoading = $state(false);
    standardSuccess = $state(false);
    standardError = $state('');

    async handleStandardSignup(email: string) {
        if (!email) return;

        this.isStandardLoading = true;
        this.standardError = '';
        this.standardSuccess = false;

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, type: 'standard' })
            });

            const data = await response.json();

            if (response.ok) {
                this.standardSuccess = true;
                this.email = ''; // Clear input if desired, or keep it to show "signed up as..."
            } else {
                this.standardError = data.message || 'Something went wrong. Please try again.';
            }
        } catch (e) {
            this.standardError = 'Failed to connect. Please check your internet connection.';
        } finally {
            this.isStandardLoading = false;
        }
    }
}

export const userState = new UserState();
