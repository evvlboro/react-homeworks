// Core
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  form {
    display: flex;
    flex-direction: column;

    select, input[type=text], input[type=email], input[type=number]   {
      width: 100%;
      box-sizing: border-box;
    }

    button {
      display: block;
      margin-top: 10px;
      align-self: flex-end;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  box-sizing: border-box;
  margin-top: 5px;
  border: 1px solid ${({ isError }) => isError ? 'red' : 'transparent'};
`;

export const SexContainer = styled.div`
  border: 1px solid ${({ isError }) => isError ? 'red' : 'transparent'};
`;

