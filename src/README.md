#### Why not use ASYNC AWAIT in action creator?

* Action creators inside of redux are supposed to only return a PLAIN JS OBJECT with a type property and optionally a payload.
* When the async await code runs, it is compiled as ES2015 code inside the browser. 

#### How does THUNK works?

Its a middleware which allows us to deal with the *async action creators*.
It stops the flow of action creator --> reducers and executes the code written inside of it.

##### Rules with Redux Thunk : 
* With RT installed, your action creators can return action objects. (must have a TYPE)
* OR Action creators can return functions. RT will *automatially* calls that function.
* With RT we can MANUALLY dispatch an action!!!


### Steps: 
> Import it in the root Index.js file 
> Import apply middleware to use this middleware inside the same file

