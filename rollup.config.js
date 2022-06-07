/**
 * # Sample Rollup for Fabric
 */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import css from 'rollup-plugin-import-css';
// import json from '@rollup/plugin-json';
// import url from '@rollup/plugin-url';

function handleWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('semantic-ui-react')) return;
  warn(warning);
}

const builds = [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'assets/index.js',
        format: 'iife',
        name: 'BitFaucet'
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js'],
        preferBuiltins: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      css(),
      // json(),
      // url(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        presets: ['@babel/preset-react']
      })
    ],
    onwarn: handleWarning
  }
];

export default builds;
