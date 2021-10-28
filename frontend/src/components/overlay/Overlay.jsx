import React from "react"
import styled from "styled-components";

function Overlay() {
  return <PageMask />;
}

export default Overlay;

const PageMask = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--plugin-page-overlay);
  overflow-y: auto;
  transition: 0.5s;

  @media screen and (min-width: px) {
    overflow-y: hidden;
  }
`;
