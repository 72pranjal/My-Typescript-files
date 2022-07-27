export let pi=3.14;
export function calulateArea(r:number):number{
    return pi*r*r;
}
export function changeToabsolute(num:number){
    if(num<0){
        return num*-1;
    }
}
// console.log(calulateArea(3));
// console.log(changeToabsolute(-12));
