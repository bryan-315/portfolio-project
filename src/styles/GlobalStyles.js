import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --black: #080C08;
    --gold: #BDA414;
    --dark-blue: #142C5A;
    --platinum: #DDDDDD;
    --violet: #28013B;
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Chivo Mono', sans-serif;
    background-color: var(--gold);
    color: var(--black);
}

a {
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyle;
