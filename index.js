// 1-Create a function that greets you with "Hello there my friend!".


function greeting (){
    console.log("Hello there my friend");
}
greeting();

// 2-Create a function that takes a string as an argument and writes out:
 //"Hello there my friend! You must be [name]!"
 
    function greetingWithName (name){
           console.log(`Hello there my friend! You must be ${name}!`);
         }
        greetingWithName('Sadia Khan');

        // 3-Create a function that takes two numbers as arguments and returns the sum of those two numbers. 
        //Save that sum in a variable and log it to the console.
        
        function sumFunction(number_1, number_2)
        {
     let sum = number_1 + number_2;
     return sum;
 }
 console.log(sumFunction(15, 20));


 // 4-Create a function that takes two numbers as arguments and returns the quotient of those numbers.
 // Save that to variable and log it to the console. Remember that you can't divide with zero. 
 //So a check must be than in order to prevent the calculation if you are trying to divide by zero. 
 //Log an error message to the console if that happens.
 
 function quotientFunction (number_1, number_2)
 {
     if (number_1 !== 0 && number_2 !== 0){
         let quotient = number_1 / number_2;
         return quotient
     } else {
         console.log("You can't divide with zero");
     }
 }
 console.log(quotientFunction(132, 6));
 console.log(quotientFunction(134, 0));

 // 5-Create a function that takes a length and a width of an imaginary box as arguments and return the area of that box.
 // Log a message to the console that describes the area of the box.

 function boxArea (boxLength, boxWidth){
    let area = boxLength * boxWidth;
     console.log(`The area of the box is ${area} square`);
 }
 boxArea(8, 14);

 // 6-Create a function that takes a first name and a last name as arguments.
 // Return a template literals that says: "Hello [firstName] [lastName]! How are you doing?"


let FirstName = "Sadia";
 let lastName = 'Khan';
 function FullNameGreeting (FirstName, lastName){
    greetingMessage = `Hello ${FirstName} ${lastName}! How are you doing?`;
 console.log(greetingMessage);
 }
 FullNameGreeting(FirstName, lastName);

 // 7-Create a function that takes a distance in kilometres as an arguments and returns the distanse in miles. 
 //(The American kind of miles). Save to a variable and log a description of the conversion to the console.

 function convertKilometersToMiles(Kilometers) {
   let Miles = Kilometers * 0.621371;
   console.log(`A ${Kilometers} kilometers distanse is equal to ${Miles} miles`);
 }
 let distanc = 50;
convertKilometersToMiles(distanc);

//8-Create a function that takes a celsius temperature as an argument and returns the temperature in farenheit. 
// Log the result message to the console.

 let Celsius = 18;
let inFahrenheit;
function convertCelsiusToFahrenheit (Celsius){
     inFahrenheit = (Celsius * 9) / 5 + 32;
     console.log(`${Celsius} celsius is equal to ${inFahrenheit} fahrenheit`);
 }
 convertCelsiusToFahrenheit(Celsius);

 // 9-Create a function that takes an array of numbers as an argument. 
 // Return the mean value of all those numbers, save it and log it to the console.
let Array = [2, 8, 10, 15, 20, 25, 30];
function meanValueCalculate(array) {
 let sum = array.reduce((a, b) => a + b, 0)
   let meanValue = sum / array.length;
      return meanValue;
}
 console.log(meanValueCalculate(Array));
