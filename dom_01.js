var aa = document.getElementById("myBtn");
aa.addEventListener("click", function() {
	aa.style.backgroundColor = "red";
});
var aaa = document.getElementById("myBtn01");
aaa.addEventListener("mousedown", function() {
	aaa.style.backgroundColor = "black";
});
var aa2 = document.getElementById("myBtn02");
aa2.addEventListener("mouseover", function() {
	aa2.style.backgroundColor = "red";
});
var aa3 = document.getElementById("myBtn03");
aa3.addEventListener("mouseout", function() {
	aa3.style.backgroundColor = "red";
});
var aa4 = document.getElementById("myBtn04");
aa4.addEventListener("mousemove", function() {
	aa4.style.backgroundColor = "red";
});
var aa5 = document.getElementById("myBtn04");
aa5.addEventListener("keydown", function() {
	aa5.style.backgroundColor = "red";
});

//querySelectorAll

var q1 =document.querySelectorAll(".qsa");
var i=0
console.log(q1);
function myFunction(){
	q1[i].style.backgroundColor = "red";
	i+=1;
	document.write(q1);
	console.log(q1);
} 



//select iten
// document.title
// document.head
// document.body
