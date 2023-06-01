import React from 'react';
import styled from 'styled-components';

const IssueInfoBlock = styled.div`
  display: flex;
  gap: 3px;
  color: ${({ theme }) => theme.COLOR.GRAY600};
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  line-height: 28px;
`;

const IssueInfo = ({ children }) => {
  return <IssueInfoBlock>{children}</IssueInfoBlock>;
};

export default IssueInfo;
