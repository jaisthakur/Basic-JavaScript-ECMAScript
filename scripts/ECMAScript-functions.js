// .repeat()


let yell = "woo!";

let party = yell.repeat(20);

console.log(party);

let cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("prrr".repeat(times));
  },
  snore(times) {
    console.log("ZzZzZ".repeat(times));
  }
};

cat.meow(3);
cat.purr(3);
cat.snore(6);



// Default Parameters

function add(x = 5, y = 6) {
    console.log(x + y);
  }
  
  add(1, 2);
  
  function haveFun(
    activityName = "hiking",
    time = 3
  ) {
    console.log(`Today I will go ${activityName}
      for ${time} hours.`);
  }
  
  haveFun("biking", 2.5);
  haveFun("biking");

// Arrow Functions

// =>

let studentList = (students) =>
  console.log(students);

studentList(["A", "B", "C"]);

let list = ["apple", "banana", "strawberry"];
list.map((item) => console.log(item));


// Arrow Functions

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
      this.hobbies.forEach((hobby) => {
        let string = `${this.first} likes to ${hobby}`;
        console.log(string);
      });
    }
  };
  
  person.printHobbies();

  
  // Generators

  function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
  }
  
  let countdown = director();
  
  console.log(countdown.next().value);
  console.log(countdown.next().value);
  console.log(countdown.next().value);
  console.log(countdown.next());
  console.log(countdown.next());
  