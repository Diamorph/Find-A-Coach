import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App)

app.use(router)
app.use(store);
app.component('base-card', defineAsyncComponent(() => import('@/components/ui/BaseCard.vue')));
app.component('base-button', defineAsyncComponent(() => import('@/components/ui/BaseButton.vue')));
app.component('base-badge', defineAsyncComponent(() => import('@/components/ui/BaseBadge.vue')));
app.component('base-spinner', defineAsyncComponent(() => import('@/components/ui/BaseSpinner.vue')));
app.component('base-dialog', defineAsyncComponent(() => import('@/components/ui/BaseDialog.vue')));

app.mount('#app')
