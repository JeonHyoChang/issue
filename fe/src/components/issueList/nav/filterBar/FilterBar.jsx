import styled from 'styled-components';
import DropdownIcon from '@assets/icons/DropdownIcon.svg';

const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 601px;
  height: 40px;
  border-radius: 11px;
  border-collapse: collapse;
`;

const FilterButton = styled.summary`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 128px;
  height: 40px;
  background-color: #f7f7fc;
  color: #6e7191;
  font-weight: 700;
  font-size: 16px;
  border-radius: 11px 0px 0px 11px;
  border: 1px solid #d9dbe9;
`;

const FilterInput = styled.input`
  width: 472px;
  height: 40px;
  border-radius: 0px 11px 11px 0px;
  border: 1px solid #d9dbe9;
`;

const FilterBar = () => {
  return (
    <FilterBarContainer>
      <FilterButton>
        필터
        <img src={DropdownIcon} />
      </FilterButton>
      <FilterInput type="text"></FilterInput>
    </FilterBarContainer>
  );
};

export default FilterBar;
