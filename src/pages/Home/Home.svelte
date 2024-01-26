<script lang="ts">
    import router from "@/router";
</script>

<div class="home h-full">
    <button on:click={() => router.push("login")}>navigate to login page</button
    >
</div>

<style>
    .home {
        background: #000;
    }

    button {
        border-color: red;
        background-color: lightblue;
    }
</style>
