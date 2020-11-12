function print(firstName) {
    console.log(`Hello ${firstName}
    
Welcome at 3Pillar learning group`);
  }
  
  print("Jai");
  
  function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Dear ${firstName}! Thanks!
        Total: $${price}
        Shipping: $${shipping}
        Grand Total: $${price + shipping}
      `);
  }
  
  createEmail("Customer", 100);

// Search string

const planet = "Earth";

console.log(planet.startsWith("Ear"));  // found in the string so return true
console.log(planet.startsWith("ear"));  // JavaScript is case sensitive so return false
console.log(planet.endsWith("th"));  // true
console.log(planet.includes("art"));  // true
console.log(planet.search("h")); // first occurrence of "h" on which possition in the string

  



// premetives
  // numbers, string, array and object

  const id = Symbol();

  const courseInfo = {
      title: "JavaScript",
      topics: ["strings", "arrays", "objects"],
      id: "js-course"
  };

  courseInfo[id] = 41284;
  console.log(courseInfo);


  // Map - key value paire

let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

// console.log(course);
// console.log(course.react);
// console.log(course.get("react"));

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]]
]);

// console.log(details.size);

details.forEach(function (item) {
  console.log(item);
});



// Working with sets

let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");

console.log(
  "has Oliver Twist",
  books.has("Oliver Twist")
);
