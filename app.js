// CHAPTER 01

// TASK 01
// alert("We are pleased to have you on our site : )");


// TASK 02
// var name = prompt("Enter your name:");
// var password = prompt("Enter password:");
// alert("Error! Please enter a valid password.");


// TASK 03
// alert("Welcome to JS Land...\nHappy Coding!");


// TASK 04
// alert("Welcome to JS Land...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")


// TASK 05
// function showAlert() {
//     alert ("Liking my site?");
//   }









// CHAPTER 02

// TASK 01
// var userName;


// TASK 02
// var myName = "Daniyal Ahmed Khan";


// TASK 03
// var message = "Hello World!";
// alert(message);


// TASK 04
// var studentName = prompt("Enter your name:");
// var studentAge = prompt("Enter your age:");
// var studentDegree = prompt("Enter your degree/certification:");
// alert(studentName);
// alert(studentAge);
// alert(studentDegree);


// TASK 05
// var a = prompt("Enter any word: ");
// while(a.length != 0){
//     alert(a);
//     a = a.slice(0, a.length - 1);
// }


// TASK 06
// var email = "daniyalahmed1010@gmail.com";
// alert("My email address is " + email);


// task 07
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book " + book);


// TASK 08
// document.write("<br>Yah! I can write HTML content through JavaScript");


// TASK 09
// var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(<br>design);









// CHAPTER 03

// TASK 01
// var age = 20;
// alert("I am " + age + " years old.");


// TASK 02


// TASK 03
// var birthYear = 1999;
// document.write("<br>My birth year is " + birthYear + ".<br>" + "Data type of my declared variable is number.");   


// TASK 04
// var visitorName = prompt("Enter your name:");
// var productTitle = prompt("What product have you ordered?");
// var quantity = prompt("In how much quantity?");
// document.write("<br><b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + " (s) on XYZ Clothing store.")









// CHAPTER 04

// TASK 01
// var a , b , c;


// TASK 02
//var name , password1 , $userInput , _myBook , userAlert ;  // LEGAL VARIABLE NAMES 
// var 1 , 1A , a b , "a"a" , prompt ;  // ILLEGAL VARIABLE NAMES


// TASK 03
// document.write("<br><b> Rules for naming JS variables </b> <br><br><br>");
// document.write("Variable names can only contain letters, numbers, $ and _ . For example : $my_1stVariable <br>");
// document.write("Variable must begin with a letter, $ or _ . For example : $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS keywords");










// CHAPTER 05

// TASK 01 AND TASK 02
// var inp1 = prompt("Enter 1st number:");
// var inp2 = prompt("Enter 2nd number:");
// // var sum = +inp1 + +inp2; // This is correct.
// var sum = Number(inp1) + Number(inp2); // This is also correct.
// var difference = Number(inp1) - Number(inp2);
// var product = Number(inp1) * Number(inp2);
// var division = Number(inp1) / Number(inp2);
// var modulus = Number(inp1) % Number(inp2);
// document.write("<br>Sum of " + inp1 + " and " + inp2 + " is " + sum + "<br>");
// document.write("Difference of " + inp1 + " and " + inp2 + " is " + difference + "<br>");
// document.write("Product of " + inp1 + " and " + inp2 + " is " + product + "<br>");
// document.write("Quotient of " + inp1 + " and " + inp2 + " is " + division + "<br>");
// document.write("Modulus of " + inp1 + " and " + inp2 + " is " + modulus);


// TASK 03
// var number;
// document.write("<br>Value after variable declaration is " + number + "<br>");
// number = 5;
// document.write("Initial value: " + number + "<br>");
// number++;
// document.write("Value after increment is " + number + "<br>");
// number = number + 7;
// document.write("Value after addition is " + number + "<br>");
// number--;
// document.write("Value after decrement is " + number + "<br>");
// number = number % 3;
// document.write("The remainder is: " + number);


// TASK 04
// var ticketCost = Number(600);
// ticketCost = ticketCost * 5;
// document.write("<br>Total cost to buy 5 tickets to a movie is " + ticketCost + "PKR");


// TASK 05
// var number = Number(prompt("Enter any number:"));
// document.write("<br><b>Table of " + number + "</b><br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + "x" + i + "=" + number * i + "<br>");
// }


