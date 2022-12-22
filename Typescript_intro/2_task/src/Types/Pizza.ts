import { CreatePizza } from "./CreatePizza"

export type Pizza = {
    id: string,
    date: number
} & CreatePizza  

export const printPizza = (pizza: Pizza) => {
    console.log(` Pizza information:
          Id: ${pizza.id} 
          Date: ${new Date(pizza.date * 1000)}
          Name: ${pizza.Name}
          Size: ${pizza.Size}
          Crust: ${pizza.Crust}
          Toppings: ${pizza.Toppings}
          Baking: ${pizza.Baking}
          Price: € ${pizza.Price}
          ` )
  }