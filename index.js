let body = document.querySelector("body");

let button=document.querySelectorAll(".button")


button.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.id
})
})

