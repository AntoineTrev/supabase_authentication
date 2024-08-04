import _NavbarAddon from './navbaraddon.vue'
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin
const namerequired = 'sa-' // for Supabase-Authentication

const withInstall = <T>(comp: T) => {
    ;(comp as SFCWithInstall<T>).install = (app: App) => {
        const name = (comp as any).name
        if (!name.startsWith(namerequired)) {
            console.warn(`THis component name need to start with ${namerequired}`)
        }
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}
export const NavbarAddonRegister = withInstall(_NavbarAddon)
// export * from _NavbarAddon
export default _NavbarAddon
