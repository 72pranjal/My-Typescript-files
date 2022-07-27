function add(num1:number,num2:number):number{
    return num1+num2;
    // return 'Hello'; it gives error
}
function printresult(num:number):void{
    console.log('Result=',num);
};
printresult(add(4,12));
let combinevaluse: (a:number,b:number) =>number;
combinevaluse=add;
console.log(combinevaluse(2,5));


// function types and callbacks

function addAndHandel(n1:number,n2:number,cb:(num:number)=>void):void{
    let result =n1+n2;
    cb(result);
}
addAndHandel(12,23 , (result)=>{
    console.log(result);
});