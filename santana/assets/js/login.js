document.querySelector('#login-btn').addEventListener('click', (e) => {
    const conta = new Conta()
    conta.verify()
    document.querySelector('.login-sign-in').submit()
})

//funcoes

const getData = () => [document.querySelector('#email').value,
document.querySelector('#senha').value
]

const limparInput = () => {
    document.querySelector('#senha').value = ''
}
