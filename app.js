const store = require('./store')
store.subscribe( () =>console.log(store.getState()))

store.dispatch({type:"ADD CITY", payload:'Bne-Bral'})
