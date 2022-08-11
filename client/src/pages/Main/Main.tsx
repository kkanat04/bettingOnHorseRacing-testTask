import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SET_BET_HORSE, SET_BET_MONEY, SET_MONEY } from '../../modules/reducers/horseSlice';
import './Main.css'

const horses = [
    'Princess Diana',
    'Cricket',
    'Rebel',
    'Lucy',
    'Lacey',
    'Ginger',
];

function Main() {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [err, setErr] = useState<boolean>(false)
    const { betHorse, money, betMoneyValue } = useAppSelector(state => state.horseSlice)

    const bet = () => {
        if (betMoneyValue <= money) {
            navigation('/bet')
            dispatch(SET_MONEY(money - betMoneyValue))
        }
        else {
            return setErr(true)
        }
    }
    return (
        <div className='main'>
            <p className='main__bid'>Your bid</p>
            <input className='main__inp' type="number" onChange={e => dispatch(SET_BET_MONEY(+e.target.value))} />
            {err && <p>Not enough coins</p>}
            <div className='main__horse_contain'>
                <h1 className='chooseHorse'>Choose your <span className='chooseHorseSpan'>horse</span></h1>
                <div className='main__horses'>
                    {horses.map((el, i) => <button onClick={() => dispatch(SET_BET_HORSE(el))} className={betHorse === el ? 'horses active' : 'horses'} key={i}>{el}</button>)}
                </div>

            </div>

            <button className='main__bet' disabled={!!!betMoneyValue} onClick={bet}>Go bet</button>
        </div>
    )
}

export default Main