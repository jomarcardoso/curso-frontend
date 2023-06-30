# Aula 3 - Atributos HTML

> Não sei o que tu estás achando desse material. Se achas que ta indo muito devagar e está muito repetivo, desculpa por isso, mas o material deve ser "auto explicativo", então antes de avançar eu preciso ter total certeza que você entendeu tudo, pois muitas vezes não haverá alguém ao lado para te tirar as dúvidas. Para os que já estão com dúvidas só mandar um email para `antonionetocardoso@gmail.com` que farei o ajuste o mais rápido possível para que tudo fique claro para ti e para os próximos que passarem por aqui.

Para a aula de hoje eu quero te ensinar a colocar conteúdos "não textuais", ou seja vamos além daqueles textinhos simples, vamos botar imagens e começar a fazer a "navegação". Para que possamos fazer primeiro eu preciso de ensinar o que são Atributos HTML.

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

O elemento de image, sinalizado pela tag `<img>` não faz nada sem o seu atributo `src`, significa "source" (traduzindo: fonte) que diz o lugar onde está a imagem, a "fonte", a "origem" dela.

Agora, suponhamos que você tenha algumas dessas duas dúvidas:

1. Como saber que atributos existem? Bom, como mencionado, HTML é uma linguagem, então será preciso pesquisar/estudar ela para entender o seu vocabulário. Geralmente "dá um Google" pelo nome da tag, tipo assim "html tag img" e nos primeiros resultados já vai ter exemplos de uso e os atributos mais usados.
2. Como saber o local da imagem? Essa informação pode ser um pouco avançada em alguns casos, então para começar eu mando o caminho das imagens e você só usa, pode ser?

Só para ter certeza, lembra da estrutura inicial de uma página HTML? Espero que sim, é chato ficar repetindo 😜.

```html
<html>
  <body></body>
</html>
```

Ali no elemento body coloque a tag de imagem `<img>` com o atributo `src`, vazio, assim:

```html
<html>
  <body>
    <img src="" />
  </body>
</html>
```

Agora só botar a fonte da imagem ali no valor do atributo. Sugiro essa daqui `https://images-na.ssl-images-amazon.com/images/I/51pG5REYl+L._SX378_BO1,204,203,200_.jpg`. Lembra que a fonte da imagem é de onde ela virá e também que a tag de imagem não recebe texto dentro dela.

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

Outro atributo necessário para nossos próximos passos é o atributo de `href` da tag `<a>`. A tag "a" serve para nos levar para outros lugares, seja dentro ou fora da página. Por enquanto só o que nos interessa é fora da página, então vamos lá.

O atributo em que colocaremos o link é o `href`, aí fica assim, o texto dentro do elemento é o "chamariz", é o que o usuário vai ver, já o href é o para onde ele será levado se clicar no link.

<html>
  <body>
    <a href="https://google.com.br">clique aqui e será levado para o Google</a>
  </body>
</html>

Diferente da tag `<img>` que só tem atributo, a tag `<a>` tem conteúdo também, então fique atento que vai sempre precisar do atributo `href` e um texto dentro da tag para o usuário entender do que se trata o link.

---

Eu diria, "Vamos praticar", mas tenho uma surpresa para ti. Reparou que o texto de código que eu te mostro tem uma cor bonita e o que você faz no bloco de notas é preto e branco? Isso porque o bloco de notas é muito simples, não tem nenhum recurso legal, então antes de praticar vamos instalar um editor de texto melhor.

