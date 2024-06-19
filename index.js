function changeMode(){
    const x=document.getElementById("mode");
    if(x.innerText=="Switch to DarkMode"){
        document.body.style.backgroundColor="black";
        x.innerText="Switch to LightMode";
        let y=document.querySelectorAll(".first");
        y.forEach(i => {
            i.style.backgroundColor="rgb(0,0,0)";
            i.style.color="lightgreen";
            i.addEventListener("mouseover",()=>{
                i.style.backgroundColor="yellow";
                i.style.color="black";
            })
            i.addEventListener("mouseout",()=>{
            i.style.backgroundColor="black";
            i.style.color="lightgreen";
            })
        });
        let z=document.querySelectorAll(".second");
        z.forEach(i=>{
            i.style.color="white";
        });
    }else{
        document.body.style.backgroundColor="rgb(219, 235, 185)";
        x.innerText="Switch to DarkMode";
        let y=document.querySelectorAll(".first");
        y.forEach(i => {
            i.style.backgroundColor="beige";
            i.style.color="black";
            i.addEventListener("mouseover",()=>{
                i.style.backgroundColor="wheat";
                i.style.color="black";
            })
            i.addEventListener("mouseout",()=>{
            i.style.backgroundColor="beige";
            i.style.color="black";
            })
        });
        document.querySelectorAll(".second").forEach(i=>{
            i.style.color="black";
        });
    }
}
(async()=>{
    let x=await (await fetch("https://type.fit/api/quotes")).json();
    let y=await (await fetch("https://dog.ceo/api/breeds/image/random")).json();
    let ix=Math.floor(Math.random()*16);
    document.getElementById("quote").innerText+=x[ix].text;
    document.getElementById("img1").src=y.message;
    let z= (await fetch("https://pokeapi.co/api/v2/type"));
    //let z1=await (z.json())
    console.log(z);
})();