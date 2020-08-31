import axios from "axios";

//const SERVER_URL = "https://jsonplaceholder.typicode.com/";
const SERVER_URL = "http://localhost:3000/";

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});

export default {

  async execute(method, resource, data, config) {
    return instance({
      method: method,
      url: resource,
      data,
      ...config
    });
  },

  createNew(text, completed) {
    return this.execute("POST", "todos", { title: text, completed: completed });
  },

  getAll() {
    return this.execute("GET", "todos", null, {
      transformResponse: [
        function(data) {
          return data;// ? JSON.parse(data)._embedded.todos : data;
        }
      ]
    });
  },

  updateForId(id, text, completed) {
    return this.execute("PUT", "todos/" + id, {
      title: text,
      completed: completed
    });
  },

  removeForId(id) {
    return this.execute("DELETE", "todos/" + id);
  }
};
