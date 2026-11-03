// Dados de contato. Preencha e publique de novo: o que ficar vazio não aparece no site.
const CONFIG = {
  whatsapp: "",   // com DDD, só números. Ex.: "67999998888"
  mensagem: "Olá, Dra. Leinauva! Vim pelo site e gostaria de mais informações.",
  instagram: "",  // @usuario ou link do perfil. Ex.: "@dra.leinauva"
  endereco: ""    // texto livre. Ex.: "Rua X, 123, Sala 4, Cidade - UF"
};

const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

(function preencherContato() {
  const numero = CONFIG.whatsapp.replace(/\D/g, "");
  const usuario = CONFIG.instagram.trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/^@/, "")
    .replace(/[/?#].*$/, "");

  if (numero) {
    const completo = numero.length <= 11 ? "55" + numero : numero;
    const link = "https://wa.me/" + completo + "?text=" + encodeURIComponent(CONFIG.mensagem);
    document.querySelectorAll("[data-zap]").forEach(function (a) {
      a.href = link;
      a.hidden = false;
    });
  }

  if (usuario) {
    document.querySelectorAll("[data-insta]").forEach(function (a) {
      a.href = "https://instagram.com/" + usuario;
      a.hidden = false;
    });
    document.querySelectorAll("[data-insta-usuario]").forEach(function (el) {
      el.textContent = "@" + usuario;
    });
  }

  if (CONFIG.endereco) {
    const endereco = document.getElementById("c-endereco");
    endereco.textContent = CONFIG.endereco;
    endereco.hidden = false;
  }

  const temRedes = Boolean(numero || usuario);
  document.getElementById("redes").hidden = !temRedes;
  document.querySelectorAll("[data-redes]").forEach(function (a) { a.hidden = !temRedes; });
})();

// Estrelas do céu: posição fixa a cada visita (sequência pseudoaleatória com semente), só decoração.
(function estrelas() {
  let semente = 7;
  const aleatorio = () => (semente = (semente * 16807) % 2147483647) / 2147483647;

  document.querySelectorAll("[data-estrelas]").forEach(function (ceu) {
    const total = Number(ceu.dataset.estrelas) || 0;
    for (let i = 0; i < total; i++) {
      const estrela = document.createElement("i");
      const tamanho = 1 + aleatorio() * 2.2;
      estrela.style.left = (aleatorio() * 100).toFixed(1) + "%";
      estrela.style.top = (aleatorio() * 100).toFixed(1) + "%";
      estrela.style.setProperty("--t", tamanho.toFixed(1) + "px");
      estrela.style.setProperty("--d", (2 + aleatorio() * 3).toFixed(1) + "s");
      estrela.style.setProperty("--a", (-aleatorio() * 5).toFixed(1) + "s");
      ceu.appendChild(estrela);
    }
  });
})();

// Menu que ganha fundo ao rolar, barra de progresso do dia e botão flutuante do WhatsApp.
(function acompanharRolagem() {
  const topo = document.querySelector(".topo");
  const barra = document.querySelector(".progresso");
  const fab = document.querySelector(".fab");
  const hero = document.getElementById("inicio");
  let aguardando = false;

  function atualizar() {
    aguardando = false;
    const rolado = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    topo.classList.toggle("rolou", rolado > 40);
    barra.style.setProperty("--p", total > 0 ? Math.min(1, rolado / total).toFixed(4) : 0);
    fab.classList.toggle("fab-visivel", rolado > hero.offsetHeight * 0.7);
  }

  window.addEventListener("scroll", function () {
    if (!aguardando) {
      aguardando = true;
      requestAnimationFrame(atualizar);
    }
  }, { passive: true });
  window.addEventListener("resize", atualizar);
  atualizar();
})();

// Os blocos entram em sequência uma única vez, quando chegam à tela.
(function entrarEmCena() {
  if (reduzirMovimento.matches || !("IntersectionObserver" in window)) return;

  const grupos = [".lista-sinais li", ".areas .area", ".redes"];
  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visto");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  grupos.forEach(function (seletor) {
    document.querySelectorAll(seletor).forEach(function (el, i) {
      el.classList.add("revelar");
      el.style.setProperty("--i", i % 4);
      observador.observe(el);
    });
  });
})();

// O sol sobe conforme a página passa pelo horizonte.
(function nascerDoSol() {
  const horizonte = document.querySelector(".horizonte");
  if (!horizonte) return;

  if (reduzirMovimento.matches) {
    horizonte.style.setProperty("--subida", "0.85");
    return;
  }

  let aguardando = false;

  function atualizar() {
    aguardando = false;
    const caixa = horizonte.getBoundingClientRect();
    const altura = window.innerHeight;
    // 0 quando o horizonte aparece embaixo da tela; 1 quando a base dele passa de 40% da altura.
    const progresso = (altura * 0.95 - caixa.top) / (altura * 0.55 + caixa.height);
    const subida = Math.min(1, Math.max(0, progresso));
    horizonte.style.setProperty("--subida", subida.toFixed(3));
  }

  function aoRolar() {
    if (!aguardando) {
      aguardando = true;
      requestAnimationFrame(atualizar);
    }
  }

  window.addEventListener("scroll", aoRolar, { passive: true });
  window.addEventListener("resize", aoRolar);
  atualizar();
})();
