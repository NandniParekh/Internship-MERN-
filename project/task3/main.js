var dis1=document.querySelector(".dropdown-1").style;
function f1() {
	if (dis1.display=="block") {
		dis1.display= "none";
	}
	else{
		dis1.display= "block";
	}
}
var dis2=document.querySelector(".dropdown-2").style;
function f2() {
	if (dis2.display=="block") {
		dis2.display= "none";
	}
	else{
		dis2.display= "block";
	}
}
var dis3=document.querySelector(".dropdown-3").style;
function f3() {
	if (dis3.display=="block") {
		dis3.display= "none";
	}
	else{
		dis3.display= "block";
	}
}
var dis4=document.querySelector(".dropdown-4").style;
function f4() {
	if (dis4.display=="block") {
		dis4.display= "none";
	}
	else{
		dis4.display= "block";
	}
}
var dis5=document.querySelector(".dropdown-5").style;
function f5() {
	if (dis5.display=="block") {
		dis5.display= "none";
	}
	else{
		dis5.display= "block";
	}
}
function f11(){
	if(dis3.display=="block" || dis2.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis2.display="none";
		dis4.display="none";
		dis5.display="none";
	}
}
function f21(){
	if(dis3.display=="block" || dis1.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis4.display="none";
		dis5.display="none";
	}	
}
function f31(){
	if(dis2.display=="block" || dis1.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis2.display="none";
		dis1.display="none";
		dis4.display="none";
		dis5.display="none";
	}	
}
function f41(){
	if(dis3.display=="block" || dis1.display=="block" || dis2.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis2.display="none";
		dis5.display="none";
	}
}
function f51(){
	if(dis3.display=="block" || dis1.display=="block" || dis4.display=="block" || dis2.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis4.display="none";
		dis2.display="none";
	}	
}
const images = document.querySelectorAll(".image-continer img")
let i = 0;
let j = images.length;
function next1(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = (j + i + 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}
function prev1(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = (j + i - 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}
var tab1 = document.getElementById("image4").style;
var tab2 = document.getElementById("image5").style;
var tab3 = document.getElementById("image6").style;
function home(){
   tab1.display="block";
   tab2.display = "none";
   tab3.display = "none";
}
function service(){
   tab2.display="block";
   tab1.display = "none";
   tab3.display = "none";
}
function contact(){
   tab3.display="block";
   tab2.display = "none";
   tab1.display = "none";
}
var box_1 = document.getElementById("box1").style;
var box_2 = document.getElementById("box2").style;
var box_3 = document.getElementById("box3").style;
var box_4 = document.getElementById("box4").style;
var box_5 = document.getElementById("box5").style;
function coffee(){
   box_1.display="flex";
   box_2.display = "none";
   box_3.display = "none";
   box_4.display = "none";
   box_5.display = "none";   
}
function drink(){
   box_2.display="flex";
   box_1.display = "none";
   box_3.display = "none";
   box_4.display = "none";
   box_5.display = "none";  
}
function fastfood(){
   box_3.display="flex";
   box_2.display = "none";
   box_1.display = "none";
   box_4.display = "none";
   box_5.display = "none";   
}
function tea(){
   box_4.display="flex";
   box_2.display = "none";
   box_3.display = "none";
   box_1.display = "none";
   box_5.display = "none";   
}
function all(){
   box_5.display = "flex";
   box_2.display = "none";
   box_3.display = "none";
   box_4.display = "none";
   box_1.display = "none";    
}
function validateForm(){
	var value1=document.getElementById("name").value;
	var value2=document.getElementById("email").value;
	var value3=document.getElementById("pwd").value;
	var value4=document.getElementById("description").value;
	if (value1 == "") {
		document.getElementById("error1").innerHTML="please fill the field";
		return false;
	}
	if (value1.length<="2") {
		document.getElementById("error1").innerHTML="minimum length is 2";
		return false;
	}
	if (value2 == "") {
		document.getElementById("error2").innerHTML="please fill the field";
		return false;
	}
	if(value2.replace(/\s/g,"").length<=0){
        document.getElementById("error2").innerHTML="White Space Are Not Allowed";
        return false;
    }
	if (value2<="2" && value2>="15") {
		document.getElementById("error2").innerHTML="Length Shoud be beetween 3 and 15 ";
		return false;
	}
	if (value2.indexOf('@') <=0) {
		document.getElementById("error2").innerHTML="email is not valid";
		return false;
	}
     if((value2.charAt(value2.length-4)!='.') && (value2.charAt(value2.length-3)!='.')){
        document.getElementById("error2").innerHTML="dot is not available";
        return false;
    }
    if (value3 == "") {
    	document.getElementById("error3").innerHTML ="please fill the field";
    	return false;
    }
    if (value3.length<="8" && value3.length>="15") {
    	document.getElementById("error3").innerHTML ="character should be 8 to 15";
    	return false;
    }
    if (value4 == "") {
    	document.getElementById("error4").innerHTML ="please fill the field";
    	return false;
    }
}
function loginf(){
	var pre = document.querySelector(".login-modal").style;
	if (pre.display=="block") {
		pre.display = "none";
		pre.width = "0%";
	}
	else{
		pre.display = "block";
		pre.width = "100%";
	}
}
function hide(){
	var pre1 = document.querySelector(".login-modal").style;
	if (pre1.display=="block") {
		pre1.display = "none";
		pre1.width = "0%";
	}
	else{
		pre1.display = "block";
		pre1.width = "100%";
	}
}
var lg_error = document.getElementById("login-error");
var patten = /\s/g;
var patten1 = "@";
function first(){
	var p = document.getElementById("email1").value;
	if (p == "") {
        lg_error.innerHTML="please fill the field";
        return false;
	}
	if (p.match(patten)) {
		lg_error.innerHTML ="white space is not allowd";
		return false;
	}
    if (p.indexOf("@")<=0) {
    	lg_error.innerHTML = "Email id is not Ok";
    	return false;
    }
    if (p.length<="2" || p.length>="25") {
    	lg_error.innerHTML ="character should be beetween 3 to 25";
    	return false;
    }
    if ((p.charAt(p.length-4) !=".") && (p.charAt(p.length-3) !=".")){
    	lg_error.innerHTML="Email Id is not valid";
    	return false;
    }
    lg_error.innerHTML ="";
	return true;
}
function last(){
	var s = document.getElementById("pwd1").value;
	var special = /^[A-Za-z]\w{7,14}$/
	if (s =="") {
		lg_error.innerHTML ="please fill the field";
		return false;
	}
	if (s.match(patten)) {
		lg_error.innerHTML = "white space is not allowed";
		return false;
	}
	if (s.length<=8 ){
		lg_error.innerHTML = "please write at least 8 character";
		return false;
	}
	if (s.match(special)) {
		lg_error.innerHTML = "write at least 8 character, 1 numeric, 1 uppercase, 1 lowercase and 1 special character";
		return false;
	}
	lg_error.innerHTML ="";
	return true;
}
function validate(){
	if (!first() || !last()) {
		lg_error.innerHTML = "please fill all the details";
		return false;
	}
}
var mouse = document.querySelector(".about1").style;
var mouse1 = document.querySelector(".about2").style;
var mouse2 = document.querySelector(".about3").style;
function story(){
	if(mouse.display =="block"){
          mouse.display = "none";
          mouse1.display = "block";
          mouse2.display = "block";
	}
}
function mission(){
	if(mouse1.display =="none"){
          mouse1.display = "block";
           mouse.display= "none";
          mouse2.display = "none";
	}
}