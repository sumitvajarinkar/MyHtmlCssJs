// const regex = /^s/i;

// character sets

let regex = /s[a-z]mit/
regex = /s[^gf]it[um]/
regex = /\w umit/
const str =  'sumit'

let result = regex.exec(str)
console.log('The result from exec is', result);

if(regex.test(str))
    console.log(`The string ${str} match expression ${regex.source}`);
else
    console.log(`The string ${str} doesn't match expression ${regex.source}`);
