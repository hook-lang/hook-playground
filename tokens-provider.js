
function getTokensProvider() {
  return {
    defaultToken: 'invalid',

    keywords: [
        'as',
        'break',
        'continue',
        'del',
        'do',
        'else',
        'false',
        'fn',
        'for',
        'foreach',
        'from',
        'if',
        'if!',
        'in',
        'import',
        'let',
        'loop',
        'match',
        'mut',
        'nil',
        'return',
        'struct',
        'true',
        'while',
        'while!',
    ],

    typeKeywords: [],

    operators: [
        '..',
        '.',
        '|=',
        '||',
        '|',
        '^=',
        '^',
        '&=',
        '&&',
        '&',
        '=>',
        '==',
        '=',
        '!=',
        '!',
        '>=',
        '>>=',
        '>>',
        '>',
        '<=',
        '<<=',
        '<<',
        '<',
        '+=',
        '++',
        '+',
        '-=',
        '--',
        '-',
        '*=',
        '*',
        '/=',
        '/',
        '~/=',
        '~/',
        '~',
        '%=',
        '%',
    ],

    symbols: /[=><!~?:&|+\-*/^%]+/,

    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                },
            ],

            [/[A-Z][\w$]*/, 'type.identifier'], // to show class names nicely

            // whitespace
            {include: '@whitespace'},

            // delimiters and operators
            [/[{}()[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                },
            ],

            // numbers
            [/\d*\.\d+([eE][-+]?\d+)?[fFdD]?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, 'number.hex'],
            [/0o[0-7_]*[0-7][Ll]?/, 'number.octal'],
            [/0[bB][0-1_]*[0-1][Ll]?/, 'number.binary'],
            [/\d+/, 'number'],

            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],

            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
            [/c?\\\\.*$/, 'string'],
            [/c?"/, 'string', '@string'],

            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid'],
        ],

        whitespace: [
            [/[ \r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\+/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
            [/\t/, 'comment.invalid'],
        ],

        comment: [
            [/[^/*]+/, 'comment'],
            [/\/\*/, 'comment.invalid'],
            [/[/*]/, 'comment'],
        ],

        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop'],
        ],
    },
  };
}
