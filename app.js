// Qustion1
var positiveInteger = prompt("Enter Any Positive Integer");
var numberPositiveInteger = parseInt(positiveInteger);
if(numberPositiveInteger < 0){
    alert("You Put a wrong value");
    document.getElementById("q-1number").innerText = "you have put a wrong value";
}
else{
   document.getElementById("q-1number").innerText = "Number: "+numberPositiveInteger;

    var roundPositiveInteger = Math.round(positiveInteger);
    document.getElementById("q-1round").innerText = "\n"+" Round Off : "+roundPositiveInteger;
    
    var floorPositiveInteger = Math.floor(positiveInteger);
    document.getElementById("q-1floor").innerText = "\n"+"Floor : "+floorPositiveInteger;
    
    var ceilPositiveInteger = Math.ceil(positiveInteger);
    document.getElementById("q-1ceil").innerText = "\n"+"Ceil : "+ceilPositiveInteger;
}


// Qustion2
var negativeInteger = prompt("Enter Any Negative Integer");
var numberNegativeInteger = parseInt(negativeInteger);
if(numberNegativeInteger > 0){
    alert("You Put a wrong value");
    document.getElementById("q-2number").innerText = "you have put a wrong value";
}
else{
    document.getElementById("q-2number").innerText = "Number: "+numberNegativeInteger;


    var roundNegativeInteger = Math.round(negativeInteger);
    document.getElementById("q-2round").innerText = "\n"+" Round Off : "+roundNegativeInteger;
    
    var floorNegativeInteger = Math.floor(negativeInteger);
    document.getElementById("q-2floor").innerText = "\n"+"Floor : "+floorNegativeInteger;
    
    var ceilNegativeInteger = Math.ceil(negativeInteger );
    document.getElementById("q-2ceil").innerText = "\n"+"Ceil : "+ceilNegativeInteger;
}

// Qustion 3
var positiveFloatingNumber = prompt("Enter Positive Float Number.");
var floatPositiveFloatingNumber = parseFloat(positiveFloatingNumber);
if(floatPositiveFloatingNumber < 0){
    alert("You put a wrong value");
    document.getElementById("q-3number").innerText = "you have put a wrong value";
}
else{
    document.getElementById("q-3number").innerText = "Number: "+floatPositiveFloatingNumber;

    var roundPositiveFloatingNumber = Math.round(positiveFloatingNumber);
    document.getElementById("q-3round").innerText = "\n"+" Round Off : "+roundPositiveFloatingNumber;
    
    var floorPositiveFloatingNumber = Math.floor(positiveFloatingNumber);
    document.getElementById("q-3floor").innerText = "\n"+"Floor : "+floorPositiveFloatingNumber;
    
    var ceilPositiveFloatingNumber = Math.ceil(positiveFloatingNumber );
    document.getElementById("q-3ceil").innerText = "\n"+"Ceil : "+ceilPositiveFloatingNumber;
}


// Qustion 4
var negativeFloatingNumber = prompt("Enter Negative Float Number.");
var floatNegativeFloatingNumber = parseFloat(negativeFloatingNumber);
if(floatNegativeFloatingNumber > 0){
    alert("you Put a wrong value");
    document.getElementById("q-4number").innerText = "you have put a wrong value";
}
else{
    document.getElementById("q-4number").innerText = "Number: "+floatNegativeFloatingNumber;

    var roundNegativeFloatingNumber = Math.round(negativeFloatingNumber);
    document.getElementById("q-4round").innerText = "\n"+" Round Off : "+roundNegativeFloatingNumber;
    
    var floorNegativeFloatingNumber = Math.floor(negativeFloatingNumber);
    document.getElementById("q-4floor").innerText = "\n"+"Floor : "+floorNegativeFloatingNumber;
    
    var ceilNegativeFloatingNumber = Math.ceil(negativeFloatingNumber);
    document.getElementById("q-4ceil").innerText = "\n"+"Ceil : "+ceilNegativeFloatingNumber;
}

// Qustion 5
var absolute1 = prompt("Enter Negative Number");
absolute1 = parseInt(absolute1);
if(absolute1 > 0){
    alert("you Put a wrong value");
    document.getElementById("q-5absolute").innerText = "you have put a wrong value";
}
else{
    var absolute = Math.abs(absolute1);
    document.getElementById("q-5absolute").innerText = "Absolute Value Of "+absolute1+" Is "+absolute;
}

// Qustion 6
var dice = Math.round(Math.random()*6);
document.getElementById("q-6dice").innerText = "Random Dice Value: "+dice;

