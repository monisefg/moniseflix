import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function FormField({
  label, name, type, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (
    <FieldContainer>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
      </label>
      <InputElement as={tag}
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </FieldContainer>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
