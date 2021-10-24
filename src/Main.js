import React from 'react'
import Page1 from './pages/Page1';
import Legal from './pages/Legal';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';


import {Switch,Route,Redirect, withRouter} from 'react-router-dom';

function Main (){
    return(
        <React.Fragment>
            <Switch>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
            <Route path='/page3' component={Page3}/>
            <Route path='/page4' component={Page4}/>
            <Route path='/page5' component={Page5}/>
            <Route path='/legal' component={Legal}/>
            <Redirect to='/page1'/>
            </Switch>
        </React.Fragment>
    )
}

export default withRouter(Main);