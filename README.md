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

```
<a href="nomes.html">Veja uma página com nomes de pessoas.</a>
```
`a` - anchor

`href` - hypertext reference (arquivo com a página)


<br />
<br />

## Listas
```
<ol>
    <li>Antônio</li>
    <li>Daniela</li>
    <li>Jaqueline</li>
    <li>João</li>
</ol>
```

```
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
```  
<img src="img/photo.jpg" 
    width="300"
    alt="uma foto de uma foto">
```
ou

```
<img src="https://images.pexels.com/photos/15658380/pexels-photo-15658380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    width="300"
    alt="roupas penduradas">
```
### Para incluir um SVG o processo é o mesmo de uma imagem:
```
<img src="svg/svg1.svg" alt="imagem svg">
```
<br />
<br />

## Audio
```

<audio controls>
    <source src="audio/audio1.mp3" type="audio/mpeg">
    <a href="audios/audio1.mp3">Audio 1</a>
</audio>
```
ou
```
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
```
<video controls width="700">
        <source src="video/video1.mp4" type="video/mp4">
</video>
```

### Usando o iframe para fazer o "embed" de um vídeo

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/MLcf6BfG9eU" title="YouTube video player" frameborder="0"></iframe>
```

<br />
<br />

## Caracteres especiais
```
<p>Um símbolo de maior: &gt;</p>
<p>Raiz quadrada: &#8730;</p>
<p>Portanto: &there4;</p>
```