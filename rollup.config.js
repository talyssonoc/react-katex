import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const minify = !!process.env.MINIFY;

const plugins = [resolve({ extensions: ['.js', '.jsx'] }), babel()];
let dest = 'dist/react-katex.js';

if(minify) {
  dest = 'dist/react-katex.min.js';
  plugins.push(uglify());
}

export default {
  entry: 'src/index.js',
  format: 'umd',
  dest,
  plugins,
  moduleName: 'ReactKaTeX',
  external: ['react', 'prop-types', 'katex'],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    katex: 'katex'
  }
};
