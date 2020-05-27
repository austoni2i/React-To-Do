import React, { useState } from 'react'
import { setToDoList, setTodoSelected, setTaskSelected } from '../actions'
import { useDispatch, useSelector } from 'react-redux';

const MainContent = () => {

    const [taskName, setTaskName] = useState("")
    const todoSelected = useSelector(state => state.todoSelected)
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch();

    const handleTaskName = (e) => {

        const taskValue = e.currentTarget.value
        setTaskName(taskValue)

    }

    const addTaskToList = (e) => {

        if (todoSelected == "") {
            alert("Please select a item from todo list")
        }
        if (!isEmpty(taskName)) {

            todoList.map(todo => {
                if (todo.todoTilte == todoSelected) {

                    todo.taskList = [...todo.taskList, {
                        taskTilte: taskName,
                        comment:""
                    }]

                    const cloneList = [...todoList]
                    dispatch(setToDoList(cloneList)) ;
                    dispatch(setTodoSelected(todoSelected))
                }  
            })
            
        } else {
            alert("Task  cannot be empty")
        }
    }

    const onTaskSelected = (e) =>{
        dispatch(setTaskSelected(e.target.innerHTML))
    }


    const isEmpty = (str) => {
        str = str.trim()
        return (!str || 0 === str.length);
    }

    return (
        <div>


            <input type="text" onChange={handleTaskName}></input><br></br>
            <button type="button" onClick={addTaskToList}>Add Task</button>
            <ol>
                {
                    todoList.map(todo => {
                        if (todo.todoTilte == todoSelected) {
                            return todo.taskList.map(task => (
                                <li onClick={onTaskSelected}>{task.taskTilte}</li>
                            ))
                        }
                    })
                }
            </ol>


        </div>
    )
}


export default MainContent;