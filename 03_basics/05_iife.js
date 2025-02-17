//Immediateky Invoked Function Expressions(IIFE)

(function() {
    console.log(`DB CONNECTED`);
})(); // it's compulsory to end IIFE fuction with semiColon 

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Sachin'); 