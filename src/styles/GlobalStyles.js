import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --black: #222322;
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
    background-color: var(--black);
    color: var(--gold);
}

a {
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyle;
