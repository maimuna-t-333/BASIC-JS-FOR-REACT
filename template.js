const fName="gias"
const lName="uddin"

console.log(`i am ${fName} ${lName}`)

function sum(){
    console.log(arguments)
}

const sum=(a,b,c)=>{
    const add=a+b+c;
    return add;
}

const resukt=sum(1,2,3)

console.log(resukt)


const numbers=[1,2,3,4,5]

const newNumbers=[...numbers,10,100]

console.log(newNumbers);