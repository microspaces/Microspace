class MicrospaceApi {
    constructor() {
        this.baseUrl = '/api'; // Base URL for our API endpoints
    }

    async getApps() {
        try {
            const response = await fetch(`${this.baseUrl}/apps`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching apps:', error);
            throw error;
        }
    }

    async getAppById(id) {
        try {
            const response = await fetch(`${this.baseUrl}/apps/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching app by id:', error);
            throw error;
        }
    }
}

// Export the API service
window.MicrospaceApi = MicrospaceApi;
