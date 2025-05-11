

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
   function addera (tal1, tal2) {
    // funktionen ska returnera summan av talen
      return tal1 + tal2;
   }
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
   return addera(5, 10);
}

module.exports = { uppg7 };
