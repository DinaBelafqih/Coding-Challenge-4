// Task 1: If Statements 
let purchaseAmount = 150; // Example value
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // Apply a 10% discount
}

console.log(`Final amount after discount: $${finalAmount}`);

// Task 2: For Loop
let sales = [120, 85, 200, 150, 90]; // Example sales figures
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);

// Task 3: While Loop
let stock = 10;

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}


// Task 4: Do...While Loop
let responses = 0;

do {
    responses++;
    console.log(`Response count: ${responses}`);
} while (responses < 3);

// Task 5: For...In Loop
let employee = {
    name: "Sarah",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6: For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"]; // Example product names

for (let product of products) {
    console.log(`Product: ${product}`);
}