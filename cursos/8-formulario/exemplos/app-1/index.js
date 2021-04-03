const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', urlencodedParser, (req, res) => {
  res.send(`
    <h3>Bem vindo, ${req.body.nome}</h3>
    <br>recebemos o seu telefone: ${req.body.telefone}
    <br>e seu email ${req.body.email},
    <br><br>mas não se preocupe, isso tudo está acontecendo em seu computador,ninguém ficará sabendo.
  `);
});

app.listen(3002);