import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Title, DivContainer } from '../../../components/TitleButton/styles';
import useForm from '../../../hooks/useForm';
import config from '../../../config';
import categoriesRepository from '../../../repositories/categories';

function AddCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://moniseflix.herokuapp.com/categories'
    fetch(URL)
      .then(async (res) => {
        const data = await res.json();
        setCategories([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <Title>
        Cadastro de categoria:
        {values.title}
      </Title>
      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          if (values.password !== config.PASSWORD) {
            return alert('senha inválida')
          }
          delete values.password;
          categoriesRepository.create(values);
          setCategories([...categories, values]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
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

        <FormField
          label="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <DivContainer>
          <Button as="button">Cadastrar</Button>
        </DivContainer>
      </form>

      <ul>
        {categories.map((category) => <li key={`${category.title}`}>{category.title}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default AddCategory;
