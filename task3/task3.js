//1. Function Declaration
function addNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addNumbers(20, 10);
console.log(`Sum of the numbers is ${sum}`); // Output: Sum: 30

//2. Function with Parameters and return value
function areaOfRectangle(length, width) {
  return length * width;
}
const length = 10;
const width = 5;
const area = areaOfRectangle(length, width);
console.log(`Area of the rectangle is ${area}`); // Output: Area: 50

//3. Function Expression
function greetUser(name) {
  return `Welcome ${name}!`;
}
const greeting = greetUser("John");
console.log(greeting); // Output: Welcome John!

//4.Arrow Function-Basic
const multiplyNumbers = (num1, num2) => {
  return num1 * num2;
};
const product = multiplyNumbers(4, 5);
console.log(`Product of the numbers is ${product}`); // Output: Product: 20

//5. Arrow Function- Multiple Parameters
const getUserInfo = (name, age) => {
  return `${name} is ${age} years old.`;
};
console.log(getUserInfo("John", 25)); // Output: John is 25 years old.

//6.Arrow Function with array to calculate the sum of all numbers in the array
const numbers = [10, 20, 30, 40, 50];
const calculateTotal = (numberArray) => {
  return numberArray.reduce((total, current) => {
    return total + current;
  }, 0);
};
console.log(`Total = ${calculateTotal(numbers)}`); // Output: Total: 150


//7.map() with Arrow Function to get only the names of the users
const users = [
  { name: "John", age: 25 },
  { name: "David", age: 30 },
  { name: "Sam", age: 20 },
];
const userNames = users.map((user) => {
    return user.name;
});
console.log(JSON.stringify(userNames)); // Output: ["John","David","Sam"]

//8. filter() with Arrow Function to get users above 25 years old
const usersAbove25 = users.filter((user) => {
  return user.age > 25;
});
console.log("[");
usersAbove25.forEach((user) => {
  console.log(`  { name: "${user.name}", age: ${user.age} }`);
});

console.log("]");
 // Output: [{name:"David",age:30}]

 //9. find() with Arrow Function to find a user by name
 const david = users.find((user) => {
  return user.name === "David";
});
console.log(`name: ${david.name}, age: ${david.age}`); // Output: name: David, age: 30

//10. forEach() with Arrow Function to print all users
users.forEach((user) => {
  console.log(`${user.name} - ${user.age}`);
}); // Output: john - 25, David - 30, Sam - 20

//11. Callback funtion
const processUser = (user, callback) => {
  console.log(`Processing user: ${user.name}`);
  callback(user);
};

//12. Promise
const fetchUserData = new Promise((resolve, reject) => {
  // Simulate an API call
  setTimeout(() => {
    resolve("User data received successfully");
  }, 2000); 
});

//13. Async/Await
const getUser = async () => {
  try {
    console.log("Fetching user data...");
    const message = await fetchUserData;
    console.log(message);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}; 
getUser(); // Output: Fetching user data... (after 2 seconds) User data received successfully

