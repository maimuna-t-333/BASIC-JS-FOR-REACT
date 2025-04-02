const products=[
    {name:"redmi", brand:"xiomi", price:"3000", color:"black"},
    {name:"apple1", brand:"apple", price:"0", color:"gold"},
    {name:"apple1", brand:"apple", price:"5000", color:"gold"},
    {name:"apple2", brand:"apple", price:"5000", color:"gold"},
    {name:"redmi2", brand:"xiomi", price:"2000", color:"black"}
]

// const result=products.map(products=products.price);
// console.log(result)

// products.forEach(product=>{

// })

// const result=products.filter(product=>product.price>=5000)
// console.log(result)

const result=products.find(product=>product.name==="appple1")
// console.log(result)