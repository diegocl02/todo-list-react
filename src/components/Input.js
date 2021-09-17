import React from 'react'

export const Input = ({onValueChange}) => {
	const handleOnChange = (e) => {
		onValueChange(e.target.value)
	}
	return <input onChange={handleOnChange}></input>
}