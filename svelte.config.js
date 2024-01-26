import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { preprocessMeltUI, sequence } from "@melt-ui/pp";

const config = {
    // ... other svelte config options
    preprocess: sequence([
        vitePreprocess(),
        // ... other preprocessors
        preprocessMeltUI(), // add to the end!
    ]),
};

export default config;
