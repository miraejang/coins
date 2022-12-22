import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './loading';

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

const GET_TICKER = gql`
  query getTicker($tickerId: String!) {
    ticker(id: $tickerId) {
      id
      name
      symbol
      rank
      circulating_supply
      total_supply
      max_supply
      beta_value
      first_data_at
      last_updated
    }
  }
`;

const Ticker = () => {
  const { ticker_id } = useParams();
  const { data, loading } = useQuery(GET_TICKER, {
    variables: {
      tickerId: ticker_id,
    },
  });

  return (
    <>
      {loading && <Loading />}
      {data?.ticker && (
        <>
          <h2>{data.ticker.name}</h2>
          <Img src={`https://coinicons-api.vercel.app/api/icon/${data.ticker.symbol.toLowerCase()}`} alt={ticker_id} />
          <Contents>
            {Object.keys(data.ticker).map(key => {
              const toCapitalize = str => {
                return str
                  .split('_')
                  .map(e => `${e[0].toUpperCase()}${e.slice(1)}`)
                  .join(' ');
              };

              return (
                <Info key={key}>
                  {['rank', 'circulating_supply', 'total_supply', 'max_supply', 'beta_value', 'first_data_at', 'last_updated'].includes(key) && <h4>{toCapitalize(key)}</h4>}
                  {['rank', 'circulating_supply', 'total_supply', 'max_supply', 'beta_value'].includes(key) && <p>{Number(data.ticker[key]).toLocaleString()}</p>}
                  {['first_data_at', 'last_updated'].includes(key) && <p>{new Date(data.ticker[key]).toLocaleDateString('ko-KR')}</p>}
                </Info>
              );
            })}
          </Contents>
        </>
      )}
    </>
  );
};

export default Ticker;
