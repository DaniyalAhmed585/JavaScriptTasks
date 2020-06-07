// TASK 01
// var a = prompt("Enter any number: ");
// document.write("Result:<br>".fontsize(4));
// document.write("The value of a is: " + a + "<br>........................................<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br><br>");
// document.write("The value of a-- is: " + a-- + "<br>Now the value of a is: " + a);


// TASK 02
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a + "<br>b is " + b + "<br>");
// document.write("result is " + result);
//1 - 0 + 1 + 1;                         


// TASK 03
// var name = prompt("Enter your name:");
// alert("Pleasure to have you (" + name + ") on our website :)");


// TASK 04
// var number = prompt("Enter a number:");
// for(var i = 1; i <= 10; i++){
//     if(number != 0){
//         document.write(number + " x " + i + " = " + (number*i) + "<br>");
//     }
//     else{
//         document.write(5 + " x " + i + " = " + (5*i) + "<br>");
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
