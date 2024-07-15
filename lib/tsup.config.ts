import { defineConfig } from "tsup";
import react18Plugin from "esbuild-plugin-react18";

export default defineConfig(options => ({
  format: ["cjs", "esm"],
  target: "es2015",
  entry: ["./src"],
  sourcemap: false,
  clean: !options.watch,
  bundle: true,
  minify: !options.watch,
  esbuildPlugins: [react18Plugin()],
}));
