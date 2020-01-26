import React from 'react';
import Layout from './Layout';

function Page(props) {
  const user = { name: 'Medhat' };
  return <Layout username={user.name} />;
}

export default Page;
