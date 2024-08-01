// app.js

// Importa os módulos necessários
const express = require("express");
const path = require("path");

// Função para criar a aplicação Express
const createApp = () => {
  const app = express();

  // Define o diretório público para servir arquivos estáticos
  const publicDirectoryPath = path.join(__dirname, "public");
  app.use(express.static(publicDirectoryPath));

  // Rota principal que serve o arquivo index.html
  app.get("/", (req, res) => {
    const indexPath = path.join(publicDirectoryPath, "index.html");
    res.sendFile(indexPath);
  });

  // Retorna a instância da aplicação Express
  return app;
};

// Exporta a função createApp para uso em outros módulos
module.exports = createApp;
