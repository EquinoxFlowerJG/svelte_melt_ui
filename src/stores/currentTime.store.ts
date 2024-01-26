/*
 * @Author: Jiang Guan
 * @Date: 2024-01-24 14:32:00
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-24 14:42:13
 * @FilePath: /ctu_svelte/src/stores/currentTime.store.ts
 * @Description: 当前时间的状态（此时间是访问网页设备的本地时间）
 */
import { readable } from "svelte/store";
import dayjs from "dayjs";

const TIME_FORMATTER = "YYYY-MM-DD HH:mm"; // 时间格式化的模板

export const currentTime = readable(
    dayjs().format(TIME_FORMATTER),
    function start(set) {
        const interval = setInterval(() => {
            set(dayjs().format(TIME_FORMATTER));
        }, 1000);

        return function stop() {
            clearInterval(interval);
        };
    },
);
