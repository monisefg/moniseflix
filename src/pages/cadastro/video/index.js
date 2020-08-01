import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Title, DivContainer } from '../../../components/TitleButton/styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({

  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Title>Cadastro do vídeo</Title>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.category);

        const { title, url, description } = values;
        videosRepository.create({
          title,
          url,
          description,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            alert('cadastrado');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
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
          label="URL"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          options={categoryTitles}
        />

        <DivContainer>
          <Button as="button">Cadastrar</Button>
        </DivContainer>

      </form>

      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
