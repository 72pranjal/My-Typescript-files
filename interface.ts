// interface ClockInterface{
//     currentTime:Date;

// }
// class clock implements ClockInterface{
//     currentTime: Date=new Date();
//     constructor(h:number,n:number){}

// }
// let output=new clock(3,4);
// console.log(output);
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
   
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) {}
  }
  let output=new Clock(2,3);
  console.log(output.currentTime);