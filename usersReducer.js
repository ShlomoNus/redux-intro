//initial state as array - most used one;

const initialState =[
    {name:'shlomo',age:31},{name:'lea',age:30},{name:'michal',age:4},{name:'avigail',age:2},
]

const userReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD USER":
            return [...state].push(action.payload)
    
        default:
            return state
    }
}

module.exports=userReducer
