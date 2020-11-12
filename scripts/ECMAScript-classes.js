class Vehicle {
    constructor(description, wheels) {
      this.description = description;
      this.wheels = wheels;
    }
    describeYourself() {
      console.log(
        `I am a ${this.description} 
          with ${this.wheels} wheels.`
      );
    }
  }
  
  let coolSkiVan = new Vehicle("cool ski van", 4);
  
  console.log(coolSkiVan);
  coolSkiVan.describeYourself();
  

// Inheritance

  class SemiTruck extends Vehicle {
    constructor() {
      super("semi truck", 18);
    }
  }
  let groceryStoreSemi = new SemiTruck();
  groceryStoreSemi.describeYourself();
  

  // How Getters and Setters work with objects

  let attendance = {
      _list: [],
      set addName(name){
          this._list.push(name);
      },
      get list() {
          return this._list.join(", ");
      }
  };

  attendance.addName = "Jai";
  console.log(attendance.list);

  attendance.addName = "Jai Thakur";
  attendance.addName = "Jai Shanker Thakur";
  console.log(attendance.list);


  // How Getters and Setters work with Clases

  class Hike {
    constructor(distance, pace) {
      this.distance = distance;
      this.pace = pace;
    }
    get lengthInHours() {
      return `${this.calcLength()} hours`;
    }
    calcLength() {
      return this.distance / this.pace;
    }
  }
  
  const mtTallac = new Hike(10, 2);
  
  console.log(mtTallac.lengthInHours);
  

