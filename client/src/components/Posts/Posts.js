import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';


const Posts = ({setCurrentId,tag} ) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);


  if (!posts.length && !isLoading) return 'No posts';

  const tagPosts= posts.filter((post) => post.tags[0]===tag || post.tags[0]=== "men&women" || tag==="all");           


  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {tagPosts?.map((post) =>(
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
      )
      
    );
}
export default Posts;
