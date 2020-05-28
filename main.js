console.log("Pop up !")
const message = document.getElementById("message");
const sendbutton = document.getElementById("sendbutton");


function disappear(){
message.classList.remove("active");
}


sendbutton.addEventListener("click",()=>{
    message.classList.add("active");
    setTimeout(disappear,2000);
})