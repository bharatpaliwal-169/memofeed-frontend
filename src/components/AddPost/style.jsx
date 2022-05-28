import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  modalContainer : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
  },
  addPost: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    alignItems: 'center',
    height: '3rem',
    width: '3rem',
    justifyContent: 'center',
    Zindex: '1000',
    cursor: 'pointer',
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  },
}));