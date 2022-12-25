import { gql, useQuery } from '@apollo/client';
import React from 'react';
import List from './list';
import Loading from './loading';

const COINS = gql`
  query Coins {
    coins {
      id
      name
      symbol
      rank
    }
  }
`;

const Coins = () => {
  const { data, loading } = useQuery(COINS);

  return (
    <>
      {loading && <Loading />}
      {data?.coins && <List name="coins" data={data.coins} />}
    </>
  );
};

export default Coins;
