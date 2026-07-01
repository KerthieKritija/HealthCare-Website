// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){

menuBtn.onclick=function(){

navLinks.classList.toggle("show");

}

}

// BMI Calculator

function calculateBMI(){

let height=document.getElementById("height").value/100;

let weight=document.getElementById("weight").value;

if(height==""||weight==""){

document.getElementById("bmiResult").innerHTML="Please enter all values.";

return;

}

let bmi=(weight/(height*height)).toFixed(1);

document.getElementById("bmiResult").innerHTML="Your BMI is "+bmi;

}
// Appointment Form Validation

const form = document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let department=document.getElementById("department").value;

let date=document.getElementById("date").value;

let message=document.getElementById("formMessage");

if(name==""||email==""||phone==""||department==""||date==""){

message.style.color="red";

message.innerHTML="Please fill all fields.";

return;

}

message.style.color="green";

message.innerHTML="Appointment Booked Successfully!";

form.reset();

});

}