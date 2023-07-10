/* eslint-disable no-unused-vars */
interface RepositoryInterface<T> {
  create(entity: T): Promise<T>;
  update(entity: T): Promise<void>;
  findById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  delete(entity: T): Promise<void>;
}

export default RepositoryInterface;
