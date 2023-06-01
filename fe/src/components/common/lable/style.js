import styled from 'styled-components';

export const LabelBox = styled.div`
  display: inline-block;
  width: fit-content;
  padding: 5px 18px;
  border-radius: 50px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.COLOR.GRAY50};
`;

export const ContentLayoutStyle = styled.div`
  display: flex;
  gap: 4px;

  > span 
    font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  }
`;
