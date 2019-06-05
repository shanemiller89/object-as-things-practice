const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        restaurant.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "large"
}

const baconBurgerComboMeal = {
    sandwichType: "bacon burger",
    fries: true,
    drinkSize: "medium"
}
const mushroomBurgerComboMeal = {
    sandwichType: "mushroom burger",
    fries: true,
    drinkSize: "small"
}


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(baconBurgerComboMeal);
restaurant.placeOrder(mushroomBurgerComboMeal);

// Invoke the function to return the list of all orders
function getOrders() {
    return restaurant.orders;
}


// Output all orders to the console using console.table()

console.table(getOrders());