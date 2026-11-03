// Dados de contato. Preencha e publique de novo: o que ficar vazio não aparece no site.
const CONFIG = {
  whatsapp: "",   // com DDD, só números. Ex.: "67999998888"
  mensagem: "Olá, Dra. Leinauva! Vim pelo site e gostaria de mais informações.",
  instagram: "",  // link completo. Ex.: "https://instagram.com/usuario"
  endereco: ""    // texto livre. Ex.: "Rua X, 123, Sala 4, Cidade - UF"
};

(function preencherContato() {
  const bloco = document.getElementById("contato");
  let temAlgo = false;

  const numero = CONFIG.whatsapp.replace(/\D/g, "");
  if (numero) {
    const completo = numero.length <= 11 ? "55" + numero : numero;
    const link = document.getElementById("c-whatsapp");
    link.href = "https://wa.me/" + completo + "?text=" + encodeURIComponent(CONFIG.mensagem);
    link.hidden = false;
    temAlgo = true;
  }

  if (CONFIG.instagram) {
    const item = document.getElementById("c-instagram");
    item.querySelector("a").href = CONFIG.instagram;
    item.hidden = false;
    temAlgo = true;
  }

  if (CONFIG.endereco) {
    const item = document.getElementById("c-endereco");
    item.textContent = CONFIG.endereco;
    item.hidden = false;
    temAlgo = true;
  }

  bloco.hidden = !temAlgo;
})();

// O sol sobe conforme a página passa pelo horizonte. É o único movimento do site.
(function nascerDoSol() {
  const horizonte = document.querySelector(".horizonte");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!horizonte) return;

  if (reduzir.matches) {
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
