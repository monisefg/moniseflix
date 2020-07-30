import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Title, DivContainer } from '../../../components/TitleButton/styles';

function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';
    fetch(URL)
      .then(async (res) => {
        const data = await res.json();
        setCategories([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <Title className="h1Cadastro">
        Cadastro de categoria:
        {values.name}
      </Title>
      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([...categories, values]);

          setValues(initialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
        />

        <DivContainer>
          <Button>Cadastrar</Button>
        </DivContainer>
      </form>

      <ul>
        {categories.map((category) => <li key={`${category.name}`}>{category.name}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default AddCategory;