// Qustion 7
var tossOptions = ["Tails","Heads"];
var toss = Math.round(Math.random()*2);
if(toss === 1){
    document.getElementById("q-7toss").innerText = "Random Coin Value: "+tossOptions[0];
}
else{
    document.getElementById("q-7toss").innerText = "Random Coin Value: "+tossOptions[1];
}
// Qustion 8
document.getElementById("q-8rn1-100").innerText = "Random Number Between 1 and 100 is: "+Math.round(Math.random()*100);

// Qustion 9
var weight = prompt("Enter Your Weight In Kg");
var weight = parseFloat(weight);
if(weight < 0){
    alert("You put a wrong value");
    document.getElementById("q-9weight").innerText = "Wrong value";
}
else{
    document.getElementById("q-9weight").innerText = "Your Weight Is: "+weight+"Kilograms";
}


// Qustion 10
var guess = Math.round(Math.random()*10);
var userGuess = prompt("Enter Any Number Between 1 and 10");
userGuess = parseInt(userGuess);
if(guess === userGuess){
    alert("Congratulation");
}
else{
    alert("Try Again");
}

// Qustion 11
var time = new Date();
document.getElementById("q-11time").innerText = time;

// Qustion 12
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow = new Date();
var month = rightNow.getMonth();
document.getElementById("q-12month").innerText = "Current Month "+months[month];

// Qustion 13
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var rightNow2 = new Date();
var day = rightNow2.getDay();
document.getElementById("q-13day").innerText = "Today Is "+days[day].slice(0,3);

// Qustion 14
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var rightNow2 = new Date();
var day = rightNow2.getDay();
if(day === 0 || day === days.length-1){
    document.getElementById("q-14fun").innerText = "Today Is Fun Day";
}
else{
    document.getElementById("q-14fun").innerText = "Today Is Not Fun Day";
}

// Qustion 15
var rightNow2 = new Date();
var date = rightNow2.getDate();
if(date < 16){
    document.getElementById("q-15day").innerText = "First Fifteen days Of Month";
}
else{
    document.getElementById("q-15day").innerText = "Last Fifteen days Of Month";
}
document.write("<br/>");

// Question 16
document.write("<h2>Question 16</h2>");
var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin);

document.write("<br/>");
// Question 17

var todayDate = new Date();
var time2 = todayDate.getHours();
if(time2 >= 12 && time2 <= 23){
    document.getElementById("q-17am").innerText = "It's PM";
}
else{
    document.getElementById("q-17am").innerText = "It's AM";
}

// Question 18
var laterDate = new Date();
laterDate.setDate(30);
laterDate.setHours(00,00,00);
laterDate.setFullYear(2020,11,31);
document.getElementById("q-18").innerText = laterDate;

// Question 19
var date1 = new Date();
var date2 = new Date("Jun 18, 2015");
var timeDifference = Math.abs(date2 - date1)/1000;

var dayDifference = Math.floor(timeDifference / (60 * 60 * 24));

document.getElementById("q-19").innerText = dayDifference + " days have passed since 1st Ramadan in 2015";

// Question 21
document.write("<br/>");
var time3 = new Date();
document.getElementById("q-21a").innerText = "Current Time: "+time3;
document.write("<br/>");
time3.setHours(time3.getHours() - 1);
document.getElementById("q-21b").innerText = "1 Hour ago it was: "+time3;

// Question 22
var time4 = new Date();
document.getElementById("q-22a").innerText = "Current Time: "+time4;
time4.setFullYear(time4.getFullYear() - 100);
document.getElementById("q-22b").innerText = "100 Years Ago : "+time4;

// Question 23
var birthYear = prompt("Enter Your Age");
var time5 = new Date();
time5.setFullYear(time5.getFullYear() - birthYear);
document.getElementById("q-23a").innerText = "Your Age Is: "+birthYear;
document.getElementById("q-23b").innerText = "your Birth Year : "+time5.getFullYear();

// Question 24
var numberOfUnits = 450;
var chargesPerUnit = 14;
var surcharge = 500;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var customerName = prompt("Enter Customer Name:");
var time6 = new Date();
console.log();
document.getElementById("q-24name").innerText = customerName;
document.getElementById("q-24month").innerText = months[time6.getMonth()];
document.getElementById("q-24units").innerText = numberOfUnits;
document.getElementById("q-24perunit").innerText = chargesPerUnit;
document.getElementById("q-24dd").innerText = time6.getDate()+" - "+time6.getMonth()+" - "+time6.getFullYear();
document.getElementById("wdd").innerText = netAmountPayable;
document.getElementById("q-24surcharge").innerText = surcharge;
document.getElementById("q-24dd2").innerText = time6.setDate(time6.getDate() - 3)+ " - " + time6.getMonth()+" - "+time6.getFullYear();
document.getElementById("q-24add").innerText = netAmountPayable + surcharge;
