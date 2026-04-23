// MENU
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("menu").classList.remove("active");
      document.querySelector(".menu-toggle").classList.remove("active");
    });
  });
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

// ===== LOJAS + MAPA =====
const lojas = [
  {
    nome: "VallCar Guarapuava",
    endereco: "Rua Sergipe, marginal da BR, 277 - Industrial, Guarapuava - PR",
    whatsapp: "5511999999999",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976386893!6m8!1m7!1s-8Jmu55eE64QMF8dVzMZCA!2m2!1d-25.36561014584551!2d-51.47965740499711!3f328.76263!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Cascavel",
    endereco:
      "Rua Olindo Periolo, 1038/1050 - Pacaembu, Cascavel - PR, 85816-330",
    whatsapp: "5511888888888",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976600531!6m8!1m7!1s4eLu3zY5mKB5q8OckPKmCQ!2m2!1d-24.9571436377854!2d-53.42255418563852!3f58.547913!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Foz do Iguaçu",
    endereco:
      "Av. Carlos Gomes, 1115 - Vila Perola, Foz do Iguaçu - PR, 85865-130",
    whatsapp: "5511777777777",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976739067!6m8!1m7!1sj1DzWq52KPSDT3r5oolUOQ!2m2!1d-25.51351680305421!2d-54.58415749101925!3f4.8305902!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Medianeira",
    endereco: "Rua Sergipe, marginal da BR, 277 - Industrial, Guarapuava - PR",
    whatsapp: "5511999999999",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976386893!6m8!1m7!1s-8Jmu55eE64QMF8dVzMZCA!2m2!1d-25.36561014584551!2d-51.47965740499711!3f328.76263!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Guaira",
    endereco:
      "Rua Olindo Periolo, 1038/1050 - Pacaembu, Cascavel - PR, 85816-330",
    whatsapp: "5511888888888",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976600531!6m8!1m7!1s4eLu3zY5mKB5q8OckPKmCQ!2m2!1d-24.9571436377854!2d-53.42255418563852!3f58.547913!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Toledo",
    endereco:
      "Av. Carlos Gomes, 1115 - Vila Perola, Foz do Iguaçu - PR, 85865-130",
    whatsapp: "5511777777777",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976739067!6m8!1m7!1sj1DzWq52KPSDT3r5oolUOQ!2m2!1d-25.51351680305421!2d-54.58415749101925!3f4.8305902!4f0!5f0.7820865974627469",
  },
  {
    nome: "VallCar Pato Branco",
    endereco:
      "Rua Olindo Periolo, 1038/1050 - Pacaembu, Cascavel - PR, 85816-330",
    whatsapp: "5511888888888",
    mapa: "https://www.google.com/maps/embed?pb=!4v1776976600531!6m8!1m7!1s4eLu3zY5mKB5q8OckPKmCQ!2m2!1d-24.9571436377854!2d-53.42255418563852!3f58.547913!4f0!5f0.7820865974627469",
  },
];

function mostrar(i) {
  const loja = lojas[i];

  document.getElementById("detalhes").innerHTML = `
    <h3>${loja.nome}</h3>
    <p>${loja.endereco}</p>

    <iframe src="${loja.mapa}"></iframe>

    <a class="btn-whats" target="_blank"
      href="https://wa.me/${loja.whatsapp}">
      Falar no WhatsApp
    </a>
  `;
}

// ===== SLIDER =====
let index = 0;
let interval;

function slideDepoimentos() {
  const container = document.querySelector(".depoimentos-conteudo");
  const items = document.querySelectorAll("blockquote");

  if (!container || items.length === 0) return;

  const largura = items[0].offsetWidth;

  index = (index + 1) % items.length;

  container.style.transform = `translateX(-${index * largura}px)`;
}

function iniciarSlider() {
  if (interval) clearInterval(interval);

  if (window.innerWidth <= 768) {
    interval = setInterval(slideDepoimentos, 3000);
  }
}

window.addEventListener("load", iniciarSlider);
window.addEventListener("resize", iniciarSlider);

// Função para animar a contagem dos números
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Quanto maior, mais lenta é a animação

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target"); // O número final
      const count = +counter.innerText; // O número atual

      // Cálculo do incremento baseado na velocidade
      const inc = target / speed;

      if (count < target) {
        // Adiciona o incremento e arredonda para cima
        counter.innerText = Math.ceil(count + inc);
        // Chama a função novamente após um curto tempo (ms)
        setTimeout(updateCount, 30);
      } else {
        // Garante que o número final seja exatamente o target
        counter.innerText = target + (target === 100 ? "k+" : "");
      }
    };

    updateCount();
  });
}

// Iniciar a animação apenas quando a seção estiver visível na tela
const observerOptions = {
  threshold: 0.5, // Ativa quando 50% da seção aparecer
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target); // Para de observar após animar uma vez
    }
  });
}, observerOptions);

// Observar a seção de benefícios
document.addEventListener("DOMContentLoaded", () => {
  const targetSection = document.querySelector("#beneficios");
  if (targetSection) {
    observer.observe(targetSection);
  }
});

// Abre e fecha o dropdown no mobile
function toggleDropdown() {
  const lista = document.getElementById("lista-lojas");
  const seletor = document.querySelector(".loja-selecionada");

  lista.classList.toggle("aberta");
  seletor.classList.toggle("ativo");
}

// Função para selecionar a loja e atualizar a interface
function selecionarLoja(index, nome) {
  // 1. Chama a função que você já tem para mostrar os detalhes
  mostrar(index);

  // 2. Atualiza o texto do botão no mobile
  document.getElementById("nome-loja-atual").innerText = nome;

  // 3. Fecha o menu se estiver no mobile
  if (window.innerWidth <= 768) {
    toggleDropdown();
  }
}

// Opcional: Fechar o dropdown se clicar fora dele
window.onclick = function (event) {
  if (
    !event.target.matches(".loja-selecionada") &&
    !event.target.matches("#nome-loja-atual")
  ) {
    const lista = document.getElementById("lista-lojas");
    const seletor = document.querySelector(".loja-selecionada");
    if (lista.classList.contains("aberta")) {
      lista.classList.remove("aberta");
      seletor.classList.remove("ativo");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  let isPaused = false;

  // Pausa o automático quando o mouse está em cima
  track.addEventListener("mouseenter", () => (isPaused = true));
  track.addEventListener("mouseleave", () => (isPaused = false));

  function autoPlay() {
    if (isPaused) return;

    const cardWidth = track.querySelector("blockquote").offsetWidth + 20; // Largura + Gap
    const maxScroll = track.scrollWidth - track.offsetWidth;

    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" }); // Volta ao início
    } else {
      track.scrollBy({ left: cardWidth, behavior: "smooth" }); // Passa para o próximo
    }
  }

  // Passa o slide a cada 4 segundos
  setInterval(autoPlay, 4000);
});
