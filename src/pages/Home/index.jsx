//react
import React,{useState,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { getPosts,getStatsForUser } from '../../redux/actions/post'

//css
import {Grid2,Paper} from '@mui/material';
import useStyles from './styles'

//components
import Pagination from '../../components/PaginationUI'
import Loading from '../../components/Loading'
import ProfileCard from '../../components/ProfileCard'

const Posts = React.lazy(()=> import('../../components/Posts'));
const Form = React.lazy(() => import('../../components/Forms'));


function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home= ()=> {

  const [currentId,setCurrentId] = useState(0);
  const [tags,setTags] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery(); 
  const history = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  
  // useEffects
  // GEt all posts 
  useEffect(() => {
    console.info("Home.js : getPosts is called.")
    dispatch(getPosts());
  }, [currentId,dispatch]);
  
  // GET STATS for the user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.info("Home.js : getStats is called.")
    if(user){
      dispatch(getStatsForUser(user?.result._id));
    }
  }, [dispatch]);
  
  return (
    <>
      <>
        <>

          {/* main feed box  */}
          <Grid2 container className={classes.gridContainer} >
            
            <Grid2 item size={{xs:12,sm:6,md:3,lg:3,xl:2}}>
              <ProfileCard />
              
              {/* ADD POST COMPONENT */}
              {/* <React.Suspense fallback={<Loading/>}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </React.Suspense> */}
            </Grid2>
            {/* FEED */}
            
            <Grid2 item size={{xs:12,sm:12,md:10,lg:9,xl:9}}>
              <React.Suspense fallback={<Loading />} >
                <Posts setCurrentId={setCurrentId} />
              </React.Suspense>
            </Grid2>  
            

          </Grid2>

          {/* PAGINATION COMPONENT */}
          {(!searchQuery && !tags.length) && (
            <Paper className={classes.pagination} elevation={0}>
              <Pagination page={page} />
            </Paper>
          )}
        </>
      </>
    </>
  )
}

export default Home;
