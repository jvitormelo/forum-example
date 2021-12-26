import axios from 'axios';
import RequestProcessor from 'src/services/api/interceptors/request/RequestProcessor';

// Normalmente eu guardia no .env
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});


// Chain caso precisava enviar coisas adicionais na request ou na response
api.interceptors.request.use((request) => {
  RequestProcessor.run(request);
  return request
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;
