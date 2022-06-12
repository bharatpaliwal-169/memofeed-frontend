import React,{useState,
  // useEffect
} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory,useLocation} from 'react-router-dom';
import { 
  // getPosts,
  getPostsBySearch } from '../../redux/actions/post'
import {
  Container,Button,
  Grow,Grid,Paper, AppBar,TextField
} from '@material-ui/core'
import useStyles from './styles'
import ChipInput from 'material-ui-chip-input';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Posts from '../Posts/Posts'
import Form from '../Forms/Form'
import Pagination from '../PaginationUI'

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
  const query = useQuery(); //this is where we will get our page info
  const history = useHistory();
  const page = query.get('page')|| 1;
  const searchQuery = query.get('searchQuery');


  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){ // 13 === enter key
      searchPost();
    }
  }

  const handleAdd = (tag) =>{
    setTags([...tags,tag])
  }

  const handleDelete = (tagToDelete) =>{
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }


  const searchPost = () => {
    if(search.trim() || tags){
      dispatch(getPostsBySearch({search , tags : tags.join(',')}));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }
    else{
      history.push("/");
    }
  }

  // useEffect(() => {
  //   dispatch(getPosts());    
  // }, [currentId,dispatch]);

  return (
    <>
      <Grow in>
        <Container maxwidth="xl">
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={1} 
          className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={7}>
              <Posts setCurrentId={setCurrentId} />
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
                {/* <Autocomplete
                  multiple
                  id="tags-filled"
                  options={top100Films.map((option) => option.title)}
                  defaultValue={[top100Films[13].title]}
                  freeSolo
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
                  )}
                /> */}

                <Button onClick={searchPost} className={classes.searchButton} variant="contained" 
                color="primary">Search</Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} elevation={6}>
                  <Pagination page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </>
  )
}

export default Home;