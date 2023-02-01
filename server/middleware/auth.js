import jwt from "jsonwebtoken";

const secret = 'test';


// wants to like a post
// click the like button => auth middllware() thatconfirms or denies the request kif? it returns next() => like controller
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {   
      // get the user id if we are working with our own token   
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      //if using the google auth token 
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; //googles name to diffrentiate the users 
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;