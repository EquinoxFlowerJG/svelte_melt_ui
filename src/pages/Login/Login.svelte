<script lang="ts">
    import { currentTime } from "@/stores/currentTime.store";
</script>

<div class="login">
    <!-- 页面标题 -->
    <h1 class="title">Login</h1>
    <!-- 当前时间 -->
    <span class="current_time">{$currentTime}</span>

    <!-- 登录表单 -->
</div>

<style lang="scss" type="text/scss">
    .login {
        height: 100%;
    }
</style>
