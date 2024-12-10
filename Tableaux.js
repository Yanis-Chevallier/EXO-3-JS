const kiwi = "Kiwi";

const apple = "Pomme";

const pineapple = "Ananas";

// ...

const fruits = ["Kiwi", "Pomme", "Ananas"];

const myArray = ["Bonjour", 123, true, ["Hé", "Salut"]];

const fruit = ["Kiwi", "Pomme", "Ananas"];


console.log(fruits[0]); // will print "Kiwi"


console.log(fruits[1]); // will print "Pomme"


console.log(fruits[2]); // will print "Ananas'

fruits[0] = "Banane";

console.log(fruits[0]); // will print "Banane"

const fruits = ["Kiwi", "Pomme", "Ananas"];
console.log(fruits[0]); // Will print "Kiwi"
console.log(fruits[1]); // Will print "Pomme"
console.log(fruits[2]); // Will print "Ananas'
fruits[0] = "Banane"; // Will change the first element to Banane
console.log(fruits[0]); // Will print "Banane"

const fruits = ["Kiwi", "Pomme", "Ananas"];

console.log(fruits.length); // will print 3

const fruits = ["Kiwi", "Apple", "Pineapple"];

fruits.push("Banana");

console.log(fruits);

// ["Kiwi", "Pomme", "Ananas", "Banane"]

const fruits = ["Kiwi", "Pomme", "Ananas"];

fruits.unshift('Fraise');

console.log(fruits);

// ["Fraise", "Kiwi", "Pomme", "Ananas"]

fruits.pop();

console.log(fruits);

// [ "Kiwi", "Pomme" ]

fruits.shift();

console.log(fruits);

// [ "Pomme" ]

const animals = ["Lion", "Singe", "Tigre"];



//Challenge

// Voici nos signes Astro fournis sous forme de chaîne.


const aries = `♈`,

  taurus = `♉`,

  gemini = `♊`,

  cancer = `♋`,

  leo = `♌`,

  virgo = `♍`,

  libra = `♎`,

  scorpio = `♏`,

  sagittarius = `♐`,

  capricorn = `♑`,

  aquarius = `♒`,

  pisces = `♓︎`;


// En astrologie occidentale, il y a 12 signes, organisés par éléments terrestres (Terre, Eau, Air, Feu) 

// Vous allez manipuler les tableaux suivants avec ce défi :

const fireSigns = [aries, leo];

const earthSigns = [taurus, virgo, capricorn, sagittarius];

const airSigns = [pisces, gemini, libra, aquarius];

const waterSigns = [scorpio, pisces];

/* 🏁 Ajouter un dernier élément à un tableau 

    Le Sagittaire est absent des signes de feu, veuillez l'ajouter au 

    FIN du tableau et vérifiez le résultat.

*/

// ✒️ Écrivez votre code ici

console.log(

    fireSigns[fireSigns.length - 1] === "♐"
  
      ? "Bonne réponse ✅"
  
      : "Mauvaise réponse ❌"
  
  );
  
  /* 🏁 Supprime le dernier élément d'un tableau
  
        Le Sagittaire ne devrait pas être sur terre. Signes, veuillez les supprimer. 
  
        Sagittaire du tableau et vérifiez le résultat.
  
  */ 
  
  // ✒️ Écrivez votre code ici
  
  // la ligne ci-dessous est destinée aux tests, n'y touchez pas :)
  
  console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Bonne réponse ✅" : "Mauvaise réponse ❌");
  
  
  /* 🏁 Supprime un élément au début d'un tableau
  
        Les Poissons ne devraient pas être à l'antenne. Signes, veuillez supprimer les Poissons. 
  
        du tableau et vérifiez le résultat.
  
  */
  
  // ✒️ Écrivez votre code ici
  
  // la ligne ci-dessous est destinée aux tests, n'y touchez pas :)
  
  console.log(airSigns[0] !== "♓︎" ? "Bonne réponse ✅" : "Mauvaise réponse ❌");
  
  /* 🏁 Ajouter un élément au début d'un tableau
  
      Le cancer est absent des signes d'eau, veuillez l'ajouter au 
  
      DÉBUT du tableau et vérifiez le résultat.
  
  */
  
  // ✒️ Écrivez votre code ici
  
  // la ligne ci-dessous est destinée aux tests, n'y touchez pas :)
  
  console.log(waterSigns[0] === "♋" ? "Bonne réponse ✅" : "Mauvaise réponse ❌");