/*
 * @Author: Jiang Guan
 * @Date: 2024-01-23 18:39:08
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-24 15:06:39
 * @FilePath: /ctu_svelte/src/stores/loading.store.ts
 * @Description: 应用级全局加载状态
 */
import { writable } from "svelte/store";

function createLoadingStore() {
    const { subscribe, set } = writable(false);

    return {
        subscribe,
        setLoadingStatus: (status: boolean) => set(status), // 修改加载状态
    };
}
export const loadingStatus = createLoadingStore();
