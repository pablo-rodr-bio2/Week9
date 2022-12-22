export type Size = "S" | "M" | "L"

export type Crust = "Thin" | "Thick"

export enum Baking {
    Fast = 10,
    Medium = 20,
    Slow = 30
}

export type Toppings = {
    Name: string,
    IsHot: boolean,
    Quantity: number
}

export type CreatePizza = {
    Name: string,
    Size: Size,
    Crust: Crust,
    Toppings: Toppings[],
    Baking: Baking,
    Price: number
}