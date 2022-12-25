import { gql, useQuery } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 2.7rem;
  margin-right: 0.5rem;
`;

const COINLOGO = gql`
  query Coin($coinId: String!) {
    coin(id: $coinId) {
      logo
    }
  }
`;

const Logo = ({ id }) => {
  const { data } = useQuery(COINLOGO, { variables: { coinId: id } });

  return <>{data?.coin?.logo && <Img src={`${data.coin.logo}`} alt={id} />}</>;
};

export default Logo;
