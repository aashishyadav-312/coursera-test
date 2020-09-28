// sayHello()
// sayHi()

// Result : In both cases "Hello Yadav" and "Hi Yadav" will print .
//In index.html, the first thing that the browser loads, is script1.js. And script.1.js declares a 
// variable name. And this name variable is sitting in the global scope and is also declares a function called sayHello 
// again, in the global scope. So, when this executes, it will take whatever name variable is sitting in the global scope. 
// Now, right after script one, we're loading script2.js, which again declares name in the global scope. Which basically 
// means that at this point right here, my name = "Aashish" gets overwritten with name = "Yadav". And then we declare 
// another function which is a little bit of a different name that says Hi, sayHi, and that is the one that prints out 
// Hi + name. So by the time we get to sayHello, our name variable has actually changed from Aashish to Yadav. And what's 
// going on is that one script is stepping on the toes of the other, basically. 



aashishGreeter.sayHello();
yadavGreeter.sayHi();


// Imediately Invoked Function Expression (IIFE)
(function (name) {
	console.log("Hello " + name);
})("Coursera");