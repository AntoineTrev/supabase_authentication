import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import peerDependencies from './package.json' assert { type: 'json' }

export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        dts({
            skipDiagnostics: true,
            outDir: resolve(__dirname, 'dist/types'),
            root: resolve(__dirname, 'src'),
        }),
    ],
    optimizeDeps: {
        exclude: ['vue', 'primevue'],
        esbuildOptions: {
            tsconfig: 'tsconfig.json'
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'SupabaseAuthentication',
            fileName: format => `supabase-authentication.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: [Object.keys(peerDependencies)],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
