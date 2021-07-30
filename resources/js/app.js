import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue';
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);


createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
})