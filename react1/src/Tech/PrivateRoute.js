import React from "react";
import {withAuth} from "./UserContext";
import { Redirect, Route} from 'react-router-dom';

export const PrivateRoute = withAuth(({component: RouteComponent, isAuthorized, ...rest}) => (
    <Route{...rest} render={routerProps => (
        isAuthorized ? <RouteComponent {...routerProps}/> : <Redirect to='/'/>
    )}/>
))