fetch("http://universities.hipolabs.com/search?country=india").then((obj)=>{
    return obj.json()
}).then((data)=>{
    console.log(data);
})