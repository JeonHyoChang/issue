import React from 'react';
import styled from 'styled-components';
import Button from '@common/button/index';
import CancelIcon from '@assets/icons/CancelIcon.svg';

const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
  margin-top: 20px;
`;

const Buttons = () => {
  return (
    <ButtonsBox>
      <Button type="ghost" size="medium">
        <img src={CancelIcon} alt="cancelIcon" />
        작성 취소
      </Button>
      <Button type="container" size="large" state="disabled">
        완료
      </Button>
    </ButtonsBox>
  );
};

export default Buttons;
