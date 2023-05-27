function converterDistancias() {
  
    const kilometers = parseFloat(prompt("Insira o valor em quilômetros:"));
    const miles = parseFloat(prompt("Insira o valor em milhas:"));
  
    
    if (isNaN(kilometers) || isNaN(miles)) {
      console.log("Valores inválidos. Certifique-se de inserir números válidos.");
    } else {
      
      const kilometersToMiles = kilometers * 0.621371;
      const milesToKilometers = miles / 0.621371;
  
     
      console.log("Conversões de distância");
      console.log("-----------------------");
      console.log(kilometers + " quilômetros são:");
      console.log(kilometersToMiles.toFixed(2) + " milhas");
      console.log("----");
      console.log(miles + " milhas são:");
      console.log(milesToKilometers.toFixed(2) + " quilômetros");
    }
  }
  
  
  converterDistancias();