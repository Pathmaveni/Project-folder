let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let cpassword=document.getElementById("cpassword")
let form=document.getElementById("form")
/*form.addEventListener("submit",(e)=>{   //e means event,so event ah method ku parameter ah pass panrom, form oda default action ah stop pannum, naa type panra name login kudutha athu refresh aagathu
     e.preventDefault()
})*/
form.addEventListener("submit",(e)=>{
    if(!validation()){
        e.preventDefault()
    }
})
function validation(){
    let username_value=username.value   //variable ah rendu name ah use panna mudiyathu apd use panrommna (_) must
    let email_value=email.value
    let password_value=password.value
    let cpassword_value=cpassword.value
    let success=true

    if(username_value==""){
        success=false
        set_error(username,"Please fill this box")
    }
}

function set_error(tag,message){
    let parentTag=tag.parentElement
    console.log(parentTag)
    let err=parentTag.getElementById("error")
    err.innerText=message
}












/*if(!validation()){         //prevent default kudukama irukum pothu,namma kudukura content refersh panna, refresh aagum
    e.preventDefault()      //enna content kudukuromo atha stop pannum
 }*/