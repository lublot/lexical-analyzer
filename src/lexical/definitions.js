/**
 * This file contains the grammar definitions
 * 
 */
module.exports = {
  reserved: [
    "var",
    "function",
    "const",
    "typedef",
    "struct",
    "extends",
    "procedure",
    "start",
    "return",
    "if",
    "else",
    "then",
    "while",
    "read",
    "print",
    "int",
    "real",
    "boolean",
    "string",
    "true",
    "false",
    "global",
    "local"
  ],
  numbers: new RegExp(/^(-)?(\s)*\d(\d)*(.\d(\d)*)?$/),
  identifier: new RegExp(/^([a-z]|[A-Z])(\d|[a-z]|[A-Z]|_)*$/),
  delimiters: [";", ",", "(", ")", "[", "]", "{", "}", "."],
  arithmetic: ["+", "-", "*", "/", "++", "--"],
  relational: ["!=", "==", "<", "<=", ">", ">=", "="],
  logical: ["!", "&&", "||"],
  digit: new RegExp(/^\d$/),
  letter: new RegExp(/^([a-z]|[A-Z])$/),
  blockComment: new RegExp(/\/[*]([^*]|([*][^/]))*[*]+\//, 'g'),
  strings: new RegExp(/^"(?:[^"\\]|\\.)*"$/),
};
