grammar  comando;

comando
    : prefijoComando nombreComando argumento*
    ;

prefijoComando
    : '!' | '/' | '#' | '&'
    ;

nombreComando
    : palabra
    ;

argumento
    : argumentoPosicional
    | argumentoOpcional
    ;

argumentoPosicional
    : texto
    | palabra
    | numero
    ;

argumentoOpcional
    : '--' nombreArgumento ('=' valorArgumento)?
    | '-' letra valorArgumento?
    ;

nombreArgumento
    : palabra
    ;

valorArgumento
    : texto
    | numero
    | palabra
    ;

texto
    : TEXTO
    ;

palabra
    : PALABRA
    ;

numero
    : NUMERO
    ;

letra
    : LETRA
    ;

// Tokens lexer

TEXTO
    : '"' (~["])* '"'
    ;

PALABRA
    : [a-zA-ZáéíóúñÑ] [a-zA-Z0-9_áéíóúñÑ]*
    ;

NUMERO
    : [0-9]+ ('.' [0-9]+)?
    ;

LETRA
    : [a-zA-Z]
    ;


    
