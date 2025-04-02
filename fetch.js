

// const jsonData=JSON.stringify(person)

// const planData=JSON.parse(jsonData)

//fetch

// fetch("url")
// .then(res=>res.json())
// .then(data=>console.log(data))

// const person={
//     name:"hero",
//     ag:22,
//     friends:["a", "b"],
//     family:{
//         father:"jolil",
//         mother:'jorina'

//     }
// }


// const keys=Object.keys(person);
// // console.log (keys)

// const values=Object.values(person)
// // console.log(values)


const product=[
    {name:"redmi", brand:"xiomi", price:"3000", color:"black"},
    {name:"apple1", brand:"apple", price:"0", color:"gold"},
    {name:"apple1", brand:"apple", price:"5000", color:"gold"},
    {name:"apple2", brand:"apple", price:"5000", color:"gold"},
    {name:"redmi2", brand:"xiomi", price:"2000", color:"black"}
]

const newData={
    name:"walton",
    brand:"walton",
    price:300,
    color:"gray"
}

const newArray=[...product,newData]
// console.log(newArray)


const remainingProducts=product.filter(p=>p.brand!=="xiomi")
// console.log(remainingProducts)

const newArray2=[...remainingProducts,newData]
console.log(newArray2)


