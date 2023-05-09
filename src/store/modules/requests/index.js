import getters from '@/store/modules/requests/getters';
import actions from '@/store/modules/requests/actions';
import mutations from '@/store/modules/requests/mutations';

export default  {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    actions,
    getters,
    mutations
}
