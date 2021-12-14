import React, {useReducer,useEffect} from 'react'
import axios from 'axios'
import "../Components/WeatherCard.css"

const initialState = {
    value : "Click any city name"
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'Fetch_suc':
            return({
                value:action.val
            })
        case 'Fetch_err':
            return({
                value:action.val
            })
        default:
            return({
                value:"Click any city name"
            })
    }
}

function WeatherCard(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if(props.city!==""){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=db2a9d2e267c2e32581498d766eb7d9a`)
            .then(resp =>{
                dispatch({type: 'Fetch_suc' , val:"Temp : "+(Math.floor((resp.data.main.temp-273.5)*100)/100)+"c"})
            })
            .catch(err =>{
               dispatch({type: 'Fetch_err' , val:"Something went wrong"})
            })
        }
        else{
            dispatch({type: 'call_default' , val:"Something went wrong"})
        }
    },[props.city])
    
    return (
        <div className="wc-comp">
            <div>{props.city!=="" ? <h1>City : {props.city}</h1> :  <h1>Note :</h1>}</div>
            <h1>{state.value}</h1>
        </div>
    )
}

export default WeatherCard
