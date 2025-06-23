async function carregarAlunos() {
  try {
    const resposta = await fetch("http://localhost:3000/alunos");
    const alunos = await resposta.json(); 

    const tbody = document.querySelector("#tabela-alunos tbody");
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

carregarAlunos();
