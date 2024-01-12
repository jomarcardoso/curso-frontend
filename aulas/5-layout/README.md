# Aula 5 - Layout

🥁🥁🥁 Chegou a hora, a partir dessa aula você será capaz de fazer um site idêntico aos da internet... de 1997 😁

> Tomei a decisão de separar essa aula de layout em duas partes, pensando que se a aula anterior ficou longa, essa daqui será maior, pelo fato de ter uma fase de planejamento que irá anteceder o desenvolvimento.

O Layout é a forma popular de chamarmos o trabalho do designer. Ele deve ser seguido ao máximo para que no final o layout definido pelo designer e o site construído pelo desenvolvedor tenham a mesma aparência.

---

Um dos conceitos do layout é o Grid. O grid define os limites e a disposição dos elementos na tela. Para fazer sentido olhes este exemplo:

![uma imagem de um site onde foi desenhado linhas mostrando os limites do conteúdo](https://user-images.githubusercontent.com/27368585/103325051-b9b92d00-4a28-11eb-89f9-114a42d6e7e5.png)

Na web todo conteúdo é colocado em retângulos, então como pode ver na imagem acima foi exatamente como foi feito, criamos as "caixas" do nosso conteúdo.

---

Como eu te disse, para que seja mais assertivo no layout é preciso planejar como ele será feito, para isso usaremos o Paint do Windows para treinarmos. Eu vou te passar umas imagens para praticar e quero que rabisque como você desenharia o grid. A ideia é usar apenas as ferramenta de desenhar retângulos.

![Humortadela em 2005](https://user-images.githubusercontent.com/27368585/103325287-e0c42e80-4a29-11eb-904f-7f5da32c87d0.png)

---

![fliperama em 2005](https://user-images.githubusercontent.com/27368585/103325443-a6a75c80-4a2a-11eb-98d6-3ad414317fb5.png)

---

![charges.com.br em 2005](https://user-images.githubusercontent.com/27368585/103325648-63012280-4a2b-11eb-8c0e-beef0a74bdd2.png)

---

![mundocanibal-2005](https://user-images.githubusercontent.com/27368585/103347980-5dc9c500-4a77-11eb-886e-72d9b796538b.png)

Pronto, agora que você já (sabe que eu sou velho por conhecer esses sites) fez seus retângulos, vamos revisar. O que você fez ficou mais ou menos assim?

![image](https://user-images.githubusercontent.com/27368585/178623488-5452217f-6f50-49bb-8883-090d322fc465.png)

Espero que não 😂, seria muita perda de tempo desenhar tantos retângulos. Por mais bobo que pareça é assim até hoje a organização de uma página Web. Quando comecei na área de programador front-end, tinha muita dificuldade de enxergar essas "caixas de conteúdo", mas foi quando resolvi que sempre antes de começar uma nova página eu iria fazer um planejamentos desses blocos, que eu aprendi e hoje não preciso mais disso, apenas "bato o olho" e consigo saber o que preciso para organizar o layout.

## O "bloco em linha"

Agora que sabemos, e vemos com clareza, os blocos que constituem uma página vou te contar mais uma coisa sobre eles. "Nada fica ao lado de um bloco e se possível ele sempre ocupa 100% da largura do espaço que lhe é dado". 🤔 loucura, mas é o seguinte, olhando a imagem abaixo, cada bloco, por mais que não ocupe toda a largura que lhe foi dado, ainda assim "reservou" aquele espaço a direita, para nenhum outro conteúdo ficar ao seu lado.

![image](https://user-images.githubusercontent.com/27368585/178625114-67fb4dfd-7953-4ecd-8198-beb24fee0b29.png)

Mas você não viu errado, nem deve ter feito nada errado quando desenhou alguns retângulos um ao lado do outro, isso porque além dos blocos, existem os "blocos em linha", que ainda são retângulos, porém podem ocupar menos da largura total do seu <abbr title="Container é a forma de chamar o elemento que contém outro, também chamado de elemento pai ou wrapper.">container</abbr> e ainda não reservam o espaço à direita.

Esses quadrados verdes que fiz na imagem abaixo são os blocos dispostos em linha e os azuis são os blocos padrões, que reservam toda a largura. Perceba que "um não é melhor que o outro", nem é uma regra que os maiores são blocos em linha são menores que os blocos que ocupam a linha toda, isso só depende da organização do seu layout.

![image](https://user-images.githubusercontent.com/27368585/178626461-5d279aac-a5e2-4ad7-9274-1bc93ae9dedf.png)

## Seções

A seção é um conceito que já vem de design, apesar de talvez eles não chamarem assim, as seções são a forma de separar os tópicos de uma página. Alguns exemplos de seções comuns nos sites:

- banner
- barra de navegação
- corpo da página
- cabeçalho
- rodapé

E dentro dessas existem outros seções menores, por exemplo em um site de notícias, no corpo da página poderão ter as seguinte seções:

- últimas notícias
- notícias da sua região
- propaganda
- previsão do tempo
- notícias por interesses
- informações da bolsa de valores

Cada seção é um escopo fechado de informações, muitas vezes independente do seu entorno. Nesse último exemplo do corpo da página inicial de um portal de notícias, provavelmente a melhor organização dessas seções seria uma abaixo da outra, onde cada seção possui um título e nenhuma delas invade o espaço da outra. Mais ou menos assim:

| seções do corpo de uma página de notícias                                                                |
| -------------------------------------------------------------------------------------------------------- |
| ![](https://github.com/jomarcardoso/curso-frontend/assets/27368585/cf2a030b-783f-4b14-83bd-9e5fa9ec68db) |
| ![](https://github.com/jomarcardoso/curso-frontend/assets/27368585/f394b879-1ed2-42c3-b02d-ecc755ce58b5) |
| ![](https://github.com/jomarcardoso/curso-frontend/assets/27368585/5e0a76e6-937d-4667-abf9-d13b71a6334a) |

Repare que destaquei a divisão de cada seção e essa divisão deve ser percebida por ti também. A divisão das seções pelo conhecimento que temos até agora é feita com as tags de <abbr title="heading é a forma de chamar as tags de título ou também tags de cabeçalho de seção">heading</abbr> então ficaria assim em código:

```html
<h2>Previsão do tempo</h2>

Aqui vai o conteúdo da previsão do tempo.

<h2>JP TV - vídeos</h2>

Aqui vai o conteúdo de vídeo.

<h2>Breaking JP</h2>

Aqui irão as principais notícias.
```

Mas chega de só escrever texto, já te enchi de conceitos aqui e podemos ir para a próxima aula, se debruçar nos códigos e botar a mão na massa.
