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

let calculateTotalCost = (price, quantity, taxRate) => {
    if (typeof price != "number") {
        return "Invalid number";
    }

    let totalCost = (price * quantity) * (1 + taxRate);

    return totalCost;
}

console.log(calculateTotalCost(2.99, 3, 0.03).toLocaleString("en-US", { style: "currency", currency: "USD" }));