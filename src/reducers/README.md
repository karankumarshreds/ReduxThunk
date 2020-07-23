### RULES : 

1. Reducers can return anything BUT *undefined*. It can return *null*.
2. Reducers state intial value, if not defined, should be null or anything else but it CANNOT be *undefined*.
3. Reducers must not reach out of itself to like API req, or DOM manipulate, or reading external file. It's should only work with the arguments given to itself.
4. Never mutate the state directly. Like state.push('x').
5. Always make a new state and return it otherwise REDUX won't update your react app on your change!

