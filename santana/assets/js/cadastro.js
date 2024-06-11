document.querySelector('#register-btn').addEventListener('click', (e) => {
    const conta = new Conta()
    if (conta.verify()) {
        document.querySelector('.login-sign-in').submit()
    } else {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A senha deve possuir no mínimo 6 caracteres e as senhas devem ser iguais',
            confirmButtonColor: "#DD6B55"
        })
        limparInputs(2)
    }
})

//funcoes

const getData = () => [document.getElementById('email').value,
document.getElementById('senha').value,
document.getElementById('rSenha').value
]

const limparInputs = (num) => {
    switch (num) {
        case 3:
            document.getElementById('email').value = ''
        case 2:
            document.getElementById('senha').value = ''
            document.getElementById('rSenha').value = ''
            break;
    }
}
