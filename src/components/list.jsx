import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hexToRgb from './hex_to_rgb';

const TickerList = styled.ul`
  margin-top: 2rem;
  li + li {
      margin-top: 1rem;
    }
  }
`;
const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.listBgc};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    border: 3px solid ${props => props.theme.point};
    background-color: ${props => `rgba(${hexToRgb(props.theme.listBgc)}, 0.5)`};
    scale: 1.2;
    transition: all 0.3s;
  }

  .rank {
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 700;

    &:after {
      content: '.';
    }
  }

  img {
    width: 2.7rem;
    margin-right: 0.5rem;
  }

  .name {
    font-size: 1.8rem;
  }
`;

const List = ({ name, data }) => (
  <>
    {name && data && (
      <>
        <h2>{`${name[0].toUpperCase()}${name.slice(1, -1)}`} Top 100</h2>
        <TickerList>
          {data?.map(item => (
            <li key={item.id}>
              <ItemLink to={`/coins/${item.id}`}>
                <p className="rank">{item.rank}</p>
                <img src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`} alt={item.name} />
                <p className="name">{item.name}</p>
              </ItemLink>
            </li>
          ))}
        </TickerList>
      </>
    )}
  </>
);
export default List;
