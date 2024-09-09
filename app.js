/*console.log("Hello World!");*/
/*console.log(dados[2]);*/
/*console.log(dados[0].descricao);*/
//console.log(dados);


//função do click - quando clicar no button ela acontece 
function pesquisar() {

    let section = document.getElementById("result")
    console.log(section);

    /*criando a funcionalidade de pesquisa*/
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se o campoPesquisa for vazio, retorna mensagem de nada encontrado / error 
    if (!campoPesquisa){
        section.innerHTML = "<h4>Você precisa digitar o nome do Livro ou Autor</h4>"
        return
    }

    //deixando os valores do campoPesquisa com letras maisculas para condicional funcionar corretamente 
    campoPesquisa = campoPesquisa.toUpperCase()

    //variavel vazia para armazenar 
    let resultados = " ";
    let titulo = " ";
    let autor = " ";
    let descricao = " ";
    let tags = " ";

    //laço de repetição
    //para cada (dado dentro da lista de dados) {algo deve acontecer} 
    //variavel sendo preenchida
    for (let dado of dados) {

        //variaveis vazias sendo prenchidas pelos dados que nos já temos 
        titulo = dado.titulo.toUpperCase()
        descricao = dado.descricao.toUpperCase()
        autor = dado.autor.toUpperCase()
        tags = dado.tags.toUpperCase()

        //se titulo ou descrição ou autor includes campoPesquisa 
        //então faça... algo //usando as variaveis vazias que criamos ali em cima 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || autor.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            //Cria um novo elemento
            resultados += `            
            <div class="item-resultado">
                <img src= ${dado.Imagem}>
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <h3>${dado.autor}</h3>
                <p class="descricao-meta">${dado.descricao}</p>    
                <a href=${dado.link} target="_blank">Adquira o seu</a>
            </div>
            `
        } 
    } 

    if (resultados == " ") {
        resultados = "<h4>Item não corresponde a pesquisa</h4>"
    }

    //apresentando os resultados das variaveis 
    section.innerHTML = resultados

}

function fantasia() {

    let fantasia = document.getElementById("result");

    resultados = "";

    for (let dado of dados) {

        if (dado.tags.includes("fantasia")) {
        resultados += `            
        <div class="item-resultado">
            <img src= ${dado.Imagem}>
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <h3>${dado.autor}</h3>
            <p class="descricao-meta">${dado.descricao}</p>    
            <a href=${dado.link} target="_blank">Adquira o seu</a>
        </div>
        `
        }
    }    

    fantasia.innerHTML = resultados; 
}

function misterio() {

    let misterio = document.getElementById("result");

    resultados = "";

    for (let dado of dados) {

        if (dado.tags.includes("misterio")) {
        resultados += `            
        <div class="item-resultado">
            <img src= ${dado.Imagem}>
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <h3>${dado.autor}</h3>
            <p class="descricao-meta">${dado.descricao}</p>    
            <a href=${dado.link} target="_blank">Adquira o seu</a>
        </div>
        `
        }
    }    

    misterio.innerHTML = resultados; 
}

function cientifica() {

    let cientifica = document.getElementById("result");

    resultados = "";

    for (let dado of dados) {

        if (dado.tags.includes("cientifica")) {
        resultados += `            
        <div class="item-resultado">
            <img src= ${dado.Imagem}>
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <h3>${dado.autor}</h3>
            <p class="descricao-meta">${dado.descricao}</p>    
            <a href=${dado.link} target="_blank">Adquira o seu</a>
        </div>
        `
        }
    }    

    cientifica.innerHTML = resultados; 
}

function todos() {

    let todos = document.getElementById("result");

    resultados = "";

    for (let dado of dados) {

        if (dado.tags.includes("todos")) {
        resultados += `            
        <div class="item-resultado">
            <img src= ${dado.Imagem}>
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <h3>${dado.autor}</h3>
            <p class="descricao-meta">${dado.descricao}</p>    
            <a href=${dado.link} target="_blank">Adquira o seu</a>
        </div>
        `
        }
    }    

    todos.innerHTML = resultados; 
}