# Angular 2 Simple Sample
An Angular 2 starter sample simple single page application.

1. Install Node

2. Install TypeScript definitions via DefinitelyTyped.

```
	$ npm install -g tsd@^0.6.0
```

3. Install ES6 Shim for browser support.

```
	$ tsd install angular2 es6-promise rx rx-lite
```

4. Install TypeScript.

```
	$ npm install -g typescript@^1.5.0-beta

```

5. Run the TypeScript compiler.

```
	$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```

6. Install and run a local server.

```
	$ npm install -g http-server
```
```
	$ http-server
```

7. Visit http://localhost:8080/index.html. 
