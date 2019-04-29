import styled from "styled-components";
import arrows from "../../assets/images/SEARCH_ARROWS.png";

export const Container = styled.div`
  ${({ theme }) => `
    margin: auto;
    padding: 15px;

    @media (max-width: ${theme.media.mobile}) {
      margin: 0;
      padding: 0;

      thead {
        display: none;
      }
    }
  `}
`;

export const Table = styled.table`
  ${({ theme }) => `
    font-size: .8em;
    border-collapse: collapse;

    thead {
      border-bottom: 1px solid #C4C4C4;
    }

    @media (max-width: ${theme.media.mobile}) {
      thead {
        display: none;
      }
    }
  `}
`;

export const TableHeader = styled.th`
  ${({ theme }) => `
    font-weight: normal;
    text-transform: capitalize;
    word-spacing: 100vw;
    text-align: right;
    width: 100px;
    user-select: none;
    padding-bottom: 10px;

    :nth-of-type(1) {
      word-spacing: normal;

      span {
        justify-content: flex-start;
      }
    }

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      :hover {
        cursor: pointer;
        color: ${theme.colors.header};
      }
    }

    span:after {
      content: '';
      height: 100%;
      display: block;
      min-width: 6px;
      height: 13px;
      margin-left: 5px;
      background-image: url("${arrows}");
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => `
    min-width: 100%;

    tr:nth-of-type(1) {
      td {
        padding-top: 30px;
      }
    }

    td {
      text-align: right;
      padding: 15px 0;
      word-spacing: 100vw;
      padding-right: 11px;

      :last-of-type {
        padding-right: 0;
      }

      :nth-of-type(1) {
        text-align: left;
        word-spacing: normal;
      }
    }

    @media (max-width: ${theme.media.mobile}) {
      tr:nth-of-type(even) {
        background: #F2F2F2;
      }

      tr {
        display: block;
        padding-top: 15px;
       
        :nth-of-type(1) {
          td {
            padding-top: 15px;
          }
        }
      }

      td {
        display: flex;
        text-align: left;
        padding: 15px;

        :last-of-type {
          padding-bottom: 30px;
          padding-right: 15px;
        }

        div {
          flex: 1;
        }
      }

      td[data-header]:before {
        display: block;
        content: attr(data-header);
        flex: 1;
        text-transform: capitalize;
      }
    }
  `}
`;
