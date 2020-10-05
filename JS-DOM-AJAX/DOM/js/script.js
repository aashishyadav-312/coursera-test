// DOM MAINPULATION

// console.log(document.getElementById("title"));	-----  Result :null. Cuz script is provided in the head tag and by head that id is not defined yet.
// console.log(document.getElementById("title"));		// It will print h1 cuz script is at last in the body.

// console.log(document instanceof HTMLDocument);

// ---------------------------------------------------------------------------------------------------------------------------//


// function sayHello() {
// 	var name = document.getElementById("name").value;
// 	var message = "<h2>Hello " + name + "!</h2>";

// 	// document.getElementById("content").textContent = message;

// 	document.getElementById("content").innerHTML = message; 

// 	if (name === "student") {
// 		var title = document.querySelector("#title").textContent;	// textContent is pass by Value so when title is changed you have to again make them equal.
// 		title += " & Lovin' it";
// 		document.querySelector("h1").textContent = title;
// 	}

// }

// querySelector - IT is a method which allows us to select elements exactly how we select for css properties. E.g: If we 
// select "h1" in it it will extract that h1 element only(if more than one then it chooses first only. to choose all use 
// queryAllSelector (something like this)). 
// Note: there is a # sign before element id in queryselector because it's like how we select for css properties.


// ---------------------------------------------------------------------------------------------------------------------------//


// // Event Handeling
// document.addEventListener("DOMContentLoaded", 			//it loads everything before showing anything on webpage. and we can put our script at the head.
// 	function(event) {										//event is passed into every event handler.

// 		function sayHello(event) {
// 			console.log(this);
// 			this.textContent = "Said it!"
// 			var name = document.getElementById("name").value;
// 			var message = "<h2>Hello " + name + "!</h2>";


// 			document.getElementById("content").innerHTML = message; 

// 			if (name === "student") {
// 				var title = document.querySelector("#title").textContent;	// textContent is pass by Value so when title is changed you have to again make them equal.
// 				title += " & Lovin' it";
// 				document.querySelector("h1").textContent = title;
// 			}

// 		}

// 		// Unobtrusive event binding
			
// 			document.querySelector("button").addEventListener("click", sayHello);		//we dont use() after sayHello because we are using function value/expression here.
// });
// 	// document.querySelector("button").onclick = sayHello;		// no () here also after sayHello because we are just providing value here & not calling function.


// ---------------------------------------------------------------------------------------------------------------------------//


// // *** The event argument ***

// document.addEventListener("DOMContentLoaded", 			
// 	function(event) {										

// 		function sayHello(event) {
// 			console.log(event);

// 			this.textContent = "Said it!"
// 			var name = document.getElementById("name").value;
// 			var message = "<h2>Hello " + name + "!</h2>";


// 			document.getElementById("content").innerHTML = message; 

// 			if (name === "student") {
// 				var title = document.querySelector("#title").textContent;	
// 				title += " & Lovin' it";
// 				document.querySelector("h1").textContent = title;
// 			}

// 		}

// 		// Unobtrusive event binding
			
// 			document.querySelector("button").addEventListener("click", sayHello);	

// 			document.querySelector("body").addEventListener("mousemove",
// 				function(event) {
// 					if (event.shiftKey === true) {

// 						console.log("x: " + event.clientX);
// 						console.log("y: " + event.clientY);
// 					}
// 				} 
// 			);	


// 	}
// );
	

// ---------------------------------------------------------------------------------------------------------------------------//



