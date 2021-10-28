import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

function PluginButton({ text, onClick }) {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
}

PluginButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PluginButton;

const ButtonContainer = styled.button`
  color: var(--plugin-text-color);
  background-color: #ffffff;
  border: 1.75px solid var(--plugin-primary-color);
  font-size: var(--button-text-size);
  border-radius: 3px;
  padding: var(--plugin-button-padding);
  text-align: center;
  width: var(--plugin-button-width);
`;
