const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const imagem = document.getElementById('imagem')

async function fotoGato(){
    try{
        const dados = await fetch(BASE_URL)
        const json = await dados.json()
        return json.webpurl
    }
    catch(erro){
        console.log(erro.message)
    }
}

function btClicado(){
    imagem.src = fotoGato()
}