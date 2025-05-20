// Generated from comando.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import comandoListener from './comandoListener.js';
const serializedATN = [4,1,11,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
5,0,28,8,0,10,0,12,0,31,9,0,1,1,1,1,1,2,1,2,1,3,1,3,3,3,39,8,3,1,4,1,4,1,
4,3,4,44,8,4,1,5,1,5,1,5,1,5,3,5,50,8,5,1,5,1,5,1,5,3,5,55,8,5,3,5,57,8,
5,1,6,1,6,1,7,1,7,1,7,3,7,64,8,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,
0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,1,4,70,0,24,1,0,0,0,2,32,1,
0,0,0,4,34,1,0,0,0,6,38,1,0,0,0,8,43,1,0,0,0,10,56,1,0,0,0,12,58,1,0,0,0,
14,63,1,0,0,0,16,65,1,0,0,0,18,67,1,0,0,0,20,69,1,0,0,0,22,71,1,0,0,0,24,
25,3,2,1,0,25,29,3,4,2,0,26,28,3,6,3,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,29,1,0,0,0,32,33,7,0,0,0,33,3,1,0,
0,0,34,35,3,18,9,0,35,5,1,0,0,0,36,39,3,8,4,0,37,39,3,10,5,0,38,36,1,0,0,
0,38,37,1,0,0,0,39,7,1,0,0,0,40,44,3,16,8,0,41,44,3,18,9,0,42,44,3,20,10,
0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,9,1,0,0,0,45,46,5,5,0,0,46,
49,3,12,6,0,47,48,5,6,0,0,48,50,3,14,7,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
57,1,0,0,0,51,52,5,7,0,0,52,54,3,22,11,0,53,55,3,14,7,0,54,53,1,0,0,0,54,
55,1,0,0,0,55,57,1,0,0,0,56,45,1,0,0,0,56,51,1,0,0,0,57,11,1,0,0,0,58,59,
3,18,9,0,59,13,1,0,0,0,60,64,3,16,8,0,61,64,3,20,10,0,62,64,3,18,9,0,63,
60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,15,1,0,0,0,65,66,5,8,0,0,66,17,
1,0,0,0,67,68,5,9,0,0,68,19,1,0,0,0,69,70,5,10,0,0,70,21,1,0,0,0,71,72,5,
11,0,0,72,23,1,0,0,0,7,29,38,43,49,54,56,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class comandoParser extends antlr4.Parser {

    static grammarFileName = "comando.g4";
    static literalNames = [ null, "'!'", "'/'", "'#'", "'&'", "'--'", "'='", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "TEXTO", "PALABRA", "NUMERO", "LETRA" ];
    static ruleNames = [ "comando", "prefijoComando", "nombreComando", "argumento", 
                         "argumentoPosicional", "argumentoOpcional", "nombreArgumento", 
                         "valorArgumento", "texto", "palabra", "numero", 
                         "letra" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = comandoParser.ruleNames;
        this.literalNames = comandoParser.literalNames;
        this.symbolicNames = comandoParser.symbolicNames;
    }



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, comandoParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.prefijoComando();
	        this.state = 25;
	        this.nombreComando();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1952) !== 0)) {
	            this.state = 26;
	            this.argumento();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, comandoParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, comandoParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.palabra();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, comandoParser.RULE_argumento);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.argumentoPosicional();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.argumentoOpcional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, comandoParser.RULE_argumentoPosicional);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.texto();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.palabra();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, comandoParser.RULE_argumentoOpcional);
	    var _la = 0;
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(comandoParser.T__4);
	            this.state = 46;
	            this.nombreArgumento();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 47;
	                this.match(comandoParser.T__5);
	                this.state = 48;
	                this.valorArgumento();
	            }

	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(comandoParser.T__6);
	            this.state = 52;
	            this.letra();
	            this.state = 54;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 53;
	                this.valorArgumento();

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, comandoParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.palabra();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, comandoParser.RULE_valorArgumento);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.texto();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.numero();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.palabra();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, comandoParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(comandoParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	palabra() {
	    let localctx = new PalabraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, comandoParser.RULE_palabra);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(comandoParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, comandoParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(comandoParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letra() {
	    let localctx = new LetraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, comandoParser.RULE_letra);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(comandoParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

comandoParser.EOF = antlr4.Token.EOF;
comandoParser.T__0 = 1;
comandoParser.T__1 = 2;
comandoParser.T__2 = 3;
comandoParser.T__3 = 4;
comandoParser.T__4 = 5;
comandoParser.T__5 = 6;
comandoParser.T__6 = 7;
comandoParser.TEXTO = 8;
comandoParser.PALABRA = 9;
comandoParser.NUMERO = 10;
comandoParser.LETRA = 11;

comandoParser.RULE_comando = 0;
comandoParser.RULE_prefijoComando = 1;
comandoParser.RULE_nombreComando = 2;
comandoParser.RULE_argumento = 3;
comandoParser.RULE_argumentoPosicional = 4;
comandoParser.RULE_argumentoOpcional = 5;
comandoParser.RULE_nombreArgumento = 6;
comandoParser.RULE_valorArgumento = 7;
comandoParser.RULE_texto = 8;
comandoParser.RULE_palabra = 9;
comandoParser.RULE_numero = 10;
comandoParser.RULE_letra = 11;

class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitComando(this);
		}
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_prefijoComando;
    }


	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitPrefijoComando(this);
		}
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_nombreComando;
    }

	palabra() {
	    return this.getTypedRuleContext(PalabraContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitNombreComando(this);
		}
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitArgumento(this);
		}
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_argumentoPosicional;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	palabra() {
	    return this.getTypedRuleContext(PalabraContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterArgumentoPosicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitArgumentoPosicional(this);
		}
	}


}



class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_argumentoOpcional;
    }

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	letra() {
	    return this.getTypedRuleContext(LetraContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterArgumentoOpcional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitArgumentoOpcional(this);
		}
	}


}



class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_nombreArgumento;
    }

	palabra() {
	    return this.getTypedRuleContext(PalabraContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitNombreArgumento(this);
		}
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_valorArgumento;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	palabra() {
	    return this.getTypedRuleContext(PalabraContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterValorArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitValorArgumento(this);
		}
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(comandoParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitTexto(this);
		}
	}


}



class PalabraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_palabra;
    }

	PALABRA() {
	    return this.getToken(comandoParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterPalabra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitPalabra(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(comandoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitNumero(this);
		}
	}


}



class LetraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandoParser.RULE_letra;
    }

	LETRA() {
	    return this.getToken(comandoParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.enterLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandoListener ) {
	        listener.exitLetra(this);
		}
	}


}




comandoParser.ComandoContext = ComandoContext; 
comandoParser.PrefijoComandoContext = PrefijoComandoContext; 
comandoParser.NombreComandoContext = NombreComandoContext; 
comandoParser.ArgumentoContext = ArgumentoContext; 
comandoParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
comandoParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
comandoParser.NombreArgumentoContext = NombreArgumentoContext; 
comandoParser.ValorArgumentoContext = ValorArgumentoContext; 
comandoParser.TextoContext = TextoContext; 
comandoParser.PalabraContext = PalabraContext; 
comandoParser.NumeroContext = NumeroContext; 
comandoParser.LetraContext = LetraContext; 
