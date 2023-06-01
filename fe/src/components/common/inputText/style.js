import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  width: 1008px;
  height: 40px;
  background-color: ${{}}
  background: ${({ theme }) => theme.COLOR.GRAY200};
  border-radius: 11px;
  gap: 50px;

  > input {
    width: 880px;
    height: 28px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
