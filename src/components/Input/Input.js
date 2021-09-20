import React from 'react'
import './Input.css'

export const Input = ({onValueChange}) => {
	const handleOnChange = (e) => {
		onValueChange(e.target.value)
	}
	return <div className="input-wrapper">
		<input onChange={handleOnChange}></input>
	</div>
}