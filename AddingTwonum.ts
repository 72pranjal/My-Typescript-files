function add(n1:number,n2:number,print:boolean,content:string){
    if(print){
        console.log(content+(n1+n2))
    }
    return n1+n2;
}
let num1=2;
let num2=3;
let print1=true;
let content='The sum of Two number is=';
let result=add(num1,num2,print1,content);
console.log(result);