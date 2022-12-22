import { CreatePizza } from "./CreatePizza";
import { Pizza } from "./Pizza";

export type criterion = "Name" | "Size" | "Price" | "Baking" | "date"
export type direction = "asc" | "desc" | undefined

export interface PizzaOps {
    addPizza: (pizza: CreatePizza) => Pizza;
    getPizza: (id: string) => Pizza;
    getHotPizzas: () => Pizza[];
    sortPizzas: (criterion: criterion, direction?: direction) => Pizza[];
    getMenu: () => Pizza[]
}



