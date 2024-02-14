# Aula 6 - Layout parte 2

Sem enrolação, vamos ver como conseguimos pegar todo conhecimento adquirido até a aula 5 e criar uma página mais ou menos bonita. Para crias esses layouts em código, vamos utilizar tabelas, uma prática muito comum de estruturar uma página (por volta do ano 2000).

> Brincadeiras a parte, fique tranquilo quanto a isso de estar usando coisas antiquadas, nada do que você aprender aqui é inútil, muito pelo contrário, todos os conhecimentos até agora são elementares. Algum momento você irá juntar tudo que aprendeu e perceberá o que pode fazer "a la Karate Kid".

Então lhes apresento a tabela:

```html
<table>
  <tr>
    <td>isso é uma coluna</td>

    <td>isso é outra coluna</td>
  </tr>
</table>
```

Explicando os elemntos acima:

- `table` significa mesa em inglês (the book is on the table) ou tabela que faz mais sentido nesse caso.
- `tr` é a sigla para "table row", ou seja, "linha da tabela".
- `td` é a sigla para "table data", traduzindo são os dados da tabela, o que podemos entender como uma coluna normal de conteúdo.

Se quisermos que nossa tabela tenha mais linhas, basta criar outros `<tr>` com a mesma quantidade de `<td>` dentro.

```html
<table>
  <tr>
    <td>primeira coluna da primeira linha</td>

    <td>segunda coluna da primeira linha</td>
  </tr>

  <tr>
    <td>primeira coluna da segunda linha</td>

    <td>segunda coluna da segunda linha</td>
  </tr>
</table>
```

Agora temos tudo para começar. Então como eu tinha mencionado em aulas anteriores, o designer manda para nós como ele quer a página e nós vamos lá no nosso editar de texto espressar isso em código. Abaixo o layout que vamos seguir:

![](./imagens/layout.png)

Já pode começar como que você já sabe:

1. rascunhar o grid
2. criar o arquivo .html
3. escrever a estrura básica

Cada seção do layout nós trataremos como uma nova tabela, pois têm características que diferem das outras, como cor do fundo, bordas e espaçamentos. Assim as seções possui sua definição de quantas linhas e colunas precisa.

Olhando para a primeira seção, vou começar analisando o grid e te dizer o que vejo. Vejo 3 colunas, onde a primeira e a última são só colunas vazias do mesmo tamanho para centralizar a coluna do meio que é onde vai o conteúdo. A coluna do meio já te adianto que tem 720px (explico abaixo sobre px) de largura.

<details>
  <summary>saiba mais sobre píxels (px)</summary>

  Píxel é a unidade de medida mais comum na computação e em design digital. Em vários lugares vemos os píxels sendo mencionados e usados. Uma câmera de 32 megapíxels provavelmente (não sei muito disso) é uma câmera que captura 32 milhões de píxels em uma foto. Um sinal de TV HD das tvs digitais é de no mínimo 720px de altura. Um monitor full HD tem no mínimo 1080px de altura. São muitos exemplos de telas e elementos delas que são definidos em píxels.
</details>

Então temos as três colunas assim:

ˋˋˋhtml
<table bgcolor="#87695e" width="100%" cellspacing="20">
  <tr>
    <td></td>

    <td width="720">
      <h1>
        <font color="white">Saúde em pontos</font>
      </h1>
    </td>

    <td></td>
  </tr>
</table>
ˋˋˋ