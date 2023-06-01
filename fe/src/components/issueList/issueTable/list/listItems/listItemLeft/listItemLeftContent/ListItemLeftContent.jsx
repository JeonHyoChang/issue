import React from 'react';
import styled from 'styled-components';
import ListItemLeftContentTop from './LeftContentTop/LeftContentTop';
import ListItemLeftContentBottom from './LeftContentBottom/LeftContentBottom';

const ListItemLeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
`;

const ListItemLeftContent = ({ issue }) => {
  return (
    <ListItemLeftContentContainer>
      <ListItemLeftContentTop issue={issue} />
      <ListItemLeftContentBottom issue={issue} />
    </ListItemLeftContentContainer>
  );
};

export default ListItemLeftContent;
