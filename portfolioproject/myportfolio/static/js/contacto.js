const nombre =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const message =document.getElementById("message");
const form =document.getElementById("form");
const parrafo =document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar= false
    let warnings=""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML= ""
    if(nombre.value.lenght<4){
        warnings+= `El nombre no es valido <br>`
        entrar = true
    }
    if(regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(message.value.lenght<4){
        warnings+= `El mensaje es demasiado corto <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML= warnings
    }else{
        parrafo.innerHTML= "Enviado"
    }
    
})