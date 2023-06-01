import React from 'react';
import CheckOffCircle from '@assets/icons/CheckOffCircle.svg';
import CheckOnCircle from '@assets/icons/CheckOnCircle.svg';
import UserIcon from '@components/common/icon/UserIcon';
import { DropdownBodyBlock, LabelPaletteBlock, ContentBlock } from './style';

const DropdownBody = ({
  buttonId,
  id,
  name,
  isChecked,
  imgUrl,
  title,
  bgColorCode,
  filterClickHandler,
}) => {
  const checkCircleImgSrc = isChecked ? CheckOnCircle : CheckOffCircle;

  return (
    <DropdownBodyBlock onClick={() => filterClickHandler(buttonId, id)}>
      <ContentBlock>
        {imgUrl && <UserIcon userImgUrl={imgUrl} alt={name} />}
        {name && <span>{name}</span>}
        {bgColorCode && <LabelPaletteBlock bgColorCode={bgColorCode} />}
        {title && <span>{title}</span>}
      </ContentBlock>
      <img src={checkCircleImgSrc} alt={checkCircleImgSrc}></img>
    </DropdownBodyBlock>
  );
};

export default DropdownBody;
