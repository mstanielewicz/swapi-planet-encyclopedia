import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  :nth-of-type(1) {
    margin-top: 0;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => `
    color: ${theme.colors.header};
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-right: 15px;

    @media (max-width: ${theme.media.mobile}) {
      h3 {
      font-size: 15px;
      }
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  min-height: 50px;
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
`;

export const OpenButton = styled.div`
  transition-duration: 0.3s;
  cursor: pointer;
  ${({ collapsed }) =>
    collapsed &&
    `
    transform: rotate(180deg);
    filter: brightness(170%);
  `}
`;
