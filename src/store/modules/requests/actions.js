import urls from '@/config';
export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };
        const url = urls.contactCoach(payload.coachId);
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to send request.');
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context){
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const url = urls.getRequests(coachId, token);
        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch requests.');
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request);
        }

        context.commit('setRequests', requests);

    }
};
