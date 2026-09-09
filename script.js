function sumar() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + (a + b);
}