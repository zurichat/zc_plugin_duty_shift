import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Success() {
  return (
    <SuccessContainer>
      <SvgIcon>
        <CheckCircleIcon />
      </SvgIcon>

      <h1>Successful</h1>

      <p>Your new shift has been added successfully</p>

      <button>Ok</button>
    </SuccessContainer>
  );
}

export default Success;

const SuccessContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 2rem;
  margin-left: calc(var(--shift-form-width) / -2);
  padding: 2.5rem;
  z-index: 5;
  width: var(--shift-form-width);
  background-color: #ffffff;
  display: grid;
  grid-template-rows: repeat(auto, 4);
  gap: 1.5rem;
  justify-items: center;
  text-align: center;
  align-items: center;
  border-radius: var(--modal-border-radius);

  > svg {
    color: var(--plugin-primary-color);
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
    border-radius: 50%;
    /* TODO - Fix drop shadow problem */
    -webkit-filter: drop-shadow(0px 22px 45px 0px rgba(0, 0, 0, 0.1697));
    filter: drop-shadow(0px 22px 45px 0px rgba(0, 0, 0, 0.1697));
  }

  > h1 {
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--success-text-color);
    line-height: 31px;
    letter-spacing: 0.236364px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0484867);
  }

  > p {
    color: var(--success-message-color);
    font-size: 0.75rem;
  }

  > button {
    font-family: Roboto;
    font-weight: 700;
    color: var(--plugin-primary-color);
    width: 8rem;
    height: 2rem;
    background-color: transparent;
    outline: none;
    border: 1.5px solid var(--plugin-primary-color);
    border-radius: 3px;
  }
`;
