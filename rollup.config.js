/**
 * # Sample Rollup for Fabric
 */
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-import-css';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
// import semanticUIReact from 'semantic-ui-react';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';

import handleRollupWarning from './functions/handleRollupWarning';

const plugins = [
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  css(),
  json(),
  url(),
  nodeGlobals(),
  nodePolyfills({
    // crypto: true
  }),
  resolve({
    browser: true,
    extensions: ['.jsx'],
    preferBuiltins: false
  }),
  typescript({target: "es6"}),
  alias({
    entries: [
      { find: 'shim', replacement: 'use-sync-external-store/shim'}
      // , { find: 'objectAssign', replacement: 'object-assign'}
    ]
  }),
  commonjs({
    include: 'node_modules/**',
    transformMixedEsModules: true
  }),
  babel({ 
    presets: [
      // '@babel/env', 
      '@babel/preset-react'],
    babelHelpers: 'runtime',
    // exclude: ['**/node_modules/**']
  })
];


export default [
  {
    input: 'scripts/index.js',
    output: {
      file: 'assets/index.js',
      format: 'iife',
      name: 'Faucet',
      globals: {
        'use-sync-external-store/shim': 'shim',
        // 'react': 'React',
        // 'react-redux': 'reactRedux',
        'react-router-dom': 'reactRouterDom',
        'react/jsx-runtime': 'jsxRuntime',
        '@reduxjs/toolkit': 'toolkit',
        // 'react-dom/client': 'client',
        'semantic-ui-react': 'semanticUIReact',
        'bitcoinjs-lib': 'bitcoin',
        'object-assign': 'objectAssign'
      }
    },
    external: [
      'react/jsx-runtime',
      'react-router-dom',
      '@reduxjs/toolkit',
      'semantic-ui-react',
      'bitcoinjs-lib',
      'lodash-es',
      'use-sync-external-store/shim',
      'use-sync-external-store/shim/with-selector',
      'object-assign'
    ],
    plugins,
    onwarn: handleRollupWarning,
    context: 'null',
    moduleContext: 'null'
  }
];
