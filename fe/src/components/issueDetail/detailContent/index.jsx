import { CommentBody, CommentBox, CommentHeaderBox, TimeStampBox } from './style';
import UserImage from '@assets/images/UserImage.svg';
import Label from '@components/common/lable';

const CommentHeader = ({ image, assignee, timeStamp }) => {
  return (
    <CommentHeaderBox>
      <img src={image} alt="이미지" />
      <span>{assignee}</span>
      <TimeStampBox>{timeStamp} 전</TimeStampBox>
      <Label title="작성자" bgColor="black" />
    </CommentHeaderBox>
  );
};

const DetailContent = () => {
  return (
    <CommentBox>
      <CommentHeader image={UserImage} assignee="daon" timeStamp="9분" />
      <CommentBody>이슈 트래커 언제 끝나아</CommentBody>
    </CommentBox>
  );
};

export default DetailContent;
