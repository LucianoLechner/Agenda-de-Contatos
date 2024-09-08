const form = document.getElementById('form-contatos')
let lines = ''
const totalContatos = []

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    somaContados();
})

function addLine() {
    const name = document.getElementById('nome-contato')
    const tel = document.getElementById('telefone-contato')
    const errorName = document.getElementById('msg-error-name')
    const errorTel = document.getElementById('msg-error-tel')
    const tableBody = document.querySelector('tbody')

    if (name.value === '') {
        errorName.innerHTML = 'Adicione um nome !'
    } else if (tel.value === '') {
        errorName.innerHTML = ''
        errorTel.innerHTML = 'Adicione o telefone !'
    } else if (totalContatos.includes(name.value)){
        errorTel.innerHTML=''
        errorName.innerHTML = `O contado ${name.value} já foi cadastrato, por favor insira outro nome.`
    } else {
        errorName.innerHTML = ''
        totalContatos.push(name.value)
        let tablecollum = '<tr>'
        tablecollum = tablecollum + '<td><img src="./IMAGE/profile.png" alt="" id="imagem"></td>'
        tablecollum = tablecollum + `<td>${name.value}</td>`
        tablecollum = tablecollum + `<td>${tel.value}</td>`
        tablecollum = tablecollum + '</tr>'
    
        lines = lines + tablecollum
    
        tableBody.innerHTML = lines

        name.value = ''
        tel.value = ''
        errorTel.innerHTML=''
        errorName.innerHTML = ''
        }
}

function somaContados() {
    const qtdContado = document.getElementById('total-contatos')

    qtdContado.innerHTML = totalContatos.length
}
