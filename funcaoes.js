const estado = require("./arquivos.js")
const estad = estado.listaDeEstados.estados

function getListaDeEstados() {
    let uf = []
    let lista
    let quantidade
    

        estad.forEach(function (mostrarEstados) {
            uf.push(mostrarEstados.sigla)
            console.log(mostrarEstados)

        })

        quantidade = uf.length
        lista = {uf, quantidade}
        return lista
        
         

}
function getDadosEstado(siglaFiltrar){ 
    let sigla = String(siglaFiltrar).toUpperCase()
    let resultado = false

    for(let estado of estad){
        if(sigla == estado ){
            return resultado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao
    
            }


    }
 
    }

 return false
    
}
console.log(getDadosEstado("ac"));



