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
import nodeGlobals from 'rollup-plugin-node-globals';
import nodePolyfills from 'rollup-plugin-polyfill-node';

function handleWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('fomantic-ui-react')) return;
  warn(warning);
}

const builds = [
  {
    input: 'scripts/index.js',
    output: [
      {
        file: 'assets/index.js',
        format: 'iife',
        name: 'BitFaucet',
        globals: {
          '@fabric/core/types/actor': 'Actor',
          '@fabric/http': 'FabricComponent',
          // 'buffer': 'buffer',
          // 'crypto': 'crypto',
          'lodash.merge': 'merge',
          'fomantic-ui-react': 'fomanticUIReact',
          'react': 'React',
          'react-dom/client': 'client',
          'react-redux': 'reactRedux',
        }
      }
    ],
    external: [
      '@fabric/core/types/actor',
      '@fabric/core/types/environment',
      '@fabric/http',
      'lodash.merge',
      'react',
      'react-redux',
      'react-dom/client',
      'fomantic-ui-react',
    ],
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
    },
    plugins: [
      css(),
      // json(),
      // url(),
      nodeGlobals(),
      nodePolyfills(),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      }),
      commonjs({
        include: 'node_modules/**',
        transformMixedEsModules: true,
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer']
        }
      }),
      resolve({
        extensions: ['.js'],
        preferBuiltins: true,
        browser: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
    ],
    onwarn: handleWarning,
    context: 'null',
    moduleContext: 'null',
  }
];

export default builds;
