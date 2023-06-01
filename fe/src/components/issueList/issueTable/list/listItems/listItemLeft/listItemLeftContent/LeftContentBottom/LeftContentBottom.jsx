import React from 'react';
import styled from 'styled-components';
import IssueInfo from './IssueInfo';
import MilestoneIcon from '../../../../../../../../assets/icons/MilestoneIcon.svg';
import getTimeElapsed from '../../../../../../../../utils/api/timeElapsed';

const LeftContentBottomContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const LeftContentBottom = ({ issue: { id, createAt, milestone, author } }) => {
  const timeElapsed = getTimeElapsed(createAt);
  return (
    <LeftContentBottomContainer>
      <IssueInfo>#{id}</IssueInfo>
      <IssueInfo>
        이 이슈가 {timeElapsed}, {author}님에 의해 작성되었습니다
      </IssueInfo>
      {milestone && (
        <IssueInfo>
          <img src={MilestoneIcon} />
          {milestone}
        </IssueInfo>
      )}
    </LeftContentBottomContainer>
  );
};

export default LeftContentBottom;
