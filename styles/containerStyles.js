import { css } from "lit-element";

export const containerStyles = css`
  * {
    color: #3b3b3b;
    font-family: 'Roboto', sans-serif;
    }
    h2 {
        font-size: 2em;
        text-align: center;
        margin: 2rem;
    }
    .quote-container {
        background-color: #fcfcfc;
        width: 100vh;
        margin: 0 auto;
        border-radius: 5px;
        padding: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .quote-text {
        font-size: 1.3em;
        text-align: center;
        margin: 0;
    }
    .quote-text__author {
        font-size: 1em;
        text-align: center;
        margin: 1rem;
    }
    .quote-text__chapter-container {
        display: flex;
        font-size: 1em;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        justify-content: space-between;
    }
    .quote-text__source {
        font-size: 0.8em;
        text-align: center;
        margin: 0.5rem;
    }
`;