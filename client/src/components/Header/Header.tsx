import React from 'react'
import { useAppSelector } from '../../hooks'
import './Header.css'

function Header() {
  const { money } = useAppSelector(state => state.horseSlice)
  return (
    <div className='header'>
      <img className='xbetLogo' src="https://1xbet.design/img/logo.db921c6d.png" alt="" />
      <div className='cashContainer'>
        <p className='cash'>cash</p>
        <p className='money'>{money}</p>
      </div>
    </div>
  )
}

export default Header