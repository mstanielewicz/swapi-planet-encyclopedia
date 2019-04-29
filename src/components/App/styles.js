import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr minmax(min-content, ${theme.media.mobile}) 1fr;
    margin: 90px auto;
    background: ${theme.colors.layoutGray};
    padding: ${theme.display.layoutPadding} 0;
    border-radius: 4px;
    color: ${theme.colors.font};

    > * {
      grid-column: 2 / 3;
      margin: 0 auto;
    }

    @media (max-width: ${theme.media.mobile}) {
      margin: 40px auto;
    }

    footer {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      color: #b3b5b9;
      font-size: .7em;
    }
  `}
`;

export const MoviesContainer = styled.div`
  ${({ theme }) => `
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.display.layoutPadding};
    padding-top: 15px;

    @media (max-width: ${theme.media.mobile}) {
      padding: ${theme.display.layoutPadding} ${
    theme.display.layoutPaddingMobile
  };
      padding-top: 15px;
      min-height: 50vh;
    }
  `}
`;
