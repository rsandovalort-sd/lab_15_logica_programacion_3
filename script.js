function calcularFactorial(){
    // Variables para inicializar
    const contenedor = document.getElementById("resultado");
    let numero = parseFloat(document.getElementById("numero").value);
    
    //Filtro para evitar que no escriban solo numeros y que sean positivos
    if (isNaN(numero) || numero < 0){
        alert("Ingresa un número valido")
        return;
    }

    //Calculo del factorial con base al ingreso del input
    let factorial =1;
    for(let i = 1; i<=numero; i++){
        factorial *= i;
    }
    
    // Creación de la card donde se agregará la información de cada factorial generado
    const card = document.createElement("div");
    card.className = "card align-middle";
    card.style.width = "25rem";
    card.style.boxShadow = "4px 4px 4px 4px #424040ff";

    //Caracteristicas del contenido de la card
    const contenido_card = document.createElement("div");
    contenido_card.className = "card-body resultados";
    contenido_card.style.display = "justify-content"
    const titulo_h2 = document.createElement("h2");
    titulo_h2.className = "card-title";
    titulo_h2.textContent= `${numero}! = ${factorial}`;


    contenido_card.appendChild(titulo_h2);
    card.appendChild(contenido_card);
    contenedor.appendChild(card);

    document.getElementById("numero").value = "";

}

function borrar(){
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";
}
