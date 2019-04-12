# inline-import.macro

[![Downloads](https://img.shields.io/npm/dw/inline-import.macro.svg?style=flat-square)](https://www.npmjs.com/package/inline-import.macro)
[![Version](https://img.shields.io/npm/v/inline-import.macro.svg?style=flat-square)](https://www.npmjs.com/package/inline-import.macro)
[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

## The Problem

You want use a veriable once inline, but you have to import it at top of the file.

## The Solution

This is a [babel-plugin-macro](https://github.com/kentcdodds/babel-plugin-macros) which allows you import file inline.

## Installation
This module is distributed via npm which is bundled with node and should be installed as one of your project's `devDependencies`:

```
npm install --save-dev inline-import.macro
```

## Usage

Once you've configured [babel-plugin-macro](https://github.com/kentcdodds/babel-plugin-macros)  you can import/require inline-import.macro.

Here are a few before/after examples:

```js
import importPage from 'inline-import.macro';
const routes = [
  importPage('./aa'),
  importPage('./bb'),
  importPage('./cc'),
  importPage('./dd'),
];
```

```js
import _dd from "./dd";
import _cc from "./cc";
import _bb from "./bb";
import _aa from "./aa";
const routes = [
  _aa,
  _bb,
  _cc,
  _dd]
;
```