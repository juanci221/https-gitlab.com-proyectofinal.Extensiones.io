
document.getElementById('boton-ocultar').addEventListener('click', function () {
    document.getElementById("información").style.display='none'
    
})

document.getElementById("boton-aparecer").addEventListener('click', function () {
    document.getElementById("información").style.display='block'
})


document.getElementById("boton").addEventListener('click', function () {
    console.log("juan quinodoz");
    document.getElementById("info").innerHTML= "Jeremy Wagner Estudiante de Front end  «desarrollo del lado del cliente» se refiere a la práctica de producir HTML, CSS y JavaScript."
})
function firma() {
    console.log("Firma");
    let firma= "Jeremy Wagner";
     return firma
}
document.getElementById('boton-firma').addEventListener('click', function () {
    document.getElementById("firma").innerHTML=firma()
 
})


function edad() {
    console.log("Edad");
    let años= "53"
    return años
  }
  document.getElementById("edad").innerHTML = edad();
