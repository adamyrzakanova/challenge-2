// task 1
let products = ["necklace", "earrings", "bracelet", "ring", "pendant"];
products.push("brooch");
console.log(products);
products.pop(); 
console.log("Updated products:",products);

// task 2
let scores = [85, 90, 78, 92, 88];
scores[1] = 95;
let total = scores.reduce((a, b) => a + b, 0);
let average = total / scores.length;
console.log("Updated scores:", scores);
console.log("Total score:", total);
console.log("Average score:", average);

// task 3
let employee = {
    name: "Aidai Myrzakanova",
    age: 25,
    position: "Software Engineer",
    isActive: true
};  
console.log(employee);
employee.department = "Development";
employee.position = "Senior Software Engineer";
console.log("Updated employee:", employee);


