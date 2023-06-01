import React from 'react';
import styled from 'styled-components';
import Dropdown from '@components/common/dropdown';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid blue;
`;

const Sidebar = () => {
  const fetchDropdownContent = async (buttonType) => {
    const response = await fetch(`/api/${buttonType}`);
    const data = await response.json();

    return data;
  };

  const sidebarDropdownButtons = [
    { buttonName: '담당자', id: 'assignees' },
    { buttonName: '레이블', id: 'labels' },
    { buttonName: '마일스톤', id: 'milestones' },
  ];

  /* todo : sidebar style 상태 관리 필요 */
  return (
    <SidebarContainer>
      {sidebarDropdownButtons.map((button) => (
        <Dropdown
          key={button.id}
          title={button.buttonName}
          fetchDropdownContent={() => fetchDropdownContent(button.id)}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
