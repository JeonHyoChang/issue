import React from 'react';
import styled from 'styled-components';
import Checkbox from '@components/common/checkbox';
import ListItemLeftContent from './listItemLeftContent/ListItemLeftContent';

const ListItemLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`;

const ListItemLeft = ({ issue }) => {
  return (
    <ListItemLeftContainer>
      <Checkbox />
      <ListItemLeftContent issue={issue} />
    </ListItemLeftContainer>
  );
};

export default ListItemLeft;
