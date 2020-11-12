// spread operator worked with ... (3 dots)

let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

// Nested
let animals = [
    "Smoky",
    "Miro",
    "Swimmy",
    cats,
    dogs
  ];

console.log(animals);

// Spread
let animals1 = [
  "Smoky",
  "Miro",
  "Swimmy",
  ...cats,
  ...dogs
];

console.log(animals1);


// Destructuring

let [first, fifth] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
  ];
  
  console.log(first);
  console.log(fifth); // by defining fifth will not display the fifth element

let [one, , , , five] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
  ];
  
  console.log(one);
  console.log(five);
  

// Searching arrays with the .includes function
let cities = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
  ];
  
  console.log(cities.includes("Boston"));
  console.log(cities.includes("Santa Barbara"));
  