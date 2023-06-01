import { useState } from 'react';
import {
  ControlButtonBox,
  IssueNumberBox,
  IssueTitleBox,
  IssueInfoBox,
  LayoutStyle,
  Line,
} from './style';
import Button from '@components/common/button';
import EditIcon from '@assets/icons/EditIcon.svg';
import DirectoryIcon from '@assets/icons/DirectoryIcon.svg';
import Label from '@components/common/lable';
import OpenIssueStatusIcon from '@assets/icons/OpenIssueStatusIcon.svg';
import InputText from '@components/common/inputText';

const DetailHeader = () => {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState('');

  const handleClick = () => {
    setEdit(!isEdit);
  };

  const handleUpload = () => {
    setInput(e.target.valut);
  };

  return (
    <>
      <LayoutStyle>
        {!isEdit ? (
          <>
            <IssueTitleBox>
              <span>input</span>
              <IssueNumberBox>#2</IssueNumberBox>
            </IssueTitleBox>
            <ControlButtonBox>
              <Button
                type="outline"
                size="medium"
                icon={EditIcon}
                title="제목 편집"
                onClick={handleClick}
              />
              <Button type="outline" size="medium" icon={DirectoryIcon} title="이슈 닫기" />
            </ControlButtonBox>
          </>
        ) : (
          // input 컴포넌트 불러오기 (edit 클릭하면 input 컴포넌트로 변경)
          <>
            <InputText value={input}></InputText>
            <ControlButtonBox>
              <Button
                type="outline"
                size="medium"
                icon={EditIcon}
                title="편집 취소"
                onClick={handleClick}
              />
              <Button
                type="container"
                size="medium"
                icon={EditIcon}
                title="편집 완료"
                onClick={handleClick}
              />
            </ControlButtonBox>
          </>
        )}
      </LayoutStyle>

      <IssueInfoBox>
        <Label
          title="열린 이슈"
          bgColor={({ theme }) => theme.COLOR.BLUE}
          icon={OpenIssueStatusIcon}
        />
        <span>이 이슈가 3분전에 열렸음</span>
      </IssueInfoBox>
      <Line />
    </>
  );
};

export default DetailHeader;
