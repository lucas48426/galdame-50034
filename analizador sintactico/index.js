const antlr4 = require('antlr4');
const ComandoLexer = require('./ComandoLexer').ComandoLexer;
const ComandoParser = require('./ComandoParser').ComandoParser;

function main() {
  // Texto de ejemplo que quieres analizar:
  const input = '!hola --opcion=valor 123 "un texto"';

  // Crear un flujo de entrada con el texto
  const chars = new antlr4.InputStream(input);

  // Crear lexer con el flujo de entrada
  const lexer = new ComandoLexer(chars);

  // Crear un buffer de tokens desde el lexer
  const tokens = new antlr4.CommonTokenStream(lexer);

  // Crear el parser con el buffer de tokens
  const parser = new ComandoParser(tokens);

  // Llamar a la regla inicial del parser
  const tree = parser.comando();

  // Mostrar el árbol sintáctico
  console.log(tree.toStringTree(parser.ruleNames));
}

// Ejecutar main y capturar errores
try {
  main();
} catch (e) {
  console.error('Error:', e);
}


