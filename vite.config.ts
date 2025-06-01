import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import glob from 'glob';

// Dynamically generate entry points
// Excludes stories, tests, and main index.d.ts/react-app-env.d.ts
const entryPoints = glob.sync('src/**/index.{ts,tsx}', {
  ignore: ['src/__tests__/**', 'src/stories/**', 'src/index.d.ts', 'src/react-app-env.d.ts'],
});

// Create an object for build.lib.entry
const libEntry: Record<string, string> = {};
entryPoints.forEach(point => {
  // Convert 'src/Button/index.ts' to 'Button/index'
  // or 'src/Avatar/index.tsx' to 'Avatar/index'
  const entryName = point
    .replace(/^src\//, '')
    .replace(/\.(ts|tsx)$/, '');
  libEntry[entryName] = resolve(__dirname, point);
});

// If there's a main export point (e.g. src/index.ts or src/index.tsx)
// add it. For this library, it seems components are meant to be deep imported.
// However, a general library export might still be useful.
// For now, we will stick to component-level entries only as per current structure.

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    libInjectCss(),
    dts({
      outDir: 'lib', // Output d.ts files to the main lib directory
      // include: ['src'], // Default is 'src', so this is optional
      exclude: ['src/__tests__/**', 'src/stories/**'],
      copyDtsFiles: true, // This helps if preserveModules doesn't perfectly handle .d.ts
      // Alternatively, for more control if d.ts files are alongside js:
      // outDir: 'lib/types',
      // insertTypesEntry: true, // Might be useful if a single entry point was used
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/nes.css',
          dest: 'assets' // Copies to lib/assets/nes.css
        },
        // You could also copy other assets like fonts or images if needed
        // {
        //   src: 'src/assets/fonts/*',
        //   dest: 'assets/fonts'
        // }
      ]
    })
  ],
  build: {
    outDir: 'lib',
    sourcemap: true,
    lib: {
      entry: libEntry,
      name: 'NesComponents', // Global variable name for UMD/IIFE builds (not used for ES)
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps (not strictly necessary for ES format)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime'
        },
        // Configure asset file names - useful for CSS or other assets
        // This example ensures a single CSS file if not using CSS modules extensively
        // For CSS modules, libInjectCss handles injection.
        // This might primarily affect global CSS like nes.css if it were bundled instead of copied.
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css' && Object.keys(libEntry).length === 1) {
            // If only one entry point and it produces style.css, name it after the library
            return 'nes-components.css';
          }
          // Preserve original asset names otherwise, especially for fonts, images.
          // Vite usually places them in an 'assets' subfolder by default.
          return assetInfo.name ?? "unknown-asset";
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  // Optional: Alias for easier imports within the project if needed
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src'),
  //   },
  // },
});
