import { gql, useQuery } from '@apollo/client';
import React from 'react';
import List from './list';
import Loading from './loading';

const TICKERS = gql`
  query Tickers {
    tickers {
      id
      name
      symbol
      rank
    }
  }
`;

const Tickers = () => {
  const { data, loading } = useQuery(TICKERS);

  return (
    <>
      {loading && <Loading />}
      {data?.tickers && <List name="tickers" data={data.tickers} />}
    </>
  );
};

export default Tickers;
