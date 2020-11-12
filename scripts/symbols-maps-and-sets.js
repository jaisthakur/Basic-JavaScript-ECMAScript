
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

// books.map(function (item){
//   console.log(item);
// });

console.log("has Oliver Twist", books.has("Oliver Twist"));
