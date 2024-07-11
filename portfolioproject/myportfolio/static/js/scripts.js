var contenedorbarra =document.getElementById('contenedorbarra');
window.addEventListener('scroll',()=>{
    var scroll = window.scrollY

    if(scroll>10){
        contenedorbarra.style.backgroundImage =' linear-gradient(180deg, #263486 40%, #010b47 80%)'
    } else{
        contenedorbarra.style.backgroundImage =' linear-gradient(180deg, #28282800 40%, #28282800 80%)'
    }
})
