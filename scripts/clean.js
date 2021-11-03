#!/usr/bin/env node
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));

const pwd = process.argv[2] ?? process.env.INIT_CWD ?? process.env.PWD;
const distDir = process.env.npm_package_distDir ?? 'dist';

const dist = pwd && `${pwd}/${distDir}`;
const deps = pwd && `${pwd}/node_modules`;

(async () => {
  await rimraf(dist);
  await rimraf(deps);
})();
