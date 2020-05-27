import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToDoList, setTaskSelected, setTodoSelected } from '../actions'

const ContentDetail = () => {


    const todoList = useSelector(state => state.todoList)
    const todoSelected = useSelector(state => state.todoSelected)
    const taskSelected = useSelector(state => state.taskSelected)
    const [comment, setComment] = useState("not init")
    const dispatch = useDispatch()
    const addComment = () => {


        if (todoSelected == "") {
            alert("Please select a item from todo list")
        }
        else if (taskSelected == "") {
            alert("Please select a item from task list")
        }

        if (!isEmpty(comment)) {

            todoList.map(todo => {
                if (todo.todoTilte == todoSelected) {

                    todo.taskList.map(tasks => {
                        if (tasks.taskTilte == taskSelected) {
                            tasks.comment = comment

                            const cloneList = [...todoList]
                            dispatch(setToDoList(cloneList));
                            dispatch(setTodoSelected(todoSelected))
                            dispatch(setTaskSelected(taskSelected))
                            
                        }
                    })

                   
                }
            })
            
        } else {
            alert("Comment cannot be empty")
        }

    }

    const handleCommentText = (e) => {
        const commentValue = e.currentTarget.value
        setComment(commentValue)
    }

    const getComments = () => {

        let commentVal = ""
        todoList.map(todo => {
            if (todo.todoTilte == todoSelected) {
                todo.taskList.map(tasks => {
                    if (tasks.taskTilte == taskSelected) {
                        commentVal = tasks.comment
                    }
                })

            }
        })
        return commentVal
    }

    const isEmpty = (str) => {
        str = str.trim()
        return (!str || 0 === str.length);
    }

    return (
        <div>

            <input type="text" onChange={handleCommentText}></input><br></br>
            <button type="button" onClick={addComment}>Add Comment</button>
            <h1 > {getComments()} </h1>
            
            
        </div>
    )
}
export default ContentDetail