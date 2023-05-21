import React, { createContext, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache, 
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Home from "./pages/Home";
import Profile from './pages/Profile'
import Login from './pages/Login'
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const LoginContext = createContext<any>({})

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
            <div className="container-fluid">
              <Routes>
                <Route
                  path = '/'
                  element = {<Home />}
                ></Route>
                <Route
                  path = '/profile'
                  element = {<Profile />}
                ></Route>
                <Route
                  path = '/login'
                  element = {<Login />}
                ></Route>
                <Route
                  path = '/signup'
                  element = {<Signup />}
                ></Route>
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    </LoginContext.Provider>

  );
}

export default App;