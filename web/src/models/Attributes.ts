export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * @param key T
   * one of the different key of T
   * T {
   *  id, -> K
   *  name, -> K
   *  age -> K
   * }
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set = (update: T): void => {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}