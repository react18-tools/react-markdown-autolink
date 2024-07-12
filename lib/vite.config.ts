import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      formats: ["cjs", "es"],
      entry: "./src/index.ts",
      fileName: format => `index.${format === "es" ? "m" : ""}js`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    coverage: {
      include: ["src/**"],
      reporter: ["text", "json", "clover", "html"],
    },
  },
});
