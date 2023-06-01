import { react, useState } from 'react';
import { InputBox } from './style';

const InputText = () => {
  const [isEdit, setEdit] = useState(false); // input 박스 클릭시 컴포넌트 스타일 변경
  const [value, setValue] = useState('');

  const handleClick = () => {
    setEdit(!isEdit);
  };
  return (
    <InputBox>
      <label htmlFor="titleInput">제목</label>
      <input type="text" id="titleInput" onClick={handleClick} />
    </InputBox>
  );
};
export default InputText;
