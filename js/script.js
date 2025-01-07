let senhaInput = document.getElementById('isenha')
let confirmarSenhaInput = document.getElementById('iconfirmarsenha')

senhaInput.addEventListener('keyup', () => {

    if(senhaInput.value == '') {
        confirmarSenhaInput.value = ''
        document.querySelector('.senhas-iguais').style.color = 'red'
    }

    renderRule(
        '.maiu-minu',
        senhaInput.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)
    )

    renderRule(
        '.um-numero',
        senhaInput.value.match(/([0-9])/)
    )

    renderRule(
        '.uma-caractere-especial',
        senhaInput.value.match(/([!@#$%&*?._])/)
    )

    renderRule(
        '.min-caractere',
        senhaInput.value.length >= 6
    )
})

function renderRule(ruleClass, valid) {
    let ruleArea = document.querySelector(ruleClass)

    ruleArea.querySelector('.material-icons').innerHTML = valid ? 'check_circle' : 'cancel'
    ruleArea.querySelector('.material-icons').style.color = valid ? 'green' : 'red'
}

confirmarSenhaInput.addEventListener('keyup', () => {
    if(confirmarSenhaInput.value == senhaInput.value) {
        document.querySelector('.senhas-iguais').innerHTML = 'check_circle'
        document.querySelector('.senhas-iguais').style.color = 'green'
        document.querySelector('.texto-c-s').innerHTML = 'Senhas iguais'
    } else {
        document.querySelector('.senhas-iguais span').innerHTML = 'cancel'
        document.querySelector('.senhas-iguais').style.color = 'red'
    }

})