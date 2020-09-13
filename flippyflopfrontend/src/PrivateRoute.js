import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useAuth } from './context/auth';

function PrivateRoute({ component: Component, ...rest }) {
	const { authTokens } = useAuth();
  
  return(
    <Route {...rest} render={(props) => 
				// TODO: rather than just checking an authToken exists
				// how can we validate? Also throw away when old...
				authTokens ? (
      <Component {...props} />
				) : (
			<Redirect to="/login" />
				)
			}
    />
  );
}

export default PrivateRoute;
