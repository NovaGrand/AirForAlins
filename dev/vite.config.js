/*
 * @Author: theajack
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import alins from 'vite-plugin-alins';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
    return {
        base: '/',
        plugins: [
            legacy({
                targets: [ 'defaults', 'not IE 11' ],
            }),
            alins(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
            extensions: ['.html', '.js', '.json', '.jsx', '.scss']
        },
        define: {
            __DEV__: mode === 'development',
        },
        build:{
            rollupOptions: {
                 // https://rollupjs.org/guide/en/#outputmanualchunks
                 output: {
                   manualChunks: { // 自定义 chunk
                     // 'route_about': [
                     //   './src/pages/about',
                     // ],
                   },
                 },
               },
        }
    };
});
