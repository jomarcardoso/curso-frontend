# Aula 3 - Atributos HTML

> Não sei o que tu estás achando desse material. Se achas que ta indo muito devagar e está muito repetivo, desculpa por isso, mas o material deve ser "auto explicativo", então antes de avança é preciso ter a total certeza que tudo foi entendido, pois muitas vezes não haverá alguém ao lado para tirar as dúvidas. Para os que já estão com dúvidas só mandar um email para `jomar.cardoso@cwi.com.br` que farei o ajuste o mais rápido possível para que tudo fique claro para ti e para os próximos que passarem por aqui.

Voltando a aula... Como eu queria, hoje, te ensinar a montar um layout de uma página ou então mostar como "navegar" de uma página para outra, mas para isso ainda precisamos de uma útima coisa, saber o que são Atributos HTML.

---

As tags ficam mais ricas quando adicionamos os atributos. Na verdade, tem tag que sem atributo fica sem sentido.

O atributo HTML vai junto na tag de abertura. Dessa forma:

```html
<nome-da-tag nome-do-atributo="valor-do-atributo"></nome-da-tag>
```

Por exemplo:

```html
<img src="imagem.jpg" />
<a href="https://google.com.br">link que leva para o Google</a>
```

Te assustei? Espero que não. Hoje vamos aprender apenas alguns atributos só para podermos logo ir para a parte legal.

---

O elemento de image, sinalizado pela tag `<img>` não faz nada sem o seu atributo `src` (significa "source", traduzindo, fonte) que diz o lugar onde está a imagem. Para alguns poderá vir duas dúvidas aqui:

1. Como saber que atributos existem? Bom, como mencionado, HTML é uma linguagem, então será preciso pesquisar
2. Como saber o local da imagem? Essa informação pode ser um pouco avançada em alguns casos, então para começar eu mando o caminho das imagens e vocês só usam, pode ser?

Só para ter certeza, lembra da estrutura inicial de uma página HTML? Espero que sim, é chato ficar repetindo 😜.

```html
<html>
  <body></body>
</html>
```

Ali no elemnto body coloque a tag de imagem `<img>` com o atributo `src`, vazio, assim:

```html
<html>
  <body>
    <img src="" />
  </body>
</html>
```

Agora só botar a fonte da imagem ali no valor do atributo. Sugiro essa daqui `https://images-na.ssl-images-amazon.com/images/I/51pG5REYl+L._SX378_BO1,204,203,200_.jpg`.

```html
<html>
  <body>
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51pG5REYl+L._SX378_BO1,204,203,200_.jpg"
    />
  </body>
</html>
```

Pronto, temos a nossa página com uma imagem 😮.

Um outro atributo necessário para nossos próximos passos é o atributo de href da tag `<a>`. O "a" é a âncora, nome estranho, nem vou tentar explicar o porquê dela, mas ela serve para nos levar para outros lugares, seja dentro ou fora da página. Por enquanto só o que nos interessa é fora da página, então vamos lá.

O atributo em que colocaremos o link da Âncora é o `href`, aí fica assim, o texto dentro do elemento é o "chamariz", é o que o usuário vai ver, já o href é o para onde seremos levados.

<html>
  <body>
    <a href="https://google.com.br">clique aqui e será levado para o Google</a>
  </body>
</html>

---

Eu diria, "Vamos praticar", mas tenho uma surpresa para vocês. Repararam que tem o texto que eu mostro para vocês tem uma cor bonita e o que vocês fazem no bloco de notas é preto e branco? Isso porque o bloco de notas é muito simples, não tenha nenhum recurso legal, então antes de praticar vamos instalar um editor de texto melhor.

[Clique aqui para baixar o Visual Studio Code](https://code.visualstudio.com/download)

Criei uma pasta para ti aqui dentro do curso chamada "projeto-web", com um arquivo "inicial.html" para você começar. De agora em diante é ali que vamos trabalhar e evoluir.

> É importante que você não se apegue ao código que vamos fazer ali, pois conforme formos evoluindo, vamos trocar o antigo por um mais moderno e adequado com as formas de trabalhar atuais.

Depois de instalado o Visual Studio Code(VS Code), abra ele, e vá ali no "open folder" ou "abrir pasta" se for em português. Escolha a pasta que você criou para o projeto.

![image](https://user-images.githubusercontent.com/27368585/99132532-5c425b80-25f5-11eb-909a-3bd83f2650e6.png)

O VS Code é um editor de texto sofisticado e irá nos possibilitar trabalhar dentro dele sem ter que ficar saindo para criar arquivos. Conseguimos cuidar bem do nosso projeto ali de dentro dele.

O básico que você precisa saber dele:

![image](https://user-images.githubusercontent.com/27368585/99316475-34483780-2843-11eb-9718-1f623069312b.png)

---

![image](https://user-images.githubusercontent.com/27368585/99316749-a3be2700-2843-11eb-8a8b-b1ebaa1f72b2.png)

---

Para exercício de hoje crie uma página só com imagens e links, como se fosse uma página inicial que leva rapidamente para os sites que você mais precisa. O exemplo que estou te mostrando é do navegador Firefox, ele cria os sites baseado no que o usuário mais acessa

![image](https://user-images.githubusercontent.com/27368585/99317130-4676a580-2844-11eb-98eb-16cedc09a9b1.png)

Como sabemos um elemento HTML pode ficar dentro de outro, então para que as imagens levem para um site coloque a tag image(img) dentro de um elemento âncora(a). Assim:

```html
<a href="url do site">
  <img src="imagem do site" />
</a>
```

Se quiser vou começar pra ti e é só continuar. Crie um arquivo chamado página-inicial.html e vamos começar trabalhando por ali no nosso projeto.

```html
<html>
  <body>
    <h1>Meus sites favoritos</h1>
    <a href="https://www.google.com/">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
    </a>
  </body>
</html>
```
