import React, { useContext } from 'react';
import styled from 'styled-components';
import Dropdown from '@components/common/dropdown';
import apiUrl from '@utils/api/api';
import { IssueListStateContext } from '@pages/IssueList';

const IssueFilterOptionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
`;

const IssueFilterOptions = () => {
  const { issueListState, dispatch } = useContext(IssueListStateContext);
  const fetchDropdownContent = async (buttonType) => {
    const url = `${apiUrl}/${
      buttonType === 'milestones' ? buttonType + '?isOpen=true' : buttonType
    }`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const issueDropdownButtons = [
    { buttonName: '담당자', buttonId: 'assignees' },
    { buttonName: '레이블', buttonId: 'labels' },
    { buttonName: '마일스톤', buttonId: 'milestones' },
    { buttonName: '작성자', buttonId: 'writers' },
  ];

  const filterClickHandler = (buttonId, id) => {
    dispatch({ type: 'SET_ISSUE_STATE', payload: { key: buttonId, value: id } });
  };

  const dropdownStyle = 'filter';

  return (
    <IssueFilterOptionsBox>
      {issueDropdownButtons.map((button) => (
        <Dropdown
          key={button.buttonId}
          buttonId={button.buttonId}
          title={button.buttonName}
          filterState={issueListState}
          filterClickHandler={filterClickHandler}
          fetchDropdownContent={() => fetchDropdownContent(button.buttonId)}
          dropdownStyle={dropdownStyle}
        />
      ))}
    </IssueFilterOptionsBox>
  );
};

export default IssueFilterOptions;
