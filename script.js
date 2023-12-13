function calculateGauss() {
    const mirrorType = document.getElementById("mirrorType").value;
    const objectDistance = parseFloat(document.getElementById("objectDistance").value);
    const imageDistance = parseFloat(document.getElementById("imageDistance").value);

    if (isNaN(objectDistance) || isNaN(imageDistance)) {
        alert("Por favor insira valores numéricos válidos para Distância do Objeto e Distância da Imagem.");

        return;
    }

    let focalLength;

    if (mirrorType === "concave") {
        focalLength = 1 / ((1 / objectDistance) + (1 / imageDistance));
    } else if (mirrorType === "convex") {
        focalLength = 1 / ((1 / objectDistance) - (1 / imageDistance));
    } else {
        alert("Tipo de espelho inválido selecionado.");
        return;
    }

    displayResult(focalLength);
}

function displayResult(focalLength) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `Comprimento focal: ${focalLength.toFixed(2)} cm`;

    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
