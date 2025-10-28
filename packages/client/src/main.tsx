import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloProvider } from '@apollo/client/react';
import { client } from 'lib';

import 'antd/dist/reset.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);