import React from 'react'
import Context from '../../state'
import s from './Stats.module.scss'

const Stats = props => {
    const { state } = React.useContext(Context)
    const costs = state.costs.map(c => <div key={c.id} >  {c.name} - {c.value} ₽</div>)
    const profit = state.profit.map(c => <div key={c.id} >  {c.name} - {c.value} ₽</div>)
    const Income = (state.totalProfit - state.totalCost)
    const Spending = (state.totalCost - state.totalProfit)

    return (
        <div className={s.statsWrapper}>
            <h1 className={s.title}>Stats</h1>
            <div className={s.stats}>
                <div className={s.card}>
                    <h1>{state.date}</h1>
                    <div>List costs:{costs} </div>
                    <div>Total costs: {state.totalCost} ₽</div>
                    <hr />
                    <div>List profit:{profit}</div>
                    <div>Total profit: {state.totalProfit} ₽</div>
                    {state.totalProfit > state.totalCost ?
                        <div style={{ fontSize: '1.2rem' }}> Result: Income - <b>{Income}</b></div> :
                        <div style={{ fontSize: '1.2rem' }}> Result:  Spending - {Spending}</div>}
                </div>

            </div>
        </div>
    )
}
export default Stats