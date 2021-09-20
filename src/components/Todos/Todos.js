import React from 'react'
import './Todos.css'
import { Button } from '../Button/Button'

export const Todos = ({todos, onTodoDeleted}) => {
	const handleTodoDelete = (id) => {
		onTodoDeleted(id)
	}
	return <div className={"todos-wrapper"}>
		{todos.map(todo => <div className={"todo"}> 
			<span>{todo.name}</span> 
			<Button label="Remove" onButtonClicked={() => handleTodoDelete(todo.id)}/>
		</div>)}
	</div>
}