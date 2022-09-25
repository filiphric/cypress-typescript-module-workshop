# Running TypeScript on CLI

A really powerful feature of ts is the ability to check all errors in the project. We can do this by typing following command in the terminal:

```
tsc --noEmit
```

The `--noEmit` flag means that TypeScript compiler will not create `.js` files, but it will check for any errors on our files. This means that we can check our tests even before they are run. Whenever we change files in our project, we can check if type checks are still passing. Even without opening any files.

This is sometimes referred to as "static testing". It enables us to add additional layer of checks, that will help us make less mistakes in our code.

## Pre-commit check
As these checks are super fast, we can run them every time we make a commit. There’s a package that can help us with this. Install it like this:

```
npm install pre-commit --save-dev
```

Then create a `lint` script in `package.json`
```json
"scripts": {
  "lint": "tsc --noEmit"
}
```

As a final step, add this to your `package.json`:
```json
"pre-commit": [ "lint" ]
```

From now on, whenever we try to commit, our `tsc --noEmit` script will run. If it throws any errors, we will not be able to commit staged files.

## Ignoring ts errors
Checking files like this can be too strict, especially if you are starting with TypeScript. If you need to surpress some errors to fix them later, you can use `@ts-ignore`, so that the following error will be ignored by TypeScript compiler.

```ts
// @ts-ignore
cy.getByData('new-selector')
```

This might not feel like the best solution and will create a technnical debt. Most imporatntly, when we finally get to cleaning it, we might not remember why is this ignore rule there in the first place. ESLint can be a great help here. There’s a rule that can enforce us to leave a comment with a `@ts-ignore` comment to give it more context:

```js
rules: {
  "@typescript-eslint/ban-ts-comment": ["error", {
    "ts-ignore": "allow-with-description"
  }]
}
```

To combine our TypeScript checkis with ESLint, we can add ESlint checks to our `lint` script as well:

```json
"scripts": {
  "lint": "tsc --noEmit && eslint cypress/**/*.ts"
}
```

## Useful reading
- [--noEmit option documentation](https://www.typescriptlang.org/tsconfig#noEmit)
- [pre-commit package](https://www.npmjs.com/package/pre-commit)
- [ban-ts-comment eslint rule documentation](https://typescript-eslint.io/rules/ban-ts-comment/)