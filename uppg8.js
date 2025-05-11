

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
  const people = [
    { name: "Mohamad", age: 38 },
    { name: "Anna", age: 29 },
    { name: "Robert", age: 24 },
    { name: "Eva", age: 41 },
    { name: "Mikael", age: 49 },
  ];
// skapa en fuktion som tar in en array som argument
  function printOldPeopleNames(personArray) {
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
    for(const person of personArray) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
// anropa funktionen och skicka med arrayen som argument
    printOldPeopleNames(people);
}

module.exports = { uppg8 };
