import { Route, Redirect} from 'react-router-dom';
import React, { useContext } from "react";
import UserContext from './UserContext';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

const PrivateRoute = (props) => {
    const jwt = getCookie('jwt')
    return jwt ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
        //   state: { from: location }
        }}
      />
    );
  };
export default PrivateRoute;