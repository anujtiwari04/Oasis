import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

const s3PdfResolverPlugin = () => {
  const S3_BUCKET_URL = "https://oasissecurities.s3.us-east-1.amazonaws.com";

  return {
    name: "s3-pdf-resolver",
    enforce: "pre" as const,
    resolveId(source: string) {
      if (source.endsWith(".pdf")) {
        return source;
      }
      return null;
    },
    load(id: string) {
      if (id.endsWith(".pdf")) {
        // Map imports like '@/assets/Notice of EGM.pdf' to 'assets/Notice of EGM.pdf'
        let relativePath = id;
        if (relativePath.startsWith("@/")) {
          relativePath = relativePath.slice(2);
        }
        if (relativePath.startsWith("/assets/")) {
          relativePath = relativePath.slice(1);
        }
        const srcAssetsIdx = relativePath.indexOf("src/assets/");
        if (srcAssetsIdx !== -1) {
          relativePath = relativePath.slice(srcAssetsIdx + 4);
        }
        
        // Clean multiple slashes
        relativePath = relativePath.replace(/\/+/g, "/");

        const s3Url = `${S3_BUCKET_URL}/${relativePath}`;
        return `export default ${JSON.stringify(encodeURI(s3Url))};`;
      }
      return null;
    },
  };
};

export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      s3PdfResolverPlugin(),
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
        server: { entry: "server" },
      }),
      viteReact(),
      // Only run Nitro during build to match original preset configuration
      command === "build" &&
        nitro({
          preset: "vercel",
          output: {
            dir: ".vercel/output",
            publicDir: ".vercel/output/static",
            serverDir: ".vercel/output/functions/__server.func",
          },
        }),
    ].filter(Boolean),
  };
});
