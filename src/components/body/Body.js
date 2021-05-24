import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Blogpage from '../pages/Blogpage';
import Contactpage from '../pages/Contactpage';
import Postpage from '../pages/Postpage';






const Body = () => {
    
    return (
        <div>
            <Switch>
                <Route exact path="/blogpage"  render={() => <Blogpage />} />
                <Route exact path="/postpage" render={() => <Postpage />} />
                <Route exact path="/contactpage" render={() => <Contactpage />} />
                <Redirect from="/" to="/blogpage" />
            </Switch>
        </div>
    );

}



export default Body;