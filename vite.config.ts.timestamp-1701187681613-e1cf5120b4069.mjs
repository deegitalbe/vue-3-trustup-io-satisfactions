// vite.config.ts
import { loadEnv, defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import eslint from "file:///app/node_modules/vite-plugin-eslint/dist/index.mjs";
import vue from "file:///app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///app/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      vue(),
      eslint(),
      dts({
        insertTypesEntry: true
      })
    ],
    build: {
      lib: {
        entry: "src/lib/index.ts",
        fileName: "index",
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          }
        }
      },
      sourcemap: true
    },
    server: {
      host: true,
      port: parseInt(process.env.VITE_PORT)
      // This is the port which we will use in docker
    },
    test: {
      browser: {
        enabled: true,
        name: "chrome"
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBsb2FkRW52LCBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGVzbGludCBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIHByb2Nlc3MuZW52ID0geyAuLi5wcm9jZXNzLmVudiwgLi4ubG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKSB9O1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgZXNsaW50KCksXG4gICAgICBkdHMoe1xuICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiBcInNyYy9saWIvaW5kZXgudHNcIixcbiAgICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogW1widnVlXCJdLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5WSVRFX1BPUlQpLCAvLyBUaGlzIGlzIHRoZSBwb3J0IHdoaWNoIHdlIHdpbGwgdXNlIGluIGRvY2tlclxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgYnJvd3Nlcjoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcImNocm9tZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxTQUFTLG9CQUFvQjtBQUN0QyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUdoQixJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUVoRSxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxJQUFJO0FBQUEsUUFDRixrQkFBa0I7QUFBQSxNQUNwQixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsS0FBSztBQUFBLFFBQ2hCLFFBQVE7QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNLFNBQVMsUUFBUSxJQUFJLFNBQVM7QUFBQTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
