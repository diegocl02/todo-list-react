import React, { useImperativeHandle } from 'react'
import './Todos.css'
import { Button } from './Button'

export const Todos = ({todos, onTodoDeleted}) => { // JSX
	const handleTodoDelete = (id) => {
		onTodoDeleted(id)
	}
	return <div className={"todos-wrapper"}>
		{todos.map(todo => <div className={"todo"}> 
			<span>{todo.name}</span> 
			<Button label="Delete" onButtonClicked={() => handleTodoDelete(todo.id)}/>
		</div>)}
	</div>
}