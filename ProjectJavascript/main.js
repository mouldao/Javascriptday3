//console.log("test run")

//function todaysTime() {
//    //createing a variablke that initailies the day and returns it in the numner format
//   var currentDate = new Date();
//    var day = currentDate.getDay();
//    var hours = currentDate.getHours();
//    var min = currentDate.getMinutes();
//    var sec = currentDate.getSeconds();
//var clock= "Current Time "+ hours + ":" + min + ":" + sec;
//    var fullDay
//    switch (day){
//        case 0:
//        fullDay = "Sunday";
//        break;
//        case 1:
//        fullDay = "Monday";
//        break;
//        case 2:
//        fullDay = "Tuesday";
//        break;
//        case 3:
//        fullDay = "Wendesday";
//        break;
//        case 4:
//        fullDay = "Thursday";
//        break;
//        case 5:
//        fullDay = "Friday";
//        break;
//        case 6:
//        fullDay = "Saturday";
//        break;
//        default:
//        fullDay = "No valid day";
//        break;
//                }
// document.getElementById("display").innerHTML = "Today is " + fullDay + ", " + clock
//}
//
//setInterval(todaysTime,10);

// ----------------------- ARRAYS ----------------------------
//
//var students = new Array(3) // this allows you to set length before adding any items
//var students1 = ["student1","student 2","student 3"]
//console.log(students);
//console.log(students1);
//
//var randomDataTypes =[
//    1, // number
//    false, //boolean
//    "name", //string
//    {name:"studentName",//object
//    _class:"Javascript"},
//
//function(_class){ //function
//    var greeting = "Good Morning ";
//    console.log(greeting+ _class)
//}
//]
// console.log(randomDataTypes);
// console.log(randomDataTypes[4](randomDataTypes[3]._class));


// --------------------- question 1 arrays --------------------------

var eventListener = document.getElementById("button1").addEventListener('click', function1)
function function1() {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value
    var input3 = document.getElementById("input3").value
    var array1 = [input1,input2,input3]
    document.getElementById("display1").innerHTML= array1
}


// --------------------- question 2 arrays --------------------------
var eventListener2 = document.getElementById("button2").addEventListener('click', function2);
var array1 = [];
function function2() {
    var input4 = document.getElementById("input4").value
   array1.push(input4);

    document.getElementById("display2").innerHTML= array1 + " " + array1.length
}

// --------------------- question 3 arrays --------------------------
var array3 = ["adam","paul","jacob","aj","henry"]

document.getElementById("display3").innerHTML = array3 + "<br>"
array3.shift()
document.getElementById("display3").innerHTML += array3 + "<br>"
array3.unshift("water")
document.getElementById("display3").innerHTML += array3+ "<br>"
array3.pop()
document.getElementById("display3").innerHTML += array3+ "<br>"
array3.push("peter")
document.getElementById("display3").innerHTML += array3+ "<br>"
// --------------------- question 4 arrays --------------------------

var array4 = ["adam","paul","jacob","aj","henry"]

array4.splice(1,0,["jake","John"])
document.getElementById("display4").innerHTML += array4 + "<br>"
// --------------------- question 5 arrays --------------------------
array5 = ["adam","Paul","AJ","Peter","sarah","john","Mary","harry","Jane","John"]
for(var i=0; i < array5.length;i++){
    document.getElementById("display5").innerHTML += array5[i] + "<br>"
}
// --------------------- question 6 arrays --------------------------
var eventListener6 = document.getElementById("button6").addEventListener('click', function6)
function function6() {
var countries = ["England","Ghana","France","Italy","IndIndia","Mexico","Poland","Russia","China","Greece","Egypt"]

var indexUserInput = countries.indexOf(document.getElementById("input6").value)
if(indexUserInput!= -1){
 document.getElementById("display6").innerHTML = "Index " + indexUserInput + ". the country " + countries[indexUserInput] + " is in the array"} else {
     document.getElementById("display6").innerHTML ="The country " + document.getElementById("input6").value + " is not in the array"
}

}
