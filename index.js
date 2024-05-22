//console.log("hello");
//window.alert("this is an alert");
//let name;
//name=window.prompt("Enter your name");
//document.getElementById("h1").textContent='Hello '+name+" Thanks for coming on my site";
const d=document.getElementById("l1");
const ad=document.getElementById("add");
const su=document.getElementById("subtract");
const re=document.getElementById("reset");
let count = 0+0;
ad.onclick = function(){
    count++;
    document.getElementById("l1").textContent=count;
}
su.onclick = function(){
    count--;
    d.textContent=count;
}
re.onclick = function(){
    count=0;
    d.textContent=count;
}
//Math.random() generate a random number between 0 and 1;
document.getElementById("ran").onclick = function(){
    let max=100;
    let min=1;
    count=Math.floor(Math.random()*max)+min;
    d.textContent=count;
}


