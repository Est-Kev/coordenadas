function convertPolarToRectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        alert('Introduce valores válidos.');
        return;
    }

    const thetaRad = theta * (Math.PI / 180);
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);

    document.getElementById('polar-result').textContent = `X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}

function convertRectangularToPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        alert('Introduce valores válidos.');
        return;
    }

    const r = Math.sqrt(x * x + y * y);
    const thetaRad = Math.atan2(y, x);
    const theta = thetaRad * (180 / Math.PI);

    document.getElementById('rectangular-result').textContent = `Radio = ${r.toFixed(2)}, Ángulo = ${theta.toFixed(2)} grados`;
}
