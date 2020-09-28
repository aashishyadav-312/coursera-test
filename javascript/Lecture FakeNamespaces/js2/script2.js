// var name = "Yadav";
// function sayHi() {
// 	console.log("Hi " + name);
// }


// var yadavGreeter = {};
// yadavGreeter.name = "Yadav";
// yadavGreeter.sayHi = function() {
// 	console.log("Hi " + yadavGreeter.name);
// }



(function (window) {
	var yadavGreeter = {};
	yadavGreeter.name = "Yadav";
	var greeting = "Hi ";
	yadavGreeter.sayHi = function() {
		console.log(greeting + yadavGreeter.name);
	}

	window.yadavGreeter = yadavGreeter;
	
}) (window);