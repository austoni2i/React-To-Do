const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case "todoList": {
            return action.payload
        }
        default: return state
    }
}

export default todoListReducer