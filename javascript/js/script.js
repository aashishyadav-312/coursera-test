var message = "in global scope";
console.log("global: message ="+ message);

var a = function () {
	var message = "inside a";
	console.log("a: message =" + message);
	b();
}

function b () {
	console.log("b:message = "+ message);
}

a();


//--------------------------------------------------------------------------------------------------------------------------//


// should be undefined
var x;
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x=5;
if (x==undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined");
}


//--------------------------------------------------------------------------------------------------------------------------//


// ****** String Concatination
var string = "Hello";
string += " World";
// string = string + "World";
console.log(string + "!");


// ****Regular math operators: +,-,*,/
console.log((5+4)/3);
console.log(undefined/5);  //NaN: Not a number
function test1 (a) {
	console.log(a/5);	   //NaN: cuz a is undefined
}
test1();


// **** Equality ****
var x=4, y=4;
if (x==y) {
	console.log("x='4' is equal to y='4'");				//It will print
}

x="4";	//even though it is a string javascript automatically converts it into integer when comparing it.
if (x == y) {
	console.log("x=4 is equal to y=4");					//It will print
}


// ***Strict Equality *** 	It does not change a string into integer(etc) when comapring. It has Strict rules. 
if (x===y) {
	console.log("Strict:x=4 is equal to y=4");
}
else {
	console.log("Strict: x=4 is NOT equal to y=4");		//This will print
}


// *** If Statement (all false) ***
if (false || null || undefined || "" || 0 || NaN) {		//all these statements are false and if statements will not execute.
	console.log("This line wont ever execute");	
}
else {
	console.log("All false");		//It wil print.
}

// *** If statement (all true) ***
if (true && "hello" && 1 && -1 && "false") {			//all these statements will result in true and if will execute.
	console.log("All true");
}


// *** Best practice for {} style ***
// Curly braces on the same or next line...
// Is it just a style?
function a()
{
	return
	{
		name: "Aashish"
	};
}

function b() {
	return {
		name: "Yadav"
	};
}

console.log(a());								//Result : undefined
console.log(b());								//It will print

// OBSERVATION : Curly braces should start on the same line becausse if not javascript automatically
// assumes a semi-colon(;) at the end of line, which happened in first case after return keyword and
// name did not returned to the console.


// *** For Loop ***
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum += i;
}
console.log("sum of 0 through 9 is : " + sum);


//--------------------------------------------------------------------------------------------------------------------------//


//*** Default values ***
function orderChickenWith(sideDish) {
	sideDish = sideDish || "whatever!";		//It means if sideDish is false(i.e. undefined) then next statement will execute.
//		    	(Alternate)					// If sideDish is undefined it get coheresed into a boolean value.
//		if(sideDish === undefined) {		// and OR statement will check if 1st state. is true if not then go to 2nd one.
//			sideDish = "Whatever!";
//		}
	console.log("chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();


//--------------------------------------------------------------------------------------------------------------------------//


// *** Object Creation ***
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";

console.log(company);
console.log("Company CEO first name is: " + company.ceo.firstName);

console.log(company["name"]);
console.log(company["ceo"]["firstName"]);

company["Stock of company"] = 110;			//The [] operator and . operator are almost same but in [] we can also use 
console.log(company["Stock of company"]);	// name with spaces and other characters.
//		  Alternate
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);


//*** Better way of Object Literal ***
var netflix = {
	name: "Netflix",				//comma after each name-value pair in an Object to separate it except last one.
	ceo : {							// Sub-Object.
		firstName: "Reed",
		favColor: "Red"
	},
	"stock of company" : 150
};

console.log(netflix);


//-------------------------------------------------------DOUBT---------------------------------------------------------------//


// *** Functions ***
// Functions are First-Class Data Types
// Function are Objects
function multiply(x,y) {
	return x*y;
}
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.version);

//Function Factory
function makeMultiplier(multiplier) {
	var Func = function (x) {
		return multiplier*x;
	};
	return Func;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));
var fudu = makeMultiplier(5);
console.log(fudu);


// Passing functions as arguments
function doOperation(x,operation) {
	return operation(x);
}

