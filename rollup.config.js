// import resolve from 'rollup-plugin-node-resolve';
// import url from 'rollup-plugin-url';
// import pkg from './package.json';
// import postcss from 'rollup-plugin-postcss';
// import json from 'rollup-plugin-json';
// import commonjs from 'rollup-plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// import { terser } from 'rollup-plugin-terser';

// const external = [
//   ...Object.keys(pkg.dependencies),
//   ...Object.keys(pkg.peerDependencies),
// ];

// const plugins = [
//   typescript(),
//   // typescript({
//   //   typescript: require('typescript'),
//   //   clean: true,
//   //   // verbosity: 3,
//   // }),
//   terser(),
//   url({
//     include: ['**/*.svg', '**/*.png'],
//   }),
//   postcss({
//     modules: true,
//   }),
//   json(),
//   resolve(),
//   commonjs({
//     include: './node_modules/**',
//   }),
// ];

// const createConfig = {
//   input: './src/index.tsx',
//   output: [
//     {
//       file: pkg.main,
//       format: 'cjs',
//     },
//     {
//       file: pkg.module,
//       format: 'es',
//     },
//   ],
//   external,
//   plugins,
// };
// const configs = createConfig;

// export default configs;

import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external';
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import multi from '@rollup/plugin-multi-entry';
// import pkg from './package.json';
import copy from 'rollup-plugin-copy';
// import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const files = [
  './src/Avatar/index.tsx',
  './src/Badge/index.tsx',
  './src/Balloon/index.tsx',
  './src/Button/Button.tsx',
  './src/Button/index.tsx',
  './src/Button/LinkButton.tsx',
  './src/Checkbox/index.tsx',
  './src/Container/index.tsx',
  './src/Cursor/index.tsx',
  './src/Dialog/index.tsx',
  './src/Dropdown/index.tsx',
  './src/Icon/Icon.tsx',
  './src/Icon/index.tsx',
  './src/Icon/PixelArts.tsx',
  './src/Icon/ReactionIcon.tsx',
  './src/Icon/SNSIcon.tsx',
  './src/Input/index.tsx',
  './src/List/index.tsx',
  './src/Progress/index.tsx',
  './src/Radio/index.tsx',
  './src/Table/index.tsx',
  './src/Tag/index.tsx',
  './src/Text/index.tsx',
  './src/Textarea/index.tsx',
];

const plugins = [
  multi(),
  // external(),
  // postcss({
  //   modules: true,
  // }),
  // postcss({
  //   plugins: [],
  // }),
  postcss({
    extract: false,
  }),
  url(),
  svgr(),
  resolve(),
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true,
  }),
  commonjs(),
  // multi(),
  terser(),
  copy({
    targets: [
      { src: './src/assets/nes.css', dest: './lib/assets' },
      { src: './package.json', dest: './lib' },
    ],
  }),
];

const createConfig = filename => ({
  input: filename,
  output: [
    {
      file: filename.replace('./src', './lib').replace('.tsx', '.js'),
      format: 'esm',
      // name: 'example-rollup-library',
    },
    // {
    //   file: `./${filename}.cjs.js`,
    //   format: 'cjs',
    //   name: 'example-rollup-library',
    // },
    // {
    //   file: `./${filename}.esm.js`,
    //   format: 'es',
    // },
  ],
  plugins,
});

const configs = files.map(filename => createConfig(filename));
export default configs;
// export default {
//   // input: files,
//   // output: {
//   //   format: 'esm',
//   //   dir: 'lib',
//   // },
//   files.map((targetFile) => {
//     input: targetFile,
//     output: {
//       file: targetFile.replace(/^src/, 'lib').replace(/tsx?$/, 'js'),
//       format: 'esm',
//     },
//   }),
//   plugins: [

//   ],
// };
