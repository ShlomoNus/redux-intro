const initialState =[
   'Ashdod','Jerusalem','Tel-Aviv'
]

const citiesReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD CITY":
            const copy =[...state]
            copy.push(action.payload)
            return copy;
    
        default:
            return state
    }
}

module.exports=citiesReducer
