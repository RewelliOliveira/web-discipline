const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Para ler JSON no corpo da requisição

let alunos = [
  { id: 1, nome: "João", curso: "Engenharia", ira: 7.5 },
  { id: 2, nome: "Maria", curso: "Medicina", ira: 9.0 },
  { id: 3, nome: "Lucas", curso: "Computação", ira: 8.2 },
];

let nextId = 4;

// GET
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// POST (Create)
app.post("/alunos", (req, res) => {
  const novoAluno = { id: nextId++, ...req.body };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// PUT (Update)
app.put("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex(a => a.id === id);
  if (index !== -1) {
    alunos[index] = { id, ...req.body };
    return res.json(alunos[index]);
  }
  res.status(404).json({ mensagem: "Aluno não encontrado" });
});

// DELETE
app.delete("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  alunos = alunos.filter(a => a.id !== id);
  res.json({ mensagem: "Aluno removido com sucesso" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
