import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Coin from './components/coin';
import Coins from './components/coins';
import Home from './components/home';
import Tickers from './components/tickers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'tickers',
        element: <Tickers />,
      },
      {
        path: 'coins',
        element: <Coins />,
      },
      {
        path: '/coins/:coin_id',
        element: <Coin />,
      },
    ],
  },
]);

export default router;
