# conversor_de_distancia

* Converte distâncias entre quilômetros e milhas.
 
 * O código solicita ao usuário que insira os valores de quilômetros e milhas e realiza as conversões correspondentes.

 * @version 1.0.0
 


 * Solicita ao usuário que insira os valores de quilômetros e milhas.
 * Realiza as conversões e imprime os resultados.
 
 
function converterDistancias() {
  // Solicitar ao usuário que insira os valores de quilômetros e milhas
  const kilometers = parseFloat(prompt("Insira o valor em quilômetros:"));
  const miles = parseFloat(prompt("Insira o valor em milhas:"));

  // Verificar se os valores inseridos são válidos
  if (isNaN(kilometers) || isNaN(miles)) {
    console.log("Valores inválidos. Certifique-se de inserir números válidos.");
  } else {
    // Converter os valores
    const kilometersToMiles = kilometers * 0.621371;
    const milesToKilometers = miles / 0.621371;

    // Imprimir as conversões
    console.log("Conversões de distância");
    console.log("-----------------------");
    console.log(kilometers + " quilômetros são:");
    console.log(kilometersToMiles.toFixed(2) + " milhas");
    console.log("----");
    console.log(miles + " milhas são:");
    console.log(milesToKilometers.toFixed(2) + " quilômetros");
  }
}

// Executa a função para converter distâncias
converterDistancias();

**Função "converterDistancias()"**

Esta função é responsável por solicitar ao usuário que insira os valores de quilômetros e milhas, realizar as conversões correspondentes e imprimir os resultados. Ela utiliza as seguintes etapas:

Solicita ao usuário que insira o valor em quilômetros utilizando o método prompt().
Solicita ao usuário que insira o valor em milhas utilizando o método prompt().
Verifica se os valores inseridos são números válidos utilizando a função isNaN().
Se os valores forem inválidos, exibe uma mensagem de erro no console.
Caso contrário, realiza as conversões:
Converte os quilômetros em milhas multiplicando o valor por 0.621371.
Converte as milhas em quilômetros dividindo o valor por 0.621371.
Imprime os resultados no console com formatação adequada.

**Execução**

No final do código, a função converterDistancias() é chamada para iniciar o processo de conversão. Isso permite que o código seja executado e as conversões sejam realizadas.

Certifique-se de executar o código em um ambiente JavaScript adequado, como um navegador web ou um ambiente Node.js, para que o prompt funcione corretamente e permita a entrada do usuário.
