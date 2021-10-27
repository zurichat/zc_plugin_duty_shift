import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function PluginSelect({ text, onClick }) {
  return (
    <SelectButton onClick={onClick}>
      <span>{text}</span> <KeyboardArrowDownIcon />
      {/* {options &&
        options.map(({ value, text }) => <option value={value}>{text}</option>)} */}
    </SelectButton>
  );
}

PluginSelect.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PluginSelect;

const SelectButton = styled.div`
  color: var(--plugin-text-color);
  background-color: #ffffff;
  border: 1.75px solid var(--plugin-primary-color);
  font-size: var(--button-text-size);
  border-radius: 2px;
  padding: var(--plugin-button-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--plugin-button-width);

  > span {
    margin-right: 0.5rem;
  }

  > .MuiSvgIcon-root {
    height: var(--button-icon-size);
    width: var(--button-icon-size);
    color: var(--plugin-icon-color);
  }
`;
