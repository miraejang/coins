import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Chart from './chart';
import Loading from './loading';

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 2.7rem;
    margin-right: 0.5rem;
  }
`;
const Contents = styled.div`
  padding: 0 2rem;
`;
const TopBox = styled.div`
  border-radius: 0.5rem;
  background-color: ${props => props.theme.rootBgc};
  color: ${props => props.theme.color};

  ul {
    display: flex;
    justify-content: center;

    li {
      padding: 2rem;
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;
const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
`;
const Desc = styled.p`
  margin-bottom: 3rem;
  padding: 1rem;
  line-height: 1.7;
  font-size: 1.125rem;
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
      logo
      description
      message
      open_source
      hardware_wallet
      started_at
      development_status
      proof_type
      org_structure
      hash_algorithm
      contract
      platform
      first_data_at
      last_data_at
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
          <PageTitle>
            <img src={`https://coinicons-api.vercel.app/api/icon/${data.coin.symbol.toLowerCase()}`} alt={coin_id} />
            <h2>{data.coin.name}</h2>
          </PageTitle>
          <Contents>
            <TopBox>
              <ul>
                <li>
                  <Title>Rank</Title>
                  <p>{data.coin.rank}</p>
                </li>
                <li>
                  <Title>Symbol</Title>
                  <p>{data.coin.symbol}</p>
                </li>
                <li>
                  <Title>Open Source</Title>
                  <p>{data.coin.open_source ? 'Yes' : 'No'}</p>
                </li>
                <li>
                  <Title>active</Title>
                  <p>{data.coin.is_active ? 'Yes' : 'No'}</p>
                </li>
              </ul>
            </TopBox>
            <Desc>{data.coin.description}</Desc>
            <Chart />
          </Contents>
        </>
      )}
    </>
  );
};

export default Coin;
