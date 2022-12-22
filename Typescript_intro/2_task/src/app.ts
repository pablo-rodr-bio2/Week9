import { CreatePizza, Baking  } from "./Types/CreatePizza"
import { Pizza } from "./Types/Pizza"
import { PizzaOps, criterion, direction } from "./Types/PizzaOps"
import { menu } from "./dataset"
import { getRandomInt } from "./util"


const addPizza = (pizza: CreatePizza) => {
    const id = getRandomInt(10000).toString()
    const date = Date.now()
    const newPizza: Pizza = {id: id, date: date, ...pizza}
    menu.push(newPizza)
    return newPizza
}

const getPizza = (id: string) => {
    let result = menu.find(pizza => pizza.id === id)
    return result as Pizza
}

const getHotPizzas = () => {
    const result = menu.filter(pizza => {
        if(pizza.Toppings.find(topping => topping.IsHot)) return pizza
    })
    return result
}

const sortPizzas = (criterion: criterion, direction?: direction) => {
    
    return menu.sort((pizzaA, pizzaB) => {
            if(direction === "asc" || direction === undefined) {
                return pizzaA[criterion].toString().localeCompare(pizzaB[criterion].toString())
            } else {
                return pizzaB[criterion].toString().localeCompare(pizzaA[criterion].toString())
            }
    })
    
}

const getMenu = () => {
    menu.forEach(pizza => console.log(` Pizza information:
        Id: ${pizza.id} 
        Date: ${new Date(pizza.date * 1000)}
        Name: ${pizza.Name}
        Size: ${pizza.Size}
        Crust: ${pizza.Crust}
        Toppings: ${pizza.Toppings}
        Baking: ${pizza.Baking}
        Price: € ${pizza.Price}
        ` ))
    return menu
}

const newPizzaOps: PizzaOps = {
    addPizza: addPizza,
    getPizza: getPizza,
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

console.log(newPizzaOps.addPizza(newPizza))
console.log(getMenu())
// console.log(newPizzaOps.getPizza("1"))
// console.log(newPizzaOps.getHotPizzas())
// console.log(newPizzaOps.sortPizzas("Baking", "desc"))
// console.log(getMenu())
