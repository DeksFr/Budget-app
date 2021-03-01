import React from 'react'
import s from './Costs.module.scss'
import Context from '../../state'
import { addItem, changeToggleMode, createArray, sumArray, deleteItem } from '../../state'
import CostsList from './costsList/CostsList'
import ProfitList from './profitList/ProfitList'

const Costs = props => {
    const { state, dispatch } = React.useContext(Context)
    const [propertyName, setPropertyName] = React.useState('')
    const [value, setValue] = React.useState('')
    const [propertyNameTouched, setPropertyNameTouched] = React.useState(false)
    const [valueTouched, setValueTouched] = React.useState(false)
    const [propertyNameError, setPropertyNameError] = React.useState('Required')
    const [valueError, setValueError] = React.useState('Enter value')
    const [validForm, setValidForm] = React.useState(false)

    React.useEffect(() => {
        if (propertyNameError || valueError) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }
    }, [propertyNameError, valueError])

    const blueHandler = (e) => {
        switch (e.target.name) {
            case 'propertyName':
                setPropertyNameTouched(true)
                break
            case 'value':
                setValueTouched(true)
                break
            default:
        }

    }

    const changePropertyName = (e) => {
        let body = e.target.value
        setPropertyName(body)
        if (body.length > 25) {
            setPropertyNameError('Max length is 25')

        } else if (!e.target.value) {
            setPropertyNameError('Required')
        }
        else {
            setPropertyNameError('')
        }
    }
    const changeValue = (e) => {
        let body = e.target.value
        setValue(body)
        if (body > 1) {
            setValueError('')
        } else if (!body) {
            setValueError('Enter value')
        }
    }
    const sendData = () => {
        dispatch(addItem(propertyName, value))
        dispatch(createArray())
        dispatch(sumArray())
        setPropertyName('')
        setValue('')
        setPropertyNameTouched(false)
        setValueTouched(false)
        setPropertyNameError('Required')
        setValueError('Enter value')
    }
    const onCostMode = () => {
        dispatch(changeToggleMode(true))
    }
    const offCostMode = () => {
        dispatch(changeToggleMode(false))
    }

    const costs = state.costs.map(c => <CostsList state={state} dispatch={dispatch}
        key={c.id} id={c.id} name={c.name} value={c.value} deleteItem={deleteItem}
        createArray={createArray} sumArray={sumArray} />
    )
    const profit = state.profit.map(c => <ProfitList state={state} dispatch={dispatch}
        createArray={createArray} deleteItem={deleteItem} sumArray={sumArray}
        key={c.id} id={c.id} name={c.name} value={c.value} />)
    const toggle = state.toggleCost

    return (
        <div className={s.costs}>
            <h2>Today is {state.date}</h2>
            <div className={s.wrapperCard}>
                <div className={s.toggle}>
                    <button className={toggle ? s.toggleSpendActive : s.toggleSpend} onClick={onCostMode}>Spending</button>
                    <button className={toggle ? s.toggleProfit : s.toggleProfitActive} onClick={offCostMode}>Profit</button>
                </div>
                <div className={s.card} style={toggle ? { borderColor: 'rgb(241, 78, 78)' } : { borderColor: 'rgb(5, 168, 5)' }}>
                    <form action="">
                        <div className={s.inputWrapper}>
                            <input className={s.inputProperty} type="text"
                                onChange={changePropertyName}
                                name="propertyName"
                                value={propertyName}
                                onBlur={blueHandler}
                                placeholder="Enter name property"
                                autoComplete="off"
                            />
                            <input className={s.inputValue} type="number"
                                onChange={changeValue}
                                name="value"
                                value={value} placeholder="Value"
                                onBlur={blueHandler}
                                autoComplete="off" />
                            <button disabled={!validForm}
                                style={!validForm ? { backgroundColor: 'rgb(241, 78, 78)' } : { backgroundColor: 'rgb(5, 168, 5)' }}
                                className={s.send} onClick={sendData} type="button"> Add</button>
                        </div>
                        <div className={s.validators}>
                            {propertyNameTouched && propertyNameError ?
                                < div style={{ color: 'red' }} className={s.validator1} > {propertyNameError}</div>
                                : null}
                            {(valueTouched && valueError) &&
                                < div style={{ color: 'red' }} className={s.validator2} > {valueError}</div>}
                        </div>
                        <div className={s.cardList}>
                            {state.toggleCost ? costs : profit}
                        </div>
                        <div className={s.Total} >
                            Total <br /> {toggle ? <div>{state.totalCost} ₽</div> : <div>{state.totalProfit} ₽</div>}
                        </div>
                    </form>
                </div>

            </div>
        </div >
    )



}

export default Costs
