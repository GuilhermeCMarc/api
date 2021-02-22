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

// http://localhost:3333/users
app.get("/", (req, res) => {
  return res.json({ message: "Hello World - NLW04" });
});

// 1 param => Rota(Recurso API)
// 2 param => req, res
app.post("/", (req, res) => {
  // Recebeu os dados para salvar
  return res.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
