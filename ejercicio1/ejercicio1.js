let todo=function(){
    let nombre=document.getElementById("nombre")
    let correo=document.getElementById("correo")
    let mensaje=document.getElementById("mensaje")
    let vacio=document.getElementById("vacio")


    if(nombre.value=="" || correo.value=="" || mensaje.value==""){
        console.error("debe ingresar todos los campos")
        vacio.innerHTML="debe ingresar todos los campos"
        return
    }

    if(!correo.value.includes("@") || !correo.value.includes(".")){
        console.error("correo no valido")
        vacio.innerHTML="correo no valido"
        return
    }  
    
    console.log("todo correcto")
    vacio.innerHTML="todo correcto"



}


let main=function(){
    let botton=document.getElementById("boton")
    botton.addEventListener("click",todo)
}

main();