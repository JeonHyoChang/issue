import React from 'react';
import styled from 'styled-components';
import UserImage from '@assets/images/UserImage.svg';
import Inputs from './Inputs';
import Sidebar from './Sidebar';

const UserIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${UserImage});
`;

const MainContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 10px 0px;
`;
/* TODO : 상태 관리 및 기능 구현 필요 */

const AddIssueMainContent = () => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <UserIcon />
        <Inputs />
        <Sidebar />
      </MainContentContainer>
    </React.Fragment>
  );
};

export default AddIssueMainContent;
