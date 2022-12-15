
const closeIcon = document.querySelector(".close");
const loginSesion = document.querySelector(".subContenedor");
const inputEmail = document.querySelector(".correoElectronico");


    function loginClose(){
        loginSesion.style.display = "none";
        document.querySelector(".contenedor").style.backgroundColor ="#fff"
    }

closeIcon.addEventListener("click",loginClose)


    

