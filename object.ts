interface StType{
    name:string;
    age:any;
    address:string;
    intrest:string;
    hobby:string[];
};

let stdata:StType={
    name:'Tom',
    age:'df',
    address:'USA',
    intrest:'Cricket',
    hobby:['cricket','cooking']
};
console.log(stdata);
for(let phobby of stdata.hobby){
    console.log(phobby.toUpperCase());
}