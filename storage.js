const handleToAddStorage=()=>{
    const name=document.getElementById('name').value;
    const id=document.getElementById('id').value;
    // localStorage.setItem(email,name);

    const data={id,name}

    // console.log(data)


    localStorage.setItem(id,JSON.stringify(data))


}


const storedItem=localStorage.getItem("1233")
console.log(JSON.parse(storedItem))

const handleClear=()=>{
    localStorage.clear()
}