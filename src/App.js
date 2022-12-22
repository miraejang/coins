import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home';
import { createGlobalStyle } from 'styled-components';
import Ticker from './components/ticker';
import Tickers from './components/tickers';
import Coin from './coin';
import Coins from './coins';
import hexToRgb from './components/hexToRgb';

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
h1, h2, h3, h4, h5, h6, p, a, li {
  color: #fff;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2.5rem;
  margin: 3rem 0 2rem;
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

const APP = styled.div`
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
  padding: 3rem 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.bgc};
`;
const Header = styled.header`
  padding: 2rem 0;

  h1 {
    text-align: center;
    color: ${props => props.theme.color};
    font-weight: 900;
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const Nav = styled.nav`
  width: 100%;
  text-align: center;

  a {
    display: inline-block;
    margin: 1rem;
    padding: 0.5rem 1rem;
    background: ${props => `${props.theme.point}`};
    border-radius: 0.3rem;
  }

  a:hover,
  .activeStyle {
    background: ${props => `rgba(${hexToRgb(props.theme.point)}, 0.5)`};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <APP className="App">
        <Wrapper>
          <Header>
            <Link to="/">
              <h1>Coins</h1>
            </Link>
          </Header>
          <Main>
            <Nav>
              <NavLink to="/tickers" className={({ isActive }) => (isActive ? 'activeStyle' : undefined)}>
                <h3>Tickers</h3>
              </NavLink>
              <NavLink to="/coins" className={({ isActive }) => (isActive ? 'activeStyle' : undefined)}>
                <h3>Conins</h3>
              </NavLink>
            </Nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tickers" element={<Tickers />} />
              <Route path="/tickers/:ticker_id" element={<Ticker />} />
              <Route path="/coins" element={<Coins />} />
              <Route path="/coins/:coin_id" element={<Coin />} />
            </Routes>
          </Main>
        </Wrapper>
      </APP>
    </>
  );
}

export default App;
