const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {

    const numeroA = document.getElementById('Numero-A').value;
    const numeroB = document.getElementById('Numero-B').value;

    if (Number(numeroB) <= Number(numeroA)) {

        event.preventDefault();
        alert("Erro: O número B deve ser maior que o número A.");
    } else {

        alert("Parabéns, o formulário foi enviado!");
    }
});
