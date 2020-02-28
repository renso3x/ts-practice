import axios, { AxiosResponse } from 'axios';
// interface
interface UserProps {
  id?: number;
  name?: string;// ? is an optional
  age?: number;
}

// type alias
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
  }

  save(): void {
    const BASE_URL = 'http://localhost:3000/users';
    const id = this.get('id')
    if (this.get('id')) {
      // put
      axios.put(`${BASE_URL}/${id}`, this.data)
      .then((response: AxiosResponse): void => {
        console.log(response.data)
      })
    } else {
      // post
      axios.post(`${BASE_URL}`, this.data)
      .then((response: AxiosResponse): void => {
        console.log(response.data)
      })
    }
  }
}
