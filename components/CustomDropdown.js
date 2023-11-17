import React, { useState } from "react";

const CustomDropdown = ({ items, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
    setSelectedOption(option);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? (
          <>
            <p>{selectedOption.name}</p>
          </>
        ) : (
          <p>Select a country</p>
        )}

        <img width="15" height="15" src="icons/arrow-down.svg" />
      </div>

      {isOpen && (
        <div className="options">
          {items.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
              <img src={option.image} alt={option.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
