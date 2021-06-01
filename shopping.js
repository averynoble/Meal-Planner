const groceryItems = [
    {
        id: 1,
        name: "Milk",
        price: 3.99
    },
    {
        id: 2,
        name: "Eggs",
        price: 6.00
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 8.99
    },
    {
        id: 4,
        name: "Tri tip",
        price: 16.99
    },
    {
        id: 5,
        name: "Strawberries",
        price: 6.99
    },
    {
        id: 6,
        name: "Sandwich buns",
        price: 11.99
    },
    {
        id: 7,
        name: "Mustard",
        price: 4.75
    }
]

/*for (const item of groceryItems) {
    console.log(`
    I need ${item.name}
    and it costs $${item.price} dollars.`)
} */
const addToShoppingList = (item) => {
    const lastIndex = groceryItems.length - 1
    const currentLastItem = groceryItems[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    item.dateCreated = Date.now()
    item.id = idForNewItem
    groceryItems.push(item)
}

const cheese = {
    name: "Swiss",
    price: 6.00
}
const iceCream = {
    name: "Ben and Jerry's",
    price: 12.00
}
const bread = {
    name: "Wheat",
    price: 8.00
}
const salad = {
    name: "House",
    price: 13.00
}
const chips = {
    name: "Doritos",
    price: 14.00
}

addToShoppingList(cheese)
addToShoppingList(iceCream)
addToShoppingList(bread)
addToShoppingList(salad)
addToShoppingList(chips)

console.log(groceryItems)