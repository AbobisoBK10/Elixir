import React, {useState } from 'react'
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@mui/material';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import {getPostsBySearch} from '../../actions/posts';
import Form from '../Form/Form.js';
import Posts from '../Posts/Posts.js';
import Pagination  from '../Posts/Pagination/Pagination';
import ChipInput from 'material-ui-chip-input';


import { useHistory, useLocation } from 'react-router-dom';// to know on which page we are 


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function NewP() {

  const val = true;


  const classes = useStyles();
  const query = useQuery();// where we will be getting our page info from
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //keyCode 13 is the enter key 
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (


<div>
        {val ? 
          (<>
          <Grow in  >
          <Container maxWidth="xl">
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9} marginBottom="30px">
              <Posts setCurrentId={setCurrentId} tag="newproducts"/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Perfumes" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>

              <Form currentId={currentId} setCurrentId={setCurrentId}/>
              {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
            </Grid>
            </Grid>
          </Container>
          </Grow>
          </>):
          (<>

            </>)
        }

</div>
  )
}
