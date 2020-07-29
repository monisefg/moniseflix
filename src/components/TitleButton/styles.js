import styled from "styled-components";

export const Title = styled.h1`
  margin-left: 15%;

  @media (max-width: 800px) {
    margin-left: inherit;
  }
`;

export const DivContainer = styled.div`
  float: right;
  margin-right: 20%;
  margin-bottom: 1%;

  @media (max-width: 800px) {
    float: center;
  }
`;
