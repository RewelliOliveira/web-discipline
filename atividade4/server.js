const express = require("express");
const cors = require("cors");

const app = express(); 
app.use(cors()); 

const alunos = [
  { nome: "João", curso: "Engenharia", ira: 7.5 },
  { nome: "Maria", curso: "Medicina", ira: 9.0 },
  { nome: "Lucas", curso: "Computação", ira: 8.2 },
  { nome: "Ana", curso: "Arquitetura", ira: 8.7 },
  { nome: "Bruno", curso: "Direito", ira: 7.9 },
  { nome: "Carla", curso: "Psicologia", ira: 9.3 },
  { nome: "Daniel", curso: "Engenharia", ira: 6.8 },
  { nome: "Fernanda", curso: "Design", ira: 8.5 },
  { nome: "Igor", curso: "Física", ira: 7.2 },
  { nome: "Larissa", curso: "Biologia", ira: 8.0 },
];

app.get("/alunos", (req, res) => {
  res.json(alunos);
}); 

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