var result = doOperation(5,multiplyBy3);
console.log(result);
var result = doOperation(100,doubleAll);
console.log(result);


//--------------------------------------------------------------------------------------------------------------------------//


// *** Passing/copying variables by Values vs By Reference ***

// Copy by Reference vs by Value
var a=7;
var b=a;
console.log("a: "+ a);
console.log("b: "+ b);

b=5;
console.log("after b update:");
console.log("a: "+ a);
console.log("b: "+ b);


var a = { x:7 };
var b = a;
console.log(a);
console.log(b);

b.x=5;
console.log("after b.x update");
console.log(a);
console.log(b);


// Pass by reference vs pass by value
function changePrimitive(primValue) {
	console.log("in changePrimitive...");
	console.log("before");
	console.log(primValue);

	primValue= 5;
	console.log("after");
	console.log(primValue);
}
var value =7;
changePrimitive(value);									// primValue = value
console.log("after changePrimitive, org value:");
console.log(value);


function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before");
	console.log(objValue);

	objValue.x= 5;
	console.log("after");
	console.log(objValue);
}
value = {x:7};
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);


//--------------------------------------------------------------------------------------------------------------------------//


// Function Constructors
function Circle (radius) {
	this.radius = radius;						//Function Constructor cannot return anything.

	// this.getArea = function() {
	// 	return Math.PI * Math.pow(this.radius,2);
	// };
}
Circle.prototype.getArea = function() {			//Prototype function. It is only declared once unlike the above one.
	return Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(10);					//new Object()
console.log(myCircle);
console.log(myCircle.getArea());				//Parenthesis after getArea cuz it is a fuction we are invoking.

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());


//--------------------------------------------------------------------------------------------------------------------------//


// *** Object Literals and "this" ***
var literalCircle = {
	radius : 10,

	getArea: function () {
		var self = this;						// self refers to this and this here refers to parent object.
		console.log(this);

		var increasedRadius = function () {
			self.radius = 20;					//here this keyword refers to global object rather than parent 
		};										// because here inner-functtion of a function refers to global obj.
		increasedRadius();
		console.log(this.radius);			//in object literal functions(methods), this refers to parent function.

		return Math.PI*Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());


//--------------------------------------------------------------------------------------------------------------------------//


// *** Arrays***
var array = new Array();
array[0] = "Yadav";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello " + name);
};
array[3] = { course : "HTML, CSS, JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = [{name : "ash"}, "Aashish", "Kirti"];
console.log(names);

for (var i = 0; i < names.length; i++) {
	console.log("HEllo " + names[i]);
}

names[100] = "Bhai";					//101th place is Bhai and so 97 places are blank(undefined).
for (var i = 0; i < names.length; i++) {
	console.log("HEllo " + names[i]);
}


var names2 = ["Aashish", "Yadav", "KKModi"];
var myObj = {
	name: "Ash",
	course : "Web Development",
	platform : "Coursera",
	ceo : {fName : "Aashish", lName : "Yadav"}
};

for(var prop in myObj) {				//prop-properties. To show everything inside the object.
	console.log(prop + ": " + myObj[prop]);
}

for (var name in names2){
	console.log("Hello " + names2[name]);
}	

names2.greeting = "Hi!";
console.log(names2);
for (var name in names2){
	console.log("Hello " + names2[name]);
}	


//--------------------------------------------------------------------------------------------------------------------------//


// **** Closures ****
function makeMultiplier (multiplier) {
	// var multiplier =2;
	function b() {
		console.log("multiplier is : "+ multiplier);
	}
	b();

	return (
		function (x) {					
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll);
console.log(doubleAll(10));				//It has its own execution environment.

//Beacuse of closures only, the doubleAll function is able to remember the outer lexical environment i.e. remember who
//multiplier is. Since a function like this returned from inside of this function JavaScript preserves its outer lexical 
// environment memory space for this function, so this function can go ahead and produce what it needs to produce. So the 
// multiplier is something that's still sitting in memory in lexical outside scope of this function.


//--------------------------------------------------------------------------------------------------------------------------//


