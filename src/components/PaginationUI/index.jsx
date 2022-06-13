/* eslint-disable react/jsx-props-no-spreading */
//react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/post';

//css
import { Pagination, PaginationItem } from '@material-ui/lab';
import useStyles from './styles';


const Paginate = ({ page }) => {

  const { numberOfPages } = useSelector((state) => state.posts);
  
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;