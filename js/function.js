

// quiero que todas las fotos tengan el nuevo efecto de cuando 
// pasamos por arriba figura el nombre alternativo de la foto
// ademas que se le agrege el indice a cada foto para que pueda
//  ser accesible por tab
function loading() {
    cuadros = document.querySelectorAll(".cuadro" ) 
    for( let cuadro of cuadros ){
        // agregamos el alt al cuadro con un <p>
        cuadro.innerHTML +='<p>'+ cuadro.children[0].alt +'</p>'
        //Agregamos tab index para que podamos asignar cada cuagro con tab
        cuadro.setAttribute("tabindex", "0")

    
    }

}

function altText(element) {
    element.children[1].style.display = 'block'

    // console.log(element.children[1].style.display)

    
}

function unDo(element){
    element.children[1].style.display = 'none'
}