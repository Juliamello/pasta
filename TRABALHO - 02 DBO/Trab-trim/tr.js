function trimLeft(text){
    let a = (text.trimLeft());
    return a;
}
console.assert(trimLeft('    abc  ') === 'abc  ');
console.assert(trimLeft('    com espaco  ') === 'com espaco  ');
console.assert(trimLeft('\r \n \t com carriage return, line feed, tab e espaco  \n') === 'com carriage return, line feed, tab e espaco  \n');

function trimRight(text){
let a = (text.trimRight());
return a; 
}
console.assert(trimRight('    abc  ') === '    abc');
console.assert(trimRight('    abc \r \n \t ') === '    abc');

function trim(text){
    let a = (text.trim());
    return a;
}
console.assert(trim('    abc  ') === 'abc');
console.assert(trim('\n \r\t      abc\n\r \t        ') === 'abc');
console.assert(trim('\n \r\t      com espaco\n\r \t        ') === 'com espaco');

console.assert(trimLeft('') === '');
console.assert(trimRight('') === '');
console.assert(trim('') === '');
console.assert(trimLeft('   \n\t\r  \n\r ') === '');
console.assert(trimRight('   \n\t\r  \n\r ') === '');
console.assert(trim('   \n\t\r  \n\r ') === '');
console.assert(trim('                                                                  a                                                                                       ') === 'a');