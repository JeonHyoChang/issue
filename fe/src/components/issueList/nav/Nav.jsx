import FilterBar from './filterBar/FilterBar';
import styled from 'styled-components';
import Button from '@components/common/button';
import PlusIcon from '@assets/icons/PlusIcon.svg';
import Tab from '@components/common/tab/index';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 29px;
  margin-bottom: 24px;
`;

const SubNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <FilterBar />
      <SubNavBlock>
        <Tab />
        <Link to="/issueForm">
          <Button type="container" size="medium" icon={PlusIcon} title="이슈 작성" />
        </Link>
      </SubNavBlock>
    </NavContainer>
  );
};

export default Nav;
