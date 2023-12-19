function converterDistancias() {
  const opcao = parseInt(prompt("Escolha a direção da conversão:\n1. Quilômetros para Milhas\n2. Milhas para Quilômetros"));

  if (opcao !== 1 && opcao !== 2) {
    console.log("Opção inválida. Por favor, escolha 1 ou 2.");
    return;
  }

  const valor = parseFloat(prompt("Insira o valor:"));

  if (isNaN(valor)) {
    console.log("Valor inválido. Certifique-se de inserir um número válido.");
    return;
  }

  const precisaoDecimal = parseInt(prompt("Insira a precisão decimal desejada para o resultado:"));

  if (isNaN(precisaoDecimal) || precisaoDecimal < 0) {
    console.log("Precisão decimal inválida. Certifique-se de inserir um número inteiro não negativo.");
    return;
  }

  let resultado;

  if (opcao === 1) {
    const quilometrosParaMilhas = valor * 0.621371;
    resultado = quilometrosParaMilhas.toFixed(precisaoDecimal) + " milhas";
  } else {
    const milhasParaQuilometros = valor / 0.621371;
    resultado = milhasParaQuilometros.toFixed(precisaoDecimal) + " quilômetros";
  }

  console.log("Conversão de distância");
  console.log("-----------------------");
  console.log(valor + (opcao === 1 ? " quilômetros são:" : " milhas são:"));
  console.log(resultado);
}

converterDistancias();
