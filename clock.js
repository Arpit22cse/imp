function cl(){
    let n=new Date();
    const h=(n.getHours()%12).toString().padStart(2,0);
    const ap=(n.getHours()>12||n.getHours()<1)?"Pm":"Am";
    const m=n.getMinutes().toString().padStart(2,0);
    const s=n.getSeconds().toString().padStart(2,0);
    const h1=document.getElementById("head1");
    h1.textContent=h+":"+m+":"+s+" "+ap;
}
cl();
setInterval(cl,1000);