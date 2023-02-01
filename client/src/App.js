import Home from './components/Home/Home';
import men from './components/pages/men';
import AddP from './components/pages/AddProd';

import women from './components/pages/women';
import product from './components/pages/products';


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Navbar from '../src/components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetail';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Footer from './components/Footer/Footer';

//<Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
//<Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />

function App() {
  

  const user = JSON.parse(localStorage.getItem('profile'));

    return (
      
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/AddP" exact component={ AddP } />
          <Route path="/Gift For Him" exact component={men} />
          <Route path="/posts/search" exact component={men} />
          <Route path="/Gift For Her" exact component={women} />
          <Route path="/posts/search" exact component={women} />
          <Route path="/Products" exact component={product} />
          <Route path="/posts/search" exact component={product} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/" />)} />
        </Switch>
        <Footer />

      </BrowserRouter>
    );
  };


export default App;
