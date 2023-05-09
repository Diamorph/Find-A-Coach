
import firebaseSettings from '@/config/firebase-settings';
export default {
    loginUrl: () => `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseSettings.apiKey}`,
    signUpUrl: () =>  `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseSettings.apiKey}`,
    addCoachUrl: (userId, token) => `${firebaseSettings.dbUrl}/coaches/${userId}.json?auth=${token}`,
    loadCoaches: () => `${firebaseSettings.dbUrl}/coaches.json`,
    getRequests: (coachId, token) => `${firebaseSettings.dbUrl}/requests/${coachId}.json?auth=${token}`,
    contactCoach: (coachId) => `${firebaseSettings.dbUrl}/requests/${coachId}.json`
}
