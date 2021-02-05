import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Liga from './components/Liga'
import Information from './components/Information';
import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path="/" component={Index} exact/>
         <Route path="/information/:id" component={Information} exact />
         <Route path="/laliga" component={Liga} exact/>
         <Route path="/premierle" component={Liga} exact/>
         <Route path="/seriea" component={Liga} exact/>
         <Route path="/bundesliga" component={Liga} exact/>
         <Route path="/ligue1" component={Liga} exact/>
         <Route path="/premeriali" component={Liga} exact/>
         <Route path="/eredivisie" component={Liga} exact/>
       </Switch>
    </BrowserRouter>
  )
}
export default App;
