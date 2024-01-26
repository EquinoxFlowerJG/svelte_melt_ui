<script lang="ts">
    import { onMount } from "svelte";
    import { getScale } from "./utils/util";
    import Loading from "./components/Loading.svelte";
    import { loadingStatus } from "./stores/loading.store";
    // @ts-ignore
    import Viewport from "@danielsharkov/svelte-router/Viewport";
    import router from "./router";
    import Spin from "./components/Spin.svelte";

    let screen: HTMLElement; // 内容显示区元素

    // 组件挂载后缩放页面
    onMount(() => {
        if (screen) {
            screen.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
        }
    });

    // 监听视口变化，并缩放页面
    window.onresize = () => {
        if (screen) {
            screen.style.transform = `scale(${getScale()})  translate(-50%, -50%)`;
        }
    };

    // 监听 loadingStatus 的变化，更新 KSpin 组件的显示状态
    loadingStatus.subscribe((value) =>
        console.log("%c Line:29 🍐 value", "color:#6ec1c2", value),
    );
</script>

<div class="container">
    <main class="content" bind:this={screen}>
        <Viewport {router} />
    </main>
    <Spin spinning={true} />
</div>

<style lang="scss" type="text/scss">
    @import "app.scss";
</style>
