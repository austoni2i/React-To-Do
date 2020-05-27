const todoSelectedReducer = (state = "", action) =>{
    switch(action.type){
        case "Todo": return action.payload
        default: return state
    
    }
}

export default todoSelectedReducer