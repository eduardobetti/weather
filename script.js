// Lógica de Programação desta aplicação

// 1. saber quando o botão for clicado
// 2. pegar o que está dentro do input
// 3. ir no servidor e pegar as informações do tempo atualizadas
// 4. organizar as informações obtidas
// 5. colocar as informações na tela

let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

function colocarNaTela (dados) {
    console.log(dados)

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade + 
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric'
    ,
        ).then((resposta) => resposta.json())
    
        // AWAIT = ESPERE - determina que a aplicação espere brevemente antes de executar o comando
        // FETCH = BUSQUE - ferramenta do JavaScript para acessar servidores
        // THEN = ENTÃO - realize após
        // JSON = JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    // passo 1. (onclick="cliqueiNoBotao()") no button em HTML

    let cidade = document.querySelector('.input-cidade').value
    // passo 2. pega o valor (.value) inserido na input

    buscarCidade(cidade)
}

/*
Clica no BOTÃO
    -> CHAMA A FUNÇÃO cliqueiNoBotao()
    -> Vai no INPUT e pega o que está lá dentro
    -> PASSAR a cidade para o servidor

    Math.floor -> Ferramenta do JavaScript para Arredondar valores

*/