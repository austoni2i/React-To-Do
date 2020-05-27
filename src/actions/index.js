export const setTodoSelected = (todoSelected)=>{
    return({
        type: "Todo",
        payload: todoSelected
    })
}

export const setToDoList = (todoList)=>{
    return({
        type:"todoList",
        payload:todoList
    })
}

export const setTaskSelected = (taskSelected)=>{
    return({
        type:"Task",
        payload:taskSelected
    })
}
