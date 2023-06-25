import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 370px;

  font-size: 20px;
  color: #010101;

  h1,
  h2 {
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 20px;
  }
  button {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    /* padding-left: 32px; */
    /* padding-right: 32px; */
  }
  /* @media screen and (min-width: 1280px) {
    width: 1280px;
  } */

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
`;
