const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

// Página inicial com lista de posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.render('pages/blog', { posts });
  } catch (err) {
    res.status(500).send('Erro ao buscar posts');
  }
});

// Página para cadastrar novo post
router.get('/cadastrar', (req, res) => {
  res.render('pages/cadastrar_post');
});

// Recebe os dados do formulário e cria um novo post
router.post('/cadastrar', async (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  const novoPost = new Post({ titulo, resumo, conteudo });
  try {
    await novoPost.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Erro ao salvar post');
  }
});

module.exports = router;
