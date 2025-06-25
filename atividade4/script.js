const API = "http://localhost:3000/alunos";

async function carregarAlunos() {
  try {
    const resposta = await fetch(API);
    const alunos = await resposta.json();

    const tbody = document.querySelector("#tabela-alunos tbody");
    tbody.innerHTML = "";
    let somaIRA = 0;

    alunos.forEach(aluno => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.ira}</td>
      `;
      tbody.appendChild(tr);
      somaIRA += aluno.ira;
    });

    const media = somaIRA / alunos.length;
    document.getElementById("media-ira").textContent = `Média do IRA: ${media.toFixed(2)}`;
  } catch (erro) {
    console.error("Erro ao carregar alunos:", erro);
  }
}

// POST
document.getElementById("form-adicionar").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const curso = document.getElementById("curso").value;
  const ira = parseFloat(document.getElementById("ira").value);

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, curso, ira }),
  });

  carregarAlunos();
  e.target.reset();
});

// PUT
document.getElementById("form-atualizar").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("id-editar").value;
  const nome = document.getElementById("nome-editar").value;
  const curso = document.getElementById("curso-editar").value;
  const ira = parseFloat(document.getElementById("ira-editar").value);

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, curso, ira }),
  });

  carregarAlunos();
  e.target.reset();
});

// DELETE
document.getElementById("form-deletar").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("id-deletar").value;

  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  carregarAlunos();
  e.target.reset();
});

carregarAlunos();
