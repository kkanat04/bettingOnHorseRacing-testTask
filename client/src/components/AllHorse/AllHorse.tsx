import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IAllHorse } from '../../interface/IAllHorse';
import { SET_ALL_HORSE, SET_MONEY, SET_WIN_NAME } from '../../modules/reducers/horseSlice';
import Lottie from 'react-lottie';
import { socket } from '../../socket';
import KeepMountedModal from '../KeepMountedModal/KeepMountedModal';
import Horse from '../../Horse.json'
import './AllHorse.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Horse,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function AllHorse() {
  const { allHorse, betHorse, winName, money, betMoneyValue } = useAppSelector(state => state.horseSlice)
  const [loss, setLoss] = useState<string>('')
  const [leader, setLeader] = useState<IAllHorse>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on('ticker', (data: IAllHorse[]) => {
      dispatch(SET_ALL_HORSE(data))
      data?.forEach((el) => {
        if (el.distance === 1000) {
          dispatch(SET_WIN_NAME(el.name))
          socket.disconnect()
          if (betHorse === el.name) {
            dispatch(SET_MONEY(money + (betMoneyValue * 2.5)))
            setLoss('win')
          }
          else {
            setLoss('loss')
          }
        }
      })
    })
  setLeader((allHorse?.reduce((acc, curr) => acc.distance > curr.distance ? acc : curr)))

  }, [allHorse, betHorse, betMoneyValue, dispatch, money])


  return (
    <div style={{ display: 'flex' }}>
      <div className='allHorseContainer'>
        {allHorse ? allHorse.map((el, i) => {
          return (
            <div style={{ marginLeft: `${el.distance / 10 + 1}%`, transition: '1s' }}  key={i}>
              <p>{`${el.name} ${el.name === leader?.name ? '👑' : ''}`}</p>
              <Lottie style={{margin: 0}} options={defaultOptions}
                height={100}
                width={100}
              />
            </div>
          )
        }) : <p>Loading...</p>}
      </div>
      <div className='main__finish'></div>
      {
        loss && <KeepMountedModal loss={loss} money={money} winName={winName} />
      }
    </div>
  )
}

export default AllHorse