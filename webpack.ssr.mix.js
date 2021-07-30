const path = require('path')
const mix = require('laravel-mix')
const webpackNodeExternals = require('webpack-node-externals')

require('laravel-mix-merge-manifest');

mix
    .js('resources/js/ssr.js', 'public/js')
    .vue()
    .alias({ '@': path.resolve('resources/js') })
    .webpackConfig({
        target: 'node',
        externals: [webpackNodeExternals({
            allowlist: [/^@dsmdesign/, /^primevue/]
        })],
    })
    .mergeManifest();