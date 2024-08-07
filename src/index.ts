import { App } from 'vue'
import PrimeVue from 'primevue/config'
import * as componentsToRegister from './components/register'

export * from './components'

interface IOptionsAPpUse {
    register?: boolean
}

export default {
    install(app: App, { register }: IOptionsAPpUse) {
        app.use(PrimeVue, { unstyled: true })
        if (register) {
            for (const c in componentsToRegister) {
                app.use((componentsToRegister as any)[c])
            }
        }
    },
}
