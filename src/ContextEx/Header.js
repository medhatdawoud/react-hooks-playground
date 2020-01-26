import React from 'react';
import User from './User';

function Header(props) {
  return <User username={props.username} />;
}

export default Header;
