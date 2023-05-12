import React from "react";
import BonaticsContainer from './components/BonaticsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const App = () => 

//   <BonaticsContainer />

// export default App
function App() {
  return (
    <BonaticsContainer />
  );
}

export default App;