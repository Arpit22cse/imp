const inp=document.getElementById("tempinput");
const fc=document.getElementById("tocelcius");
const cf=document.getElementById("tofarhenite");
const res=document.getElementById("result");
let temp;
const subm=document.getElementById("sub");
subm.onclick=function(){
    if(fc.checked){
        temp=Number(inp.value);
        res.textContent=(temp*(9/5)+32).toFixed(2)+"C";
    }else if(cf.checked){
        temp=Number(inp.value);
        res.textContent=(temp-32)*(5/9).toFixed(2)+"F";
    }

}