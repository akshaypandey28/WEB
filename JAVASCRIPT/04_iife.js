//Immediately Invoked Function Expressions

(function chai(){
    //this is called named IIFE
    console.log(`DB CONNECTED`)
}) (); //here semicolon is necessary otherwise the next function doesn't executed


( (name) => {
    //this is called unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('akp')

//and the whole represents how to write two IIFE together 
//semicolon is necessary in writing two IIFE together after writing the fist IIFE