import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Button.module.scss'


const Button = (props) => {
    return (
        <NavLink to={props.path}><button onClick={props.sendData} className={s.Button}>{props.name}</button></NavLink>
    )
}
export default Button