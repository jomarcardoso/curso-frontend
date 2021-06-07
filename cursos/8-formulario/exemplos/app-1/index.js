const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', urlencodedParser, (req, res) => {
  const form = req.body;

  console.log(form);

  res.send(`
    <h3>Bem vindo, ${form.nome}</h3>
    <br>recebemos o seu telefone: ${form.telefone}
    <br>e seu email ${form.email},
    <br><br>mas não se preocupe, isso tudo está acontecendo em seu computador,ninguém ficará sabendo.
  `);
});

app.listen(3002);