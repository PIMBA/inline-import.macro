import inlineImport from './inline-import.macro';

const routes = [
  inlineImport('./aaa'),
  inlineImport('bbb'),
  inlineImport('/ccc'),
];