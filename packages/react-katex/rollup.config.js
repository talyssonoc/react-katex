import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const minify = !!process.env.MINIFY;

const plugins = [babel({ babelHelpers: 'bundled' })];
let outputFile = 'dist/react-katex.js';

if (minify) {
  outputFile = 'dist/react-katex.min.js';
  plugins.push(terser());
}

export default {
  input: 'src/index.js',
  output: {
    file: outputFile,
    format: 'umd',
    name: 'ReactKaTeX',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      katex: 'katex',
    },
  },
  external: ['react', 'prop-types', 'katex'],
  plugins,
};
