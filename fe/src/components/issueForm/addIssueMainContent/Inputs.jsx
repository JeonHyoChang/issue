import React from 'react';
import styled from 'styled-components';

const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 420px;
  border: 1px solid red;
`;

const TitleInputBox = styled.div`

  background-color:${({ theme }) => theme.COLOR.GRAY200}
  border: 1px solid green;
`;
const CommentInputBox = styled.div`
  background-color: ${({ theme }) => theme.COLOR.GRAY200};
`;

/* TODO: 입력창 스타일 추가 및 기능 구현 필요 */

const Inputs = () => {
  return (
    <InputsBox>
      <TitleInputBox>
        <label htmlFor="title">제목</label>
        <input id="title" type="text" />
      </TitleInputBox>
      <CommentInputBox>
        <label htmlFor="comment">코멘트를 입력하세요</label>
        <textarea id="comment" type="text-area" />
      </CommentInputBox>
      <div></div>
    </InputsBox>
  );
};

export default Inputs;
