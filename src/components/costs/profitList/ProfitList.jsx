import React from 'react'
import s from './ProfitList.module.scss'

const ProfitList = ({ dispatch, id, name, value, deleteItem, createArray, sumArray }) => {

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
export default ProfitList