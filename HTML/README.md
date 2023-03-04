# Aula 2
## Head
### Tudo que está entre `<head>` são metadados da página

<br />
<br />

## Encoding 
### É a codificação dos caracteres
### Geralmente é UTF-8
`<meta charset="utf-8"/>`  - identifica o tipo de codificação

<br />

>  shift+1 ou doc+tab é um atalho para criar uma base HTML no VScode

<br />
<br />

## Criar um link no HTML

```html
<a href="nomes.html">Veja uma página com nomes de pessoas.</a>
```
`a` - anchor

`href` - hypertext reference (arquivo com a página)


<br />
<br />

## Listas
```html
<ol>
    <li>Antônio</li>
    <li>Daniela</li>
    <li>Jaqueline</li>
    <li>João</li>
</ol>
```

```html
<ul>
    <li>Antônio</li>
    <li>Daniela</li>
    <li>Jaqueline</li>
    <li>João</li>
</ul>
```

`ol` - ordered list

`ul` - undordered list

<br />
<br />

## Imagens
```  html
<img src="img/photo.jpg" 
    width="300"
    alt="uma foto de uma foto">
```
ou

``` html
<img src="https://images.pexels.com/photos/15658380/pexels-photo-15658380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    width="300"
    alt="roupas penduradas">
```
### Para incluir um SVG o processo é o mesmo de uma imagem:
``` html
<img src="svg/svg1.svg" alt="imagem svg">
```
<br />
<br />

## Audio
```html
<audio controls>
    <source src="audio/audio1.mp3" type="audio/mpeg">
    <a href="audios/audio1.mp3">Audio 1</a>
</audio>
```
ou
```html
<audio
    controls
    autoplay
    loop
    muted
    src="audio/audio2.mp3">
</audio>
```

<br />
<br />

## Video
```html
<video controls width="700">
        <source src="video/video1.mp4" type="video/mp4">
</video>
```

### Usando o iframe para fazer o "embed" de um vídeo

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/MLcf6BfG9eU" title="YouTube video player" frameborder="0"></iframe>
```

<br />
<br />

## Caracteres especiais
```html
<p>Um símbolo de maior: &gt;</p>
<p>Raiz quadrada: &#8730;</p>
<p>Portanto: &there4;</p>
```

<br />
<br />

# Aula 3
## Elementos estruturais
### < div >

```html
<div id="principal">
```

### < nav > Links de navegação
```html
<nav>
```
### < head > Cabeçalho
```html
<head>
```
### < footer > Rodapé
```html
<footer>
```
### < article > Separação
```html
<article>
```
### < aside > Barra lateral
```html
<asside>
```

<br />
<br />

## Forms
```html
<form action=" 'O que meu form vai fazer' " method=" ' método GET padrão, pode mudar para POST">
        <label>
            Primeiro nome:
            <input id="primeiroNome" type="text">
        </label>
        <label>
            Sobrenome:
            <input id="sobrenome" type="text">
        </label>
        <input type="submit" value="Enviar">
    </form>
```
### Existem diversos tipos de inputs...

<br />

## Botão
### O radio só permite apertar um botão
```html
<label for="estado">Estado:</label>
    <select id="estado">
        <option>São Paulo</option>
        <option>Rio de Janeiro</option>
        <option>Minas Gerais</option>
        <option>Espírito Santo</option>
    </select>

    <fieldset>
        <legend>Escolha um veículo</legend>
        <input id="X1" type="radio" name="veiculo">
        <label for="X1">X1</label>
        <input id="XC60" type="radio" name="veiculo">
        <label for="XC60">XC60</label>
        <input id="Q5" type="radio" name="veiculo">
        <label for="Q5">Q5</label>
        <input id="Discovery" type="radio" name="veiculo">
        <label for="Discovery">Discovery</label>
        <input id="Taycan" type="radio" name="veiculo">
        <label for="Taycan">Taycan</label>
    </fieldset>
```
`fieldset` define um campo separado

`legenda` é uma legenda para esse campo

<br />
<br />

## Tabelas
`<table>`
```html
<table>
    <!-- cabeçalho -->
    <thead>
        <tr>
            <th>RA</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Média</th>
        </tr>
    </thead>
    <tbody>
        <!-- primeira linha -->
        <tr>
            <td>123456</td>
            <td>João</td>
            <td>Santos</td>
            <td>10</td>
        </tr>
        <!-- segunda linha -->
        <tr>
            <td>447744</td>
            <td>Maria</td>
            <td>Silva</td>
            <td>9</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>9.5</td>
        </tr>
    </tfoot>
</table>
```
`th` table head

`tr` table row

`td` table data

`tbody` table body

`tfoot` table foot

<br />
<br />

## ARIA - Acessibilidade

<br />
<br />

## Microdados
### Testador: 
https://search.google.com/test/rich-results