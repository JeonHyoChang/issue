import React from 'react';
import styled from 'styled-components';
import ListItemRight from './listItemRight/ListItemRight';
import ListItemLeft from './listItemLeft/ListItemLeft';

const IssueTableListItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 40px;
  background-color: ${({ theme }) => theme.COLOR.GRAY50};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.GRAY300};
`;

const IssueTableListItem = ({ issue }) => {
  return (
    <IssueTableListItemBlock>
      <ListItemLeft issue={issue} />
      <ListItemRight issue={issue} />
    </IssueTableListItemBlock>
  );
};

export default IssueTableListItem;
