import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 20px;

  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  li {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
