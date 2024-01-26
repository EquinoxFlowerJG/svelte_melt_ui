<script lang="ts">
    import { createDialog, createSync, melt } from "@melt-ui/svelte";
    import Loading from "./Loading.svelte";

    export let spinning = false; // 是否为加载中状态
    export let fullscreen = true; // 显示带有 Spin 组件的背景（是否全屏显示）
    export let tip = "加载中..."; // 自定义描述文案

    const {
        elements: {
            trigger,
            portalled,
            overlay,
            content,
            title,
            description,
            close,
        },
        states,
    } = createDialog({
        closeOnOutsideClick: false, // 禁用单击蒙层关闭组件
        closeOnEscape: false, // 禁用按下 Escape 键关闭组件
    });

    // 同步状态
    const sync = createSync(states);
    $: sync.open(spinning, (value) => (spinning = value));
</script>

<div use:melt={$portalled}>
    {#if spinning}
        {#if fullscreen}
            <div use:melt={$overlay} />
        {/if}
        <div use:melt={$content}>
            <Loading />
            <span>{tip}</span>
        </div>
    {/if}
</div>
