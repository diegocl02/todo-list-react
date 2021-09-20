import React from 'react'
import './Button.css'

export const Button = ({onButtonClicked, label}) => {
	const handleButtonClick = (e) => {
		onButtonClicked(e)
	}
	return <div className="button-wrapper">
			<button onClick={handleButtonClick}> {label} </button>
		</div>
}