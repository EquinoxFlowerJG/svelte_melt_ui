/*
 * @Author: Jiang Guan
 * @Date: 2024-01-24 10:04:18
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-25 16:43:51
 * @FilePath: /ctu_svelte/uno.config.ts
 * @Description: UnoCSS 配置文件
 */
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetIcons(), presetRemToPx()],
});
