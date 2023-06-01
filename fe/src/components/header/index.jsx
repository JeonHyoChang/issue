import IssueTrackerLogo from '@assets/images/IssueTrackerLogo.svg';
import UserImage from '@assets/images/UserImage.svg';
import { HeaderContainer, UserImageBlock } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={IssueTrackerLogo} />
      <UserImageBlock src={UserImage} />
    </HeaderContainer>
  );
};

export default Header;
