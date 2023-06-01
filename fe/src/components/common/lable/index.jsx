import { LabelBox, ContentLayoutStyle } from './style';

const Label = ({ title, bgColor, icon }) => {
  return (
    <LabelBox bgColor={bgColor}>
      <ContentLayoutStyle>
        <img src={icon} />
        <span>{title}</span>
      </ContentLayoutStyle>
    </LabelBox>
  );
};

export default Label;
