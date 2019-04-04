import React from 'react';
import auth from './auth';

export const AppPage = (props) => {
  return (
    <div>
      <h1>Application Page</h1>
      <button 
        onClick={
          () => {
            auth.logout(() => {
              // props.history is available because it is passed (the props argument) by Route component 
              // if we have seperate component, it would not have access to history 
              // (in that case we need to import withRouter from react-router-dom and use it as a higher-order component)
              props.history.push("/");
            })
          }
        }
      >
        Logout
      </button>
    </div>
  );
}