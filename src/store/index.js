import { createStore } from 'vuex';
import coachesModule from '@/store/modules/coaches';
import requestsModule from '@/store/modules/requests';
import authModule from '@/store/modules/auth';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule
    },
});

export default store;
