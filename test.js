console.log('this is node js runtime environment')

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res=>res.json())
// .then(data=>console.log(data))
.then(products=>{
    const result = products.filter(data=>{
        return data.id>50
    })
    console.log(result)
})
.catch(err=>console.log(err))