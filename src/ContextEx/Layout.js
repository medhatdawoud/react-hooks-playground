import React from 'react';
import Header from './Header';

function Layout(props) {
  return <Header username={props.username} />;
}

export default Layout;
