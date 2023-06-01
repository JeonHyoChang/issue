import React from 'react';
import styled from 'styled-components';
import IssueStateFilter from './issueStateFilter/IssueStateFilter';
import IssueFilterOptions from './issueFilterOptions/IssueFilterOptions';

const IssueTableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  padding: 16px 30px;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.GRAY300};
  background-color: ${({ theme }) => theme.COLOR.GRAY100};
`;

const IssueTableHeader = () => {
  return (
    <IssueTableHeaderContainer>
      <IssueStateFilter />
      <IssueFilterOptions />
    </IssueTableHeaderContainer>
  );
};

export default IssueTableHeader;
