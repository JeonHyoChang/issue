import styled from 'styled-components';

export const ControlButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const IssueTitleBox = styled.div`
  display: flex;
  gap: 10px;

  > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  }
`;

export const IssueNumberBox = styled.span`
  color: ${({ theme }) => theme.COLOR.GRAY600};
`;

export const LayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const IssueInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme.COLOR.GRAY600};
  }
  margin-bottom: 26px;
`;

export const Line = styled.hr`
  background: ${({ theme }) => theme.COLOR.GRAY300};
  height: 1px;
  border: 0;
  margin-bottom: 26px;
`;
