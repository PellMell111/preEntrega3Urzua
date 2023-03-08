let botonRectangulo = document.getElementById("seleccionRectangulo");
botonRectangulo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = `
    <h2>Rectángulo</h2>
    <form id="inputRectangulo">
        <label for="alto">Alto:</label><input id="alto" type="number" name="alto">
        <label for="ancho">Ancho:</label><input id="ancho" type="number" name="ancho">
        <input type="button" id="submitRectangulo" value="Calcular">
    </form>
    <div id="displayResultado"></div>`};

let calcularRectangulo = document.getElementById("submitRectangulo");

calcularRectangulo.onclick = () => {
    let alto = document.getElementById("alto").value;
    let ancho = document.getElementById("ancho").value;

    let area = alto * ancho;
    document.getElementById("displayResultado").innerHTML = `<p>${area} cm²</p>`}

let botonCirculo = document.getElementById("seleccionCirculo");
botonCirculo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = `
    <h2>Círculo</h2>
    <form id="inputCirculo">
        <label for="radio">Radio:</label><input id="radio" type="number" name="radio">
        <input type="button" id="submitCirculo" value="Calcular">
    </form>
    <div id="displayResultado"></div>`};

let botonTriangulo = document.getElementById("seleccionTriangulo")
botonTriangulo.onclick = () => {document.getElementById("seleccionFigura").innerHTML = "Triángulo"};