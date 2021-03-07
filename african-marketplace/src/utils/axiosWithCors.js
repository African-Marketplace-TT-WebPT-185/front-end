import axios from 'axios'

const axiosWithCors = () => {

    return axios.create({
      headers: {
        'Access-Control-Origin-Allow': '*'
      },
      baseURL: 'https://backup-backend-185.herokuapp.com'
    })
  }

  export default axiosWithCors