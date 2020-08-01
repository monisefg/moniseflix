import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {

  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {

      if (res.ok) {
        const data = await res.json();
        return data;
      }
      throw new Error('Erro ao conectar com o servidor');
    });
}

function getAllWithVideos() {

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {

      if (res.ok) {
        const data = await res.json();
        return data;
      }
      throw new Error('Erro ao conectar com o servidor');
    });

}

function create(category) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category)
  })
    .then(async (res) => {

      if (res.ok) {
        const data = await res.json();
        return data;
      }
      throw new Error('Não foi possível cadastrar os dados');
    });

}

export default {
  getAllWithVideos, getAll, create,
};
