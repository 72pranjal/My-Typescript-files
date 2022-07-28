// partial<type>

interface userType{
    name:string;
    age:number;
    developer:boolean;
}
let user=(id:number,data: Partial<userType>) =>{
    return data;
}

 let aa=user(1,{
    name:'Tom',
    // age:23,
    // developer:true

})
console.log(aa.name);

// 2..Required type

interface typeOfnum{
    x?:number;
    y?:number;
    z?:number;
}
const obj1:Required<typeOfnum>={x:4,y:5,z:6};
console.log(obj1);

// 3.Readonly<type>

interface todo{
    titel:string;
}
const obj2:Readonly<todo>={
    titel:'Hello my friends',
};
// obj2.titel='hello'; it gives error

// 4.Record<type>

const obj3:Record<string,userType>={
    user2:{
        name:'Bob',
        age:26,
        developer:false,
    },
    user3:{
        name:'Ana',
        age:34,
        developer:true,
    }
    
}
console.log(obj3.user2);


// 5.Pick<type,keys>

interface todoObj{
    name:string;
    description:string;
    completed:boolean;
}

type todoperview=Pick<todoObj,'name'|'completed'>;

const input:todoperview={
    name:'Tom',
    completed:true,
    // description:'clean room',
};
console.log(input.name);

// 6.Omit<type,keys>

type todoperview1=Omit<todoObj,'name'|'completed'>;
const input4:todoperview1={
    description:'clean room',
};
console.log(input4);

//7.Exclude<type,union>........


type aviableDrinks='Coffee'|'Tea'|'Apple Juice'|'Orange Juice';
let jhonDrinks:aviableDrinks;
jhonDrinks='Coffee';

type DrinksJamesDoeslike='Tea'|'Apple Juice';
let JamesDrinks:Exclude<aviableDrinks,DrinksJamesDoeslike>;
JamesDrinks='Coffee';


//8.Extract<type,union> is apposite of Exclude type


//9.NonNullable<t>.........
//isme hm Null and Undefined value nahi assign kra skte hai

interface starship{
    color?:'red'|'blue'|'yellow';
}

function paintstarship(id:number,color:NonNullable<starship['color']>){
    return color;
}
console.log(paintstarship(1,'red'));


//10...ReturnType<t>.....

interface starship{
    color?:'red'|'blue'|'yellow';
}

function paintstarship1(id:number,color:NonNullable<starship['color']>){
    return {
        id,
        color,
    }
}
type paintstarshipReturn=ReturnType<typeof paintstarship1>;
console.log(paintstarship1(1,'red'));




