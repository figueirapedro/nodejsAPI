fetch("/produto/lista")
    .then(resp => resp.json())
    .then(result => {
        result.forEach(element => {
            let div = document.createElement("div");
            let desc = document.createElement("h1");
            let preco = document.createElement("h3");
            let linha = document.createElement("hr");

            desc.innerText = "Nome do Produto: ";
            desc.appendChild(document.createTextNode(element.descricao))
            preco.innerText = "Preço do Produto: ";
            preco.appendChild(document.createTextNode(element.preco))

            div.append(desc);
            div.append(preco);
            div.append(linha);

            document.querySelector("#lista").appendChild(div)
        })
    })