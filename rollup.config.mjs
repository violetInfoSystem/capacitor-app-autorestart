import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts', // your TS entry file
    output: [
      {
        file: 'dist/plugin.cjs.js', // CommonJS for Capacitor
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/plugin.js', // ESM
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [resolve(), typescript({ tsconfig: './tsconfig.json' })]
  }
];
