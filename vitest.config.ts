import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from "path";

// Custom plugin for skipping svg imports
const skipSvgImport = () => ({
  name: "load-svg",
  enforce: "pre" as const,
  transform(_: string, id: string) {
    if (id.endsWith(".svg")) {
      return "export default () => {}";
    }
  },
});

export default defineConfig({
  plugins: [react(), svgr(), skipSvgImport()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
