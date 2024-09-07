//Botão de voltar ao topo da pagina
const botaoTopo = document.getElementById('voltar-topo');

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
};

botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Barra de Pesquisa

// Captura os elementos do DOM
const barraPesquisa = document.getElementById('barra-pesquisa');
const resultados = document.getElementById('resultados');

// Função de busca
function buscarJogos() {
  const termo = barraPesquisa.value.toLowerCase().trim();
  resultados.innerHTML = ''; // Limpa resultados anteriores

  if (termo === '') {
    resultados.innerHTML = '';
    return;
  }

  // Filtra os sistemas de acordo com o termo digitado
  const jogosFiltrados = sistemas.filter(sistema => sistema.nome.toLowerCase().includes(termo));

  // Se houver jogos, exibe os resultados
  if (jogosFiltrados.length > 0) {
    jogosFiltrados.forEach(sistema => {
      const resultadoItem = document.createElement('div');
      resultadoItem.classList.add('game-card');

      resultadoItem.innerHTML = `
              <a href="${sistema.pagina}">
                  <img src="${sistema.imagem}" alt="Imagem de ${sistema.nome}" width="150" height="150">
              </a>
              <h3>${sistema.nome}</h3>
          `;

      resultados.appendChild(resultadoItem);
    });
  } else {
    resultados.innerHTML = '<p>Nenhum jogo encontrado</p>';
  }
}

// Adiciona o evento de digitação na barra de pesquisa
barraPesquisa.addEventListener('input', buscarJogos);
