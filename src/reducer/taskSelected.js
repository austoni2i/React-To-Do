const taskSelectedReducer = (state, action) =>{
    switch(action.type){
        case "Task": return action.payload
        default: return ""
    }
}
export default taskSelectedReducer