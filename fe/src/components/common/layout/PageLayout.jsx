import React from 'react';
import styled from 'styled-components';

// 컨테이너 수정
const PageLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;

const PageLayout = ({ children }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
