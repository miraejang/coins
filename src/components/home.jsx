import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  line-height: 1.8;
  font-size: 1.5rem;
`;

const Home = () => {
  return (
    <>
      <h2>Hello</h2>
      <Text>Coins에 오신것을 환영합니다.😊</Text>
      <Text>확인하고 싶은 것을 클릭해서 내용을 확인해보세요.</Text>
    </>
  );
};

export default Home;
