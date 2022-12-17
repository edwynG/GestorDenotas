
const loginSesion = document.querySelector(".subContenedor");
const ValidarCI = document.getElementById("ValidarCI")
const CI = document.getElementById("CI")
const DivErrores = document.querySelector(".error")
const  modalpersonal = document.querySelector(".modalpersonal")
const modalMian = document.getElementById("modalMian")
modalpersonal.style.display = "none";


//funcion para validar si el dato es un numero entero
const CorrectExpre = (e)=>{
 

  let con = parseInt(e.target.value)
  if (Number.isInteger(con)) {
    console.log("Correcto")
    DivErrores.setAttribute("hidden",true)
    }

    else if(e.target.value == ""){
      DivErrores.setAttribute("hidden",true)

    }
    else{
      console.log("error")
      DivErrores.removeAttribute("hidden")
      DivErrores.innerHTML =  "El dato no es un numero"
    }
  }
  
  
  CI.addEventListener("keydown",CorrectExpre)
  
  ////////////////////////////////////////////////////////////////////
  

  //peticion para buscar en la base de datos, y validar si el dato solicitado esta en la red
  
  fetch("datos.txt")
.then(e=> e.json())

.then((a) => { 
  const datos = a;
  console.log(a)

  ValidarCI.addEventListener("click",()=>{
    
      for(let i = 0;i < datos.length;i++)
      if ( CI.value == datos[i].ci) {
        console.log( CI.value )
        var resCi = datos[i].ci;
        var datosPersona = datos[i]
        
        break;
      }
      if (CI.value != resCi){
        console.log("no se encontro")
        DivErrores.innerHTML = "Cedula de identidad no encontrada"
        DivErrores.removeAttribute("hidden")
        
      }
      else{
        console.log("buscando datos")
        DivErrores.setAttribute("hidden",true)
        modalMian.classList.add("removeModalMain")
        modalpersonal.style.display = "block";
        document.getElementById("nombre").innerHTML = datosPersona.nombre;
        document.getElementById("ciPersonal").innerHTML = datosPersona.ci;
        document.getElementById("carrera").innerHTML = datosPersona.carrera;
        let materias = datosPersona.materias;
        let notas = datosPersona.notas;
        console.log(materias)
        let tablaMaterias =   document.querySelector(".tablaMaterias")
        let tablaNotas =   document.querySelector(".tablaNotas")


       for (let i = 0; i < materias.length; i++) {
        let dateCase  = materias[i]
        let div = document.createElement("DIV")
        div.textContent = dateCase;
        tablaMaterias.appendChild(div)
        
        
       }

       notas.forEach(element => {
        let dateCase  = element
        let div = document.createElement("div")
        div.textContent = dateCase;
        tablaNotas.appendChild(div)
       });
          
         }
      
       })




     })
//////////////////////////////////////////////////////////////////////



// Funcion para cerrar y abrir modal
document.querySelector(".close").addEventListener("click",()=>{
    loginSesion.style.display = "none";
    document.querySelector(".contenedor").style.backgroundColor ="#fff"
})
/////////////////////////////////////////





