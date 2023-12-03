import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {resolve} from "path"

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "vue-number-animation",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "vueDemi",
        },
      },
    },
  },
})