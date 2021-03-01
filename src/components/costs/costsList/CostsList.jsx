import React from 'react'
import s from './CostsList.module.scss'

const CostsList = ({ id, dispatch, name, value, deleteItem, sumArray, createArray }) => {

    const deleteElement = () => {
        dispatch(deleteItem(id))
        dispatch(createArray())
        dispatch(sumArray())
    }

    return (
        <div className={s.list}>
            <div className={s.listItem}>{name} - {value} ₽</div>
            <button onClick={deleteElement} className={s.button}>X</button>
        </div>
    )
}


export default CostsList