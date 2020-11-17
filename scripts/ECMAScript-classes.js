class Vehicle {
    constructor(description, wheels) {
      this.description = description;
      this.wheels = wheels;
    }
    describeAboutVehicle() {
      console.log(
        `This is a ${this.description} 
          with ${this.wheels} wheels.`
      );
    }
  }
  
  let marutiWagonr = new Vehicle("Maruti WagonR", 4);
  
  console.log(marutiWagonr);
  marutiWagonr.describeAboutVehicle();
  

// Inheritance

  class Truck extends Vehicle {
    constructor() {
      super("Tata truck", 18);
    }
  }
  let tataTruck = new Truck();
  tataTruck.describeAboutVehicle();
  

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
  
  const myOffice = new Hike(45, 30);
  
  console.log(myOffice.lengthInHours);
  

