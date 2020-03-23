import React from 'react'
import classes from './Form.module.scss'

const Form = props => {
    return (
        <form className = {classes.Form} onSubmit = {props.getRequest}>
            <input type="text" onChange = {props.addCountry} className = 'form-control' placeholder = 'Enter country here'/>
            <button className = 'btn btn-info'>Get information</button>
        </form>
    )
}

export default Form