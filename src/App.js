import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';

import './App.css';

function App() {
  return (
    <BrowserRouter>

     <Header/>
     <Switch>
       <Route  exact path="./"component={Home}/>
       <Route  exact path="/cart"component={Cart}/>
     <Home/>
     </Switch>
     
     </BrowserRouter>
  );
}

export default App;
