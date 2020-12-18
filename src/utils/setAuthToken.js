import axios from 'axios'

const setAuthToken = (token) => {
  if (token) {
    // apply token to request header
    axios.defaults.headers.common['Authorization'] = token
    console.log('-------HEADERS-------');
    console.log(axios.defaults.headers.common['Authorization']);
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken