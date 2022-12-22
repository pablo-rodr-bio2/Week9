console.log('Hello-world')

type Size = "S" | "M" | "L"
type Crust = "Thin" | "Thick"
enum Baking {
    Fast = 10,
    Medium = 20,
    Slow = 30
}

type CreatePizza = {
    Name: string,
    Size: Size,
    Crust: Crust,
    Toppings: {
        Name: string,
        IsHot: boolean,
        Quantity: number
    },
    Baking: Baking,
    Price: number
}

type Pizza = CreatePizza & {
    id: string,
    date: number
}

let pizza: Pizza = {
    id: "33",
    date: Date.now(), 
    Name: "4 quesos",
    Size: "M",
    Crust: "Thin",
    Toppings: {
        Name: "mozzarella",
        IsHot: true,
        Quantity: 200
    },
    Baking: 10,
    Price: 20

}

type ApiResult = {
    success: true,
    data: Pizza[]
}

type ApiError = {
    sucess: false,
    error: string
}

type ApiResponse = ApiResult | ApiError

function isApiError(api: ApiResult | ApiError): api is ApiError {
    return (api as ApiError).error !== undefined
}

console.log(pizza)