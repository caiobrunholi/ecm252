void main(List<String> arguments) {
  print(arguments);

var soma = 0;
  for(final valor in arguments){
      soma += int.parse(valor);
  }

  print(soma);
}