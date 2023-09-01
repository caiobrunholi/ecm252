import 'dart:io';

void main() {
// Exibe o texto e pula uma linha
  stdout.writeln('Digite o seu nome: ');
// Lê o que o usuário digitou
//devolve uma string
  var nome = stdin.readLineSync();
// Exibe o texto sem pular uma linha
  stdout.write('Olá, $nome!');

  print(' Digite sua idade: ');
//String? admite uma string ou null
  String? entrada = stdin.readLineSync();
//validação com if else
  if (entrada != null) {
    int idade = int.parse(entrada);
    print("Você tem $idade anos");
  }
}