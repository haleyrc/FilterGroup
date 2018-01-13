import React from "react";
import styled from "styled-components";

export const FilterButton = ({ active, onClick, children }) => (
  <StyledButton
    style={active ? { backgroundColor: "#484848", color: "white" } : null}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background: #eee;
  border: none;
  padding: 5px;
  flex: 1;
  margin: 5px;
`;
