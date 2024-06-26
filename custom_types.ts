//enums 

//Initialized without type safe
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Creating enum Pet type
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

//Re-init type safe
let petOnSaleTS: Pet = Pet.Chinchilla
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2], 
  [Pet.Chinchilla, 1], 
  [Pet.Hamster, 2], 
  [Pet.Chinchilla, 50]
];