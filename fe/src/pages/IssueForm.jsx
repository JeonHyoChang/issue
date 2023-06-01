import React from 'react';
import styled from 'styled-components';
import AddIssueMainContent from '@components/issueForm/addIssueMainContent/AddIssueMainContent';
import PageLayout from '@components/common/layout/PageLayout';
import Buttons from '@components/issueForm/issueFormButtons/Buttons';

const AddIssuePageTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  line-height: 48px;
`;

const DividingLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.COLOR.GRAY300};
  margin-top: 24px;
`;

const IssueForm = () => {
  return (
    <PageLayout>
      <AddIssuePageTitle>새로운 이슈 작성</AddIssuePageTitle>
      <DividingLine />
      <AddIssueMainContent />
      <DividingLine />
      <Buttons />
    </PageLayout>
  );
};

export default IssueForm;
