import React, { useState, useEffect, useRef } from 'react';
import DropdownButton from './dropdownContent/dropdownButton';
import DropdownPanel from './dropdownContent/dropdownPanel';
import DropdownContainer from './style';

const Dropdown = ({
  buttonId,
  title,
  fetchDropdownContent,
  filterState,
  filterClickHandler,
  dropdownStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDropdownContent();
      setDropdownContent(data);
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DropdownContainer ref={ref} onClick={handleToggleDropdown}>
      <DropdownButton buttonName={title} />
      {isOpen && dropdownContent && (
        <DropdownPanel
          buttonName={title}
          buttonId={buttonId}
          filterState={filterState}
          filterClickHandler={filterClickHandler}
          content={dropdownContent}
          dropdownStyle={dropdownStyle}
        />
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
