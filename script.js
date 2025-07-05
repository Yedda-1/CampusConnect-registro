$(document).ready(function() {
  // Função para criar estrelas em um container específico
  function criarEstrelas($container, quantidade, alturaVh) {
    for(let i = 0; i < quantidade; i++) {
      const $star = $('<div class="star"></div>'); // Cria div estrela

      const size = Math.random() * 2 + 1; // Tamanho aleatório 1-3px
      const posX = Math.random() * 100; // Posição horizontal em vw
      const posY = Math.random() * alturaVh; // Posição vertical em vh

      const duration = Math.random() * 2.5 + 1.5; // Duração da animação piscar
      const delay = Math.random() * duration; // Delay aleatório

      // Aplica estilos inline para tamanho, posição e animação
      $star.css({
        width: size + 'px',
        height: size + 'px',
        top: posY + 'vh',
        left: posX + 'vw',
        animationDuration: duration + 's',
        animationDelay: delay + 's'
      });

      $container.append($star); // Adiciona estrela ao container
    }
  }

  // Cria 50 estrelas no header (altura 4vh)
  criarEstrelas($('.stars-background'), 50, 4);

  // Cria 30 estrelas no footer (altura 4vh)
  criarEstrelas($('.stars-footer'), 30, 4);

  // Não há ponto oval animado, então nenhuma animação extra
});
