import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function AddCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.name}</h1>
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
          type="text"
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

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default AddCategory;
