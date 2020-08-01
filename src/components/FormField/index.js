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
  label, name, type, value, onChange, options,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  const hasListOptions = Boolean(options.length);

  return (
    <FieldContainer>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
      </label>
      <InputElement
        as={tag}
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete={hasListOptions ? 'off' : 'on'}
        list={hasListOptions ? `optionFor_${fieldId}` : undefined}
      />
      {hasListOptions && (

        <datalist id={`optionFor_${fieldId}`}>
          {options.map((option) => (
            <option value={option} key={`optionFor_${fieldId}_option${option}`}>
              {option}
            </option>
          ))}
        </datalist>
      )}
    </FieldContainer>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  options: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
