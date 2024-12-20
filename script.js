function validarNome(nome) {
    const nomes = nome.trim().split(' ');
    return nomes.length >= 2;
}

function obterSobrenome(nome) {
    const nomes = nome.trim().split(' ');
    return nomes[nomes.length - 1].toLowerCase();
}

function contarVogais(nome) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < nome.length; i++) {
        if (vowels.includes(nome[i].toLowerCase())) {
            count++;
        }
    }

    return count.toString().padStart(2, '0');
}

document.getElementById('form').addEventListener('submit', function () {
    const nome = document.getElementById('nome').value;

    if (!validarNome(nome)) {
        alert('Por favor, insira o nome completo.');
        return;
    }

    const sobrenome = obterSobrenome(nome);
    const numeroVogais = contarVogais(nome);

    const senha = sobrenome + numeroVogais;

    document.getElementById('senha').textContent = senha;

    document.getElementById('nome').value = '';
});