// TASK 06
// var celsiusTemp = 25;
// var farenheit = (celsiusTemp * (9 / 5) + 32);                    
// document.write("<br>" + celsiusTemp + "<sup>o</sup>" + "C is " + farenheit + "<sup>o</sup>" + "F" + "<br>");    
// farenheit = 70;
// celsiusTemp = (farenheit - 32) * (5 / 9);
// document.write(farenheit + "<sup>o</sup>" + "F is " + celsiusTemp + "<sup>o</sup>" + "C");    


// TASK 07
// var itemprice1 = 650;
// var itemprice2 = 100;
// var itemquantity1 = 3;
// var itemquantity2 = 7;
// var charges = 100;
// document.write("<br><b>Shopping Cart</b>".fontsize(7) + "<br><br>");
// var a = document.write("Price of item 1 is " + itemprice1 + "<br>" + "Quantity of item 1 is " + itemquantity1 + "<br>" +
// "Price of item 2 is " + itemprice2 + "<br>" + "Quantity of item 2 is " + itemquantity2 + "<br>" + "Shipping Chagres " + charges);
// var totalCost = ((itemprice1 * itemquantity1) + (itemprice2 * itemquantity2)) + charges;
// document.write("<br><br>Total cost of your order is " + totalCost);


// TASK 08
// var totalmarks = 980;                             
// var marksObtained = 804;
// var percentage = (804 * 100) / 980;
// document.write("<br><b>Marks Sheet</b>".fontsize(7) + "<br><br><br>");
// document.write("Total marks: " + totalmarks);
// document.write("<br>Marks obtained: " + marksObtained);
// document.write("<br>Percentage: " + percentage + "%");


// TASK 09
// var dollars = 10;
// var riyals = 25;
// var pkr = (dollars * 104.80) + (riyals * 28);
// document.write("<br><b>Currency in PKR</b><br><br>".fontsize(5));
// document.write("Total currency in PKR: " + pkr);


// TASK 10
// var number = 5;
// number = ( (number + 5) * 10 ) / 2;
// document.write("<br>" + number);


// TASK 11
// var currentyear = 2020;
// var birthyear = 1999;
// var age = currentyear - birthyear;
// document.write("<br><b>Age Calculator</b><br><br>".fontsize(6));
// document.write("Current Year: " + currentyear + "<br>Birth Year: " + birthyear + "<br>");
// document.write("You are either " + age + " or " + (age - 1) + " years old.");  


// TASK 12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * Math.pow(radius,2);
// document.write("<br><b>The Geometrizer</b><br><br>".fontsize(6));
// document.write("Radius of a Circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br>"); 


// TASK 13
// var favSnack = "Lays";
// var myAge = 20;
// var maxAge = 70;
// var amountPerDay = 3;
// var totalSnack = (maxAge - myAge) * amountPerDay;
// document.write("<br><b>The Lifetime Supply Calculator</b><br><br>".fontsize(6));
// document.write("Favourite Snack: " + favSnack + "<br>");                  
// document.write("Current Age: " + myAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snacks Per Day: " + amountPerDay + "<br>");
// document.write("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + maxAge);  









// CHAPTER 06 - 09

// TASK 01
// var a = prompt("Enter any number: ");
// document.write("<br>Result:<br>".fontsize(4));
// document.write("The value of a is: " + a + "<br>........................................<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a-- is: " + a-- + "<br>Now the value of a is: " + a);


// TASK 02
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br>a is " + a + "<br>b is " + b + "<br>");
// document.write("result is " + result);
// 1 - 0 + 1 + 1;                         


// TASK 03
// var name = prompt("Enter your name:");
// alert("Pleasure to have you (" + name + ") on our website :)");


// TASK 04
// var number = prompt("Enter a number:");
// for(var i = 1; i <= 10; i++){
//     if(number != 0){
//         document.write("<br>" + number + " x " + i + " = " + (number*i) + "<br>");
//     }
//     else{
//         document.write("<br>" + 5 + " x " + i + " = " + (5*i) + "<br>");
//     }
// }               


// TASK 05
// function getData() {

//     var subj1 = prompt("Enter name of subject 1:");
//     var subj2 = prompt("Enter name of subject 2:");
//     var subj3 = prompt("Enter name of subject 3:");

//     var totalEachSubj = 100;

//     var obtMarksSubj1 = prompt("Enter obtained marks of subject 1:");
//     var obtMarksSubj2 = prompt("Enter obtained marks of subject 2:");
//     var obtMarksSubj3 = prompt("Enter obtained marks of subject 3:");

