async function ram() {
    const x=await (await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20")).json();
    for(let i=0;i<x.length;i++){
      let v=document.createElement("img");
      v.src=x[i].url;
      document.getElementById("div1").append(v);
      console.log(x);
    }
  }
  ram();
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop+window.innerHeight===document.body.scrollHeight){
      ram();
    }
  }
  );