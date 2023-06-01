import Button from '@common/button/index';
import TabContainer from './style';

const Tab = () => {
  return (
    <TabContainer>
      <Button type="ghost" size="medium" title="레이블(2)" />
      <Button type="ghost" size="medium" title="마일스톤(3)" />
    </TabContainer>
  );
};

export default Tab;
