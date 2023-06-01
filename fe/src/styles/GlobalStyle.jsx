import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
      font-style: normal;
    }

  body {
    padding : 40px 60px;
    background-color : ${({ theme }) => theme.COLOR.GRAY100}
  }

  #root {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font: inherit;
  }
`;

export default GlobalStyle;
