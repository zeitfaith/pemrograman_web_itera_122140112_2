class ScheduleManager {
    constructor() {
        this.schedule = this.loadSchedule();
    }

    loadSchedule = () => {
        const storedSchedule = localStorage.getItem('schedule');
        return storedSchedule ? JSON.parse(storedSchedule) : [];
    };

    saveSchedule = () => {
        localStorage.setItem('schedule', JSON.stringify(this.schedule));
    };

    addClass = (newClass) => {
        this.schedule.push({ id: Date.now(), ...newClass });
        this.saveSchedule();
        return this.schedule;
    };

    updateClass = (id, updatedClass) => {
        const index = this.schedule.findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            this.schedule[index] = { id: parseInt(id), ...updatedClass };
            this.saveSchedule();
            return this.schedule;
        }
        return null;
    };

    deleteClass = (id) => {
        this.schedule = this.schedule.filter(item => item.id !== parseInt(id));
        this.saveSchedule();
        return this.schedule;
    };

    getSchedule = () => {
        return this.schedule;
    };
}

export default ScheduleManager;