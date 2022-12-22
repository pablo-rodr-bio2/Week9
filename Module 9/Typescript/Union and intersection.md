when 2 diff types are expected from an outcome
`const second: Error | { name: string; email: string;}`

Autocomplete will only show methods that are available for both only:

`second.name`   (because "name is an arg of both Error and the object defined before")

