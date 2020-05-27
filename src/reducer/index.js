import todoSelectedReducer from './todoSelected'
import todoListReducer from './todoList'
import taskSelectedReducer from './taskSelected'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    taskSelected: taskSelectedReducer,
    todoSelected: todoSelectedReducer,
    todoList: todoListReducer
})

export default allReducers