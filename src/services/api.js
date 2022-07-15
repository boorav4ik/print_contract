import axios from 'axios';

export default class BaseApi {
  static url = '';

  static getList() {
    return axios.get(this.url).then(({ data }) => data);
  }
}
