const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const users = [];


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Projects.html'));
});

app.get('/cadastra', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cadastro.html'));
});

app.post('/cadastra', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.render('resposta', { status: 'Login bem-sucedido!', user: username });
  } else {
    res.render('resposta', { status: 'Falha no login. Usuário ou senha incorretos.', user: null });
  }
});

app.listen(80, () => {
  console.log('Servidor rodando na porta 80');
});