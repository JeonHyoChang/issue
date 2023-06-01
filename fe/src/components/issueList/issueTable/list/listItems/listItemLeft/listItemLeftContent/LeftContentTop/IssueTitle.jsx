import React from 'react';
import styled from 'styled-components';

const IssueTitleBlock = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  line-height: 32px;
`;

const IssueTitle = ({ children }) => {
  return <IssueTitleBlock>{children}</IssueTitleBlock>;
};

export default IssueTitle;
