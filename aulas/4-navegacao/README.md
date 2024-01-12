# Aula 4 - Navegação

Finalmente! Estava ancioso para te mostrar essa parte, pois agora tudo o que você aprendeu até aqui vai começar a fazer sentido.

Vimos na aula passada os atributos HTML (só dois 😅), um deles, o "href", é o que usaremos hoje. Outra coisa muito boa que aprendemos e começamos a utilizar é o editor de texto, VS Code, que será de grande valia para enxergamos todos os arquivos `.html` que estaremos trabalhando.

---

Quero explicar antes um conceito muito importante, tanto na Web como para qualquer arquivo de computador. O conceito de **caminho absolute e caminho relativo**. O caminho é aquilo que colocamos dentro dos atributos `href` e `src`.

```html
<a href="https://www.google.com/">
  <img
    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  />
</a>
```

No caminho absoluto nós escrevemos exatamente onde algo está, nos exemplos acima eu coloquei tanto o `href` da âncora `<a>` com a url [https://pt.wikipedia.org/wiki/URL](https://pt.wikipedia.org/wiki/URL) do Google, como a imagem do logo dele no `src` da tag `<img>`. Como eu disse, o caminho absoluto é o caminho completo, isso quer dizer que não importa de onde eu esteja acessando, é para vir o mesmo conteúdo. Vamos testar, primeiro copie isso `https://www.google.com/`:

- 1º teste: aperte windows + R (o executar do windows), cole ali e execute: vai abrir o site do Google.
- 2º teste: cole na barra do navegador: vai abrir o site do Google.
- 3º teste: escreva em um documento de texto (Word) e depois aperte CTRL e clique nele: vai abrir o site do Google.

Não importa de onde seja o acesso, se estiver com internet ele vai para o caminho **absoluto** do Google. Agora vamos fazer algo legal com a imagem, então copie isso `https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png`:

- cole na barra do navegador e aperte enter... Espero que tenha feito, se não fez, faça... Fez??? Ta, viu a imagem do Google? Tem noção do poder disso? Agora sabe que pode pegar imagem de qualquer lugar e colocar nos teus sites, isso porque na internet todas imagens tem um "caminho absoluto".

O caminho absoluto não serve só para a internet, dentro do próprio computador você pode pegar arquivos usando o caminho completo dele, por exemplo:

- De novo "windows + R" e cole `C:\Windows\System32\drivers\etc\hosts`, abra com bloco de notas

O arquivo que abrimos não importante no momento, nem acessar arquivos dessa forma no computador, só mostrei para você ter a noção bem certa do que é um caminho absoluto. É aquele caminho que escrevemos ele por completo, desde a sua raíz até o arquivo ou pasta desejado.

O **caminho relativo**, como o nome diz, é o quanto precisa ser percorrido apartir do ponto em que está. Para identificar um caminho relativo é bem simples, ele começa com `./` quando o local está no mesmo nível ou adiante do atual ou `../` quando se quer voltar. Cada `../` representa uma pasta que será voltada. Eu deixei um exemplo bem legal na pasta exemplos. Abra ela da forma que te ensinei no seu VS Code.

Quero que olhe bem o código que coloquei ali, principalmente as tags de ânchora (`<a>`), como são os caminhos relativos delas. Abra no navegador o "inicial.html" e comece a navegar e comparar o código com o que está acontecendo no navegador.

Apesar da simplicidade do exemplo, eu te garanto que é bem assim, na maioria dos casos, que um site funciona. Vamos simular um fluxo juntos com eu te explicando ele (por favor tenha fuçado nele antes, se não, não vai entender):

- estamos na página inicial, demos uma olhada no que tem nela e não nos interessamos e fomos para a página de categoria.
- na página de categoria demos uma olhada e encontramos o que queríamos, o Produto 2, clicamos no nome ou na imagem dele que nos leva para a página dele.
- Na página do Produto 2 vemos uma descrição muito boa dele e clicamos em comprar, que nada mais é do que um link, disfarçado de botão, que nos leva para a página do carrinho.
- O continuar do carrinho também é um botão disfarçado e nos leva para o checkout.
- O checkout faz a mesma coisa e nos deixa na página de confirmação de pedido.

Imagino que uma boa parte dos leitores aqui esteja espantada de saber como é simples o mecanismo de navegação de um site. Sei que podem ter surgido alguns questionamentos, mas se não forem relativos à navegação aguarde que um dia serão respondidos.

# Tarefa do dia

Voltando para o projetinho que você iniciou aula passada, com a pasta dele aberta no seu VS Code, vá naquele arquivo .html que você criou e apague o conteúdo dele. Eu sei que você queria mostrar ele para mim e da um dó jogar algo feito com tanto carinho... Mas digo por experiência própria, até hoje tenho um certa vergonha dos meus códigos passados, prefiro não ficar vendo eles, vai ser o mesmo pra ti, isso que você fez em meia hora, fará em 5 minuto no futuro, não fará falta, acredite.

Dentro da pasta exemplos, desta aula, tem uma pasta ecommerce-2 e dentro dela uma outra com imagens, copie ela para a pasta do "projeto-web" que você estava trabalhando na aula semana passada. Deixei até uns exemplos de HTML que tem ali na pasta "ecommerce-2" se precisar de inspiração.

> É hoje que "acaba a amizade" 😅, a tarefa que vou te passar é tipo 50 vezes maior do que as que você tinha feito antes, isso porque vamos começar a trabalhar sério, agora você tem muitos conhecimentos, então ta hora de usar todo esse poder. Espero muito que tu leia e releia tudo abaixo e faço com carinho, algumas dúvidas podem vir, mas pule ela e depois volte que talvez vais conseguir resolver. Haverão vários conceitos que tu saibas e já ponha em prática.

Pronto, pasta vazia novamente. Talvez a partir de hoje não vamos mais apagar, tenho planos de melhorarmos o que vamos começar nessa tarefa. Então o seguinte, para hoje vamos recriar o ecommerce, porém muito mais completo, com as imagens e descrições dos produtos... Aqui na mesma pasta exemplos tem o ecommerce 2. Deixei bastante material ali para fazer um ecommerce, use tudo que tiver ali, ele tem que ficar bem parrudo. Vou deixar aqui uma lista de coisas que se eu fosse ver no trabalho de vocês eu iria gostar, já dando uma explicada como faz:

## Deixar o VS Code te ajudar

Para começar a página faça o esquema de escrever `doc` e apertar a tecla tab para o VS Code criar o ínicio da página pra ti.

## Usar as imagens disponibilizadas dos produtos

Agora que tu já ta craque com caminhos relativos, é só usar essa mesma forma de trabalhar com as tags `<img>`, tipo `<img src="./imagens/produto-x.jpg">.

## Um mesmo cabeçalho que se repete em todas as páginas

Já deve ter reparado que dentro de um site você pode ficar navegando nele e o cabeçalho não mudar. Queria o mesmo pro teu ecommerce.

O elemento `<h1>` pode ser usado para colocar o nome da tua loja. Da para ter uma lista (`<ul><li>`) com âncoras (`<a>`) dentro que levam para as páginas de categria, tipo "bolsas", "sapatos", "promoções". Ao final dava para colocar um `hr` para separar do resto do conteúdo. Algo tipo assim:

```html
<h1>Jomáquinas</h1>
<ul>
  <li>
    <a href="./categoria-lavar-roupas">máquinas de lavar roupa</a>
  </li>
  <li>
    <a href="./categoria-costura">máquinas de costura</a>
  </li>
  <li>
    <a href="./categoria-moer-milho">máquinas de moer milho</a>
  </li>
</ul>
<hr />
```

## Uma página para cada produto

Desculpa por isso, mas vai ficar bonito. Ah faço umas 3 ou 4 páginas de categoria também, pode repetir os produtos lá se eles se encaixam em ambas, é bem normal isso, inclusive, da página inicial para as páginas de categoria sempre repete. Sugestões de páginas de categoria:

- liquida
- calçados
- botas
- rasteiras
- bolsas
- feminino
- masculino
- ...

## Não precisa ser completo

Aquelas páginas de carrinho, checkout e resumo do pedido serviram para o aprendizado, mas vamos deixá-las de lado por enquanto.

## Use corretamente os títulos

Eu não lembro se expliquei direito, mas os títulos são usados da mesma forma que em um TCC, o `h1` é o título primário, o `h2` seria uma subseção dele e aí sucessivamente.

- h1 - 1
  - h2 - 1.1
  - h2 - 1.2
    - h3 - 1.2.3
  - h2 - 1.3
- h1 - 2

O que eu quero é que cuide isso, o `h1` pode ser o nome da marca, aí depois abaixo, pode ter o nome que pode ser um `h1` também, ou um `h2`, vou deixar a teu critério, mas o que tu terás que cuidar é que se por exemplo for escrever um título chamado "Descrição do produto", ele será uma subseção do produto, ou seja, se o nome do produto for em uma tag `<h2>` esse outro título precisa ser `h3`, não pode pular pro `h4` nem se outro `h2`. Pensa muito no exemplo do TCC que não vai ar errado.

---

- os elementos `<ul><li>` na lista de produtos da página de categoria
- as tags `h1` com o nome da loja de vocês e se clicar ali volta para a página inicial
- a tag `h2` que seria um título inferior ao `h1` usada em alguns casos, como:
  - o nome do produto ná página dele
  - o nome da página de carrinho, tipo "Seu carrinho"
  - o nome da página de confirmação de compra...
- a página inicial pode ficar muito legal, atrativa, quero ver promoções, novidades, coleções... Crie títulos de seções lá usando os elementos `h2`, tipo `<h2>Coleção de verão</h2>`, `<h2>Você não pode perder!</h2>`...
- a âncora que envolve os produtos deve ter ele inteiro dentro, inclusive o preço, seria algo assim:

```html
<a href="./produto-x.html">
  <img href="./imagens/produto-x.jpg" />
  <h3>Nome do produto</h3>
  <p>R$ 430,00</p>
</a>
```
