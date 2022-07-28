function identify<Type>(org:Type,arg?:Type):Type{
    return org;
}
console.log(identify(2));


function findlength<Type>(a:Type[]):Type[]{
    console.log(a.length);
    return a;
}
console.log(findlength([1,2,3,4,5,6]));

// using interface in Generic 
interface genericIdentify{
    <type>(arg:type[]):type[];
}
function identify1<type>(arg:type[]):type[]{
    return arg;
}
let myidentify:genericIdentify=identify1;
console.log(myidentify([1,2,3,4,5,5]));



// using generic for one type(number)

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
  }
   
  function identity2<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity1: GenericIdentityFn<number> = identity2;
  console.log(myIdentity1(4));


//   Generic Classes

class sum<type>{
    name:type;
    age:type;
    add:type;
    constructor(a:type,b:type,c:type):type{
            this.name=a;
            this.age=b;
            this.add=c;
    }
    print(){
        return {
            name:this.name,
            age:this.age,
            address:this.add
        }
    }
}
let obj=new sum<number>(23,23,34);
console.log(obj.print());

// typeof operator
let s='helo';
let n=typeof s;
console.log(typeof n);



