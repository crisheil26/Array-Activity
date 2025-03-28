// Activity 2: Array Methods Practice

// 1. Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated Array:", combinedArr);

// 2. Use push() to add an element "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("The updated list \n",fruits);

// 3. Use unshift() to add two numbers 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("The updated list \n", array1);

// 4. Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("The updated list \n", fruits);

// 5. Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("The updated list \n", array2);

// 6. Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("The sorted list:", fruits);

// 7. Use slice() to create a new array containing a portion of the fruits array
let months = [ "june","july","august","october"];
months.splice(1,3,"september");
console.log(months);


console.log("Sliced fruits array:", slicedFruits);
