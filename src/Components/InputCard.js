import React from 'react'
import '../Components/InputCard.css'

function InputCard(props) {
    return (
        <div className="all-inputs">
            <button value="Pune" onClick={props.setInputHandler}>Pune</button>
            <button value="Bengaluru" onClick={props.setInputHandler}>Bengaluru</button>
            <button value="Bagalkot" onClick={props.setInputHandler}>Bagalkot</button>
            <button value="Guledagudda" onClick={props.setInputHandler}>Guledagudda</button>
            <button value="Mumbai" onClick={props.setInputHandler}>Mumbai</button>
            <button value="New Delhi" onClick={props.setInputHandler}>New Delhi</button>
            <button value="" onClick={props.setInputHandler}>Clear</button>
        </div>
    )
}

export default InputCard
