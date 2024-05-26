let x=false;
let day=0;
let hou=0;
let min=0;
let sec=0;
const s=document.getElementById("start");
const e=document.getElementById("stop");
s.onclick=()=>{
 x=true;
 z=setInterval(start,1000);
}

e.onclick=()=>{
    x=false;
    clearInterval(z);
}
document.getElementById("reset").onclick=()=>{
    sec=0;
    min=0;
    hou=0;
    day=0;
    clearInterval(z);
    document.getElementById("head1").textContent="00:00:00:00";
}
function start(){
    
    sec++;
    
if(sec==60){
    min++;
    sec=0;
}
if(min==60){
    hou++;
    min=0;
}
if(hou==24){
    day++;
    hou=0;
}
document.getElementById("head1").textContent=day.toString().padStart(2,0)+":"+hou.toString().padStart(2,0)+":"+min.toString().padStart(2,0)+":"+sec.toString().padStart(2,0);
}
function end(){

}
function reset(){

}