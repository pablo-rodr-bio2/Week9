import { CreatePizza } from "./CreatePizza"

export type Pizza = {
    id: string,
    date: number
} & CreatePizza  