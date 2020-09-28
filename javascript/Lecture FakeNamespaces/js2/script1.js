// var name = "Aashish";
// function sayHello () {
// 	console.log("Hello " + name);
// }


// var aashishGreeter = {};
// aashishGreeter.name = "Aashish";
// aashishGreeter.sayHello = function () {
// 	console.log("Hello " + aashishGreeter.name);
// }



(function(window) {
	var aashishGreeter = {};
	aashishGreeter.name = "Aashish";
	var greeting = "Hello ";
	aashishGreeter.sayHello = function () {
		console.log(greeting + aashishGreeter.name);
	}

	
	window.aashishGreeter = aashishGreeter;

}) (window);