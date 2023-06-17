import React,{useState,useEffect} from 'react'
import {Paper,Typography,LinearProgress,useMediaQuery,useTheme} from '@material-ui/core'

const FlashUI = () => {
  const [prog,setProg] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProg((oldProg) => {
        const diff = Math.random() * 10;
        return Math.min(oldProg + diff, 100);
      });
    },100);
    return () => {clearInterval(timer)}
  })
  return (
    <React.Fragment>
      <Paper style={{textAlign: 'center',display: 'flex',flexDirection: 'column',background:'transparent',
      justifyContent: 'center',padding:'5rem',verticalAlign: 'middle',marginTop: '6rem'}}
      elevation={0}
      >
        <Typography variant={isMobile ? "h4" : "h1"}  style={{color: '#09779A',
        fontWeight: 'bold',textAlign: 'center'}}>
          Memofeed
        </Typography>
        <Typography variant="subtitle1"  style={{color: '#488BBF',fontWeight: '600',textAlign: 'center'}}>
          Give life to your stories/memories
        </Typography>
        <LinearProgress variant="determinate" value={prog} style={{width: '100%',marginTop:'2rem'}}></LinearProgress>
      </Paper>
    
    </React.Fragment>
  )
}

export default FlashUI;