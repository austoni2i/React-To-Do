import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTodoSelected, setTaskSelected, setToDoList } from '../actions'

const NavMenu = () => {

    
    const [todoName, setTodoName] = useState("")
    const dispatch = useDispatch();
    const todoListSelector = useSelector(state=>state.todoList)

    const addTodoToList = (e) => {

        if (!isEmpty(todoName)) {
            dispatch(setTodoSelected(""))
            dispatch(setTaskSelected(""))
            dispatch(setToDoList([...todoListSelector, {
                todoTilte: todoName,
                taskList:[] 
            }]))
        } else {
            alert("Todo cannot be empty")
        }
    }

    const handleTodoName = (e) => {

        const todoValue = e.currentTarget.value
        setTodoName(todoValue)

    }

    const onListItemClicked = (e) => {
        dispatch(setTodoSelected(e.target.innerHTML))
    }

    const isEmpty = (str) => {
        str = str.trim()
        return (!str || 0 === str.length);
    }

    return (
        <div>
            <input type="text" onChange={handleTodoName}></input><br></br>
            <button type="button" onClick={addTodoToList}>Add Todo</button>
            <ol>
                {
                    todoListSelector.map(todo => (
                        <li value={todo.todoTilte} onClick={onListItemClicked}>{todo.todoTilte}</li>
                    ))
                }
            </ol>
        </div>

    )
}

export default NavMenu;