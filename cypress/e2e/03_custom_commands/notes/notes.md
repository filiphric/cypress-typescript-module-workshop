## Custom comands with Cypress
Custom commands work just like functions. With TypeScript, we can define what kind of arguments we want the command to take.
Let’s take a custom command like this:

```ts
Cypress.Commands.add('addBoard', (
  body
) => {

  return cy.request({
    method: 'POST',
    url: '/api/boards',
    body
  })

});
```

We want the body argument of our custom command to require the same attributes we would send to the request. We have the type definition of `Board` in our app:
```ts
interface Board {
  id: number;
  starred: boolean;
  name: string;
  created: string;
  user: number;
}

export default Board;
```

But we don’t need it all. To create a new board we just need the `name` attribute. To use it, we can make use of [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

### Pick
This way, our `addBoard` command will require a `body` that will be of the same as our `Board` interface if it had just the `name` attribute.
```ts
addBoard(body: Pick<Board, 'name'>)
``` 

### Omit
Does the exact opposite of Omit. `bookmarkBoard` command will require a `body` that will be of the same type as our `Board` interface if it had just the `name` attribute.
```ts
bookmarBoard(body: Omit<Board, 'name' | 'created' | 'user'>)
```

### Explicit definition
We can choose a different way and make our types more explicit. This way, our `addBoard` command will require a `body` object that will have a `name` attribute, which will be the same type as the one in `Board`
```ts
addBoard(body: {
  name: Board['name']
})
```

Besides reusing types from our source code, we can also set up our own types and interfaces and pass them on to our custom commands. 

```ts
import { Selectors } from '@typings/selectors';

declare global {
  namespace Cypress {
    interface Chainable {
      getByData(
        input: Selectors
      ): Chainable<any>
    }
  }
}
```

This declaration in our `getByData` command will make our command autocomplete selectors defined in `@typings/selectors` file.

## Useful reading
- [Utility Types documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [interfaces documentation](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces)
- [Cypress docs on adding TypeScript definitions for custom commands](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript)