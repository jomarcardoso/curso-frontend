# Aula 2 - Elementos HTML

Já sabemos que uma página web é um arquivo HTML, escrito com qualquer nome e no final `.html`. Sabemos também que o HTML é uma linguagem e que se queremos trabalhar com o máximo de controle precisamos conhecê-la para saber lê-la e escrevê-la.

Para a aula de hoje vamos aprender como é a escrita na linguagem HTML e conhecer algumas "palavras", também conhecidas como "Elementos HTML".

Cada elemento HTML é indicado pela abertura e fechamento de uma Tag. A tag, que pela tradução significa "etiqueta", é aquela forma de escrita que colocamos `<nome do elemento HTML>` entre esses `<>` que indica onde começa o elemento (abertura), e `</nome do elemento HTML>`, que é onde acaba (/fechamento) entre `</>`.

Perceba como é simples `<tag>conteúdo dentro da tag</tag>`. O `</` significa onde a tag fecha.

- começo da tag `<tag>`
- fim da tag `</tag>`

```html
<h1>Título primário</h1>
<button>Botão</button>
```

No exemplo acima a tag "h1", que significa "título primário" (em inglês: heading 1), inicia com `<h1>`, mas não acaba ali, depois dela vem o seu conteúdo, "Título primário" e por fim vem o seu fechamento com `</h1>`. Isso tudo, abertura, conteúdo e fechamento é que constitui um elemento HTML.

Neste exemplo abaixo coloquei cada abertura, conteúdo e fechamento em uma linha, veja, se fica claro.

```html
<p>
  Essa tag "p" é usada para parágrafos.
</p>
```

Tudo dentro do "p" é "parágrafo", tem as características de um parágrafo. Podemos dizer que encapsulamos o texto dentro de um "parágrafo", pois se pegarmos esse texto e colocar entre tags `<h1>`, torna-se um título. Isso que expliquei vai de acordo com o que é a linguagem HTML, uma linguagem de MARCAÇÃO, ou seja, você apenas "sinaliza" o que é cada conteúdo, com `<button>` você diz que tudo ali dentro pertence a um botão, com `<p>` você "sinaliza" que o seu conteúdo é um parágrafo.

Mas, sempre tem um mas, toda regra tem exceção e existem elementos que tem suas tags de "auto fechamento" que ao mesmo tempo que abrimos ela já será fechada, pois esses elementos não possuem conteúdo adicional. Não tem um explicação muito lógica que eu possa dar para você saber quais são e quais não são com auto fechamento, então vou te passar algumas já de início para você saber e, infelizmente, decorar:

- `<img>` tag de imagem
- `<br>` tag de linha em branco
- `<input>` tag de campos de texto (e outras coisas)

Alguns exemplos de uso dessas tag de "auto fechamento"

```html
<img> elemento de imagem tem apenas uma tag
<br> elemento de quebra de linha também
<input> a tag do campo de texto também tem auto fechamento
```

Viu? A tag iniciou `<img>`, mas não tinha um fechamento depois <s>`</img>`</s>, isso porque ela tinha autofechamento, ou seja, o conteúdo que vem depois não está "dentro" da tag. Usando as palavras certas o conteúdo não é "filho" daquele elemento.

> quer dar uma paradinha na leitura usar as tags `<h1>`, `<p>` e `<button>` naquele arquivo da aula passada? Não esqueça de algumas coisas:
> 
> - todo o conteúdo vai dentro das tags `<body> </body>` (filhos de body)
> - as tags que indiquei usar agora não possuem auto fechamento, então não esquece da ordem "abertura, conteúdo, fechamento"

---

Outra coisa é que um elemento pode envolver outro(s). Aqui fica evidente o elemento "pai" e elementos "filhos".

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

Juntando as duas aulas já temos um bom "repertório", vamos escrever um pouco usando essas palavras. O exemplo abaixo pode ser copiado para o Bloco de Notas e salvo em um arquivo `.html` e ser visualizado no seu navegador de preferência.

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

Se você viu o exemplo acima no navegador, percebeu que fizemos um "textão" só, bom, não tinha te contado ainda, mas de certa forma passaremos pela evolução da Web, então essa página web apenas com texto é a forma "primitiva" de fazer e provavelmente foi assim que foi pensada a Web, um lugar cheio de textos.

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

Essa técnica chama-se aninhamento e serve para facilmente visualizarmos qual elemento está dentro de qual. Em alguns exemplos anteriores quando tinha aquelas tags com auto fechamento, tipo `<img>`, não fiz o aninhamento, para deixar claro que o conteúdo não estava dentro, ou seja, não era filho da tag `img`.

---

Agora vou te passar uma lista de elementos para que uses para fazer o teu "textão" e mostrar para quem você quiser, essa pessoa provavelmente vai dizer "AH QUE LEGAL", mas estará na cara que achou uma bosta, mas mesmo assim faça, pois com isso irá praticar e nas próximas páginas ver a sua evolução e de certa forma a evolução da Web, pois como eu disse, foi mais ou menos assim que tudo começou.

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
- caption
- tr
- th
- td

Eu sei que ainda não foi ensinado no curso todos esses elementos, mas boa parte do conhecimento virá de pesquisa e acho que esse é um bom momento de começar. Para fazer isso usamos o de sempre, o Google, ou o Bing, sei lá, aí digamos que queremos saber o que é a tag "hr". Para pesquisar botamos na busca: _html hr tag_ e nos primeiro resultados irá aparecer os melhores sites para isso:

- W3Schools, muito bom para quem ta começando, porém só em inglês
- MDN, muito conteúdo

> Ah, as 5 últimas tags são para criar uma tabela se estiver escrevendo sobre a empresa da tua cidade coloque ali alguns dados dela. Ali sim é muito importante você saber como faz o "aninhamento", lembra? Elemento filho ter um recuo do elemento pai. Para facilitar tua vida olha aqui no [link do w3school mostrando como monta uma tabela](https://www.w3schools.com/tags/tag_caption.asp#:~:text=The%20tag%20defines%20a,align%20and%20place%20the%20caption.). W3Schools é um site ótimo, foi ali que comecei meus estudos e provavelmente quero trazer mais vezes conteúdos dele aqui.

---

Eu costumo deixar os exemplos na pasta acima chamada "exemplos" 🙄, as vezes tem coisa boa ali. Faça o tema de 🏠 e não te acanha, tem que praticar para fixar.

**Abraço**
