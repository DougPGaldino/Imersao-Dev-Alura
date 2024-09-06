//Botão de voltar ao topo da pagina
const botaoTopo = document.getElementById('voltar-topo');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)   
 {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";   

  }
};

botaoTopo.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
