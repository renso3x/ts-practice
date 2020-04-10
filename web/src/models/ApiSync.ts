import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const BASE_URL = `${this.rootUrl}`;
    const { id } = data;

    if (id) {
      return axios.put(`${BASE_URL}/${id}`, data);
    } else {
      return axios.post(`${BASE_URL}`, data);
    }
  }

}