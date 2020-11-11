# Aula 2 - Elementos HTML

Já sabemos que uma página web é um arquivo HTML, escrito com qualquer nome e no final `.html`. Sabemos também que o HTML é uma linguagem e que se queremos trabalhar com o máximo de controle precisamos conhecê-la para saber lê-la e escrevê-la.

Para a aula de hoje vamos aprender como é a escrita na linguagem HTML e também conhecer algumas "palavras", conhecidas como elementos HTML.

Cada elemento HTML é indicado pela abertura e fechamento de uma Tag. A tag, que pela tradução significa "etiqueta", é aquela forma de escrita que colocamos `<nome do elemento HTML>` que indica onde começa o elemento (abertura), e `</nome do elemento HTML>`, que é onde acaba (fechamento), então um elemento html é tanto as tags + todo conteúdo interno.

```html
<h1>Título primário</h1>
<button>Botão</button>
```

Porém existem elementos que tem suas tags de "auto fechamento" que ao mesmo tempo que abrimos ela já será fechada, pois esses elementos não possuem conteúdo adicional. Alguns exemplos:

```html
<img /> elemento de imagem tem apenas uma tag <br />
elemento de quebra de linha também <input /> a tag do campo de texto também tem
auto fechamento
```

Outra coisa é que um elemento pode envolver outro(s).

```html
<ul>
  O elemento "ul" é utilizado para indicar uma lista
</ul>
<li>O "li" é um item de lista</li>

Uma lista com seus itens dentro.

<ul>
  <li>Primeiro item da lista</li>
  <li>Segundo item da lista</li>
</ul>
```

Juntando as duas aulas já temos um bom "repertório", vamos escrever um pouco usando essas palavras. O exemplo abaixo pode ser copiado para o Bloco de notas e salvo em um arquivo `.html` e ser visualizado no seu navegador de preferência.

```html
<html>
  <body>
    <h1>O título primário de uma página simples</h1>
    <p>
      Agora podemos escrever o nosso primeiro parágrafo. Agora podemos escrever
      o nosso primeiro parágrafo. Agora podemos escrever o nosso primeiro
      parágrafo. Agora podemos escrever o nosso primeiro parágrafo. Agora
      podemos escrever o nosso primeiro parágrafo. Agora podemos escrever o
      nosso primeiro parágrafo. Agora podemos escrever o nosso primeiro
      parágrafo.
    </p>
    <p>
      E nosso segundo parágrafo. E nosso segundo parágrafo. E nosso segundo
      parágrafo. E nosso segundo parágrafo. E nosso segundo parágrafo. E nosso
      segundo parágrafo. E nosso segundo parágrafo. E nosso segundo parágrafo. E
      nosso segundo parágrafo. E nosso segundo parágrafo. E nosso segundo
      parágrafo. E nosso segundo parágrafo. E nosso segundo parágrafo. E nosso
      segundo parágrafo. E nosso segundo parágrafo. E nosso segundo parágrafo. E
      nosso segundo parágrafo.
    </p>
    <h2>Um título secundário</h2>
    <p>
      O primeiro parágrafo depois do título secundário. O primeiro parágrafo
      depois do título secundário. O primeiro parágrafo depois do título
      secundário. O primeiro parágrafo depois do título secundário. O primeiro
      parágrafo depois do título secundário. O primeiro parágrafo depois do
      título secundário. O primeiro parágrafo depois do título secundário.
    </p>
    <p>Um parágrafo explicando que haverá uma lista.</p>
    <ul>
      <li>Primeiro item da lista</li>
      <li>Segundo item da lista</li>
    </ul>
  </body>
</html>
```

Se você visualizou o exemplo acima no navegador, perceu que fizemos um "textão" só, bom, não tinha te contado ainda, mas de certa forma passaremos pela evolução da Web, e esta de ter apenas texto talvez seja a sua mais "primitiva" forma e provavelmente foi assim que foi pensada a Web, um lugar cheio de textos.

---

Outra coisa, e talvez você tenha reparado que sempre que abrimos uma tag e ela não é fechada na mesma linha todo o conteúdo dentro dela fica um pouco mais para a direita.

```html
<html>
  <body>
    <ul>
      <li>Primeiro item da lista</li>
    </ul>
  </body>
</html>
```

Essa técnica chama-se aninhamento e serve para facilmente visualizarmos qual elemento está dentro de qual.

---

Agora vou te passar uma lista de elementos para que uses para fazer o teu "textão" e mostrar para quem você quiser, essa pessoa provavelmente vai dizer "AH QUE LEGAL", mas estará na cara que achou uma bosta, mas mesmo assim faça, pois com isso irá praticar nas próximas páginas ver a sua evolução e de certa forma a da Web, pois como eu disse, foi mais ou menos assim que tudo começou.

> Se estiver sem ideia de texto escreva sobre a maior empresa da sua cidade, parece bobo isso, mas eu gosto de fazer associações em meio ao aprendizado, aí de certa forma minha memória consegue achar melhor as coisas. Talvez funcione para ti.

Os elementos a serem usados:

- html
- body
- h1
- h2
- p
- ul
- li
- hr
- table
- tr
- th
- td

Eu sei que ainda não foi ensinado no curso todos esses elementos, mas boa parte do conhecimento virá de pesquisa e acho que esse é um bom momento de começar. Para fazer isso usamos o de sempre, o Google, ou o Bink, sei lá, aí digamos que queremos saber o que é a tag "hr". Para pesquisar botamos na busca: _html hr tag_ e nos primeiro resultados irá aparecer os melhores sites para isso:

- W3Schools, muito bom para quem ta começando, porém só em inglês
- MDN, muito conteúdo

> Ah, as 4 últimas tags são para criar uma tabela se estiver escrevendo sobre a empresa da tua cidade coloque ali alguns dados dela.

---

Deu por hoje. Divirtam-se e não se acanhem. Tem que praticar para fixar.

**Abraço**
