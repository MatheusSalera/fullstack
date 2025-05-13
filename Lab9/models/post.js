const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  titulo: String,
  resumo: String,
  conteudo: String,
  dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
