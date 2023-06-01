import React, { useContext } from 'react';
import styled from 'styled-components';
import Checkbox from '@components/common/checkbox';
import OpenIssueStatusIcon from '@assets/icons/OpenIssueStatusIcon.svg';
import CloseIssueStatusIcon from '@assets/icons/CloseIssueStatusIcon.svg';
import { IssueListStateContext } from '@pages/IssueList';
import IssueStateButton from './IssueStateButton';

const IssueStateFilterBox = styled.div`
  display: flex;
  width: 300px;
  padding: 10px;
`;

const IssueStateButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-left: 20px;
`;

const IssueStateFilter = () => {
  const {
    issueListState: { isOpen },
    dispatch,
    issueListData: {
      count: { opened, closed },
      issues,
    },
  } = useContext(IssueListStateContext);

  const openButtonHandler = () => {
    if (isOpen) return;
    dispatch({ type: 'TOGGLE_OPEN_STATE', payload: true });
  };

  const closeButtonHandler = () => {
    if (!isOpen) return;
    dispatch({ type: 'TOGGLE_OPEN_STATE', payload: false });
  };

  return (
    <IssueStateFilterBox>
      <Checkbox />
      <IssueStateButtonBox>
        <IssueStateButton
          imgSrc={OpenIssueStatusIcon}
          imgAlt={OpenIssueStatusIcon}
          buttonName="열린이슈"
          issuesCount={isOpen ? issues.length : opened}
          issueState={isOpen}
          onClick={openButtonHandler}
        />
        <IssueStateButton
          imgSrc={CloseIssueStatusIcon}
          imgAlt={CloseIssueStatusIcon}
          buttonName="닫힌이슈"
          issuesCount={isOpen ? closed : issues.length}
          issueState={!isOpen}
          onClick={closeButtonHandler}
        />
      </IssueStateButtonBox>
    </IssueStateFilterBox>
  );
};

export default IssueStateFilter;
