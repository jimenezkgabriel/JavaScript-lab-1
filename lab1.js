function formatFullName(firstName, lastName) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === "" || typeof arguments[i] != "string") {
            return "Invalid name input"
        }
    }

    let newName = "";

    for (i = arguments.length - 1; i >= 0; i--) {
        arguments[i] = capitalize(arguments[i])
        newName = newName.concat(arguments[i], " ")
    }

    return newName.trim()
}

let capitalize = (name) => {
    return name[0].toUpperCase() + name.slice(1);
}

console.log(formatFullName(`gabriel`, `jimenez`));

let calculateTotalCost = (price, quantity, taxRate, discount) => { // Kinda evil that JavaScript does not support method overloading
    if (typeof price != "number" || typeof quantity != "number" || typeof taxRate != "number" || typeof discount != "number") {
        return "Invalid number";
    }

    // in case entered discount is negative, leave it at 0
    if (discount < 0) {
        discount = 0;
    }

    let totalCost = ((price * quantity) - discount) * (1 + taxRate);

    return totalCost;
}

console.log(calculateTotalCost(2.99, 3, 0.03, 1).toLocaleString("en-US", { style: "currency", currency: "USD" }));

let checkEligibility = (age, isEmployed) => {
    if (age < 18) {
        return "You are not eligible :(";
    }

    switch (isEmployed) {
        case true:
            return "You are eligible :D";
        case false:
            return "You are conditionally eligible :)"
        default:
            return "Error";
    }
}

console.log(checkEligibility(`23`, true))