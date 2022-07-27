
const b=document.getElementById('addbtn');
let input1=document.getElementById('num1')! as HTMLInputElement;
let input2=document.getElementById('num2')! as HTMLInputElement;

function add(num1:number,num2:number){
    let a=num1+num2;
    let ele =document.getElementById('dd')!;
    ele.innerHTML=a.toString();
    // resetthevalue();
    return a;

}



b?.addEventListener('click', ()=>{
    
    console.log(add(+input1.value,+input2.value));
   
});
 
    


