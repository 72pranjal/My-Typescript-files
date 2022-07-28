//  function type expression

function greeter(fn:(a:string) =>void){
    fn('Good morning.....!');
}
function printToconsole(s:string){
    console.log(s);
}
greeter(printToconsole);

