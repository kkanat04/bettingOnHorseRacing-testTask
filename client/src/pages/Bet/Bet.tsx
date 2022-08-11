import React, { useEffect } from 'react'
import AllHorse from '../../components/AllHorse/AllHorse'
import { useAppDispatch } from '../../hooks';
import { SET_WIN_NAME } from '../../modules/reducers/horseSlice';
import { socket } from '../../socket';

function Bet() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    socket.connect()
    socket.emit('start')
    return () => {
      socket.disconnect();
      dispatch(SET_WIN_NAME(''))
    }
  }, [dispatch])
  
  return (
    <AllHorse />
  )
}

export default Bet