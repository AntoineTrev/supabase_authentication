import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import peerDependencies from './package.json' with  { type: 'json' };

export default defineConfig({
    plugins: [
        vue(),
        dts({
            skipDiagnostics: true,
            outputDir: resolve(__dirname, 'dist/types'),
            entryRoot: resolve(__dirname, 'src')
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "SupabaseAuthentication",
            fileName: (format) => `supabase-authentication.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: [Object.keys(peerDependencies)],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            }
        },
    },
})