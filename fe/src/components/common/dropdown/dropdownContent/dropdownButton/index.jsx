import React from 'react';
import DropdownIcon from '@assets/icons/DropdownIcon.svg';
import DropdownButtonBlock from './style';

const DropdownButton = ({ buttonName }) => {
  return (
    <DropdownButtonBlock>
      {buttonName}
      <img src={DropdownIcon} alt={DropdownIcon} />
    </DropdownButtonBlock>
  );
};

export default DropdownButton;
