import React, { useState } from 'react';
import { Card, CardActions, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz';
import { likePost } from '../../../actions/posts';

import { useHistory } from 'react-router-dom';
import useStyles from './styles';
//import moment from 'moment';
import { CardContent } from '@mui/material';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
      dispatch(likePost(post._id));
  
      if (hasLikedPost) {
        setLikes(post.likes.filter((id) => id !== userId));
      } else {
        setLikes([...post.likes, userId]);
      }
    };
  
    const Likes = () => {
      if (likes.length > 0) {
        return likes.find((like) => like === userId)
          ? (
            <>< FavoriteIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><FavoriteBorderIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
      return <><FavoriteBorderIcon fontSize="small" />&nbsp;Like</>;
    };
  
  
    const openPost = (e) => {
      // dispatch(getPost(post._id, history));             <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

      history.push(`/posts/${post._id}`);
    };
  
    return (
      <Card className={classes.card} raised elevation={6}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          <div className={classes.overlay}>
            <Typography className={classes.name} variant="h5" gutterBottom component="h3">{post.title}</Typography>

          </div>
          </ButtonBase>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

          <div className={classes.overlay2}>
              <Button 
                onClick={(e) => {
                e.stopPropagation();
                console.log(post);
                setCurrentId(post._id);
                }}
                style={{ color: 'white' }}
                size="small">
                  <MoreHorizIcon fontSize="default"/>
              </Button>
          </div>
          )}
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            
          </div>

          <CardContent>          
          <Typography variant="body2" component="p" >{post.description}</Typography>
          </CardContent>
          </ButtonBase>
  
          <CardActions className={classes.cardActions}>
              <Button className={classes.likeButton} size="small" color="secondary" disabled={!user?.result} onClick={handleLike}>
                <Likes/>
              </Button>
              
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

                <Button size="small" color="primary"  onClick={() => dispatch(deletePost(post._id))}>
                  <DeleteIcon  fontSize="small"/>
                  Delete
                </Button>
              )}
          </CardActions>

          
          

      </Card>
    );
}
  export default Post;