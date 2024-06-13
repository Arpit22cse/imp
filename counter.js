//console.log("hello");
//window.alert("this is an alert");
//let name;
//name=window.prompt("Enter your name");
//document.getElementById("h1").textContent='Hello '+name+" Thanks for coming on my site";
//const d=document.getElementById("l1");

    function changeMode(){
        //console.log(0);
        if(document.getElementById("mode").innerText=="Switch to DarkMode"){
            document.body.style.backgroundColor="rgb(54, 69, 79)";
            document.getElementById("mode").innerText="Switch to LightMode";
            let eb=document.querySelectorAll("button");
            eb.forEach(ram);
            function ram(el){
                el.style.backgroundColor="lightgreen";
                el.addEventListener("mouseover",()=>{
                    el.style.color="lightgreen";
                    el.style.backgroundColor="grey";
                })
                el.addEventListener("mouseout",()=>{
                    el.style.backgroundColor="lightgreen";
                    el.style.color="";
                })
            }
        }else{
            document.body.style.backgroundColor="rgb(219, 235, 185)";
            document.getElementById("mode").innerText="Switch to DarkMode";
            let eb=document.querySelectorAll("button");
            eb.forEach(ram);
            function ram(el){
                el.style.backgroundColor="beige";
                el.addEventListener("mouseover",()=>{
                    el.style.backgroundColor="rgb(133, 183, 227)";
                    el.style.color="white";
                })
                el.addEventListener("mouseout",()=>{
                    el.style.backgroundColor="";
                    el.style.color="";
                })
            }
        }
    }
    

let count = 0+0;
const d=document.getElementById("l1");
if(document.getElementById("add")!=null){
    document.getElementById("add").onclick = function(){
        count++;
        document.getElementById("l1").textContent=count;
    }
}

if(document.getElementById("subtract")!=null){
    document.getElementById("subtract").onclick = function(){
        count--;
        d.textContent=count;
    }
}
if(document.getElementById("reset")!=null){
    document.getElementById("reset").onclick = function(){
        count=0;
        d.textContent=count;
    }
}
//Math.random() generate a random number between 0 and 1;
if(document.getElementById("ran")!=null){
    document.getElementById("ran").onclick = function(){
        let max=100;
        let min=1;
        count=Math.floor(Math.random()*max)+min;
        d.textContent=count;
    }
}



