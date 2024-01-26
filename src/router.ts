/*
 * @Author: Jiang Guan
 * @Date: 2024-01-24 11:05:14
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-25 17:34:21
 * @FilePath: /ctu_svelte/src/router.ts
 * @Description: 应用路由
 */
// @ts-nocheck This comment is just for the ts error caused by the router library. ╮(╯▽╰)╭ —— by JiangGuan
import SvelteRouter, {
    type RouterScrollingElement,
} from "@danielsharkov/svelte-router";
import NotFound from "./pages/404/NotFound.svelte";
import Home from "./pages/Home/Home.svelte";
import Login from "./pages/Login/Login.svelte";

export default new SvelteRouter({
    window: window,
    scrollingElement: window.document.scrollingElement as
        | RouterScrollingElement
        | undefined,
    routes: {
        home: {
            path: "/",
            component: Home,
        },
        login: {
            path: "/login",
            component: Login,
        },
        "404": {
            path: "/404",
            component: NotFound,
        },
    },
    fallback: {
        name: "404",
        // replace: false, // true by default
    },
});
