To install in an existing project:
	`npm install typescript --save-dev`

Once installed, to run:
	`npx tsc`

Compiler configuration goes to tsconfig.json
To create it:
	`npx tsc --init`

Example:
{  
  "include": ["src"],  
  "compilerOptions": {  
    "outDir": "./build"  
  }  
}
This will configure the TypeScript compiler to transpile TypeScript files located in the `src/` directory of your project, into JavaScript files in the `build/` directory