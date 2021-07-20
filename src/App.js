
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

import {TemplateProvider} from './templates/TemplateProvider'
import ContextProvider from './context/contextProvider';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
    <BrowserRouter>

     <Header/>
     <Switch>
       <Route  exact path="./"component={Home}/>
       <Route  exact path="/cart"component={Cart}/>
     <Home/>
     </Switch>
     
     </BrowserRouter>
     </ContextProvider>
     </TemplateProvider>
  );
}

export default App;
