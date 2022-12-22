import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './components/loading';

const Img = styled.img`
  width: 2.7rem;
  margin-right: 0.5rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  h4 {
    text-align: left;
    margin-right: 1rem;
    width: 11rem;
  }
`;
const Contents = styled.div`
  margin-top: 3rem;
  display: inline-block;
`;

const COIN = gql`
  query Coin($coinId: String!) {
    coin(id: $coinId) {
      id
      name
      symbol
      rank
      is_new
      is_active
      type
    }
  }
`;

const Coin = () => {
  const { coin_id } = useParams();
  const { data, loading } = useQuery(COIN, {
    variables: {
      coinId: coin_id,
    },
  });
  return (
    <>
      {loading && <Loading />}
      {data?.coin && (
        <>
          <h2>{data.coin.name}</h2>
          <Img src={`https://coinicons-api.vercel.app/api/icon/${data.coin.symbol.toLowerCase()}`} alt={coin_id} />
          <Contents>
            {Object.keys(data.coin).map(key => {
              const toCapitalize = str => {
                return str
                  .split('_')
                  .map(e => `${e[0].toUpperCase()}${e.slice(1)}`)
                  .join(' ');
              };

              return (
                <Info key={key}>
                  {['rank', 'is_new', 'is_active', 'type'].includes(key) && (
                    <>
                      <h4>{toCapitalize(key)}</h4>
                      <p>{`${data.coin[key]}`}</p>
                    </>
                  )}
                </Info>
              );
            })}
          </Contents>
        </>
      )}
    </>
  );
};

export default Coin;
