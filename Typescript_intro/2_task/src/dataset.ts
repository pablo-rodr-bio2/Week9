import { Pizza } from "./Types/Pizza";

export let menu: Pizza[] = [
    {
        id: "1",
        date: Date.now(), 
        Name: "4 cheese",
        Size: "M",
        Crust: "Thin",
        Toppings: [{
            Name: "mozzarella",
            IsHot: false,
            Quantity: 200
        }],
        Baking: 10,
        Price: 20
    },
    {
        id: "2",
        date: Date.now()+2, 
        Name: "Barbonara",
        Size: "S",
        Crust: "Thick",
        Toppings: [{
            Name: "goat cheese",
            IsHot: true,
            Quantity: 100
        },
        {
            Name: "mozzarella",
            IsHot: true,
            Quantity: 200
        }],
        Baking: 20,
        Price: 25
    },
    {
        id: "3",
        date: Date.now()+3, 
        Name: "Calabrezza",
        Size: "L",
        Crust: "Thin",
        Toppings: [{
            Name: "crispy cheese",
            IsHot: true,
            Quantity: 200
        }],
        Baking: 30,
        Price: 22
    },

]