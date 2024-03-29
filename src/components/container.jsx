import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { isDarkAtom } from '../atoms';
import NavList from './nav_list';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1;
}
menu, ol, ul, li {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
button {
  background-color: ${props => props.theme.listBgc};
  border: 0;
}
h1, h2, h3, h4, h5, h6, p, a, li, button {
  color: ${props => props.theme.color};
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.8rem;
}
h4 {
  font-size: 1.3rem;
}
`;

const AppBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 5rem 0;
  background-color: ${props => props.theme.rootBgc};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  max-width: 850px;
  padding: 1rem 1rem 3rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.bgc};
`;
const Header = styled.header`
  position: relative;
  padding: 2rem 0 3rem;
  text-align: center;

  h1 {
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
    color: ${props => props.theme.color};
    font-weight: 900;
  }
`;
const ThemeBtn = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  top: 0;
  right: 1rem;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Container = ({ isDark }) => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);

  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <Wrapper>
          <Header>
            <h1>
              <Link to="/">Coins</Link>
            </h1>
            <NavList />
            <ThemeBtn onClick={toggleDarkAtom}>{isDark ? 'Light Mode' : 'Dark Mode'}</ThemeBtn>
          </Header>
          <Main>
            <Outlet />
          </Main>
        </Wrapper>
      </AppBox>
    </>
  );
};

export default Container;
