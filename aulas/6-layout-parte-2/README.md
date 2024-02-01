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
