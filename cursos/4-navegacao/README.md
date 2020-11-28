# Aula 4 - Navegação

Finalmente! Estava ancioso para te mostrar essa parte, pois agora tudo o que você aprendeu até aqui vai começar a fazer sentido.

Vimos na aula passada os atributos HTML (só dois 😅), um deles, o "href", é o que usaremos hoje. Outra coisa muito boa que aprendemos e começamos a utilizar é o editor de texto, VS Code, que será de grande valia para enxergamos todos os arquivos `.html` que estaremos trabalhando.

Voltando para o projetinho que você iniciou aula passada, com a pasta dele aberta no seu VS Code, vá naquele arquivo .html que você criou e apague ele. Eu sei que você queria mostrar ele para mim e da um dó jogar algo feito com tanto carinho... Mas digo por experiência própria, até hoje tenho um certa vergonha dos meus códigos passados, prefiro não ficar vendo eles, vai ser o mesmo pra ti, isso que você fez em meia hora, fará em 5 minuto no futuro, não fará falta, acredite.

Pronto, pasta vazia novamente.

---

Quero explicar antes um conceito muito importante, tanto na Web como para qualquer arquivo de computador. O conceito de **caminho absolute e caminho relativo**. O caminho é aquilo que colocamos dentro dos atributos `href` e `src`.

```html
<a href="https://www.google.com/">
  <img
    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  />
</a>
```

No caminho absoluto nós escrevemos exatamente onde algo está, nos exemplos acima eu coloquei tanto o `href` da âncora com a url ([ver definição de url](https://pt.wikipedia.org/wiki/URL)) do Google, como a imagem do logo deles no `src` da tag `<img>`. Como eu disse, o caminho absoluto é o caminho completo, isso quer dizer que não importa de onde eu esteja acessando, é para vir o mesmo conteúdo. Vamos testar, primeiro copie isso `https://www.google.com/`:

- aperte windows + R (o executar do windows), cole ali e execute: vai abrir o site do Google.
- cole na barra do navegador: vai abrir o site do Google.
- escreva em um documento de texto e depois aperte CTRL e clique nele: vai abrir o site do Google.

Não importa de onde seja o acesso, se estiver com internet ele vai para o caminho **absoluto** do Google. Agora vamos fazer algo legal com a imagem, então copie isso `https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png`:

- cole na barra do navegador e aperte enter. Vai mostrar o logo do Google.

O caminho absoluto não serve só para a internet, dentro do próprio computador você pode pegar arquivos usando o caminho completo dele, por exemplo:

- De novo "windows + R" e cole `C:\Windows\System32\drivers\etc\hosts`, abra com bloco de notas

O arquivo que abrimos não importante no momento, nem acessar arquivos dessa forma no computador, só mostrei para todos terem uma noção bem certa do que é um caminho absoluto. É aquele caminho que escrevemos ele por completo, desde a sua raíz até o arquivo ou pasta desejado.

O **caminho relativo**...
