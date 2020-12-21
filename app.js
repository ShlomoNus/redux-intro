const store = require('./store')

store.dispatch({type:"ADD CITY", payload:'Bne-Bral'})
console.log(store.getState());  