
const loginSesion = document.querySelector(".subContenedor");
const ValidarCI = document.getElementById("ValidarCI")
const CI = document.getElementById("CI")
const DivErrores = document.querySelector(".error")
const  modalpersonal = document.querySelector(".modalpersonal")
const modalMian = document.getElementById("modalMian")



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
  

    ValidarCI.addEventListener("click",()=>{
    
      for(let i = 0;i < datos.length;i++){ 
        if ( CI.value == datos[i].ci) {
          var resCi = datos[i].ci;
          var datosPersona = datos[i]  
        }
      }
     
      if (CI.value != resCi){
        console.log("no se encontro")
        DivErrores.innerHTML = "Cedula de identidad no encontrada"
        DivErrores.removeAttribute("hidden")
        
      }
      else{
        DivErrores.setAttribute("hidden",true)
        modalMian.classList.add("removeModalMain")
        modalpersonal.style.display = "block";
        document.getElementById("nombre").innerHTML = datosPersona.nombre;
        document.getElementById("ciPersonal").innerHTML = datosPersona.ci;
        document.getElementById("carrera").innerHTML = datosPersona.carrera;
        const materias = datosPersona.materias;
        const notas = datosPersona.notas;
        //tabla de Calificaciones
        let tablaMaterias =   document.querySelector(".tablaMaterias")
        tablaNotas(materias,notas,tablaMaterias)
        //Caja de Promedio
        let resultadoPromedio = Promedio(notas)
        let promedio = document.querySelector(".promedio")
        promedio.innerHTML += `<div> ${resultadoPromedio.toFixed(2)}</div>`
      }
      
    })
})
//////////////////////////////////////////////////////////////////////

// funcion para mostrar promedio
const Promedio =(prome)=>{
  let total = 0;
  prome.forEach((e)=>{
    total+=e
  })
  
  let res = total / prome.length

  return res
}


function tablaNotas(materias,notas,tablaMaterias) {
  for (let i = 0; i < materias.length; i++) {
    let dateCase  = materias[i]
    let div = document.createElement("DIV")
    div.textContent = dateCase;
    div.classList.add("styleMateria")
    tablaMaterias.appendChild(div)
    

    let notaCount = notas[i];
    let div2 = document.createElement("DIV")
    div2.textContent = notaCount;
    div2.classList.add("styleNota")
    tablaMaterias.appendChild(div2)
   }
}

// Funcion para cerrar y abrir modal
document.querySelector(".close").addEventListener("click",()=>{
  loginSesion.style.display = "none";
  document.querySelector(".contenedor").style.backgroundColor ="#fff"
})
/////////////////////////////////////////
