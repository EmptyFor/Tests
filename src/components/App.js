import React from 'react';
// import { connect } from 'react-redux';

import Header from './Header';

export default props => {
  const pathname = props.children._self.props.location.pathname
  return <> {
    pathname === '/login' ? <Header auth text="Sign In" route="sign_in" /> :
      pathname === '/sign_in' ? <Header auth text="Log In" route="login" /> : <Header />
  }
    {props.children}
  </>
}




