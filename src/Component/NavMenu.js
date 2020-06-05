import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTodoSelected, setTaskSelected, setToDoList } from '../actions'
import '../App.css';

const NavMenu = () => {

    const [todoName, setTodoName] = useState("")
    const dispatch = useDispatch();
    const todoListSelector = useSelector(state => state.todoList)

    const addTodoToList = (e) => {

        if (!isEmpty(todoName)) {
            dispatch(setTodoSelected(""))
            dispatch(setTaskSelected(""))
            dispatch(setToDoList([...todoListSelector, {
                id: Date.now(),
                todoTilte: todoName,
                taskList: []
            }]))
        } else {
            alert("Todo cannot be empty")
        }
    }

    const handleTodoName = (e) => {

        const todoValue = e.currentTarget.value
        setTodoName(todoValue)

    }

    const onListItemClicked = (id) => {
        console.log("clicked")
        dispatch(setTodoSelected(id)) 
        
    }

    const isEmpty = (str) => {
        str = str.trim()
        return (!str || 0 === str.length);
    }

    return (
        <div id="navRoot">

            <ul className="listDesign">
                {
                    todoListSelector.map(todo => {
                       return <li onClick={()=>{onListItemClicked(todo.id)}} ><a href="#"><i class="material-icons">list</i>{todo.todoTilte}</a></li>
                    })
                }
            </ul>
            <input type="text" onChange={handleTodoName}></input><br></br>
            <button type="button" onClick={addTodoToList}>Add Todo</button>
        </div>

    )
}

export default NavMenu;