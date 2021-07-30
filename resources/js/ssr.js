import Vue from 'vue'
import express from 'express'
import { createRenderer } from 'vue-server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);

const server = express()
server.use(express.json())
server.post('/render', async (request, response, next) => {
    try {
        response.json(
            await createInertiaApp({
                page: request.body,
                render: createRenderer().renderToString,
                resolve: name => require(`./Pages/${name}`),
                setup({ app, props }) {
                    return new Vue({
                        render: h => h(app, props),
                    })
                },
            }),
        )
    } catch (error) {
        next(error)
    }
})
server.listen(8080, () => console.log('Server started.'))

console.log('Starting SSR server...')