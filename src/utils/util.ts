/*
 * @Author: Jiang Guan
 * @Date: 2024-01-23 17:03:30
 * @LastEditors: Jiang Guan
 * @LastEditTime: 2024-01-23 17:09:43
 * @FilePath: /ctu_svelte/src/utils/util.ts
 * @Description: 自定义工具函数
 */
/**
 * @description: 计算屏幕缩放比例（以适应不同分辨率的屏幕）
 * @param {number} w 设计稿的默认宽度
 * @param {number} h 设计稿的默认高度
 * @return {number} 计算后的缩放比例
 */
export const getScale = (w: number = 1280, h: number = 800): number => {
    const ww = window.innerWidth / w;
    const wh = window.innerHeight / h;
    return ww < wh ? ww : wh;
};
