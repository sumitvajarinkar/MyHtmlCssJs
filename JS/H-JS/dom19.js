console.log('Hello, shortcut for console.log is log + Enter');
console.log('Hello, shortcut for document.getElementById is debid + Enter');

let a = 'rahul'
a = undefined
if(a != undefined){
    throw new Error('Not undefined');
}
else{
    console.log('Undefined');
    
}

try {
    // null.console
    // qwerrttyts
    console.log('In try');
    functionok()
    // document.getElementById('');
    
    
    
} catch (error) {
    console.log('In error');
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log('Finally run this');
     
}