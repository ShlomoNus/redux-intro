const {createStore,combineReducers} = require('redux');
const userReducer = require('./usersReducer')
const citiesReducer = require('./cities') 
const mainReducer = combineReducers({
    cities:citiesReducer,
    users:userReducer
})
const store = createStore(mainReducer)


module.exports = store
