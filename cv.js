
document.getElementById('boton-ocultar').addEventListener('click', function () {
    document.getElementById("información").style.display='none'
    
})

document.getElementById("boton-aparecer").addEventListener('click', function () {
    document.getElementById("información").style.display='block'
})


document.getElementById("boton").addEventListener('click', function () {
    console.log("juan quinodoz");
    document.getElementById("demo").innerHTML= "Jeremy Wagner Estudiante de Front end  «desarrollo del lado del cliente» se refiere a la práctica de producir HTML, CSS y JavaScript."
})

function firma() {
    console.log("Juan Quinodoz");
    return "Jeremy Wagner";
}
