# CSS
<br/>
<br/>

# Aula 3
## Classes
```css
#titulo {
    color: green;
    text-align: center;
}

/* Vale soemente para elementos tipo <p> com id igual a descrição */
p#descricao {
    color: blue;
}

p.promocao {
    text-align: center;
    background-color: lightgreen;
}

h1.promocao {
    color: yellow
}

.nova{
    color: white;
}
```

```html
 <p class="nova promocao">
        Venha conversar conosco e conhecer nossas ofertas de <strong>bolsas de estudos</strong>.
 </p>
```
> `nova promocao` trerá os mesmos atributos de das classes `.nova`e `promocao`

<br/>
<br/>

```css
p {
    color: red !important;
}
```
> O `!important` sobreescreve todas as definições de `<style>`

<br/>
<br/>

# Aula 4
## `<a>` - In Line, faz com que os itens possam ficar um do lado do outro, ocupando somente o espaço necessário

### Pode-se colocar isso também na definição da classe:
```css
.engenharia {
display: inline-block;
width: 300px;
height: 200px;
}
.farmacia {
display: inline-block;
width: 300px;
height: 200px;
}
```
<br/>
<br/>

### Para não mostrar um elemento:
```css
.rodape{
display: none;
}
```

