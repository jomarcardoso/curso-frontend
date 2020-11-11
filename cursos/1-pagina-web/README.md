# Aula 1 - Página Web

Os arquivos possuem extensões, aquelas letras que vêm depois do "." nome deles. A extensão é como se fosse o idioma em que ele foi escrito. Um exemplo é o arquivo de vídeo `.avi` que não vai fazer muito sentido ser aberto no Paint, pois ele não entenderia as linguagens de vídeo, apenas as de imagens, como `.bmp`, `.jpg`, `.png`...

![image](https://user-images.githubusercontent.com/27368585/98619978-162e8480-22e3-11eb-968c-7fe33216fb82.png)

Uma página da internet é um arquivo como os outros, que tem uma extensão que mostra que sua linguagem é HTML. Então para termos uma nossa página precisamos apenas criar um arquivo `.html` com qualquer nome. Assim: `jomar.html`. Como foi mencionado o HTML é uma linguagem, assim como as outras que já foram mostradas, e quem interpreta esses arquivos são os navegadores, `Chrome`, `Internet Explorer`, `Firefox`...

---

Sabemos que para termos uma página na internet precisamos ter nosso arquivo `.html`... Indo pela lógica que um arquivo `.docx` ou `.docx` é gerado pelo Word, um arquivo `.ppt` ou `.pptx` é gerado pelo Power Point, onde que é gerado um arquivo HTML?

Se fosse há algum tempo atrás a resposta seria maior, pois existiam ferramentas que criavam site de uma forma mais "prática", porém as coisas mudaram e agora "todo" site é feito com editores de texto. O editor de texto mais simples do mundo é o Bloco de Notas do Windows, mas não se preocupe, ninguém trabalha naquilo dali.

Posso ter levantado a dúvida de alguns, "mas e o Word? Ele é um editor de texto também...", bom, quase, ele é um processador de texto, a diferença dele para um editor é que você vê o resultado ao mesmo tempo que edita o documento. Vou tentar ser mais claro.

No Word, simplificando o processo, você manda um comando como escrever uma letra, ele transforma isso na linguagem dele `.docx` e na mesma hora já te mostra a letra que você colocou.

1. usuário adiciona letra no Word
2. a letra convertida para a linguagem `.docx` e salva
3. `.docx` é interpretado na mesma hora para mostrar ao usuário como ficou

E quando for abrir um arquivo `.docx` só precisa fazer a última etapa.

1. `.docx` é aberto no Word e interpretado para mostrar ao usuário.

Agora, no editor de texto o processo é mais <s>chato</s> simples, não temos mais a conversão e a interpretação na hora, então fica:

1. profissional escreve na linguagem `.html`.

Reparem que não há mais uma conversão, logo fica mais difícil de ser feitos por leigos, pois precisam saber como se comunicar em HTML. A interpretação na hora também não existe no editor de texto.

1. usuário abre um arquivo `.html` no seu navegador e este interpreta o arquivo.

A vantagem dos arquivos `.docx` e `.html` é que o usuário não precisa conhecer a linguagem delas, pois tanto o Word como os navegadores fazem o papel de interpretar esses arquivos, porém a diferença crucial é para quem escreve, que no caso do HTML tem que ser alguém o conheça.

Só que para confundir um pouco eu fiz um arquivo `.html` no Word.

![image](https://user-images.githubusercontent.com/27368585/98623024-99eb6f80-22e9-11eb-808a-0ee0c44a8709.png)

E abriu igualzinho no navegador.

![image](https://user-images.githubusercontent.com/27368585/98623147-d5863980-22e9-11eb-8f98-8e0cb646b58c.png)

Como o word trabalha dessa forma de mostrar no mesmo momento o resultado final, temos uma prévia boa do site como vai ficar. Aí você pode estar se perguntando, "Mas por que eu usaria um editor de texto, onde eu teria que aprendar uma linguagem e só veria o resultado depois que eu salvasse e fosse lá no navegador?". A resposta mais simples é: Controle. Editar um arquivo na sua forma original te da muito mais controle, você pode fazer coisas como:

- prever a aparência baseado no tamanho da tela
- reaproveitar estilos, por exemplo de um botão que tem sua aparência igual em vários lugares
- ser muito específico e preciso quanto a tamanhos, espaçamentos...

---

Para entender a linguagem HTML, pense naquela brincadeira da lingua do PE, "PEVO PECÊ PESA PEBE PELIN PEGUA PEDO PEPE?", com a diferença é que o HTML tudo que for escrever não coloca o PE e sim uma `<tag>`, a tag html é o que identifica o conteúdo. Assim como no word que temos títulos, parágrafos, imagens... e ele salva isso com alguma identificação, no HTML temos os mesmo elementos identificados por tags:

- `<p>`Parágrafo`</p>`
- `<img src="imagem.png">` (imagem)
- ## `<h1>`Título`</h1>`

É um pouco estranho no começo, mas vai se acostumar em colocar tudo entre tags, inclusive tags dentro de tags.

```html
<html>
  <body>
    Olá internet!
  </body>
</html>
```

Esse exemplo que dei é a estrutura inicial de um arquivo `.html`, se colar ele no bloco de notas, salvar ele com o nome que quiser e ao final colocar `.html`, poderá abrir esse arquivo no navegador e tera aí o seu site.

---

Coloquei os 2 exemplos na pasta exemplos aqui do curso 1.

Por hoje é isso pessoal 😘
