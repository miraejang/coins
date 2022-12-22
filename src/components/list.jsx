import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hexToRgb from './hexToRgb';

const TickerList = styled.ul``;
const Item = styled.li`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  & + li {
    margin-top: 1rem;
  }
`;
const ItemLink = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.listBgc};
  &:hover {
    border: 3px solid ${props => props.theme.point};
    background-color: ${props => `rgba(${hexToRgb(props.theme.listBgc)}, 0.5)`};
    scale: 1.2;
    transition: all 0.3s;
  }
`;
const Img = styled.img`
  width: 2.7rem;
  margin-right: 0.5rem;
`;
const Rank = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
  &:after {
    content: '.';
  }
`;
const Name = styled.span`
  font-size: 1.8rem;
`;

const List = ({ name, data }) => (
  <>
    {name && data && (
      <>
        <h2>{`${name[0].toUpperCase()}${name.slice(1, -1)}`} Top 100</h2>
        <TickerList>
          {data?.map(item => (
            <Item key={item.id}>
              <ItemLink to={`/${name}/${item.id}`}>
                <Rank>{item.rank}</Rank>
                <Img src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`} alt={item.name} />
                <Name>{item.name}</Name>
              </ItemLink>
            </Item>
          ))}
        </TickerList>
      </>
    )}
  </>
);
export default List;
