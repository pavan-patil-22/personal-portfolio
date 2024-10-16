/** creating button click show hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["BCA Student...","BCA Student...","BCA Student..."],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})
const connectbtn=document.getElementById("connectbtn").addEventListener("click",()=>{
    alert("My personal mobile no: 9110413455");
});