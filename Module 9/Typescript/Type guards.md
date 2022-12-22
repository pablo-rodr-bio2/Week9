Using instanceof as a type guard
(
`const second: Error | { name: string; email: string;}`
)

const outcome = maybeGetUserInfo()
const [ first, second ] = outcome

if (second instanceof Error) {
	`// second is Error    const second: Error`
} else {
	`// second is an object    const second: { name: string; email: string;}`
}