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

for (const item of groceryItems) {
    console.log(`
    I need ${item.name}
    and it costs $${item.price} dollars.`)
}