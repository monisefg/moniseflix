import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  width: 60%;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
  padding: 1%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const InputElement = styled.input`
  border-radius: 4px;
  height: 8vh;
  margin-top: 1%;
  background-color: var(--blackLighter);
  border: none;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 5px solid var(--primary);
    transition-duration: 0.1s;
  }
`;

function FormField({ label, name, type, value, onChange }) {
  return (
    <FieldContainer>
      <label>{label}:</label>
      <InputElement type={type} value={value} name={name} onChange={onChange} />
    </FieldContainer>
  );
}

export default FormField;
