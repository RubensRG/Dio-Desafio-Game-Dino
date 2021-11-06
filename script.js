const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;


// adiciona os botões responsaveis por fazer pular
function jogar(pular) {
  
}

function handleKeyUp(event) {
  if (event.keyCode === 38,38) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 180) {
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 10;
          dino.style.bottom = position + 'px';
        }
        // duração da queda
      }, 10);
    } else {
      // Subindo
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 10);
}

// faz aparecer os cactos de forma aleatória
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 5500;
  
  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -50) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
      
      // distância de impacto cactusPosition <30
    } else if (cactusPosition > 0 && cactusPosition < 30 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
    // velocidade dos cactos
  }, 12);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);


// faz aparecer os cactos de forma aleatória
function createCactus1() {
  const cactus1 = document.createElement('div');
  let cactus1Position = 1000;
  let randomTime = Math.random() * 5500;
  
  if (isGameOver) return;

  cactus1.classList.add('cactus1');
  background.appendChild(cactus1);
  cactus1.style.left = cactus1Position + 'px';

  let leftTimer = setInterval(() => {
    if (cactus1Position < -50) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
      
      // distância de impacto cactusPosition <30
    } else if (cactus1Position > 0 && cactus1Position < 30 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactus1Position -= 10;
      cactus1.style.left = cactus1Position + 'px';
    }
    // velocidade dos cactos
  }, 12);

  setTimeout(createCactus1, randomTime);
}

createCactus1();
document.addEventListener('keyup', handleKeyUp);

// faz aparecer os pterods de forma aleatória
function createPterod() {
  const pterod = document.createElement('div');
  let pterodPosition = 1000;
  
  // quantidade de cactos e pterodáctilos
  let randomTime = Math.random() * 4500;
  
  if (isGameOver) return;

  pterod.classList.add('pterod');
  background.appendChild(pterod);
  pterod.style.left = pterodPosition + 'px';

  let leftTimer = setInterval(() => {
    if (pterodPosition < -50) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(pterod);
      
      // distância de impacto pterodPosition <30
    } else if (pterodPosition > 0 && pterodPosition < 30 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      pterodPosition -= 9;
      pterod.style.left = pterodPosition + 'px';
    }
    // velocidade dos pterodáctilos
  }, 10);

  setTimeout(createPterod, randomTime);
}

createPterod();
document.addEventListener('keyup', handleKeyUp);


// faz aparecer os pterods de forma aleatória
function createPterod2() {
  const pterod2 = document.createElement('div');
  let pterod2Position = 1000;
  
  // quantidade de cactos e pterodáctilos
  let randomTime = Math.random() * 5000;
  
  if (isGameOver) return;

  pterod2.classList.add('pterod2');
  background.appendChild(pterod2);
  pterod2.style.left = pterod2Position + 'px';

  let leftTimer = setInterval(() => {
    if (pterod2Position < -50) {
      // Saiu da tela
      clearInterval(leftTimer);
      background.removeChild(pterod2);
      
      // distância de impacto pterodPosition <30
    } else if (pterod2Position > 0 && pterod2Position < 30 && position < 60) {
      // Game over
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      pterod2Position -= 9;
      pterod2.style.left = pterod2Position + 'px';
    }
    // velocidade dos pterodáctilos
  }, 10);

  setTimeout(createPterod2, randomTime);
}

createPterod2();
document.addEventListener('keyup', handleKeyUp);




