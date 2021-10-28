import React from "react";

// import PropTypes from "prop-types";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

function ShiftForm() {
  return (
    <FormContainer>
      <FormHeader>
        <h2>Edit shift</h2>
        <CancelIcon />
      </FormHeader>

      <FormBody>
        <FormField>
          <span>Date</span>
          <div>
            <span>August 28, 2021</span>
            <CalendarTodayOutlinedIcon />
          </div>
        </FormField>

        <FormField>
          <span>Task</span>
          <div>
            <span>Design a style guide</span>
            <KeyboardArrowDownIcon />
          </div>
        </FormField>

        <FormField>
          <span>Time</span>
          <div>
            <span>09:00am - 12:00pm</span>
            <KeyboardArrowDownIcon />
          </div>
        </FormField>

        <FormField>
          <span>Title</span>
          <div>
            <span>Designer</span>
            <KeyboardArrowDownIcon />
          </div>
        </FormField>

        <div>{/* Just here to push the next field to the right */}</div>

        <FormField>
          <span />
          <div>
            <span>Add users</span>
            <GroupAddOutlinedIcon />
          </div>
        </FormField>
      </FormBody>
    </FormContainer>
  );
}

// ShiftForm.propTypes = {
//   modal: PropTypes.string.isRequired,
//   setModal: PropTypes.func.isRequired
// };

export default ShiftForm;

const FormContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 2rem;
  margin-left: calc(var(--shift-form-width) / -2);
  z-index: 5;
  width: var(--shift-form-width);
`;

const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--plugin-primary-color);
  color: white;
  padding: var(--shift-form-padding);
  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;
  font-size: 0.55rem;

  > .MuiSvgIcon-root {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const FormBody = styled.form`
  display: grid;
  gap: 1.5rem 1.2rem;
  grid-template-columns: 1fr 1fr;
  padding: var(--shift-form-padding);
  background-color: #ffffff;
  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius);
  color: var(--form-label-color);
`;

const FormField = styled.div`
  > span {
    font-weight: 700;
    font-size: 0.75rem;
  }

  > div {
    margin-top: 0.5rem;
    padding: 0.65rem 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
  }

  > div > span {
    /* Make it clip and contain */
  }

  :nth-of-type(2n - 1) > div {
    background-color: var(--form-input-bg-color);
  }

  :nth-of-type(2n) > div {
    border: 0.5px solid var(--form-input-border);
  }

  > div > .MuiSvgIcon-root {
    width: 0.85rem;
    height: 0.85rem;
  }
`;
