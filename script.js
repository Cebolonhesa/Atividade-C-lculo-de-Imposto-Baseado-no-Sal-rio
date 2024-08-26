function calcularImposto() {
    
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor de salário válido.";
        return;
    }

    let resultado;
    if (salario <= 2000) {
        resultado = "Isento de Imposto.";
    } else if (salario <= 5000) {
        let imposto = salario * 0.10;
        resultado = "Imposto a ser pago: R$ " + imposto.toFixed(2);
    } else {
        let imposto = salario * 0.20;
        resultado = "Imposto a ser pago: R$ " + imposto.toFixed(2);
    }

    document.getElementById("resultado").textContent = resultado;
}
