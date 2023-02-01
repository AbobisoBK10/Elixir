import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({


  sImages: {
    column: '2 auto',
    marginBottom: '1rem',

    [theme.breakpoints.down('xs')]: {
      column: '1 auto',

    }

    },


  oneImage: {
    backgroundColor: "#FFFFFF",
    width: '50%',
    float: 'left',
    paddingTop: '5px',
    display: 'flex',
    paddingBottom: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }


  },
}));