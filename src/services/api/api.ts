import axios from 'axios';
import RequestProcessor from 'src/services/api/interceptors/request/RequestProcessor';

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

api.interceptors.request.use((request) => {
  RequestProcessor.run(request);
  return request
});

// api.interceptors.response.use((response) => {
//   return response;
// });

export default api;
