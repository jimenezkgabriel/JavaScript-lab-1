function formatFullName(firstName, lastName) {
    for (let i = 0; i < arguments.length; i++)
    {
        if (arguments[i] === "" || typeof arguments[i] != "string")
        {
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