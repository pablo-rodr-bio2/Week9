import { CreatePizza, Baking  } from "./Types/CreatePizza"
import { Pizza, printPizza } from "./Types/Pizza"
import { PizzaOps, Criterion, Direction } from "./Types/PizzaOps"
import { menu } from "./dataset"
import { getRandomInt } from "./util"

const addPizza = (pizza: CreatePizza) => {
    const id = getRandomInt(10000).toString()
    const date = Date.now()
    const newPizza: Pizza = {id: id, date: date, ...pizza}
    menu.push(newPizza)
    return newPizza 
}

// const getPizza = (id: string) => {
//     let result = menu.find(pizza => pizza.id === id)
//     return result as Pizza
// }

const getHotPizzas = () => {
    const result = menu.filter(pizza => {
        if(pizza.Toppings.find(topping => topping.IsHot)) return pizza
    })
    return result
}

const sortPizzas = (criterion: Criterion, direction: Direction = "asc") => {
    
    return menu.sort((pizzaA, pizzaB) => {
            if(direction === "asc" ) {
                return pizzaA[criterion].toString().localeCompare(pizzaB[criterion].toString())
            } else {
                return pizzaB[criterion].toString().localeCompare(pizzaA[criterion].toString())
            }
    })
    
}

const getMenu = () => {
    menu.forEach(pizza => printPizza(pizza))
    return menu
}

const newPizzaOps: PizzaOps = {
    addPizza: addPizza,
    getPizza: (id) => { return menu.find(pizza => pizza.id === id) as Pizza },
    getHotPizzas: getHotPizzas,
    sortPizzas: sortPizzas,
    getMenu: getMenu
}

const newPizza: CreatePizza = {
    Name: "new Pizza",
    Size: "L",
    Crust: "Thick",
    Toppings: [{
        Name: "new Topping",
        IsHot: false,
        Quantity: 100
    }],
    Baking: Baking.Fast,
    Price: 50
}
// console.log('Create a new Pizza')
// const newPizzaCreated = newPizzaOps.addPizza(newPizza)
// printPizza(newPizzaCreated)
// console.log(getMenu())
// console.log(newPizzaOps.getPizza("1"))
// console.log(newPizzaOps.getHotPizzas())
// console.table(newPizzaOps.sortPizzas("Baking"))
// console.log(getMenu())

console.log(newPizzaOps.getPizza("a"))
