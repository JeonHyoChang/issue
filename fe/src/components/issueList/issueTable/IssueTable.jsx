import React from 'react';
import styled from 'styled-components';
import IssueTableHeader from './header/IssueTableHeader';
import IssueTableList from './list/IssueTableList';

const IssueTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.COLOR.GRAY300};
  border-radius: 16px;
`;

const IssueTable = () => {
  return (
    <IssueTableContainer>
      <IssueTableHeader />
      <IssueTableList />
    </IssueTableContainer>
  );
};

export default IssueTable;
