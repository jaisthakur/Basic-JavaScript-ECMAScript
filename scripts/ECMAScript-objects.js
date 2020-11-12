// Object Literal 
function skier(name, sound) {
    return {
      name: name,
      sound: sound,
      powderYell: function () {
        let yell = this.sound.toUpperCase();
        console.log(`${yell}! ${yell}!`);
      }
    };
  }
  
  skier("Sendy", "yeah").powderYell();

// Enhancement
function skier1(name, sound) {
    return {
      name, // enchancement
      sound,
      powderYell: function () {
        let n = this.name.toUpperCase();
        let s = this.sound.toUpperCase();
        console.log(`${n}! ${s}!`);
      }
    };
  }
  
  skier1("Sendy", "yeah").powderYell();



//Spread operator

  const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
  };
  
  const nighttime = "mac and cheese";
  
  const backpackingMeals = {
    ...daytime,
    nighttime
  };
  
  console.log(backpackingMeals);


  // Destructuring objects

  const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "so much"
  };
  
  function marketing({ destination, activity }) {
    return `Come to ${destination} and do some ${activity}`;
  }
  
  console.log(marketing(vacation));
  
  const { title, price } = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
      "bread",
      "corned beef",
      "dressing",
      "sauerkraut",
      "cheese"
    ]
  };
  
  console.log(title);
  console.log(price);
  
  // Iterating with for/of loop

  console.log('------------- Iterating with for loop -------------');

  for (let letter of "JavaScript") {
    console.log(letter);
  }
  
  let topics = new Map();
  topics.set("HTML", "/topic/html");
  topics.set("CSS", "/topic/css");
  topics.set("JavaScript", "/topic/javascript");

  for (let topic of topics.keys()) {
    console.log(topic);
  }

  for (let route of topics.values()) {
    console.log(`The topic can found at ${route}`);
  }
  
  for (let topic of topics.entries()) {
    console.log(topic);
  }
  
  