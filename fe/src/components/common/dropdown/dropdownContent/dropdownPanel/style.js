import styled, { css } from 'styled-components';

const positions = {
  sidebar: {
    position: 'absolute',
    top: '30px',
  },
  filter: {
    position: 'absolute',
    top: '30px',
    right: '-10px',
  },
};

const positionStyles = css`
  ${({ dropdownStyle }) =>
    positions &&
    positions[dropdownStyle] &&
    css`
      ${positions[dropdownStyle]}
    `}
`;

const DropdownPanelBlock = styled.div`
  ${positionStyles}
  display: flex;
  flex-direction: column;
  width: 240px;
  border: 1px solid ${({ theme }) => theme.COLOR.GRAY300};
  border-radius: 16px;
`;

// TODO: absolute의 위치 조정을 props에 따라 달리 줘야함

const PanelHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  background: ${({ theme }) => theme.COLOR.GRAY100};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  padding: 8px 16px;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.GRAY300};
`;

export { DropdownPanelBlock, PanelHeaderBlock };
