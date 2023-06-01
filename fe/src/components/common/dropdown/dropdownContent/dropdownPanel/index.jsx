import DropdownBody from '../dropdownBody';
import { DropdownPanelBlock, PanelHeaderBlock } from './style';

const DropdownPanel = ({
  buttonName,
  buttonId,
  content,
  filterState,
  filterClickHandler,
  dropdownStyle,
}) => {
  return (
    <DropdownPanelBlock dropdownStyle={dropdownStyle}>
      <PanelHeaderBlock>{buttonName} 필터</PanelHeaderBlock>
      <ul>
        {(buttonId === 'assignees' || buttonId === 'writers') &&
          content[buttonId]?.map(({ id, name, imgUrl }) => {
            const isChecked = filterState[buttonId] === id;
            return (
              <DropdownBody
                buttonId={buttonId}
                key={id}
                id={id}
                isChecked={isChecked}
                name={name}
                imgUrl={imgUrl}
                filterClickHandler={filterClickHandler}
              />
            );
          })}
        {buttonId === 'labels' &&
          content[buttonId]?.map(({ id, title, bgColorCode }) => {
            const isChecked = filterState[buttonId] === id;
            return (
              <DropdownBody
                buttonId={buttonId}
                key={id}
                id={id}
                title={title}
                isChecked={isChecked}
                bgColorCode={bgColorCode}
                filterClickHandler={filterClickHandler}
              />
            );
          })}
        {buttonId === 'milestones' &&
          content[buttonId]?.map(({ id, title }) => {
            const isChecked = filterState[buttonId] === id;
            return (
              <DropdownBody
                buttonId={buttonId}
                key={id}
                id={id}
                title={title}
                isChecked={isChecked}
                filterClickHandler={filterClickHandler}
              />
            );
          })}
      </ul>
    </DropdownPanelBlock>
  );
};

export default DropdownPanel;
