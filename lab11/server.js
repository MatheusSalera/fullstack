const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/cadastra', (req, res) => {
  res.sendFile(__dirname + '/Cadastro.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/Login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const status = username === 'admin' && password === '1234' ? 'Sucesso' : 'Falha';
  res.render('resposta', { username, status });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
  });