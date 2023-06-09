export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return !!state.coaches.length;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(c => c.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimestamp = new Date().getTime();
        return (currentTimestamp - lastFetch) / 1000 > 60;
    }
};
