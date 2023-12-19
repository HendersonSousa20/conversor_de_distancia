
# Conversor de Distância v2.0

*Converte distâncias entre quilômetros e milhas.*

Este é um conversor de distância simples que permite ao usuário escolher a direção da conversão e a precisão decimal desejada para o resultado.

## Funcionalidades Adicionais

1. **Escolha da Direção da Conversão:** Agora, o usuário pode escolher se deseja converter de quilômetros para milhas ou de milhas para quilômetros.

2. **Precisão Decimal Personalizável:** O usuário pode especificar a precisão decimal desejada para o resultado da conversão.

## Como Usar

1. Clone o repositório ou copie o código para um arquivo local.
2. Abra o arquivo HTML no seu navegador ou execute o script JavaScript em um ambiente apropriado.
3. Siga as instruções no console para escolher a direção da conversão, inserir o valor e definir a precisão decimal.

Exemplo de uso:

```javascript
converterDistancias();
```

## Função *converterDistancias*

Esta função é responsável por solicitar ao usuário que escolha a direção da conversão, insira o valor e a precisão decimal desejada. Em seguida, realiza a conversão correspondente e imprime o resultado formatado.

```javascript
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

// Executa a função para converter distâncias
converterDistancias();
```

## Contribuição

Sinta-se à vontade para contribuir para aprimorar este conversor de distâncias. Se encontrar problemas ou tiver ideias para melhorias, abra uma issue ou envie uma pull request.

## Licença

Este projeto está sob a licença [MIT](LICENSE).


Certifique-se de executar o código em um ambiente JavaScript adequado, como um navegador web ou um ambiente Node.js, para que o prompt funcione corretamente e permita a entrada do usuário.
