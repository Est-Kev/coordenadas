// Función para convertir coordenadas polares a rectangulares
function polarToRectangularCalculation(r, theta) {
    const thetaRad = theta * (Math.PI / 180);
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);
    return { x: x.toFixed(2), y: y.toFixed(2) };
}

// Función para convertir coordenadas rectangulares a polares
function rectangularToPolarCalculation(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const thetaRad = Math.atan2(y, x);
    const theta = thetaRad * (180 / Math.PI);
    return { r: r.toFixed(2), theta: theta.toFixed(2) };
}

// Función que interpreta los valores de los inputs y actualiza la interfaz para polares a rectangulares
function convertPolarToRectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        alert('Introduce valores válidos.');
        return;
    }

    const result = polarToRectangularCalculation(r, theta);
    document.getElementById('polar-result').textContent = `X = ${result.x}, Y = ${result.y}`;
}

// Función que interpreta los valores de los inputs y actualiza la interfaz para rectangulares a polares
function convertRectangularToPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        alert('Introduce valores válidos.');
        return;
    }

    const result = rectangularToPolarCalculation(x, y);
    document.getElementById('rectangular-result').textContent = `Radio = ${result.r}, Ángulo = ${result.theta} grados`;
}
