import React, { useContext } from 'react';
import styled from 'styled-components';
import UserIcon from '../../../../../common/icon/UserIcon';

const ListItemRightBox = styled.div`
  margin-right: 10px;
`;

const ListItemRight = ({ issue: { author, authorUrl } }) => {
  return (
    <ListItemRightBox>
      <UserIcon userImgUrl={authorUrl} alt={author} />
    </ListItemRightBox>
  );
};

export default ListItemRight;
