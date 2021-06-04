
let regex = /sumit/
// Metacharacter symbols
// regex = /^sumlo/ // ^ means expression will match if string starts with
// regex = /it$/ // $ means expression will match if string ends with
// regex = /u.it/ // . means expression will match with one char
// regex = /s*it/ // * means expression will match with 0 or more char
// regex = /sum?it?/ // ? means expression will option
regex = /sum\*t/ // \* means expression will match


let str = 'sum*t is sumit'
let result = regex.exec(str)
console.log('The result from exec is', result);

if(regex.test(str))
    console.log(`The string ${str} match expression ${regex.source}`);
else
    console.log(`The string ${str} doesn't match expression ${regex.source}`);
    