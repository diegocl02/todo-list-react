import React from 'react'

export const Button = ({onButtonClicked, label}) => {
	const handleButtonClick = (e) => {
		onButtonClicked(e)
	}
	return <button onClick={handleButtonClick}> {label} </button>
}