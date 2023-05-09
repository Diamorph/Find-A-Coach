import actions from '@/store/modules/auth/actions';
import getters from '@/store/modules/auth/getters';
import mutations from '@/store/modules/auth/mutations';

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false
        };
    },
    actions,
    getters,
    mutations
};
