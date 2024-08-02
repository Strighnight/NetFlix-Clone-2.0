// app.js

// Importa os módulos necessários
const express = require("express");
const path = require("path");

// Função para configurar os middlewares da aplicação
const configureMiddlewares = (app, publicDirectoryPath) => {
  app.use(express.static(publicDirectoryPath));
};

// Função para definir as rotas da aplicação
const defineRoutes = (app, publicDirectoryPath) => {
  app.get("/", (req, res) => {
    const indexPath = path.join(publicDirectoryPath, "index.html");
    res.sendFile(indexPath);
  });
};

// Função para criar a aplicação Express
const createApp = () => {
  const app = express();
  const publicDirectoryPath = path.join(__dirname, "public");

  configureMiddlewares(app, publicDirectoryPath);
  defineRoutes(app, publicDirectoryPath);

  return app;
};

// Exporta a função createApp para uso em outros módulos
module.exports = createApp;
