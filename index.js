let box1=document.getElementsByClassName("box1")
let box2=document.getElementsByClassName("box2")
let box3=document.getElementsByClassName("box3")
let box4=document.getElementsByClassName("box4")
  
let inputValue=document.getElementsByClassName("selctions");
let goodmrng=document.getElementsByClassName("goodmrng");
let changemsg1=document.getElementsByClassName("changemsg1");
let chart=document.getElementsByClassName("chart");
let bigimg=document.getElementsByClassName("bigimg")

function clock(){
let time=new Date();
let hrs=time.getHours();
let mins=time.getMinutes();
let sec=time.getSeconds();
let AMPM="AM";
if(hrs>12){
    hrs-=12;
    AMPM="PM";
}

box1[0].innerText=`${hrs} \n hours`;
box2[0].innerText=`${mins} \n Mins`;
box3[0].innerText=`${sec} \n Sec`;
box4[0].innerText=AMPM ;

if(hrs>=7&&hrs<=12&&AMPM==="AM"){
    changemsg1[0].innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
}
else if(hrs>=1&&hrs<4&&AMPM==="PM"){
    changemsg1[0].innerText="LET'S HAVE SOME LUNCH !!";
}
else if(hrs>=4&&hrs<8&&AMPM==="PM"){
    changemsg1[0].innerText="GRAB SOME HEALTHY BREAKFAST!!!";
 
}
else if((hrs>=8&&AMPM==="PM")||(hrs>=0&&AMPM==="AM")){
    changemsg1[0].innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    }
}

setInterval(()=>{
    clock();
},1000)


function setalarm(){
  let time=new Date();
  let hrss=time.getHours();
  console.log(hrss);
  console.log(inputValue[0]);
 if(parseInt(inputValue[0].value)===hrss){
 goodmrng[0].innerText="GOOD MORNING!! WAKE UP !!";
 bigimg[0].src="./wakeup.png"

 }

 else if(parseInt(inputValue[1].value)===hrss){
goodmrng[0].innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
bigimg[0].src="./Group 5183.png"

 }
 else if(parseInt(inputValue[2].value)===hrss){
    goodmrng[0].innerText="GOOD EVENING !!";
    bigimg[0].src="./lunch_image.png"
  
 }
else if(parseInt(inputValue[3].value)===hrss){
    goodmrng[0].innerText='GOOD NIGHT !!';
    bigimg[0].src="./goodnight_image.png"
    
}
let a1=inputValue[0].selectedIndex;
let a11=inputValue[0].options[a1].innerText;
chart[0].innerText=`Wake Up Time : ${a11}`;
let a2=inputValue[1].selectedIndex;
let a22=inputValue[1].options[a2].innerText;
chart[1].innerText=` Lunch Time : ${a22}`;
let a3=inputValue[2].selectedIndex;
let a33=inputValue[2].options[a3].innerText;
chart[2].innerText=`Nap Time : ${a33}`;
let a4=inputValue[3].selectedIndex;
let a44=inputValue[3].options[a4].innerText;
chart[3].innerText=`Night Time : ${a44}`;

}
