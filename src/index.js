import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './client';
import router from './router';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
);
