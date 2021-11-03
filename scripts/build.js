#!/usr/bin/env node
const { promisify } = require('util')
const { promises: fs } = require('fs')
const rimraf = promisify(require('rimraf'))
const mkdirp = require('mkdirp')

const distDir = process.env.npm_package_distDir ?? 'dist'
const pwd = process.env.INIT_CWD ?? process.env.PWD
const dist = pwd && `${pwd}/${distDir}`
const [,,...args] = process.argv
const files = args.length === 0 ? ['index'] : args

;(async () => {
  await rimraf(dist);
  await mkdirp(dist);
  await Promise.all(
    files.map(file => [
      fs.writeFile(`${dist}/${file}.js`, `module.exports = require('../src/${file}.js');`),
      fs.writeFile(`${dist}/${file}.mjs`, `export {default} from './${file}.js';`),
      fs.writeFile(`${dist}/${file}.d.ts`, `export {default} from './${file}.js';`),
    ]).flat()
  )
})()
