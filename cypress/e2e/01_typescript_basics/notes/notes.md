# TypeScript Basics

What is TypeScript even good for? Let’s first take a look what is classic JavaScript missing.

## JavaScript vs. TypeScript types
There are types in JavaScript as well, although there are not too many of them. Let’s take a look at a couple of them:

```js
const counter = 0
const greeting = "Hello"
const car = {
	color: 'red',
	electric: true
}

console.log(typeof counter) // number
console.log(typeof greeting) //  string
console.log(typeof car) // object
console.log(typeof car.electric) // boolean
```

Types become more important when we take a look at an example like this:
```js
const add = (a, b) => {
	return a + b
}

add(1, 1) // 2
add("1", "1") // 11
```

Our function gives us different results based on data that are passed into it. Function works as designed and does not tell us that there is a problem here. In TypeScript, we can mitigate the problem by defining what type of argument does the function require:

```ts
const add = (a: number, b: number) => {
	return a + b
}
add("1", "1") // this will throw an error
```

Moreover, we can create our own types, so that we don’t only specify that the function takes a number, but what kind of number it takes:

```ts
type EvenNumbers = 2 | 4 | 6 | 8 // creating our own type
const add = (a: EvenNumbers, b: number) => {
	return a + b
}
add(1, 2) // this will throw an error and complain about the first argument
```

## How does TypeScript work
All TypeScript code will eventually get compiled into JavaScript. Browsers cannot read TypeScript. To see the compilation in action, find a `.ts` file on your computer (for example file named `add.ts`) and type this to your command:
```
tsc add.ts
```
This will generate an `add.js` file, that your browser can now read. There are multiple versions of JavaScript, some of which are not supported e.g. by Internet Explorer. You can choose which version of JavaScript should your code get compiled to. E.g. you can pass this flag if you want your code to compile into es2017 version of JavaScript.

```
tsc addition.ts -t es2017
```

Instead of passing flags into your terminal, you can define all the properties of TypeScript compiler in a `tsconfig.json` file in your project.

*Note: You need to have TypeScript installed in order for this command to work. To install TypeScript globally, run this command in your terminal:*

```
npm i typescript -g
```

## Installing TypeScript in Cypress project
The initial setup is similar to any other project. You need to install TypeScript into your project:
```
npm i typescript
```
and create a `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

You can then run `.ts` files in Cypress. You don’t need to compile your files manually usiong `tsc` command, because Cypress will do that on the fly for you.

All Cypress commands are typed, which means that they will show warnings in your text editor if you pass an incorrect type, e.g.:

```ts
cy.get('#myElement').type(123) // will throw error, expect string, not number
```

## Useful reading
* [Cypress docs for TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json)
* [TypeScript homepage](https://www.typescriptlang.org/)
* [Short video about what is TypeScript](https://www.youtube.com/watch?v=ahCwqrYpIuM)
* [YouTube channel of Basarat Ali recommend to learning TypeScript](https://www.youtube.com/channel/UCGD_0i6L48hucTiiyhb5QzQ)