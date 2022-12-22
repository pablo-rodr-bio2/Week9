Node expects [CommonJS modules](https://en.wikipedia.org/wiki/CommonJS) [1](https://www.typescript-training.com/course/fundamentals-v3/02-hello-typescript/#fn-1), so we’ll have to tell TypeScript to output this kind of code.

Let’s add a new property to our `tsconfig` file:

```   "compilerOptions": { 
			"outDir": "dist",
			"module": "CommonJS",   
```
