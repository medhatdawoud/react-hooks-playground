import React from 'react';
import Layout from './Layout';

const user = { name: 'Medhat Dawoud' };
const theme = { name: 'Black-Theme' };

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function Page(props) {
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Layout />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default Page;
