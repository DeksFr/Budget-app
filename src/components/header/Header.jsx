import React from 'react'
import Button from '../button/Button'
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.title}>Budget App</h1>
            <div>
                <Button name={'Costs'} path={"/costs"} />
                <Button name={'Stats'} path={"/stats"} />
            </div>
        </div>
    )


}
export default Header