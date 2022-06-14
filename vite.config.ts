import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { baseURL } from "./src/config/config";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
	},
	server: {
		proxy: {
			"/a.jpeg": {
				target: `${baseURL}/a.jpeg`,
				changeOrigin: true, // 域名
				secure: true, // ssl
				// rewrite: path => path.replace(/^\/ss/, ""),
			},
		},
	},
});