//     var per1 = obtMarksSubj1 % totalEachSubj;
//     var per2 = obtMarksSubj2 % totalEachSubj;
//     var per3 = obtMarksSubj3 % totalEachSubj;

//     document.getElementById("a1").innerHTML = subj1;
//     document.getElementById("a2").innerHTML = totalEachSubj;
//     document.getElementById("a3").innerHTML = obtMarksSubj1;
//     document.getElementById("a4").innerHTML = per1 + "%";

//     document.getElementById("b1").innerHTML = subj2;
//     document.getElementById("b2").innerHTML = totalEachSubj;
//     document.getElementById("b3").innerHTML = obtMarksSubj2;
//     document.getElementById("b4").innerHTML = per2 + "%";

//     document.getElementById("c1").innerHTML = subj3;
//     document.getElementById("c2").innerHTML = totalEachSubj;
//     document.getElementById("c3").innerHTML = obtMarksSubj3;
//     document.getElementById("c4").innerHTML = per3 + "%";

//     var totalObtMarks = 0;
//     var table = document.getElementById("table").getElementsByTagName('td');
//     for(var i = 1; i < table.length; i++){
//         if(table[i].className == 'count-me'){
//             totalObtMarks += parseInt(table[i].innerHTML);
//         }
//     }

//     document.getElementById("d2").innerHTML = totalEachSubj * 3;
//     document.getElementById("d3").innerHTML = totalObtMarks;
//     document.getElementById("d4").innerHTML = ((totalObtMarks * 100) / parseInt(document.getElementById("d2").innerHTML)) + "%";
// }









// CHAPTER 09 - 11

// TASK 01
// var city = prompt("Enter any city name:");
// if(city == "karachi" || city == "Karachi"){
//     alert("Welcome to city of lights");
// }               


// TASK 02
// var gender = prompt("Enter your gender:");
// if (gender == "male" || gender == "Male"){
//     alert("Good Morning Sir");
// }                             
// else if (gender == "female" || gender == "Female"){
//     alert("Good Morning Ma'am");
// }


// TASK 03
// var trafficLightSignal = prompt("Enter traffic light color:");
// if (trafficLightSignal == "Red" || trafficLightSignal == "red"){
//     alert("Must Stop");
// }                      
// else if (trafficLightSignal == "Yellow" || trafficLightSignal == "yellow"){
//     alert("Ready to move");
// }                  
// else if (trafficLightSignal == "Green" || trafficLightSignal == "green"){
//     alert("Move now");
// }


// TASK 04
// var fuel = prompt("How many litres of petrol is in your car?");
// if(fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }       


// TASK 05
// var a = 4;
// if(++a === 5){
//     alert("Given condition for variable a is true");
// } //CONDITION IS TRUE                              

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// } //CONDITION IF FALSE

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } //CONDITION IS FALSE
// if (c === 13){
// alert("condition 2 is true");
// } //CONDITION IS TRUE
// if (++c < 14){
// alert("condition 3 is true");
// } //CONDITION IS FALSE
// if(c === 14){
// alert("condition 4 is true");
// } //CONDITION IS TRUE

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } //CONDITION IS TRUE

// if (true) {
//     alert("True");
// } //THIS CONDITION IS TRUE
// if (false) {
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// } //CONDITION IS TRUE


// TASK 06
// var marksObtSubj1 = prompt("Enter the marks obtained in subject 1:");
// var marksObtSubj2 = prompt("Enter the marks obtained in subject 2:");
// var marksObtSubj3 = prompt("Enter the marks obtained in subject 3:");  
// var totalMarksObt = +marksObtSubj1 + +marksObtSubj2 + +marksObtSubj3;
// var totalMarks = 300;
// var percentage = (totalMarksObt * 100) / totalMarks;
// var grade , remarks;
// if(percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if(percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<br><b>Marks Sheet<b><br><br>".fontsize(5));
// document.write("Total Marks : " + totalMarks + "<br>Marks Obtained : " + totalMarksObt + "<br>");
// document.write("Percentage : " + percentage + "<br>Grade : " + grade + "<br>Remarks : " + remarks);


// TASK 07
// var number = 6;
// var guessNumber = prompt("Guess the secret number:");
// if (guessNumber == number){
//     alert("Bingo! Correct Answer");
// }                                  
// else if ((+guessNumber + 1) == number){
//     alert("Close enough to the correct answer");
// }      


