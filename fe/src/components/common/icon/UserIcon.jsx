import React from 'react';
import styled from 'styled-components';

const UserIconBlock = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ userImgUrl }) => userImgUrl});
`;
const UserIcon = ({ userImgUrl, alt }) => {
  return <UserIconBlock userImgUrl={userImgUrl} alt={alt} />;
};

export default UserIcon;
