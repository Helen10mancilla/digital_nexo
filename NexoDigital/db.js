/**
 * Nexo Digital - Database Service
 * Provides a simple wrapper for localStorage to handle call scheduling data.
 */

const DB_KEYS = {
    APPOINTMENTS: 'nexodigital_appointments'
};

const Database = {
    /**
     * Save a new appointment to localStorage
     * @param {Object} appointmentData - The appointment details
     * @returns {boolean} Success status
     */
    saveAppointment: function (appointmentData) {
        try {
            // Get existing appointments
            const appointments = this.getAppointments();

            // Add unique ID and timestamp
            const newAppointment = {
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                ...appointmentData
            };

            // Push to array
            appointments.push(newAppointment);

            // Save back to localStorage
            localStorage.setItem(DB_KEYS.APPOINTMENTS, JSON.stringify(appointments));

            return true;
        } catch (error) {
            console.error('Error saving appointment:', error);
            return false;
        }
    },

    /**
     * Retrieve all appointments from localStorage
     * @returns {Array} List of appointments
     */
    getAppointments: function () {
        try {
            const data = localStorage.getItem(DB_KEYS.APPOINTMENTS);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error retrieving appointments:', error);
            return [];
        }
    },

    /**
     * Clear all appointments (Utility function)
     */
    clearAppointments: function () {
        localStorage.removeItem(DB_KEYS.APPOINTMENTS);
    }
};

// Export to window object for global access if needed in static HTML
window.NexoDB = Database;
