import express from "express";

const app = express();
const port = 3333;

/**
 * GET    => Busca
 * POST   => Salvar
 * PUT    => Alterar
 * DELETE => Deletar
 * PATCH  => Alteração específica
 */

app.get("/users");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
