import React from 'react';
import styled from 'styled-components';

const IssueStateButtonBlock = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLOR.GRAY100};
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
  color: ${({ theme, issueState }) => (issueState ? theme.COLOR.GRAY900 : theme.COLOR.GRAY700)};
`;

const IssueStateButton = ({ imgSrc, imgAlt, buttonName, issuesCount, issueState, onClick }) => {
  return (
    <IssueStateButtonBlock issueState={issueState} onClick={onClick}>
      <img src={imgSrc} alt={imgAlt} />
      {buttonName} ({issuesCount})
    </IssueStateButtonBlock>
  );
};

export default IssueStateButton;
