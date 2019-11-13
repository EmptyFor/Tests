import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import links from '../config/links';
import App from '../components/App'
import Login from '../components/Login'
import Home from '../components/Home/index'
import SignIn from '../components/SignIn';



class Routes extends PureComponent {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path={links.home} component={Home} />
                    <Route path={'/login'} component={Login} />
                    <Route path={'/sign_in'} component={SignIn} />

                </Switch>
            </App>
        )
    }
}

export default withRouter(Routes);