// TASK 08
// var number = prompt("Enter any number:");
// if ((number % 3) == 0){
//     alert("Entered number is divisible by 3");
// }          
// else{
//     alert("Entered number is not divisible by 3");
// }


// TASK 09
// var number = prompt("Enter any number:");
// if((number % 2) == 0){
//     alert("Entered number is even number");
// }                                        
// else{
//     alert("Entered number is odd number");
// }


// TASK 10
// var temp = prompt("Enter current temperature");
// if(temp > 40){
//     alert("It is too hot outside");
// }                                        
// else if(temp > 30){
//     alert("The weather today is normal");
// }
// else if(temp > 20){
//     alert("Today's weather is cool");
// }
// else if(temp > 10){
//     alert("OMG! Today's weather is so cool");
// }


// TASK 11
// var firstNumber = prompt("Enter first number");
// var secondNumber = prompt("Enter second number");    
// var operator = prompt("What operation you want to perform on these numbers?");
// var result;
// if (operator == "+"){
//     result = +firstNumber + +secondNumber;
// }         
// else if (operator == "-"){
//     result = firstNumber - secondNumber;
// }                          
// else if (operator == "*"){
//     result = firstNumber * secondNumber;
// }
// else if (operator == "/"){
//     result = firstNumber / secondNumber;
// }
// else if (operator == "%"){
//     result = firstNumber % secondNumber;
// }
// alert("Result is " + result);        









// CHAPTER 12 - 13

// TASK 01
// var char = prompt("Enter a character:");
// if(!isNaN(char * 1)){
//     alert("It is a numeric character");
// }
// else if(char == char.toUpperCase()){
//     alert("It is an upper case character");
// }
// else if(char == char.toLowerCase()){
//     alert("It is a lower case character");
// }


// TASK 02
// var num1 = parseInt(prompt("Enter first integer"));
// var num2 = parseInt(prompt("Enter second integer"));
// if(num1 > num2){
//     alert(num1 + " is larger");
// }        
// else if(num2 > num1){
//     alert(num2 + " is larger");
// }          
// else if(num1 === num2){
//     alert("Both are equal");
// }


// TASK 03
// var number = parseInt(prompt("Enter a number"));
// if(number > 0){
//     alert("Entered number is positive");
// }                                  
// else if(number < 0){
//     alert("Entered number is negative");
// }      
// else{
//     alert("Entered number is zero");
// }


// TASK 04
// var char = prompt("Enter a character");
// char = char.charAt(0).toLowerCase();
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//     alert("TRUE");
// }                 
// else{
//     alert("FALSE");
// } 


// TASK 05
// var correctPassword = "qwerty"
// var userPassword = prompt("Enter your password:");
// while (userPassword == 0) {
//     userPassword = prompt("Please enter your password");
// }
// if (correctPassword == userPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }


// TASK 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }


// TASK 07
// var time = parseInt(prompt("Enter time (IN 24 HOURS FORMAT)"));
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//      alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }









// CHAPTER 14 - 16

// TASK 01
// var studentName = [];


// TASK 02
// var studentName = {};


// TASK 03
// var stringsArray = ["pet" , "cat" , "dog"];


// TASK 04
// var numberArray = [12 , 14 , 124];


// TASK 05
// var booleanArray = [true , false];


// TASK 06
// var mixedArray = [1 , "hello" , false];


// TASK 07
// var eduPakistan = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// document.write("<br>Qualifications:<br><br>");
// for (var i = 0; i < eduPakistan.length; i++) {
//     document.write((+i + 1) + ") " + eduPakistan[i] + "<br>");
// }


// TASK 08
// var studentName = [];
// var studentScore = [];
// var totalMarks = 500;
// for (var i = 0; i < 3; i++) {
//     studentName[i] = prompt("Enter student " + (+i + 1) + " name:");
// }
// for (var i = 0; i < 3; i++) {
//     studentScore[i] = prompt("Enter student " + (+i + 1) + " score:");
// }
// for (var i = 0; i < 3; i++) {
//     document.write("Score of " + studentName[i] + " is " + studentScore[i] + ". Percentage: " + 
//     ((studentScore[i] * 100) / totalMarks) + "%<br>");
// }


// TASK 09
// var colorNames = ["red", "green", "blue", "black"];
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>");
// }

