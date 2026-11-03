# Site da Dra. Leinauva Tolentino

Site institucional estático (HTML, CSS e JS, sem build). Médica, saúde e bem-estar da mulher.

## Como rodar

```bash
python -m http.server 5173
```

Abra http://localhost:5173.

## Como preencher o contato

Edite o bloco `CONFIG` no começo de `script.js`. O que ficar vazio não aparece no site.

- `whatsapp`: com DDD, só números.
- `instagram`: link completo do perfil.
- `endereco`: texto livre.

## Como colocar a foto da doutora

1. Salve a foto em `public/images/dra-leinauva.webp` (largura máxima de 1600 px).
2. Em `index.html`, troque o `<div class="arco">...</div>` por uma `<img>` com `class="arco"`, `src="public/images/dra-leinauva.webp"` e `alt="Dra. Leinauva Tolentino"`, e em `style.css` acrescente `object-fit: cover` à regra `.arco`.

## Pendências de conteúdo

- Foto da doutora (hoje há um monograma "LT" no lugar).
- Logo, se existir (hoje o nome aparece em tipografia).
- WhatsApp, Instagram e endereço do consultório.
- Cidade e registro profissional (CRM/UF): deixados de fora por decisão do cliente.
- Domínio próprio (recomendado: Registro.br, cerca de R$ 40 por ano).
- Aviso do rodapé ("não substitui consulta médica"): sugestão nossa, a doutora precisa aprovar.
