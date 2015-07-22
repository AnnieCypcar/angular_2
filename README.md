# Angular 2 Simple Sample
An Angular 2 starter sample simple single page application.

Install Node

Install TypeScript definitions via DefinitelyTyped.

```
	$ npm install -g tsd@^0.6.0
```

Install ES6 Shim for browser support.

```
	$ tsd install angular2 es6-promise rx rx-lite
```

Install TypeScript.

```
	$ npm install -g typescript@^1.5.0-beta

```

Run the TypeScript compiler.

```
	$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```

Install and run a local server.

```
	$ npm install -g http-server
```
```
	$ http-server
```

Visit http://localhost:8080/index.html. 
