# Site da Dra. Leinauva Tolentino

Site institucional estático (HTML, CSS e JS, sem build). Médica, saúde e bem-estar da mulher.

## Como rodar

```bash
python -m http.server 5173
```

Abra http://localhost:5173.

## Como preencher o contato

Edite o bloco `CONFIG` no começo de `script.js`. O que ficar vazio não aparece no site.

- `whatsapp`: com DDD, só números. Liga o botão do bloco "Conheça meu Instagram", o botão flutuante e o ícone do rodapé.
- `instagram`: `@usuario` ou link do perfil. Liga o botão do bloco de redes, o item "Redes" do menu e o ícone do rodapé.
- `endereco`: texto livre, aparece no fim do bloco de redes.

Com WhatsApp e Instagram vazios, o bloco de redes inteiro fica escondido.

## Fotos

As fotos ficam em `public/images/` (JPG, até 1500 px de largura, já leves):

- `consultorio.jpg`: retrato principal, na abertura.
- `poltrona.jpg`, `em-pe.jpg`, `estetoscopio.jpg`: carrossel do bloco "Quem sou" (em `index.html`, dentro de `.galeria-trilho`; se mudar a quantidade, ajuste o "/ 3" da contagem).
- `consulta-online.jpg`: círculo da seção de telemedicina.

Para trocar uma foto, substitua o arquivo mantendo o nome. O CRM entra em `CONFIG.crm` no `script.js` (ex.: `"CRM-MS 12345"`) e aparece na abertura, na assinatura e no rodapé.

## Pendências de conteúdo

- Confirmar com a doutora que a foto `consulta-online.jpg` é uma foto real dela (parece retocada ou gerada por IA).
- CRM: publicado como "CRM 37272-MD", exatamente como o cliente enviou. "MD" não é sigla de estado; vale conferir no registro do CFM.
- Logo, se existir (hoje o nome aparece em tipografia).
- WhatsApp, Instagram e endereço do consultório.
- Cidade e registro profissional (CRM/UF): deixados de fora por decisão do cliente.
- Domínio próprio (recomendado: Registro.br, cerca de R$ 40 por ano).
- Aviso do rodapé ("não substitui consulta médica"): sugestão nossa, a doutora precisa aprovar.

## Telemedicina

O site divulga o atendimento por telemedicina com foco na saúde da mulher: selo e botão na abertura, seção própria (`#telemedicina`) e botões de contato. Os textos da seção foram escritos por nós a partir dos textos da doutora (escuta cuidadosa, avaliação individualizada, rotina corrida) e precisam da aprovação dela. Confirmado pelo cliente: atende todo o Brasil, só por telemedicina. Falta saber qual plataforma usa e como funciona o agendamento.

Atenção: a publicidade médica de telemedicina costuma exigir nome completo, CRM/UF e RQE (se houver) no material. Hoje o site está sem CRM por decisão do cliente; vale revisar isso com a doutora.
