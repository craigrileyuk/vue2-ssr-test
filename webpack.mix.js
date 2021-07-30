const mix = require('laravel-mix');
require('laravel-mix-merge-manifest')
require('laravel-mix-transpile-node-modules')

mix
    .js('resources/js/app.js', 'public/js')
    .vue()
    .mergeManifest();

mix.transpileNodeModules();