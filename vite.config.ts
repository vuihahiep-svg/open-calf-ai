// @lovable.dev/vite-tanstack-config bundles TanStack Start + Tailwind + paths + React.
// `cloudflare: false` + Nitro is required for Vercel (see https://vercel.com/docs/frameworks/full-stack/tanstack-start).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Custom SSR entry stays in src/server.ts (error wrapper). Wrangler/Cloudflare builds are disabled.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [nitro()],
});
