/*
 * @Author: Jiang Guan
 * @Date: 2024-01-23 15:43:46
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-24 14:17:25
 * @FilePath: /ctu_svelte/vite.config.ts
 * @Description: Vite 的配置文件
 */
import { defineConfig } from "vite";

import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte({ preprocess: sveltePreprocess() }), UnoCSS()],
    build: {
        outDir: "build",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
