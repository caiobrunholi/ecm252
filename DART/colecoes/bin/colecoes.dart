void main(List<String> arguments) {
//ok
  var nomes = {'Ana', 'João'};
  print(nomes);
//_Set<String>
  print(nomes.runtimeType);
//ok também, mas vai conter somente um "Brasil"
  var paises = {'Brasil', 'Brasil'};
  print(paises);
}
