
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

 app = express();

// Configurações do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/meu_blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

// Rotas
app.use('/', blogRoutes);

// Inicia o servidor
app.listen(80, () => {
  console.log('Servidor rodando na porta 80');
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('/models/Post'); // Modelo Post que você já criou

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para exibir o formulário
app.get('/cadastrar', (req, res) => {
  res.render('pages/cadastrar_post');
});

// Rota para processar o envio do formulário
app.post('/cadastrar', async (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  const novoPost = new Post({ titulo, resumo, conteudo });

  try {
    await novoPost.save();
    res.redirect('/blog');
  } catch (err) {
    res.status(500).send('Erro ao salvar o post');
  }
});

// Conexão com o banco de dados e inicialização do servidor
mongoose.connect('mongodb://localhost/meu_blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(80, () => {
      console.log('Servidor rodando na porta 80');
    });
  })
  .catch(err => console.log(err));
