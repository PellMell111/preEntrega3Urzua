let botonRectangulo = document.getElementById("seleccionRectangulo");
botonRectangulo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = `
    <h2>Rectángulo</h2>
    <form id="inputRectangulo">
        <label for="alto">Alto:</label><input id="alto" type="number" name="alto">
        <label for="ancho">Ancho:</label><input id="ancho" type="number" name="ancho">
        <input type="button" id="submitRectangulo" value="Calcular">
    </form>
    <div id="displayResultado"></div>`;

    let calcularRectangulo = document.getElementById("submitRectangulo");

    calcularRectangulo.onclick = () => {
        let alto = document.getElementById("alto").value;
        let ancho = document.getElementById("ancho").value;

        let perimetro = (alto * 2) + (ancho *2);
        let area = alto * ancho;
        document.getElementById("displayResultado").innerHTML = `<p>Perímetro: ${perimetro} Area: ${area} cm²</p>`;
    }
};



let botonCirculo = document.getElementById("seleccionCirculo");
botonCirculo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = `
    <h2>Círculo</h2>
    <form id="inputCirculo">
        <label for="radio">Radio:</label><input id="radio" type="number" name="radio">
        <input type="button" id="submitCirculo" value="Calcular">
    </form>
    <div id="displayResultado"></div>`;
    
    let calcularCirculo = document.getElementById("submitCirculo");

    calcularCirculo.onclick = () => {
        let radio = document.getElementById("radio").value;

        let perimetro = radio * Math.PI * 2;
        let area = Math.PI * Math.pow(radio, 2);
        document.getElementById("displayresultado").innerHTML = `<p>Perímetro: ${perimetro} Area: ${area} cm²</p>`;
    }
};

let botonTriangulo = document.getElementById("seleccionTriangulo")
botonTriangulo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = `
    <h2>Triángulo</h2>
    <form id="inputTriangulo">
        <label for="altura">Altura:</label><input id="altura" type="number" name="altura">
        <label for="base">Base:</label><input id="base" type="number" name="base">
        <input type="button" id="submitTriangulo" value="Calcular">
    </form>
    <div id="displayResultado"></div>`;

    let calcularTriangulo = document.getElementById("submitTriangulo");

    calcularTriangulo.onclick = () => {
        let altura = document.getElementById("altura").value;
        let base = document.getElementById("base").value;

        let area = altura * base;
        document.getElementById("displayResultado").innerHTML = `<p>Area: ${area} cm²</p>`
    }
};

