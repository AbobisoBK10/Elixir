import React from 'react'

import { TextField, Button, Typography, Paper  } from '@material-ui/core';
import { useState , useEffect} from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
     title:'', description:'',tags:[], selectedFile:''
  });

  const clear = () =>{
    setCurrentId(0);
    setPostData({
       title:'', description:'', tags: [], selectedFile:''
    });
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();//not to get the refresh in the browser


    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };


  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to purchase your order.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className ={classes.paper} elevation={6}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
          <Typography variant="h6" > {currentId ? 'Editing' : 'Add'} a Post</Typography>
          <TextField name="title"
           variant="outlined"
           label="Title"
           fullWidth 
           vlaue={postData.title} 
           onChange={(e)=> setPostData({ ...postData, title: e.target.value})}/>

          <TextField name="description"
           variant="outlined"
           label="Description"
           multiline 
           minRows={4}
           fullWidth 
           vlaue={postData.description} 
           onChange={(e)=> setPostData({ ...postData, description: e.target.value})}/>
          <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64})=> setPostData({ ...postData, selectedFile:base64 })}
            />
          </div>
            <Button variant="contained" color="primary" className={classes.buttonSubmit} onClick={handleSubmit} type="submit" fullWidth >Submit</Button>
            <Button variant="contained" color="secondary"  size="small" onClick={clear} fullWidth >Clear</Button>
          

        </form>
    </Paper>
  )
}

export default Form;
