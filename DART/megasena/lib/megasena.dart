import 'dart:io';
import 'dart:math';

var gerador = Random();

enum OPCAO { apostar, sair }

// Criando uma lista para armazenar os números escolhidos pelo usuario
List<int> numUser = [];
// Criando uma lista para armazenar os números sorteados
List<int> numLot = [];
// Criando uma lista para armazenar os números acertados
List<int> numAcerto = [];


void exibe(String texto) {
  print(texto);
}

int pegaOpcaoUsuario() {
  return int.parse(stdin.readLineSync()!);
}

bool opcaoEhValida(int opcao) {
  return opcao >= 1 && opcao <= 2;
}

int pegaNumUsuario() {
  var buf = int.parse(stdin.readLineSync()!);
  if (buf < 1 || buf > 60) {
    return -1;
  }
  if (numUser.isNotEmpty) {
    // exibe('não vazio');
    for (final num in numUser) {
      if (num == buf) {
        return -1;
      }
    }
  } else {
    // exibe('vazio');
  }
  return buf;
}

int pegaNumLoteria() {
  var buf = gerador.nextInt(61);
  if (numLot.isNotEmpty) {
    // exibe('não vazio');
    for (final num in numLot) {
      if (num == buf) {
        return -1;
      }
    }
  } else {
    // exibe('vazio');
  }
  return buf;
}

void insereNumUsuario(int num) {
  numUser.add(num);
}

void insereNumLoteria(int num) {
  numLot.add(num);
}

void insereNumAcerto(int num) {
  numAcerto.add(num);
}

void verificaResultado(int i){
  numLot.forEach((num) { 
    // print(num);
    if(numUser[i] == num){
      insereNumAcerto(num);
    }
  });
}



// Código principal
void loteria() {
  int opUsuario;
  do {
    do {
      // exibir menu
      exibe('1-Apostar\n2-Sair');

      // capturar a ação do usuario, validando
      opUsuario = pegaOpcaoUsuario();
    } while (!opcaoEhValida(opUsuario));
    // se o usuario digitar 2, sair
    //senão
    if (opUsuario != 2) {
      var buf = -1;
      exibe('Insira 6 números de 1 a 60 sem repeti-los');
      numUser = [];
      numLot = [];
      numAcerto = [];

      while (numUser.length < 6) {
        buf = pegaNumUsuario();
        // exibe('$buf');
        if (buf == -1) {
          exibe('Número inválido ou repetido');
        } else {
          insereNumUsuario(buf);
          exibe('Aposta $buf registrada, digite o próximo número:');
        }
      }
      exibe("Fim da aposta");
      numUser.sort();

      while (numLot.length < 6) {
        buf = pegaNumLoteria();
        if (buf != -1) {
          insereNumLoteria(buf);
        }
      }
      exibe("Fim do sorteio");
      numLot.sort();

      exibe("-------------------------");
      exibe("RESULTADO:");
      print(numUser);
      print(numLot);


      for(var i=0; i<6; i++){
        verificaResultado(i);
      }
      exibe("Você acertou os seguintes numeros:");
      print(numAcerto);

      exibe("FIM");
      exibe("-------------------------");
      sleep(Duration(seconds: 5));
    }
  } while (opUsuario != 2);
}
