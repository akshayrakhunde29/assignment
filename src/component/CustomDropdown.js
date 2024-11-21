import React, { useState, useEffect, useRef } from "react";
const arrow = require("../image/arrow.png");

const CustomDropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(item[0]);

    const options = ["Store 1", "Store 2", "Store 3"];

    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption}
                <span className="dropdown-arrow"><img src={arrow} alt="" /></span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {item.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;

