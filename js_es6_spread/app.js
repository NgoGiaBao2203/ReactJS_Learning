//Spread

var array1 = ["Javascript", "Ruby", "Python"];
var array2 = ["C++", "Java"];
var array3 = [...array1, ...array2, "C#", "Go"];

console.log(array3);

//------//
var object1 = {
  name: "JavaScript",
};

var object2 = {
  price: 100,
};

var object3 = {
  ...object1,
  ...object2,
};

console.log(object3);
