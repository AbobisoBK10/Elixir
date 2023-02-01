//import Intro from '../../images/Intro.mp4';
//import Intro2 from '../../images/Intro2.mp4';
import Bimages from '../Bimages/Bimages';
import Simages from '../Simages/Simages';
import src1 from '../../images/1.jpg';
import src2 from '../../images/2.jpg';
import src3 from '../../images/3.jpg';
import src4 from '../../images/4.jpg';
import src5 from '../../images/5.jpg';
import src6 from '../../images/6.jpg';
import src8 from '../../images/8.jpg';
import src9 from '../../images/9.jpg';
import src10 from '../../images/10.jpg';




import useStyles from './styles';



export default function Home() {


  /*}<video width="100%"   muted autoPlay loop >
        <source src={Intro} type="video/mp4"/>
      </video>
      <video width="100%"   muted autoPlay loop >
        <source src={Intro2} type="video/mp4"/>
      </video>{*/
  const classes= useStyles();



  return (


    <div>
      <Bimages src={src1} />
      <Bimages src={src3} />
      <Bimages src={src2} />

      <div className={classes.sImages}>
        <div className={classes.oneImage}>
          <Simages src={src10} />
        </div>
        <div className={classes.oneImage}>
          <Simages src={src5} />
        </div>
        <div className={classes.oneImage}>
          <Simages src={src4} />
        </div>
        <div className={classes.oneImage}>
          <Simages src={src9} />
        </div>
        <div className={classes.oneImage}>
          <Simages src={src6} />
        </div>
        <div className={classes.oneImage}>
          <Simages src={src8} />
        </div>

        </div>

      </div>
  )
}
