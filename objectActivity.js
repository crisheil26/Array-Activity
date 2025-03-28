// Activity 3: Working with Objects

// 1. Create an object called car with the properties type, model, and color
let car = {
    type: "Sedan",
    model: "Corolla",
    color: "Red"
};
// 2. Use typeof to check the type of the object and log it to the console
console.log(car["type"]);
console.log(car["model"]);
console.log(car["color"]);

// 3. Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log(car);

// 4. Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log(car);
