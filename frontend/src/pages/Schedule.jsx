import React, { useState } from "react";

import styled from "styled-components";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Overlay from "../components/overlay/Overlay";
import PluginButton from "../components/plugin-button/PluginButton";
import PluginSelect from "../components/plugin-select/PluginSelect";
import Shift from "../components/shift/Shift";
import Success from "../components/success/Success";
import shiftsData from "../data";

function Schedules() {
  const shifts = shiftsData;

  const [modal, setModal] = useState(false);

  return (
    <>
      <PageContainer>
        <Controls>
          <PluginSelect text="Design" />
          <PluginButton text="Add Shift" onClick={() => setModal(true)} />
          <DateNavigator>
            <div>
              <ChevronLeftIcon />
            </div>
            <div>
              <CalendarTodayOutlinedIcon />
              <span>13 September</span>
            </div>
            <div>
              <ChevronRightIcon />
            </div>
          </DateNavigator>
        </Controls>

        <TaskFilter>
          <div>
            <span>Task: </span> <PluginSelect text="Design a checkout page" />
          </div>
          <div>
            <input type="search" name="" id="" placeholder="search" />
            <SearchOutlinedIcon />
          </div>
        </TaskFilter>

        <ScheduleHeader>
          <h3>Staff Name</h3>
          <h3>Task</h3>
          <h3>Lead</h3>
          <h3>Shift Time</h3>
        </ScheduleHeader>

        <ShiftsContainer>
          {shifts.map(({ avatar, name, start, end }) => (
            <Shift
              key={name}
              avatar={avatar}
              name={name}
              start={start}
              end={end}
            />
          ))}
        </ShiftsContainer>

        {modal && <Overlay />}

        {modal && <Success />}
      </PageContainer>
    </>
  );
}

export default Schedules;

const PageContainer = styled.section`
  position: relative;
  font-size: var(--plugin-font-size);
  padding: var(--plugin-main-padding);
  background-color: var(--plugin-bg-color);

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 1440px) {
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const DateNavigator = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 0.1rem;

  > div:nth-of-type(2) > .MuiSvgIcon-root {
    display: none;
    visibility: hidden;
  }

  > div:nth-of-type(2) {
    font-size: var(--button-text-size);
    text-align: center;
    width: 5rem;
    height: 1rem;
    background-color: transparent;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div:nth-of-type(2) > span {
    color: #1d1c1d;
  }

  > div:last-of-type,
  div:first-of-type {
    width: 1.25rem;
    height: 1.25rem;
    background-color: var(--plugin-icon-bg-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:last-of-type > .MuiSvgIcon-root,
  div:first-of-type > .MuiSvgIcon-root {
    height: 0.75rem;
    width: 0.75rem;
  }

  @media screen and (min-width: 1440px) {
    background-color: #ffffff;
    border: 1.5px solid var(--plugin-primary-color);
    border-radius: 2px;
    padding: var(--plugin-button-padding);
    gap: 1rem;

    > div:nth-of-type(2) > .MuiSvgIcon-root {
      display: inline;
      visibility: visible;
      color: var(--plugin-icon-color);
      width: 1.1rem;
      height: 1.1rem;
      margin-right: 0.4rem;
    }

    > div:nth-of-type(2) {
      width: auto; /* width: 10rem; */
      text-decoration: none;
    }

    > div {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

const TaskFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  > div > span {
    margin-right: 2px;
    font-weight: 700;
  }

  > div:last-of-type {
    display: none;
    visibility: hidden;
  }

  @media screen and (min-width: 1440px) {
    > div > span {
      margin-right: 12px;
    }
  }
`;

const ScheduleHeader = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 0.5rem;
  background-color: #ffffff;
  margin: 0.6rem 0;
  border-radius: 5px;

  > h3 {
    font-weight: var(--schedule-heading-font-weight);
    font-size: var(--schedule-heading-text-size);
    color: var(--schedule-heading-text-color);
  }

  > h3:nth-of-type(2),
  h3:nth-of-type(3) {
    display: none;
    visibility: hidden;
  }

  @media screen and (min-width: 1440px) {
    margin: 2rem 0 1rem 0;
    grid-template-columns: repeat(4, 1.2fr) 1fr;
    gap: 3rem;
    padding: 1.2rem;
    justify-items: end;

    > h3:nth-of-type(2),
    h3:nth-of-type(3) {
      display: inline;
      visibility: visible;
    }
  }
`;

const ShiftsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 0.3rem;

  @media screen and (min-width: 1440px) {
    gap: 0.5rem;
  }
`;
