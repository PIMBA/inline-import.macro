const { createMacro } = require('babel-plugin-macros');

const getImportSource = (callExpressionPath) => {
  try {
    return path = callExpressionPath.get('arguments')[0].evaluate().value
  } catch (error) {
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`,
    )
  }
}

const macro = ({
  references, state, babel
}) => {
  references.default.forEach(referencePath => {
    const { types: t } = babel;
    const source = getImportSource(referencePath.parentPath);
    const id = referencePath.scope.generateUidIdentifier(source);
    const importNode = t.importDeclaration(
      [t.importDefaultSpecifier(id)],
      t.stringLiteral(source),
    );
    const program = state.file.path;
    program.node.body.unshift(importNode);
    referencePath.parentPath.replaceWith(id);
  });
};

module.exports = createMacro(macro);