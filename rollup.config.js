import rollupNodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  plugins: [
    rollupNodeResolve({
      mainFields: ['jsnext:main', 'module', 'main'],
    }),
  ],
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
}
