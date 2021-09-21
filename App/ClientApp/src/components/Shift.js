import { useState } from "react";
import styled, { css } from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Shift({ avatar, name, start, end }) {
  const [actions, toggleActions] = useState(false);

  return (
    <ShiftCard onClick={() => toggleActions(!actions)} actions={actions}>
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </div>

      <p>Design a checkout page</p>

      <p>Mark Essien</p>

      <p>
        {start} - {end}
      </p>

      <div>
        <EditOutlinedIcon />
        <DeleteOutlinedIcon />
      </div>
    </ShiftCard>
  );
}

export default Shift;

const ShiftCard = styled.div`
  display: grid;
  gap: 0.3rem;
  grid-template-columns: ${({ actions }) =>
    actions ? "auto 1fr auto" : "auto 1fr"};
  background-color: var(--plugin-shift-bg-color);
  padding: 1rem 0.6rem;
  color: var(--card-text-color);
  align-items: center;
  border-radius: 4px;

  p {
    font-weight: 600;
  }

  > div > p {
    color: #242424;
    margin-left: 0.3rem;
  }

  > div > img {
    width: 1.2rem;
    height: 1.2rem;
    border: 0.5px solid var(--plugin-primary-color);
    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: center;
  }

  > p:nth-of-type(1),
  p:nth-of-type(2) {
    display: none;
    visibility: hidden;
  }

  > p:last-of-type {
    margin-left: auto;
  }

  > div:last-of-type {
    display: ${({ actions }) => (actions ? "flex" : "none")};
    ${(actions) =>
      css`
        gap: 2px;
      `}
    visibility: ${({ actions }) => (actions ? "visible" : "hidden")};
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1.2fr 1.2fr 0.8fr auto auto;
    gap: 2.75rem;
    padding: 1.5rem 3rem;
    font-size: 17px;

    > div > img {
      width: 2.5rem;
      height: 2.5rem;
    }

    > div > p {
      margin-left: 1.5rem;
    }

    p {
      font-weight: 500;
    }

    > p:nth-of-type(1),
    p:nth-of-type(2) {
      display: inline;
      visibility: visible;
    }

    > p:last-of-type {
      margin-left: 0;
    }

    > div:last-of-type {
      display: flex;
      visibility: visible;
      justify-content: space-between;
      gap: 1.65rem;
    }

    > div:last-of-type > .MuiSvgIcon-root {
      width: 2rem;
      height: 2rem;
      stroke-width: -1px;
    }

    > div:last-of-type > .MuiSvgIcon-root:first-of-type {
      color: #616061;
    }

    > div:last-of-type > .MuiSvgIcon-root:last-of-type {
      color: #fc3333;
    }
  }
`;