// function addColorBegin() {
//     colorNames.unshift(prompt("What color do you want to add to the begining?"));
//     document.write("<br><br>Updated Array:<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// function addColorEnd() {
//     colorNames.push(prompt("What color do you want to add at the end?"));
//     document.write("<br><br>Updated Array:<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// colorNames.unshift("purple", "brown");
// document.write("<br><br>Updated Array (Added two colors in the begining):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// colorNames.shift();
// document.write("<br><br>Updated Array (Removed first color from the begining):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// colorNames.pop();
// document.write("<br><br>Updated Array (Removed last color from the end):<br>".fontsize(6));
// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
// }

// function addColorIndex() {
//     var addColorIndex = prompt("At which index do you want to add color?");
//     var addColorName = prompt("Enter the color name:");
//     colorNames.splice(addColorIndex, 0, addColorName);
//     document.write("<br><br>Updated Array (Added desired color at the desired index):<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }

// function removeColorIndex() {
//     var removeColorIndex = prompt("At which index do you want to delete color?");
//     var removeColorName = prompt("How many colors do you want to delete?");
//     colorNames.splice(removeColorIndex, removeColorName);
//     document.write("<br><br>Updated Array (Added desired color at the desired index):<br>".fontsize(6));
//     for (var i = 0; i < colorNames.length; i++) {
//         document.write("<br>" + (+i + 1) + ") " + colorNames[i] + "<br>")
//     }
// }


// TASK 10
// var studentScore = [320, 230, 480, 120];
// document.write("<br>Scores of students: " + studentScore);
// studentScore.sort();
// document.write("<br>Ordered scores of students: " + studentScore);


// TASK 11
// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cityNames.slice(2, 5);
// document.write("<br>Cities List: " + cityNames);
// document.write("<br>Selected cities list: " + selectedCities);


// TASK 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("<br>Array: " + arr);
// arr = arr.join(" ");
// document.write("<br>String: " + arr);


// TASK 13
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<br>Devices:<br>")
// document.write(devices + "<br><br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("Out:<br>" + devices[i] + "<br>");
// }


// TASK 14
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<br>Devices:<br>")
// document.write(devices + "<br><br>");
// for (var i = devices.length - 1; i >= 0; i--) {
//     document.write("Out:<br>" + devices[i] + "<br>");
// }


// TASK 15
// var phoneManufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var select = document.getElementById("selectBrand"); 
// for(var i = 0; i < phoneManufac.length; i++) {
//     var opt = phoneManufac[i];
//     document.getElementById("selectBrand").innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
// }










// CHAPTER 17 - 20

// TASK 01
// var items = [[1, 2], [3, 4], [5, 6]];
// console.log(items[0][0]); // 1
// console.log(items[0][1]); // 2
// console.log(items[1][0]); // 3
// console.log(items[1][1]); // 4
// console.log(items);


// TASK 02
// var items = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var row = 0; row < 3; row++) {
//     for (var col = 0; col < 4; col++) {
//         document.write(items[row][col] + " ");
//     }
//     document.write("<br>");
// }


// TASK 03
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// TASK 04
// var tableNumber = +prompt("Enter a number to show it's multiplication table:");
// var tableLength = +prompt("Enter length multiplication table:");
// document.write("Multiplication table of " + tableNumber + "<br>");
// document.write("Length " + tableLength + "<br><br>")
// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }


// TASK 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// TASK 06
// document.write("Counting:<br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + " ");
// }
// document.write("<br><br>Reverse Counting:<br>");
// for (var i = 15; i > 0; i--) {
//     document.write(i + " ");
// }
// document.write("<br><br>Even Numbers:<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " ");
//     }
// }
// document.write("<br><br>Odd Numbers:<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write(i + " ");
//     }
// }
// document.write("<br><br>Series:<br>");
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "k ");
//     }
// }


// TASK 07
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] == searchItem) {
//         document.write(searchItem + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if (i == bakeryItems.length) {
//     document.write("We are sorry. " + searchItem + " is <b>not available</b> in our bakery.");
// }


// TASK 08
// var array = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + " ");
// }
// document.write("<br><br>The largest number is ");
// var largestNumber = array[0];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > largestNumber) {
//         largestNumber = array[i];
//     }
// }
// document.write(largestNumber);


// TASK 09
// var array = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + " ");
// }
// document.write("<br><br>The smallest number is ");
// var smallestNumber = array[0];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] < smallestNumber) {
//         smallestNumber = array[i];
//     }
// }
// document.write(smallestNumber);


// TASK 10
// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + ", ");
//     }
// }