[Clique aqui para baixar o Visual Studio Code](https://code.visualstudio.com/download)

Para baixar o correto é só clicar no botão maior abaixo de cada logotipo de sistema operacional.

![image](https://github.com/jomarcardoso/curso-frontend/assets/27368585/19e58a51-8ce7-497d-9686-7c411819dbc3)

Para instalar vai só avançando, a configuração padrão é boa.

---

Dessa parte da aula e para as próximas tu precisas ter baixado esse projeto no seu computador. Você pode [clicar aqui para baixar o projeto](https://github.com/jomarcardoso/curso-frontend/archive/refs/heads/master.zip) e extrair ele no seu computador ou [ir para página inicial](https://github.com/jomarcardoso/curso-frontend) e ler melhor sobre isso.

Lembra que você entrou num link/pasta chamada aulas para chegar até aqui? Abaixo dela existe uma outra pasta chamada "projeto-web". Você pode chegar na [pasta projetos web clicando aqui](https://github.com/jomarcardoso/curso-frontend/tree/master/projeto-web), mas o que eu sugiro mesmo é chegar nessa pasta pelo seu computador.

Repare que deixei dentro da pasta "projeto-web" um arquivo chamado "inicial.html" para você começar. De agora em diante é ali que vamos trabalhar e evoluir.

> É importante que você não se apegue ao código que vamos fazer, pois conforme formos evoluindo, vamos trocar o antigo por um mais moderno e adequado com as formas de trabalhar mais atuais. Apagar e reescrever vai também fará parte do aprendizado, pois tu estarás praticando a escrita dessa nova linguagem. E bem sinceramente, pergunta para qualquer programador, se tu olhas o código da semana passada já vais achar ele horrível e querer fazer um melhor.

---

Depois de instalado o Visual Studio Code(VS Code para os íntimos), abra ele, e vá ali no "open folder" ou "abrir pasta" se for em português. Lembra que beeeeem no começo no arquivo de introdução eu te instruí a colocar a baixar esse conteúdo no seu computador? Certo, dentro dela ta a pasta "projeto-web" essa é a pasta que será aberta no VS Code.

![image](https://user-images.githubusercontent.com/27368585/99132532-5c425b80-25f5-11eb-909a-3bd83f2650e6.png)

O VS Code é um editor de texto sofisticado e irá nos possibilitar trabalhar dentro dele sem ter que ficar saindo para criar arquivos. Conseguimos cuidar bem do nosso projeto ali de dentro dele.

O básico que você precisa saber dele:

![image](https://user-images.githubusercontent.com/27368585/99316475-34483780-2843-11eb-9718-1f623069312b.png)

Como vê na imagem acima, o VS Code além de mostrar os arquivos e pastas na esquerda para você abrir e trabalhar, também mostra na barra superior os arquivos que já estão abertos e você pode ir alternando entre eles.

![image](https://user-images.githubusercontent.com/27368585/99316749-a3be2700-2843-11eb-8a8b-b1ebaa1f72b2.png)

Essa segunda imagem mostra também como é fácil evoluir e organizar o projeto, para criar arquivos ou pastas novas basta clicar em um desses ícones indicados. Foi assim que criei o arquivo "index.html" no projeto.

---

Tudo certo, tudo pronto?

Para exercício de hoje crie uma página só com imagens e links, como se fosse uma página inicial que leva rapidamente para os sites que você mais precisa.

O exemplo da imagem abaixo é do navegador Firefox, ele cria uma página com os sites que o usuário mais acessa. E é mais ou menos isso que vamos fazer.

![image](https://user-images.githubusercontent.com/27368585/99317130-4676a580-2844-11eb-98eb-16cedc09a9b1.png)

Como sabemos um elemento HTML pode ficar dentro de outro, então para que as imagens levem para um site coloque a tag de imagem (img) deve estar dentro de um elemento de link (a). Assim:

```html
<a href="url do site">
  <img src="imagem do site" />
</a>
```

Antes eu tinha dito que o conteúdo do link é o chamariz para a pessoa clicar... E sim esse conteúdo pode ser uma imagem que é tão usado quanto texto.

Se quiser vou começar pra ti, ai é só continuar. Pode pegar esse conteúdo aqui e colar por cima do que tem lá no `inicial.html`. Aí o resto você já sabe.

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

> **Curiosidade:** Você deve estar conformado que a tag de imagem se chama "img", mas a de link ser "a"... Estranho né? Essa tag `<a>` é abreviação de "anchor", do inglês "âncora", nesse caso, tag de ancoragem. Não existe uma explicação boa para esse nome, talvez em inglês faça mais sentido.

Por hoje é isso.

Bons estudos e te vejo na próxima aula.

**Abraço**
