function calcularFactorial(){
    const contenedor = document.getElementById("resultado");
    let numero = parseFloat(document.getElementById("numero").value);
    if (isNaN(numero) || numero < 0){
        alert("Ingresa un número valido")
        return;
    }
    let factorial =1;
    for(let i = 1; i<=numero; i++){
        factorial *= i;
    }
    
    const card = document.createElement("div");
    card.className = "card align-middle";
    card.style.width = "18rem";
    card.style.boxShadow = "4px 4px 4px 4px #424040ff";

    const img = document.createElement("img");
    img.src = "image/factorial.png";
    img.className = "card-img-top";
    img.style = "width = 30px, height= 20px"
    img.alt = "Simbolofactorial";

    const contenido_card = document.createElement("div");
    contenido_card.className = "card-body";
    const titulo_h2 = document.createElement("h2");
    titulo_h2.className = "card-title";
    titulo_h2.textContent = factorial;

    contenido_card.appendChild(titulo_h2);
    card.appendChild(img);
    card.appendChild(contenido_card);
    contenedor.appendChild(card);

    document.getElementById("numero").value = "";

}