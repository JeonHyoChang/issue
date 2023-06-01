import styled from 'styled-components';

const DropdownButtonBlock = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ filter }) => (filter === 'filter' ? 5 : 16)}px;
  background-color: transparent;
  color: ${({ theme }) => theme.COLOR.GRAY600};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

// TODO: props에 따라서, gap 크기를 다르게 줘아함 5px과 16px

export default DropdownButtonBlock;
