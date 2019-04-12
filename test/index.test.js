const pluginTester = require('babel-plugin-tester');
const plugin = require('babel-plugin-macros');
const fs = require('fs');
const { join } = require('path');

const readCode = (file) => {
  return fs.readFileSync(join(__dirname, file), 'utf-8');
}


pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {filename: __filename},
  tests: [readCode('./code.js')],
});