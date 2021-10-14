const express = require('express');
const mysql = require('mysql');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "ctH59aeZUn",
    password: "Mg3kk0T7wV",
});

server.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/cadastro.html");
})

server.get("/sucesso", (req, res) => {
    res.sendFile(__dirname + "/sucesso.html");
})

server.get("/home", (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

server.get("/", (req, res) => {
    res.redirect("/home");
})

server.get("/listagem", (req, res) => {
    res.sendFile(__dirname + "/listagem.html");
})

server.post('/produto/inserir', (req, res) => {
    var query = "INSERT INTO `ctH59aeZUn`.`produtos` (`descricao`, `preco`) VALUES ('" + req.body.descricao + "', '" + req.body.preco + "');"

    console.log(req.body)

    connection.query(query, (err, result, fields) => {
        if (err) throw err;
        console.log("Produto Inserido!")
    })

    res.redirect("/sucesso")
});

server.get('/produto/lista', (req, res) => {
    var query = "SELECT `produtos`.`descricao`, `produtos`.`preco` FROM `ctH59aeZUn`.`produtos`;"

    var lista = connection.query(query, (err, result, fields) => {
        if (err) throw err;
        console.log("Listagem com Sucesso!")
        res.send(result); 
    })
});

server.get("/listagem.js", (req, res) => {
    res.sendFile(__dirname + "/listagem.js")
})

server.listen(3000);