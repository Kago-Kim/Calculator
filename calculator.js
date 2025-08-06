function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
return a*b
}
function divide(a,b){
  if (b===0){
    return `cannot divide by zero`
  }else{
    return a/b
  }
}
 

let a=undefined;
 let b=undefined;
 let opp=undefined;
 
function operate(a,opp,b){
    if(opp===`+`){
        return add(a,b)
    }else if(opp===`-`){
        return subtract(a,b)
    }else if(opp===`*`){
        return multiply(a,b)
    }else if(opp ===`/`){
        return divide(a,b)
    }else {
        return `invalid operator`
    }
}
let content=document.getElementById(`content`);
let display=document.getElementById(`display`);
for(let i=0;i<=9;i++){
    let btn=document.createElement("button")
    btn.textContent=i;
    btn.classList.add("btn");
    content.appendChild(btn);
    btn.addEventListener("click",()=>{
        display.value=display.value+btn.textContent;
       if(a===undefined){
            a=Number(btn.textContent);
        }else if(opp===undefined){
            opp=btn.textContent;
        }else if(b===undefined){
            b=Number(btn.textContent);
        }
    })
}
let rest=document.querySelectorAll(`.same`)
rest.forEach(btn=>{
 btn.addEventListener("click",()=>{
    display.value=display.value+btn.textContent;
    if (opp===undefined){
        opp=btn.textContent;
 }})   
})
let clear=document.getElementById(`clear`);
clear.addEventListener("click",()=>{
    display.value=``
})
let equal=document.getElementById(`equals`);
equal.addEventListener("click",()=>{
    if(a!==undefined && opp!==undefined && b!==undefined){
        display.value=operate(a,opp,b);
        a=undefined;
        b=undefined;
        opp=undefined;
    }else{
        display.value=`invalid input`;
    }
})