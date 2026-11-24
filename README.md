# Carbone Steakhouse · entrega da Timeless

Protótipo publicado com o ok do Guilherme em 23/11/2026, só para a Carbone ver. Não é o site oficial da casa. Todas as páginas têm `noindex` e o `robots.txt` bloqueia buscadores.

| Arquivo | O que é |
|---|---|
| `index.html` | A proposta, em forma de cardápio: entrada, prato principal, acompanhamentos, a conta, o café |
| `Timeless - Proposta Carbone Steakhouse.pdf` | A mesma proposta em PDF A4 |
| `site/` | Site da casa (no ar: carbonesteakhouse.com.br): primeira tela pelo horário, cortes por peso, 62 pratos com alergênicos e inglês, eventos |
| `site/reservar/` | Reserva em passos com triagem (no ar: /reservar). Comum confirma na hora; grupo a partir de 6 ou pedido especial vai para a equipe |
| `site/links/` | Link da bio (no ar: /links) |
| `site/comum.js` | Horários, fuso e idioma, compartilhados entre as páginas |
| `site/cardapio.js` | Cardápio e carta de bebidas copiados do GetIn em 23/11/2026, com as correções marcadas |
| `painel/` | Área da equipe (no ar: painel.carbonesteakhouse.com.br, com login): reservas para confirmar, ficha e código |
| `prototipo/`, `biolink/` | Só redirecionam os endereços antigos, que já foram compartilhados |
| `VARREDURA.md` | Tudo o que foi conferido na Carbone e no Grupo Social Clube, com fontes, e a análise do grupo como porta de entrada |

## Ver no computador

```bash
python3 -m http.server 4610
```

Depois abra `http://localhost:4610`.

## Ferramentas do protótipo

Na barra de baixo do site:
- **Testar a primeira tela em outro horário:** escolha o dia e arraste a hora.
- **Ver o que corrigimos:** mostra cada erro de digitação riscado e os pratos sem alergênico.
- **Painel da casa:** conta os toques feitos na tela, como o relatório mensal faria.

## Antes de enviar

- Conferir de novo os 3 achados no dia (site fora do ar, horários, respostas no Tripadvisor).
- As fotos e a logo vêm do site do Grupo Social Clube por link direto. Para publicar, só fotos que a casa aprovar.
- As traduções para inglês são nossas e precisam da revisão da casa.
- Preços da Carbone (23/11/2026): Biolink R$ 590 + R$ 99/mês; Site da casa R$ 1.490 + R$ 189/mês; Canal direto R$ 2.890 + R$ 329/mês.

## Fontes e cores

Libre Baskerville e Jost (no lugar da Futura) foram escolhidas porque são as mesmas, ou as mais próximas, do site do grupo. A paleta usa cinza de carvão, tinta escura e cor de carne; o calor vem das fotos.
