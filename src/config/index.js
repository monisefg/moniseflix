const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://moniseflix.herokuapp.com';

const PASSWORD = '85439';

export default {
  URL_BACKEND, PASSWORD,
}