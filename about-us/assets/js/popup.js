// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 =document.getElementById("myModal2");
var modal3 =document.getElementById("myModal3");
var modal4 =document.getElementById("myModal4");
var modal5 =document.getElementById("myModal5");
var modal6 =document.getElementById("myModal6");
var modal7 =document.getElementById("myModal7");
var modal8 =document.getElementById("myModal8");
var modal9 =document.getElementById("myModal9");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2=document.getElementById("myBtn2");
var btn3=document.getElementById("myBtn3");
var btn4=document.getElementById("myBtn4");
var btn5=document.getElementById("myBtn5");
// var btn6=document.getElementById("myBtn6");
// var btn7=document.getElementById("myBtn7");
// var btn8=document.getElementById("myBtn8");
// var btn9=document.getElementById("myBtn9");

var span2=document.getElementById("span2");
var span3=document.getElementById("span3");
var span4=document.getElementById("span4");
var span5=document.getElementById("span5");
// var span6=document.getElementById("span6");
// var span7=document.getElementById("span7");
// var span8=document.getElementById("span8");
// var span9=document.getElementById("span9");
// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick=function(){
    modal2.style.display="block"
}
btn3.onclick=function(){
    modal3.style.display="block"
}
btn4.onclick=function(){
    modal4.style.display="block"
}
btn5.onclick=function(){
    modal5.style.display="block"
}
// btn6.onclick=function(){
//     modal6.style.display="block"
// }
// btn7.onclick=function(){
//     modal7.style.display="block"
// }
// btn8.onclick=function(){
//     modal8.style.display="block"
// }
// btn9.onclick=function(){
//     modal9.style.display="block"
// }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
      modal1.style.display = "none";
}
span2.onclick = function() {
      modal2.style.display = "none";
}
span3.onclick=function(){
    modal3.style.display="none";
}
span4.onclick=function(){
    modal4.style.display="none";
}
span5.onclick=function(){
    modal5.style.display="none";
}
// span6.onclick=function(){
//     modal6.style.display="none";
// }
// span7.onclick=function(){
//     modal7.style.display="none";
// }
// span8.onclick=function(){
//     modal8.style.display="none";
// }
// span9.onclick=function(){
//     modal9.style.display="none";
// }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    
  if (event.target == modal1 || event.target==modal2 
    || event.target==modal3 || event.target==modal4||event.target==modal5
    ||event.target==modal6||event.target==modal7 ||event.target==modal8||event.target==modal9){
    modal1.style.display = "none";
    modal2.style.display="none";
    modal3.style.display="none";
    modal4.style.display="none";
    modal5.style.display="none";
    // modal6.style.display="none";
    // modal7.style.display="none";
    // modal8.style.display="none";
    // modal9.style.display="none";
  }
 
}