
let storage={

}

function localStorageSet(obj){
    window.localStorage.setItem("blogData",JSON.stringify(obj))
}
function localStorageGet(){
   let blogdata= window.localStorage.getItem("blogData")
   return JSON.parse(blogdata)
}
let delKeys;
let addBtn=document.getElementsByClassName("addBtn")[0]
function reRender(){
    // storage=localStorageGet()
    let blog=document.getElementsByClassName("blog")[0]
    blog.innerHTML=""
    for(let i in storage){
        let EachBlog=document.createElement("div")
        EachBlog.className="EachBlog"
        EachBlog.innerHTML=`
        <div class="EachBlogTop">
          <h1 class="bHead">${i}</h1> 
          <div class="buttonContainer">
            <span class="material-icons-outlined updatekey">
              edit
            </span>
            <span class="material-icons-outlined delkey">
              delete
            </span>    
          </div>
        </div>
        <p>${storage[i]}</p>
      
      `
      blog.appendChild(EachBlog)
    }
    delKeys=document.querySelectorAll(".delkey")
    let bhead=document.querySelectorAll(".bHead")
    delKeys.forEach((del,index)=>{
        del.addEventListener('click',()=>{
            
           delete storage[bhead[index].innerText]
           reRender()
        })
    })
    let updatekey=document.querySelectorAll(".updatekey")
    updatekey.forEach((update,index)=>{
        update.addEventListener('click',()=>{
            let headingInput=document.getElementById("headingInput")
            let blogDesc=document.getElementById('blogDesc')
            headingInput.value=bhead[index].innerText
            headingInput.setAttribute("disabled",true)
            blogDesc.value=storage[bhead[index].innerText]
        })
    })
}


addBtn.addEventListener('click',()=>{
    let headingInput=document.getElementById("headingInput")
    let blogDesc=document.getElementById('blogDesc')

    
   if(headingInput.value!==""&&blogDesc.value!==""){
    storage[headingInput.value]=blogDesc.value
    // localStorageSet(storage)
    
    reRender()
    blogDesc.value=""
    headingInput.value=""
    headingInput.removeAttribute("disabled")
   }else{
       alert("Title and Description Cannot be Empty ")
   }
})






