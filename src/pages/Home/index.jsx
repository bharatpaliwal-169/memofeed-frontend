//react
import React,{useState,useEffect} from 'react';
import {useHistory,useLocation} from 'react-router-dom';

//redux
import {useDispatch} from 'react-redux';
import { getPosts,getPostsBySearch,getStatsForUser } from '../../redux/actions/post'

//css
import { Container,Button,Grow,Grid,Paper, AppBar,TextField,useMediaQuery,useTheme} from '@material-ui/core';
import useStyles from './styles'
import ChipInput from 'material-ui-chip-input';

//components
// import Posts from '../../components/Posts'
import Form from '../../components/Forms'
import Pagination from '../../components/PaginationUI'
import Loading from '../../components/Loading'
const Posts = React.lazy(()=> import('../../components/Posts'));

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home= ()=> {
  //how data management will look like without REDUX.
  const [search,setSearch] = useState('');
  const [currentId,setCurrentId] = useState(0);
  const [tags,setTags] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery(); 
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(query.get('page'));


  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){ 
      searchPost();
    }
  }

  const handleAdd = (tag) =>{
    tag.toLowerCase();
    setTags([...tags,tag])
  }

  const handleDelete = (tagToDelete) =>{
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  const searchPost = () => {
    if(!search && !tags){
      history.push("/");
    }
    else if(search.trim() || tags){
      dispatch(getPostsBySearch({search , tags : tags.join(',')}));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }
  }
  useEffect(() => {
  dispatch(getPosts());
  }, [currentId,dispatch]);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile'));
    if(user){
      dispatch(getStatsForUser(user?.result._id));
    }
  }, []);
  
  return (
    <>
      <Grow in>
        <Container maxwidth="xl">
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={1} 
          className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={7}>
              <React.Suspense fallback={<Loading />} >
                <Posts setCurrentId={setCurrentId} />
              </React.Suspense>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField 
                  onKeyDown={handleKeyPress} 
                  name="search" 
                  variant="outlined" 
                  label="Search Memories" 
                  fullWidth 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                />
                
                <ChipInput
                  style={{ margin: '10px 0' }}
                  value={tags}
                  onAdd={(chip) => handleAdd(chip)}
                  onDelete={(chip) => handleDelete(chip)}
                  label="Search Tags"
                  variant="outlined"
                />

                <Button onClick={searchPost} className={classes.searchButton} variant="contained" 
                color="primary">Search</Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>

          {(!searchQuery && !tags.length) && (
            <Paper className={classes.pagination} elevation={0}>
              <Pagination page={page} />
            </Paper>
          )}

        </Container>
      </Grow>
      
    </>
  )
}

export default Home;