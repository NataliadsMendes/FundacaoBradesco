'use strict'

// Referenciar o botão
const switcher = document.querySelector('.btn')

// Evento de clique para alternar o tema
switcher.addEventListener('click', function() {
    // Alterna entre 'dark-theme' e 'light-theme'
    document.body.classList.toggle('dark-theme')

    // Verifica se a classe 'dark-theme' está presente no body
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light"  // Se estiver no tema escuro, exibe "Light"
    } else {
        this.textContent = "Dark"   // Se estiver no tema claro, exibe "Dark"
    }

    // Exibe a classe atual
    console.log('current class name: ' + document.body.className)
})
