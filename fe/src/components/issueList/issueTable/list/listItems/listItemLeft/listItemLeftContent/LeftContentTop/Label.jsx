import React from 'react';
import styled from 'styled-components';

const IssueLabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const LabelBox = styled.div`
  display: inline-block;
  width: auto;
  background-color: ${({ bgColorCode }) => bgColorCode};
  padding: 5px 18px;
  border-radius: 50px;
  color: ${({ theme }) => theme.COLOR.GRAY50};
  font-size: ${({ theme }) => theme.FONT_SIZE.S};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  line-height: 20px;
`;

const Label = ({ labelName, bgColorCode }) => {
  return (
    <IssueLabelBox>
      <LabelBox bgColorCode={bgColorCode}>{labelName}</LabelBox>
    </IssueLabelBox>
  );
};

export default Label;
