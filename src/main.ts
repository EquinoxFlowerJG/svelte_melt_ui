/*
 * @Author: Jiang Guan
 * @Date: 2024-01-23 15:43:46
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-24 10:52:35
 * @FilePath: /ctu_svelte/src/main.ts
 * @Description: 项目主入口
 */
// main.ts
import "./styles/index.scss";
import "virtual:uno.css";
import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app") as Element,
});

export default app;
