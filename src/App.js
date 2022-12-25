import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { isDarkAtom } from './atoms';
import Container from './components/container';
import { dark, light } from './theme';

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
  cursor: pointer;
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

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        <div className="App">
          <Container isDark={isDark} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
