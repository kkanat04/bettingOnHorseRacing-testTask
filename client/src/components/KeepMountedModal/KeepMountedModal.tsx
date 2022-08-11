import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  loss: string
  money: number
  winName: string | null
}

export default function KeepMountedModal({loss, money, winName}: Props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <p>ВЫ {loss === 'loss' ? `ПРОИГРАЛИ :( ПОБИДИТЕЛЬ: ${winName}` : 'ВЫЙГРАЛИ :)'} текуйщий баланс: {money}</p><Link to={'/'}>Вернутся в главный экран</Link>
        </Box>
      </Modal>
    </div>
  );
}
