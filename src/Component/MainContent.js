import React, { useState } from 'react'
import { setToDoList, setTodoSelected, setTaskSelected } from '../actions'
import { useDispatch, useSelector } from 'react-redux';

const MainContent = () => {

    const [taskName, setTaskName] = useState("")
    let todoSelected = useSelector(state => state.todoSelected)
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch();

    const handleTaskName = (e) => {

        const taskValue = e.currentTarget.value
        setTaskName(taskValue)

    }

    const addTaskToList = (e) => {


        if (!isEmpty(taskName)) {

            // update whole list here
            todoList.map(todoItem => {

                if (todoSelected == todoItem.id) {

                    todoItem.taskList = [...todoItem.taskList, {
                        id: Date.now(),
                        taskTilte: taskName,
                        comment: ""
                    }]
                }
            })
            dispatch(setToDoList(todoList));
            dispatch(setTodoSelected(todoSelected))


        } else {
            alert("Task  cannot be empty")
        }
    }

    const onTaskSelected = (taskClicked) => {
        dispatch(setTaskSelected(taskClicked))
    }


    const isEmpty = (str) => {
        str = str.trim()
        return (!str || 0 === str.length);
    }

    const getTaskList = () => {

        //if (todoSelected != "") {
        return todoList.map(todoItem => {

            if (todoSelected == todoItem.id) {

                return todoItem.taskList.map(taskItem => (

                    <li onClick={()=>{onTaskSelected(taskItem.id)}}>{taskItem.taskTilte}</li>
                ))

            }

        })

        // }
    }

    return (
        <div>
            <input type="text" onChange={handleTaskName}></input><br></br>
            <button type="button" onClick={addTaskToList}>Add Task</button>
            <ul>
                {getTaskList()}
            </ul>
        </div>
    )
}


export default MainContent;