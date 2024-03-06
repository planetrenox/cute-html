import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        { file: 'index.cjs.js', format: 'cjs' },
        { file: 'index.esm.js', format: 'es' }
    ],
    plugins: [
        resolve()
    ]
};
