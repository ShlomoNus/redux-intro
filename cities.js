const initialState =[
   'Ashdod','Jerusalem','Tel-Aviv'
]

const citiesReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD CITY":
            return [...state].push(action.payload)
    
        default:
            return state
    }
}

module.exports=citiesReducer
