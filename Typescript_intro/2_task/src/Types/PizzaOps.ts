import { CreatePizza } from "./CreatePizza";
import { Pizza } from "./Pizza";

export type Criterion = "Name" | "Size" | "Price" | "Baking" | "date"
export type Direction = "asc" | "desc" 

export interface PizzaOps {
    addPizza: (pizza: CreatePizza) => Pizza;
    getPizza: (id: string) => Pizza;
    getHotPizzas: () => Pizza[];
    sortPizzas: (criterion: Criterion, direction?: Direction) => Pizza[];
    getMenu: () => Pizza[]
}



